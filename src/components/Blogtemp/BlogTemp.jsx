import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BlogPost.css';

const BlogPost = ({ title, content, imageUrl }) => {
  return (
    <div className="container blog-post">
      <div className="row">
        <div className="col-12">
          <div className="blog-header">
            <img src={imageUrl} alt="Blog Header" className="img-fluid rounded-top" />
            <div className="overlay"></div>
            <h2 className="blog-title">{title}</h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p className="blog-content">{content}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-right">
          <FontAwesomeIcon icon={faEdit} className="edit-icon" />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
