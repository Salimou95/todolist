const btnsubmit = document.querySelector("form button")
const inputTxt = document.querySelector("form input");
const ul = document.querySelector("ul");
var btndelete = document.querySelectorAll(".btn-danger");
const checkbox = document.createElement('input');



function createTask(){
    if(inputTxt.value != null && inputTxt.value !==""){
        const li = document.createElement('li');
        const num = ul.children.length + 1;
        const label = document.createElement('label');
        const labelbtn = document.createElement('label');
        const i = document.createElement('i');
        btndelete = document.querySelectorAll(".btn-danger");

    
        li.classList.add('todo', 'list-group-item','d-flex','align-items-center');
    
        checkbox.type ='checkbox'
        checkbox.classList.add('form-check-input');
        checkbox.id = "todo-" + num;
    
        label.classList.add("ms-2", "form-check-label");
        label.innerText = inputTxt.value;
    
        labelbtn.classList.add("ms-auto", "btn", "btn-danger", "btn-sm");
    
        i.classList.add("bi-trash")
        labelbtn.append(i)
    
        li.append(checkbox, label, labelbtn)
        ul.prepend(li)
    }else{
        alert("Veuilliez ajouter une tache")
    }
}
function deleteTask(){

    
    btndelete.forEach(btn => {
        btn.addEventListener('click',function (e){

            console.log(e.target);
            btn.parentElement.remove()
        })
        
     });

}


// ul.addEventListener('click', function (e) {
//     // Vérifier si l'élément cliqué est un bouton de suppression
//     if (e.target.closest(".btn-danger")) {
//         const btn = e.target.closest(".btn-danger");
//         btn.parentElement.remove(); // Supprime la tâche (parent du bouton)
//         console.log("Tâche supprimée !");
//     }
// });

function filter (nameElementData){
    var allLi= document.querySelectorAll("li");
    
    allLi.forEach(element => {
        
        if (!element.classList.contains(nameElementData.dataset.filter)) {
            element.classList.add("d-none");
            element.classList.remove("d-flex");
        }else{
            element.classList.add("d-flex");
            element.classList.remove("d-none");
            if (element.className !== "d-flex") {
                element.classList.add("d-flex");
            }
        }

    });   
}


btnsubmit.addEventListener('click', function (e) {
    e.preventDefault()
    createTask();
    inputTxt.value = "";
})

btnsubmit.addEventListener('click', function (e) {
    e.preventDefault()
    createTask();
    inputTxt.value = "";
})



deleteTask()
// btnsubmit.addEventListener('click', addTast())
// console.log(addTast());
 