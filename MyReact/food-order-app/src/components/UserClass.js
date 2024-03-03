import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child constructor");
    this.state = {
      count: 0,
      userInfo: {},
    };
  }

  async componentDidMount() {
    console.log("Child Component Did Mount called");

    const response = await fetch("https://api.github.com/users/Ramanagamani1");
    const data = await response.json();

    this.setState({ ...this.state, userInfo: data });

    this.timer = setInterval(() => {
      console.log("timer");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Did Update called");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    clearInterval(this.timer);
  }

  handleIncreaseClick() {
    this.setState({ ...this.state, count: this.state.count + 1 });
  }

  handleDecreaseClick = () => {
    this.setState({ ...this.state, count: this.state.count - 1 });
  };

  render() {
    const { count, userInfo } = this.state;
    const { name, avatar_url } = userInfo;

    console.log("Child render");

    return (
      <div className="user-card">
        <p>Count: {count}</p>
        <button onClick={this.handleIncreaseClick.bind(this)}>
          Increase count
        </button>
        <button onClick={this.handleDecreaseClick}>Decrease count</button>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: India</h3>
      </div>
    );
  }
}
export default UserClass;
