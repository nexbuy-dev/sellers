import React from "react";
import AdminLogin from "../../Components/AdminLogin/AdminLogin";
import Feedback from "../../Components/Feedbacks/Feedbacks";
import EachPost from "../../Components/myFeed/eachPost";
import Request from "../../Components/Request/Request";
import AdminNav from "../../Components/AdminLogin/AdminNav";
import Application from "../../Components/Request/Application";
import Scrollbar from "../../Components/Scroll/Scrollbar";

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "request",
      postTitle: "",
      postBody: "",
      postImage: "",
      postLink: "",
      posts: [{}],
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  onTitleChange = (event) => {
    this.setState({ postTitle: event.target.value });
  };

  onBodyChange = (event) => {
    this.setState({ postBody: event.target.value });
  };

  onLinkChange = (event) => {
    this.setState({ postLink: event.target.value });
  };

  onImageChange = (event) => {
    this.setState({ postImage: event.target.value });
  };

  componentDidMount() {
    const url = "http://localhost:3002/blog";

    fetch(url, {
      method: "GET",
    }).then((result) => {
      result.json().then((resp) => {
        this.setState({ posts: resp });
      });
    });
  }

  onSubmitPost = (e) => {
    const myFile = document.querySelector("input[type=file]").files[0];

    e.preventDefault();

    const data = new FormData();
    data.append("location", myFile);
    data.append("title", this.state.postTitle);
    data.append("link", this.state.postLink);
    data.append("post", this.state.postBody);

    fetch("http://localhost:3002/admin", {
      method: "post",
      body: data,
    });

    alert("successful");
  };

  render() {
    if (this.state.route === "post") {
      return (
        <div id="Admin">
          <AdminNav onRouteChange={this.onRouteChange} />
          <div className="row">
            <div className="container">
              <div className="co-lg-8 col-sm-10 ml-1">
                <div className="create-post">
                  <div className="section-header">
                    <h3>Create a post</h3>
                  </div>
                  <form onSubmit={this.onSubmitPost}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="post_title">Post Title</label>
                          <input
                            type="text"
                            id="title"
                            className="form-control post_title"
                            onChange={this.onTitleChange}
                            required
                          ></input>
                        </div>
                      </div>

                      <div className="col-md-8">
                        <div className="form-group">
                          <label>Post body</label>
                          <textarea
                            id="post"
                            className="form-control"
                            rows="5"
                            onChange={this.onBodyChange}
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-md-8">
                        <input
                          type="file"
                          onChange={this.onImageChange}
                          required
                        ></input>
                      </div>

                      <div className="col-md-8">
                        <label>post's link</label>
                        <input
                          id="link"
                          type="url"
                          className="form-control"
                          onChange={this.onLinkChange}
                          required
                        />
                      </div>

                      <div className="col-md-8">
                        <button type="submit" className="btn btn-primary">
                          Create Post
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div>
                <div className="section-header">
                  <h3>Manage Posts</h3>
                </div>
                <div className="list-group col-md-8">
                  <Scrollbar>
                    <ul>
                      {this.state.posts.reverse().map((post) => {
                        return <EachPost post={post} key={post.id} />;
                      })}
                    </ul>
                  </Scrollbar>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.route === "feedback") {
      return (
        <div id="Admin">
          <AdminNav onRouteChange={this.onRouteChange} />
          <Feedback />
        </div>
      );
    } else if (this.state.route === "request") {
      return (
        <div id="admin">
          <AdminNav onRouteChange={this.onRouteChange} />
          <Request />
        </div>
      );
    } else if (this.state.route === "application") {
      return (
        <div id="admin">
          <AdminNav onRouteChange={this.onRouteChange} />
          <Application />
        </div>
      );
    } else {
      return (
        <div>
          <AdminLogin onRouteChange={this.onRouteChange} />
        </div>
      );
    }
  }
}

export default Admin;
