import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export default class News extends Component {

  static defaultProps={
    country:'in',
    pageSize:8,
    category:'general',
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  
  }
  
    //articles=[];
  constructor() {
    super();
    console.log("Hello i am a constructor");
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading:false

    };
  }

  previous = async () => {
    // console.log("previos button");
  //   let url =
  //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80ebacb28bd0429391f1abedcf1063ee&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;

  //   this.setState({loading:true});
  // let data = await fetch(url);

  // let parsedData = await data.json();
  // // console.log(parsedData.articles);
  // this.setState({ articles: parsedData.articles, page:this.state.page-1,loading:false});

  this.setState({page: this.state.page-1});
  this.updateNews();

  };

  
  next = async () => {
  //   console.log("next button");
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80ebacb28bd0429391f1abedcf1063ee&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //     this.setState({loading:true});
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // console.log(parsedData.articles);
  // this.setState({ articles: parsedData.articles, page:this.state.page+1 ,loading:false});

  this.setState({page: this.state.page+1});
  this.updateNews();
  };

  async componentDidMount() {
    // console.log("CDM RUNNING");
    // let url =
    //  ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80ebacb28bd0429391f1abedcf1063ee&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData.articles);
    // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false });
    this.updateNews();
  }

  async updateNews(){
    let url =
    ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80ebacb28bd0429391f1abedcf1063ee&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     this.setState({loading:true});
   let data = await fetch(url);
   let parsedData = await data.json();
   console.log(parsedData.articles);
   this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false });
  }

  render() {
    console.log("Render RUNNING");
    return (
      <div>
        <h1> news app</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {this.state.articles.map((element) => {
            console.log("INSIDE ELEMENT" + element);
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.setState.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.previous}
          >
            &larr; Previous{" "}
          </button>

          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.next}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
