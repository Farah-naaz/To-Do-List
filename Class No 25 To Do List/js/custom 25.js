// ============== variable part start
let todoInput        = document.querySelector('.todoInput')
let AddButton        = document.querySelector('.AddButton')
let All_todo         = document.querySelector('.All_todo')
let error            = document.querySelector('.error')
let todo_number      = document.querySelector('.todoNumber')
let result           = document.querySelector('.result')
let i                = 0

// ============== function part start

AddButton.addEventListener('click', ()=>{
    if(todoInput.value       == ''){
        error.innerHTML      = 'Please enter a text'
    }else{
        error.innerHTML      = ''
        All_todo.style       = 'display:block'
        i++
        result.innerHTML     = i
        
        // ============== create element
        let single_todo     = document.createElement('div')
        let singleTodoInput = document.createElement('input')
        let editButton      = document.createElement('button')
        let deleteButton    = document.createElement('button')

       // ============== make append child
       All_todo.appendChild(single_todo)
       single_todo.appendChild(singleTodoInput)
       single_todo.appendChild(editButton)
       single_todo.appendChild(deleteButton)

       // ============== add class name
       single_todo.classList.add('single_todo')
       single_todo.classList.add('todo_input')
       editButton.classList.add('editButton')
       deleteButton.classList.add('deleteButton')
       
       // ============== add content
        editButton.innerHTML   ='Edit'
        deleteButton.innerHTML = 'Delete'
        singleTodoInput.value  = todoInput.value
        todoInput.value        = ''

       // ============== add attribute
       singleTodoInput.setAttribute('readonly' , 'readonly')

       editButton.addEventListener('click' , ()=>{
        if(editButton.innerHTML  == 'Edit'){
            editButton.innerHTML = 'Save'
            editButton.style     = 'background: rgb(15, 145, 15)'
            singleTodoInput.removeAttribute('readonly' , 'readonly')
        }
        else{
            editButton.innerHTML = 'Edit'
            editButton.style     = 'background: rgb(233, 162, 30)'
            singleTodoInput.setAttribute('readonly' , 'readonly')   
        }
       })

       deleteButton.addEventListener('click' , ()=>{
        single_todo.remove()
        i--
        result.innerHTML     = i
        
        if(i == 0){
            All_todo.style   = 'display:none'  
        }
       })
    }
})