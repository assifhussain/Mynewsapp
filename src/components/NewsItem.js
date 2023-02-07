import React, { Component } from "react";
import "./news.css";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date } = this.props;
    return (
      <div className="container mx-auto ">
         <span class="badge bg-danger">{!author?"Unknown Author":author}</span>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
         
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">
              {new Date(date).toUTCString()}</small></p>
             <a rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read more..
            </a> 
          </div>
        </div>
      </div>
    );
  }
}
