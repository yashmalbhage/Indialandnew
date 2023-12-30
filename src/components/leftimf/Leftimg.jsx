import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PostCard = ({ imgSrc, name, post, description }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {" "}
        {/* Image on the left */}{" "}
        <div className="col-md-6">
          <img src={imgSrc} alt="Post" className="img-fluid" />
        </div>
        {/* Name, Post, and Description on the right */}{" "}
        <div className="col-md-6">
          <div className="card w-100">
            <div className="card-body">
              <h2 className="card-title" style={{color:'#d4af37'}}> {name} </h2>{" "}
              <h6 className="card-subtitle mb-2 text-muted"> {post} </h6>{" "}
              <p className="card-text"  style={{color:'#1f6f8b'}}> {description} </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default PostCard;
