const button = document.getElementById("fetch-button");
const disp = document.getElementById("data");
let table = `<table border="1" cellpadding="10" cellspacing="0">
                       <tr>

                         <th>Images</th>
                         <th>ID</th>
                         <th>firstName</th>
                         <th>lastName</th>
                         <th>ip</th>
                       </tr>`;

async function fetchData() {
    disp.innerHTML = "<h2>Data is Loading...</h2>";
    const response = await fetch('https://dummyjson.com/users');
    const jsonData = await response.json();
    // const recipe = jsonData.recipes[0];
    console.log(jsonData.users);
    jsonData.users.forEach(element => {
        table += ` <tr>
            <td><img src = ${element.image} height = "200" width = "200" alt='image'></td>
            <td>${element.id}</td>
            <td>${element.firstName}</td>
            <td>${element.lastName}</td>
            <td>${element.ip}</td>
        </tr>`
    });

    // disp.innerHTML = "<h2>ID: " + recipe.id + "</h2>" +
    // "<h2>Name: " + recipe.name + "</h2>" +
    // "<img src='" + recipe.image + "' alt='" + recipe.name + "' width='200'>";
    table += '</table>'
    disp.innerHTML = table
}
button.addEventListener('click', fetchData);
