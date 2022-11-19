//Import 
import navbar from "../components/navbar.js"


//catch the target 
const target = document.querySelector("#navbar");

//navbar()
target.innerHTML = navbar();








//catch the button 
const addTodoButton = document.querySelector("#addTodoButton");

addTodoButton.addEventListener("click" , handleAddTodo );


let todoArray = JSON.parse(localStorage.getItem("todos")) || [];

//Create 

function handleAddTodo () {

    //Catch the input value
    const inputTodoValue = document.querySelector("#todoInput").value ;

    if(!inputTodoValue){
        alert("Opps !, Type something");
        return;
    }

    //create payload 
    const payload = {
        todo: inputTodoValue,
        status: false,
        id: Date.now() + inputTodoValue
    }

    //Push it inside array
    todoArray.push(payload);

    //store the data in Local Storage
    localStorage.setItem("todos" , JSON.stringify(todoArray))

    append(todoArray)

}

append(todoArray);


//Get or read any item

function append (todos) {

    const container = document.querySelector(".allTodo__div");

    container.innerHTML = null;
    
    todos.map((el) =>{

        //1. Ctrate html with DOM

        const mainDiv = document.createElement("div");
        const h3 = document.createElement("h3");
        const updateButton = document.createElement("button");
        const deleteButton = document.createElement("button");


        //2. Give any attributes or style 

        h3.textContent = el.todo;

        if(el.status){
            updateButton.textContent = "Done";
            updateButton.style.background = "green";
        }
        else{
            updateButton.textContent = "Not Done";
            updateButton.style.backgroundColor = "red"
        }

        deleteButton.textContent = "Delete";
        deleteButton.style.backgroundColor = "violet"
        deleteButton.style.color = "black";

        // Event Listener
        updateButton.addEventListener("click" , () =>{
            handleUpdateTodo(el.id);
        } )

        deleteButton.addEventListener("click" , () =>{
            handleDelete(el.id);
        } )






        //3. append
        mainDiv.append(h3 , updateButton , deleteButton);
        container.append(mainDiv);


    })

}

//To Update an item
function handleUpdateTodo (id) {

    todoArray = todoArray.map((el) =>{

        //Find our required obj 
        if(el.id === id){
            return { ...el , status: !el.status }
        }
        else{
            return el;
        }   


    })

    localStorage.setItem("todos" , JSON.stringify(todoArray));


    append(todoArray);



}

// To Delete an item
function handleDelete (id) {

    todoArray = todoArray.filter((el) =>{
        return el.id !== id;
    })

    localStorage.setItem("todos" , JSON.stringify(todoArray));

    append(todoArray);


}
