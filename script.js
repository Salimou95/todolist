const btnsubmit = document.querySelector("form button")
const inputTxt = document.querySelector("form input");
var btndelete = document.querySelectorAll(".btn-danger");



function createTask(){
    if(inputTxt.value != null && inputTxt.value !==""){
        const ul = document.querySelector("ul");
        const li = document.createElement('li');
        const input = document.createElement('input');
        const num = ul.children.length + 1;
        const label = document.createElement('label');
        const labelbtn = document.createElement('label');
        const i = document.createElement('i');
        btndelete = document.querySelectorAll(".btn-danger");

    
        li.classList.add('todo', 'list-group-item','d-flex','align-items-center');
    
        input.type ='checkbox'
        input.classList.add('form-check-input');
        input.id = "todo-" + num;
    
        label.classList.add("ms-2", "form-check-label");
        label.innerText = inputTxt.value;
    
        labelbtn.classList.add("ms-auto", "btn", "btn-danger", "btn-sm");
    
        i.classList.add("bi-trash")
        labelbtn.append(i)
    
        li.append(input, label, labelbtn)
        ul.prepend(li)
    }else{
        alert("Veuilliez ajouter une tache")
    }
}
function deleteTask(){
    btndelete.forEach(btn => {
        btn.addEventListener('click',function (e){

            console.log("ok");
            btn.parentElement.remove()
        })
        
     });

}

btnsubmit.addEventListener('click', function (e) {
    e.preventDefault()
    createTask();
    inputTxt.value = "";
})


deleteTask()
// btnsubmit.addEventListener('click', addTast())
// console.log(addTast());
 