const container = document.getElementById("container");
// console.log(container);
const root = ReactDOM.createRoot(container);
const h2 = React.createElement("h2",{style:{backgroundColor:'brown' , color:'white' , paddingLeft:"250px"}},"Welcome to React JS");
// root.render(h2);
const name = React.createElement("h3",{},"alok singh");
const pic = React.createElement("img",{style:{borderRadius: "200px"} , src:"https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg",width:"200",height:"200"});

const new1 = React.createElement("div",{style:{display:"flex", gap:"50px", backgroundColor:"pink"},},pic, name);


const li1 = React.createElement("li",{},"Java");
const li2 = React.createElement("li",{},"Python");
const li3 = React.createElement("li",{},"React");
const ul = React.createElement("ul",{style:{backgroundColor:'cyan'}},li1,li2,li3);

// const wrapper = React.createElement("div", {}, h2, new1, ul);


//JSX
const h21 = <h2>Welcome to React JS</h2>
const li4 = <li>Angular</li>;
const li5 = <li>Node</li>;
const li6 = <li>MongoDB</li>;
const ul1 = <ul>{li4}{li5}{li6}</ul>;

const container2=(
    <div>
        {h21},
        {ul1}
    </div>
)

const wrapper = React.createElement("div", {}, h2, new1, ul, container2);
root.render(wrapper);
// root.render(ul1);
// root.render(wrapper);