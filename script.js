let employeesArr = [];
let id = 1;
let messageSection = document.getElementsByClassName("message-section")[0];
 
// -------for adding new user----------------------------
function addUser() {
  let inputs = document.getElementsByTagName("input");
  let name = inputs[0].value;
  let profession = inputs[1].value;
  let age = inputs[2].value;
 
  if (name && profession && age) {
    let ob = {
      id: id++,
      name: name,
      profession: profession,
      age: age,
    };
    employeesArr.push(ob);
    success();
 
    updateEmployeeList();
  } else {
    failed();
  }
}
 
// -----if user doesnt fill all field, it will show error message---
function failed() {
  let message = document.createElement("p");
  message.innerText =
    "Error : Please Make sure All the fields are filled before adding in an employee !";
  message.className = "error";
  messageSection.innerHTML = "";
  messageSection.append(message);
 
 
}
 
// ---if the employee data is successfully added !--------
function success() {
  let message = document.createElement("p");
  message.innerText = "Success : Employee Added!";
  message.className = "success";
  messageSection.innerHTML = "";
  messageSection.append(message);
 
}
 
// ------for updating the listof Employees------------------
function updateEmployeeList() {
  let employees = document.getElementsByClassName("employees-info")[0];
 
  employees.innerHTML = "";
  employeesArr.forEach((employee) => {
    employees.innerHTML += `
       <div class="employee-details" id="user-${employee.id}">
        <section class="details">
        <span>${employee.id}.</span>
        <span >Name: ${employee.name}</span>
        <span>Profession: ${employee.profession}</span>
        <span>Age:${employee.age}</span>
    </section>
    <button class="delete-user" onclick="deleteUser(event)">Delete User</button>
    </div> 
        `;
  });
}
 
// ------------for deleting User-----------------------
function deleteUser(event) {
  let deleteBtn = event.target;
  let user = deleteBtn.parentElement;
  let userId = parseInt(user.id.split("-")[1]);
  // console.log(userId);
  user.remove();
  let removeIndex = -1;
 
  for (let i = 0; i < employeesArr.length; i++) {
    if (employeesArr[i].id === userId) {
      employeesArr.splice(i, 1);
      removeIndex = i;
    }
  }
 
  updateEmployeeList();
}