import React from "react"

const BlogCard = props => {
  return (
    <div className="col-md-6 col-sm-6">
      <div className="media blog-thumb">
        <div className="media-object media-left">
          <a href="blog-detail.html">
            <img src={props.image} className="img-responsive" alt="" />
          </a>
        </div>
        <div className="media-body blog-info">
          <small>
            <i className="fa fa-clock-o"></i> {props.date}
          </small>
          <h3>
            <a href="blog-detail.html">{props.title}</a>
          </h3>
          <p>{props.excerpt}</p>
          <a href="blog-detail.html" className="btn section-btn">
            {props.buttonText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
