import React from "react";
import { Link } from "react-router-dom";

const AlbumList = ({ albums, title }) => {
  if (!albums.length) {
    return <h3>No Albums at the Moment</h3>;
  }



  return (
    <div>
      <h2 className="text-primary  funky" style={{paddingBottom: "5rem" }}>{title}</h2>
      <div className="flex-row justify-space-between my-4" style={{paddingBottom: "5rem"}}>
        {albums &&
          albums.map((album) => (
            <div key={album._id} className="col-12 col-xl-6 text-center">
              <div className="card mb-2 zoom" style={{height: "95%", borderRadius: "5%", backgroundColor: "#494407"}}>
                {album.image ? (
                  <Link to={`/albums/${album._id}`}>
                  <img
                    src={require(`../../images/${album.image}`)}
                    alt={`${album.image}`}
                    className="p-3"
                    style={{ width: "60%", height: "auto", borderRadius: "15%"}}
                  />
                  </Link>
                ) : null}
                
                <h3 className="text-light funk">
                  {album.title} 
                </h3>
                <h3>{album.artist}</h3>
                
                <h5>{album.genre}</h5>
                
                <h5>{album.release}</h5>
                
              </div>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AlbumList;
