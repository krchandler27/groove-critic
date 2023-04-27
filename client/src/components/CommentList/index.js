import React from "react";
import { useMutation } from "@apollo/client";

import { REMOVE_COMMENT, UPDATE_COMMENT } from "../../utils/mutations";
import { QUERY_SINGLE_ALBUM } from "../../utils/queries";
import Auth from "../../utils/auth";

const CommentList = ({ comments, singleAlbum }) => {
  const [removeComment, { error }] = useMutation(REMOVE_COMMENT, {
    onCompleted: (data) => console.log("🧌🧌🧌 Mutation data", data),
    update(cache, { data: { removeComment } }) {
      try {
        cache.writeQuery({
          query: QUERY_SINGLE_ALBUM,
          data: { album: removeComment },
        });
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleRemoveComment = async (commentId, singleAlbumId) => {
    try {
      const { data } = await removeComment({
        variables: { commentId: commentId, albumId: singleAlbumId },
      });
    } catch (err) {
      console.log(err);
    }
  };








  const [updateComment, { err }] = useMutation(UPDATE_COMMENT, {
    onCompleted: (data) => console.log("👺👺👺 Mutation data", data),
    update(cache, { data: { editComment } }) {
      try {
        cache.writeQuery({
          query: QUERY_SINGLE_ALBUM,
          data: { album: editComment },
        });
      } catch (err) {
        console.log(err);
      }
    },
  });

const handleUpdateComment = async (commentId, singleAlbumId, commentText) => {
  try {
    const { data } = await updateComment({
      variables: { commentId: commentId, albumId: singleAlbumId, commentText: commentText },
    });
  } catch (err) {
    console.log(err);
  }
};






  

  if (!comments.length) {
    return <h3 style={{ color: "orange" }}>No Comments Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: "10px double #1a1a1a" }}
      >
        Reviews
      </h3>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <p className="card-body" style={{ fontSize: "2rem" }}>
                  {comment.commentText}
                </p>
                <h5 className="card-header">
                  <span style={{ fontSize: "0.75rem" }}>By</span>{" "}
                  {comment.commentAuthor}{" "}
                  <span style={{ fontSize: "0.75rem" }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                <br />
                <div className="text-right">
                  {Auth.loggedIn() && (
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() =>
                        handleRemoveComment(comment._id, singleAlbum._id)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      🔥 Remove Comment
                    </button>
                  )}
                  {Auth.loggedIn() && (
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() =>
                        handleUpdateComment(comment._id, singleAlbum._id, comment.commentText)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      🖊️ Edit Comment
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </>
  );
};

export default CommentList;
