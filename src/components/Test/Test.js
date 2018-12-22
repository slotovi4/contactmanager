import React, { Component } from "react";

class Test extends Component {
  //Lifecycle Methods
  //https://habr.com/post/358090/

  state = {
    title: "",
    body: ""
  };

  //Компонент срендерился
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  /* // Компонент будет(собирается) рендериться
  componentWillMount() {
    console.log("component will mount");
  }

  // Компонент обновил state и перерендерился
  componentDidUpdate() {
    console.log("component did update");
  }

  // Компонент обновил state и будет(собирается) перерендерился
  componentWillUpdate() {
    console.log("component will update");
    // UNSAFE_componentWillUpdate react 17v +
  }

  // Компонент получит props & state OLD
  componentWillReceiveProps(nextProps, nextState) {
    console.log("component will receive props");
    // UNSAFE_componentWillReceiveProps react 17v +
    // тут можно использовать setSate и после передавать его в getDerivedStateFromProps
  }

  // Компонент получит props & state NEW
  static getDerivedStateFromProps(nextProps, prevState) {
    // нельзя использовать setState, вместо этого return { test: '123'}
    return null; // null or state
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
  } */

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
