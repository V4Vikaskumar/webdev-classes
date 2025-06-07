
const taskForm = document.getElementById('task-form')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')
const clearCompletedButton = document.getElementById('clear-completed')
const filterButtonContainer = document.querySelector('.filter-buttons')
const filterButtons= document.querySelectorAll('.filter-buttons button')
let activeId = 'all'

let tasks = JSON.parse(localStorage.getItem('tasks'))||[]

taskForm.addEventListener('submit',addTask);

function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks))
}


function addTask(event){

    event.preventDefault();
    const task = tasks.remove.trim()
    tasks.push({
        text:task,
        completed:false
    })

    taskInput.value=''
    renderTaskList()
    saveTasks()
    //console.log(tasks)

}

// function renderTaskList(newTasks=tasks){
//     taskList.innerHTML=''

//     newTasks.forEach((task,index)=>{
//         const li = document.createElement('li')

//         li.innerHTML=`
//             <span>${task.text}</span>
//             <div>
//                 <button class="complete-button">${task.completed?"Undo":"complete"}</button>
//                 <button class="edit-button">edit</button>
//                 <button class="delete-button">delete</button>
//             </div>
//         `
//         const deleteButton = li.querySelector('.delete-button')
//         const editButton = li.querySelector('.edit-button')
//         const completeButton = li.querySelector('.complete-button')

//         deleteButton.addEventListener('click',()=>{deleteTask(index)})
//         editButton.addEventListener('click',()=>{editTask(li,index)})
//         completeButton.addEventListener('click',()=>{completeTask(index)})

//         li.className=`task-item ${task.completed?'completed':''}`

//         taskList.appendChild(li)
//     })

// }

function renderTaskList(newTasks = tasks) {
    // 1. taskList के अंदर के सभी HTML content को clear karna
    // Ye line purane tasks ko remove karne ke liye hai, taaki naye tasks ko sahi tarike se render kiya ja sake.
    taskList.innerHTML = '';

    // 2. newTasks array ke har task par iterate karna
    // Ye loop har task ko process karne ke liye hai, jisse hum unhe HTML list items ke roop mein dikhayenge.
    newTasks.forEach((task, index) => {
        // 3. Ek naya <li> element create karna
        // Ye line ek list item create karne ke liye hai, jisme task ki details dikhai jayengi.
        const li = document.createElement('li');

        // 4. <li> element ke andar HTML content set karna
        // Ye line task ki text aur buttons ko <li> element ke andar add karne ke liye hai.
        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="complete-button">${task.completed ? "Undo" : "complete"}</button>
                <button class="edit-button">edit</button>
                <button class="delete-button">delete</button>
            </div>
        `;

        // 5. Buttons ko select karna
        // Ye lines buttons ko select karne ke liye hain, taaki hum un par event listeners attach kar sakein.
        const deleteButton = li.querySelector('.delete-button');
        const editButton = li.querySelector('.edit-button');
        const completeButton = li.querySelector('.complete-button');

        // 6. Delete button par click event listener attach karna
        // Ye line deleteTask function ko call karne ke liye hai jab user delete button par click kare.
        deleteButton.addEventListener('click', () => { deleteTask(index) });

        // 7. Edit button par click event listener attach karna
        // Ye line editTask function ko call karne ke liye hai jab user edit button par click kare.
        editButton.addEventListener('click', () => { editTask(li, index) });

        // 8. Complete button par click event listener attach karna
        // Ye line completeTask function ko call karne ke liye hai jab user complete button par click kare.
        completeButton.addEventListener('click', () => { completeTask(index) });

        // 9. <li> element ki class set karna
        // Ye line task ki completion status ke hisaab se appropriate CSS classes apply karne ke liye hai.
        li.className = `task-item ${task.completed ? 'completed' : ''}`;

        // 10. <li> element ko taskList ke andar append karna
        // Ye line newly created <li> element ko taskList mein add karne ke liye hai, jisse wo user interface par dikhai de.
        taskList.appendChild(li);
    });
}


function deleteTask(index){
    tasks.splice(index,1);
    renderTaskList()
    saveTasks()
}

function editTask(li,index){

    const span = li.firstElementChild;

    const input = document.createElement('input')
    input.type='text'
    input.value=tasks[index].text
    input.focus()
    li.replaceChild(input,span)

    if(input.value){
        input.addEventListener('blur',()=>{
            tasks[index].text=input.value
            renderTaskList()
            saveTasks()
        })
    }
}

function completeTask(index){
    tasks[index].completed=!tasks[index].completed
    renderTaskList()
    saveTasks()
}

filterButtonContainer.addEventListener('click',(event)=>{
    activeId = event.target.getAttribute('id')

    filterButtons.forEach((item)=>{
        const itemId = item.id
        if(itemId==activeId){
            item.classList.add('active')
        }else{
            item.classList.remove('active')
        }
    })

    if(activeId=='all'){
        renderTaskList()
    }

    if(activeId=='active'){
        let newTasks = tasks.filter((task)=>{
            return (task.completed==false)
        })
        renderTaskList(newTasks)
    }

    if(activeId=='completed'){
        let newTasks = tasks.filter((task)=>{
            return (task.completed==true)
        })
        renderTaskList(newTasks)
    }
})

clearCompletedButton.addEventListener('click',()=>{
    tasks = tasks.filter((task)=>{
        return (task.completed==false)
    })

    if(activeId!='completed'){
        renderTaskList()
    }else{
        renderTaskList([])
    }

    saveTasks()
    
})

renderTaskList()




