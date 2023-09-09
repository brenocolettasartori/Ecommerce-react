import axios from "axios";
import React, { Component, Fragment } from "react";
import appURL from "../../api/appURL";

class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      reviewData: [],
    };
  }

  componentDidMount() {
    let id = this.props.id;
    axios
      .get(appURL.listReview(id))
      .then((response) => {
        this.setState({ reviewData: response.data });
      })
      .catch((error) => {});
  }

  render() {
    const myList = this.state.reviewData;

    if (myList.length > 0) {
      const myView = myList.map((ReviewList, i) => {
        if (ReviewList.reviewer_rate === "1") {
          return (
            <div>
              <p className=" p-0 m-0">
                <span className="Review-Title">{ReviewList.reviewer_name}</span>{" "}
                <span className="text-success">
                  <i className="fa fa-star"></i>{" "}
                </span>{" "}
              </p>
              <p>{ReviewList.reviewer_comment}</p>
            </div>
          );
        } else if (ReviewList.reviewer_rate === "2") {
          return (
            <div>
              <p className=" p-0 m-0">
                <span className="Review-Title">{ReviewList.reviewer_name}</span>{" "}
                <span className="text-success">
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                </span>{" "}
              </p>
              <p>{ReviewList.reviewer_comment}</p>
            </div>
          );
        } else if (ReviewList.reviewer_rate === "3") {
          return (
            <div>
              <p className=" p-0 m-0">
                <span className="Review-Title">{ReviewList.reviewer_name}</span>{" "}
                <span className="text-success">
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i>{" "}
                </span>{" "}
              </p>
              <p>{ReviewList.reviewer_comment}</p>
            </div>
          );
        } else if (ReviewList.reviewer_rate === "4") {
          return (
            <div>
              <p className=" p-0 m-0">
                <span className="Review-Title">{ReviewList.reviewer_name}</span>{" "}
                <span className="text-success">
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                </span>{" "}
              </p>
              <p>{ReviewList.reviewer_comment}</p>
            </div>
          );
        } else if (ReviewList.reviewer_rate === "5") {
          return (
            <div>
              <p className=" p-0 m-0">
                <span className="Review-Title">{ReviewList.reviewer_name}</span>{" "}
                <span className="text-success">
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>{" "}
                </span>{" "}
              </p>
              <p>{ReviewList.reviewer_comment}</p>
            </div>
          );
        }
      });

      return (
        <div>
          <h6 className="mt-2">Reviews</h6>
          {myView}
        </div>
      );
    } else {
      return (
        <div>
          <h6 className="mt-2">Reviews</h6>
            <p>There are no review yet </p>
        </div>
      );
    }
  }
}

export default Reviews;
