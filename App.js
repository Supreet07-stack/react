const heading = React.createElement("div",{id : "parent"},[
    React.createElement("div",{id : "child1"},
    [React.createElement("h1",{},"I'm h1 tag of child1"), React.createElement("h1",{},"I'm h2 tag of child1")])
],
    React.createElement("div",{id : "child2"},
    [React.createElement("h4",{},"I'm h1 tag of child2"), React.createElement("h4",{},"I'm h2 tag of child2")])
    
);




   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(heading);

   console.log(root);