
// createElement involves 3 parameters -> 1)tag  2)object to keep ids/attributes passed to tags 3)children
//#1 example <h1 id = "heading">"Hello World"</h1>
const example =  React.createElement
("h1",
{
    id:"heading"
},
"Hello World");

//this example returns us an object . 
//Actually heading is the react element that returns us a javascript object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(example); //syntax to render the react element


/*#2 example
* <div id = "parent">
*  <div id = "child"> 
*  <h1>I'm h1 tag</h1>
* </div>
*  </div>
*/


const example2 = React.createElement( "div", {id : "parent"},
React.createElement("div",{id : "child"},React.createElement ("h1",{}, "I'm h1 tag")) ); 
  // child comes in third arguments 
  // Attributes + props (children) => React element
  //  heading --> object (This object is an react element)
  //this react element becomes the HTML that browser understands


  //React.createElement(Object) => HTML(browser understands)
  //Never think that React.createElement is creating the html element . Infact React is creating an object this is converted to 
  //HTML element by ReactDOM while rendering


/* #3 example
* <div id = "parent">
*  <div id = "child"> 
*  <h1>I'm h1 tag</h1>
*  <h2>I'm h2 tag</h2>  (Multiple children)
* </div>
*  </div>
*/

const example3 = React.createElement(
    "div",
    {id : "parent"},
    React.createElement(
    "div",
    {id : "child"},
    [React.createElement
    ("h1",
    {},
    "I'm h1 tag"),React.createElement
    ("h1",
    {},
    "I'm h1 tag")]
    )
    );

    //for multiple children use array

/* #4 example
*  <div id = "parent">
*  <div id = "child"> 
*  <h1>I'm h1 tag</h1>
*  <h1>I'm h1 tag</h1>  
*  </div>
*  <div id = "child2"> 
*  <h1>I'm h1 tag</h1>
*  <h1>I'm h1 tag</h1>  
*  </div>
*  </div>
*/
const example4 = React.createElement("div",{id : "parent"},[
    React.createElement("div",{id : "child1"},
    [React.createElement("h1",{},"I'm h1 tag of child1"), React.createElement("h1",{},"I'm h2 tag of child1")])
],
    React.createElement("div",{id : "child2"},
    [React.createElement("h1",{},"I'm h1 tag of child2"), React.createElement("h1",{},"I'm h2 tag of child2")])
    
);



//Okay , this looks correct as per syntax and logic but doesn't it look ugly . If we have more children in future then 
//complexity is gonna more later on. So that's why, in order to reduce complexity JSx comes into picture. 
//(like in order to reduce population in China ,One-child policy comes into picture :D)

//Actually , the core react is this , JSx is making our React life easier

