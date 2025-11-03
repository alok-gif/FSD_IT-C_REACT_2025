const parent = document.getElementById('container');
console.log(parent);

const root = ReactDOM.createRoot(parent);

const heading = React.createElement(
  "h2",
  {
    style: {
      backgroundColor: 'brown',
      color: 'white',
      paddingLeft: "250px"
    }
  },
  "Welcome to React JS"
);

const cardHeading = React.createElement(
  "h3",
  {
    style: {
      textAlign: "center",
      color: "darkblue",
      marginBottom: "10px"
    }
  },
  "Student Information"
);

const card = React.createElement(
  "div",
  {
    style: {
      border: "2px solid #ccc",
      borderRadius: "8px",
      padding: "20px",
      width: "400px",
      margin: "20px auto",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial"
    }
  },
  [
    cardHeading,
    React.createElement("p", null, "Name: Alok Ranjan Singh"),
    React.createElement("p", null, "Roll No: 123456"),
    React.createElement("p", null, "Branch: Computer Science"),
    React.createElement("p", null, "College: ABESEC"),
    React.createElement("p", null, "Section: C")
  ]
);

const container = React.createElement("div", null, [heading, card]);

root.render(container);