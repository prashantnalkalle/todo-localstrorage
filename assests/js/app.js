const cl = console.log;
const todocontainer = document.getElementById('todocontainer')
const todoform = document.getElementById('todoform')
const todoitem = document.getElementById('todoitem')
const addtodo = document.getElementById('addtodo')
const updatetodo = document.getElementById('updatetodo')


let todoArr =[]


  // localStorage.setItem('todoArr',JSON.stringify(todoArr))

// cl(JSON.parse(localStorage.getItem("todoArr")))


todoArr = JSON.parse(localStorage.getItem('todoArr'))

function templating(arr){
  let result =``

  arr.forEach(ele => {
    
    result +=`<li class='list-group-item d-flex justify-content-between' id='${ele.todoId}'>
                  <strong>${ele.todoItem}</strong>
                  <div>
                    <i class="fa-solid fa-trash fa-2x text-primary" ></i>
                    <i class="fa-regular fa-pen-to-square fa-2x text-danger"></i>
                  </div>
              </li>
    `     
    
  });

  todocontainer.innerHTML = result;
}


templating(todoArr)





















































































//  {
//     todoItem: "CSS",
//     todoId: "2qwe12-231-231wd-ew112e",
//   },
//   {
//     todoItem: "JS & ES6",
//     todoId: "2qwe12-231-231wd-ew1133",
//   },
//   {
//     todoItem: "HTML",
//     todoId: "2qwe12-231-231wd-ew11563",
//   },