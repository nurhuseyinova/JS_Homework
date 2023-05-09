let API_URL = `http://localhost:8080/users`;

let row = document.querySelector(".row");
let country = document.querySelector("#country");
let city = document.querySelector("#city");
let form = document.querySelector("#form");
let submitBtn = document.querySelector("#submit");
let input = document.querySelectorAll("input");
let addBtn = document.querySelector("#add");


let editStatus = false;
let editId = null;

addBtn.addEventListener("click", function () {
  window.location.href = "form.html";
});

async function myFun() {
  row.innerHTML=""
  await fetch(API_URL)
    .then((res) => res.json())
    .then((data) =>

      data.forEach((el) => {
      
        row.innerHTML += `<div class="col col-6 my-2">
        <ul class="list-group">
          <li class="list-group-item d-flex align-items-center justify-content-between">
              <div><h2>${el.country}</h2>
                  <p>${el.city}</p></div>
              <div class="div">
                 <i onclick=editBtn(${el.id},"${el.country}","${el.city}") id=${el.id} class="fa-solid fa-pen"></i>
                 <i onclick=deleteBtn('${el.id}') id=${el.id}  class="fa-solid fa-trash"></i>
              </div>
          </li>
        </ul>
      </div>`;
      
      })
    );
}
myFun();

async function deleteBtn(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  myFun();

}

let info = JSON.parse(localStorage.getItem("info")) || [];
async function editBtn(id,country,city) {
  editId = id;
  editStatus = true;
  let info={id,country,city}
  try {
  await fetch(`${API_URL}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      input[0].value = data.country;
      input[1].value = data.city;
    })}
    catch(err){ console.log(err)};
    localStorage.setItem("info",JSON.stringify(info))
  window.location.href = "form.html";
}
