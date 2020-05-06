import React from "react"
import { Link } from "gatsby"

const BlogCard = props => {
  return (
    <div className="col-md-6 col-sm-6">
      <div className="media blog-thumb">
        <div className="media-object media-left">
          <Link to={`/blog/${props.id}`}>
            <img
              src={props.image}
              className="img-responsive"
              alt=""
              style={{ width: "96%" }}
            />
          </Link>
        </div>
        <div className="media-body blog-info">
          <small>
            <i className="fa fa-clock-o"></i> {props.date}
          </small>
          <h3>
            <Link to={`/blog/${props.id}`}>{props.title}</Link>
          </h3>
          <p>{props.excerpt}</p>
          <Link to={`/blog/${props.id}`} className="btn section-btn">
            {props.buttonText}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
