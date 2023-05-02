import React, { useState, Component } from "react";
import { useMutation } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

import { UPDATE_COMMENT } from "../../utils/mutations";
import { QUERY_SINGLE_ALBUM } from "../../utils/queries";
import Auth from "../../utils/auth";
import RatingSystem from "../../utils/ratingSystem";

import { BsFillTrashFill } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";

const EditComment = ({ singleAlbumId, commentId, commentText, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(commentText);
  const [updateText] = useMutation(UPDATE_COMMENT);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(commentText);
  };

  const handleSave = async () => {
    try {
      const { data } = await updateText({
        variables: {
          commentText: editedText,
          commentId: commentId,
          albumId: singleAlbumId,
        },
      });
      console.log(data);
      onUpdate(data.updateText.commentText);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setEditedText(event.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <textarea
            value={editedText}
            onChange={handleChange}
            style={{ lineHeight: "2", resize: "vertical", width: "60%" }}
          />
          <button
            onClick={handleSave}
            className="btn btn-sm btn-primary"
            style={{ cursor: "pointer", margin: "1rem" }}
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="btn btn-sm btn-primary"
            style={{ cursor: "pointer", margin: "1rem" }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <span></span>
          <button onClick={handleEdit} className="btn btn-sm btn-light" style={{cursor: "pointer", marginBottom: "1rem"}}>
            <GrEdit />
          </button>
        </div>
      )}
    </div>
  );
};

export default EditComment;
