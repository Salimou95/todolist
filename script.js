const btnsubmit = document.querySelector("form button")
const inputTxt = document.querySelector("form input");
const ul = document.querySelector("ul");
var btndelete = document.querySelectorAll(".btn-danger");
var allLi= document.querySelectorAll("li");
const box = document.querySelectorAll('input[type="checkbox"]')


function createTask(){
    if(inputTxt.value != null && inputTxt.value !==""){
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
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
        allLi= document.querySelectorAll("li");

    }else{
        alert("Veuilliez ajouter une tache")
    }
}
function deleteTask(){
    ul.addEventListener('click',function (event) {
        btndel = event.target;
        if(btndel.classList.contains("btn-danger")){
            console.log(btndel);
            const parent = btndel.parentElement;
            parent.remove();

        }
        
    })

    // btndelete.forEach(btn => {
        
    //     btn.addEventListener('click',function (e){
    //         allLi= document.querySelectorAll("li");

    //         console.log(e.target);
    //         btn.parentElement.remove()
    //     })
        
    //  });

}
// function coche() {
    

//     box.forEach(element => {

//         element.addEventListener('change', function (e) {
//         if(element.checked){
//             element.parentElement.classList.add("done");
//             element.parentElement.classList.remove("todo");
            
//         }else{
//             element.parentElement.classList.add("todo");
//             element.parentElement.classList.remove("done");
//         }
//     });
//     });
    
    
// }

function coche() {
    const container = document.querySelector('ul'); // Remplacez par le conteneur réel

    container.addEventListener('change', function (event) {
        const target = event.target;
        if (target.type === 'checkbox') {
            const parent = target.parentElement;
            if (target.checked) {
                parent.classList.add("done");
                parent.classList.remove("todo");
            } else {
                parent.classList.add("todo");
                parent.classList.remove("done");
            }
        }
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

function printAll() {
    allLi.forEach(element => {
        if (element.className !== "d-flex") {
            element.classList.add("d-flex");
            element.classList.remove("d-none");
        }
    });   
}
btnsubmit.addEventListener('click', function (e) {
    e.preventDefault()
    createTask();
    inputTxt.value = "";
})





deleteTask()
coche()
// btnsubmit.addEventListener('click', addTast())
// console.log(addTast());
 