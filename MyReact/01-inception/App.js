// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world!!! from React"
// );
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I'm H1 tag"),
    React.createElement("h2", {}, "I'm an H2 tag"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "I'm H1 tag"),
    React.createElement("h2", {}, "I'm an H2 tag"),
  ]),
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//ReactElement(Object) => HTML(Browser Understands)
