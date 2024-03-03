import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <UserClass />
        {/* <UserClass name="Mani" />
        <UserClass name="Sravani" /> */}
      </div>
    );
  }
}

export default About;

/*



*/
