const url = "https://dummyjson.com/users?sortBy=firstName&order=asc";
const fetchData = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
let allUsers = document.getElementById("allUsers");

fetch(url, fetchData)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let users = data.users;
    console.log(users);
    allUsers.innerHTML = users.map(function (value, index, array) {
      return `
        <div class="eachUsers bg-white shadow-xl rounded-2xl p-5 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition duration-300">
            <img src="${value.image}" alt=""class="w-48 h-48 object-cover rounded-lg mb-4" >
            <p class="text-lg font-semibold text-gray-800"">${
              value.firstName + " " + value.maidenName + " " + value.lastName
            }</p>
            <p>${value.gender}</p>
            <p>${value.phone}</p>
            <p> ${value.email}
            </p>
        

        </div>

        `;
    }).join(" ");
  });
