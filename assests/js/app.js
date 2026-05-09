const cl = console.log;
const todocontainer = document.getElementById('todocontainer')
const todoform = document.getElementById('todoform')
const todoitem = document.getElementById('todoitem')
const addtodo = document.getElementById('addtodo')
const updatetodo = document.getElementById('updatetodo')


let todoArr =[]


  // localStorage.setItem('todoArr',JSON.stringify(todoArr))

// cl(JSON.parse(localStorage.getItem("todoArr")))

const uuid = () => {
  return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
    /[xy]/g,
    character => {
      const random = (Math.random() * 16) | 0
      const value = character === 'x' ? random : (random & 0x3) | 0x8
      return value.toString(16)
    }
  )
}


function snackbar(msg){
  Swal.fire({
    title : msg,
    icon : 'success',
    timer : 3000
  })
}




todoArr = JSON.parse(localStorage.getItem('todoArr'))

function templating(arr){
  let result =``

  arr.forEach(ele => {
    
    result +=`<li class='list-group-item d-flex justify-content-between' id='${ele.todoId}'>
                  <strong>${ele.todoItem}</strong>
                  <div>
                    <i class="fa-solid fa-trash fa-2x text-primary" onclick='OnEdit(this)' ></i>
                    <i class="fa-regular fa-pen-to-square fa-2x text-danger" onclick='OnRemove(this)'></i>
                  </div>
              </li>
    `     
    
  });

  todocontainer.innerHTML = result;
}

function onSubmit(eve){
  eve.preventDefault()

  let newobj ={
    todoItem : todoitem.value,
    todoId : uuid()
  }

  todoArr.push(newobj)

  localStorage.setItem('todoArr',JSON.stringify(todoArr))

  let li =document.createElement('li')
  li.className ='list-group-item d-flex justify-content-between'
  
  li.id = newobj.todoId

  li.innerHTML =`<strong>${newobj.todoItem}</strong>
                  <div>
                    <i class="fa-solid fa-trash fa-2x text-primary" onclick='OnEdit(this)' ></i>
                    <i class="fa-regular fa-pen-to-square fa-2x text-danger" onclick='OnRemove(this)'></i>
                  </div>`

  todocontainer.append(li);

  snackbar(`The new TodoItem ${newobj.todoItem} is added successfully!!!`)

}


function OnRemove(ele){
  let removeId = ele.closest('li').id

  let getconfirm = confirm('Are You Sure You Want To Delete ?')

  if(getconfirm){
    let index = todoArr.findIndex(ele=> ele.todoId == removeId)

  let removeObj = todoArr.splice(index,1)

  localStorage.setItem('todoArr',JSON.stringify(todoArr))

  ele.closest('li').remove()

  snackbar(`The Todo Item ${removeObj[0].todoItem} is removed!!!`)
  }
  

}









templating(todoArr)
todoform.addEventListener('submit',onSubmit)
updatetodo.addEventListener('click',Onupdate)





















































































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
//   }