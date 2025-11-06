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
        <div class="eachUsers bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition duration-300">
      
            <img src="${value.image}" alt=""class="w-48 h-48 object-cover rounded-full mb-4 border-4 border-gray-200" >
            
            <p class="text-lg font-semibold text-gray-800"><span class="font-bold text-gray-700">Name:</span>
            ${
              value.firstName + " " + value.maidenName + " " + value.lastName
            }</p>
            <p class ="text-gray-700"><span class="font-bold text-gray-700">Gender:</span>${value.gender.chartAt(0).toUpperCase() + users.gender.slice(1)}</p>
            <p class="text-gray-700"><span class="font-bold text-gray-700">Phone Number:</span>${value.phone}</p>
            <p class="text-gray-700"><span class="font-bold  text-gray-700">Email:</span> ${value.email}
            </p>
        
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
        View User Profile</button>
        </div>

        `;
    }).join(" ");
  });
