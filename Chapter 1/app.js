const heading = React.createElement("h1", {id: "parent"}, React.createElement("h1", {id: "child"}, "I m H1 Tag"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);