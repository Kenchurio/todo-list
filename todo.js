let savedTasks = localStorage.getItem('tasks');
let parsedTasks = JSON.parse(savedTasks) || [];
let tasks = parsedTasks;

        for ( let i = 0; i < parsedTasks.length; i++ ){
        let li = document.createElement('li');
        let deleteBtn = document.createElement('button');
        let currentTask = parsedTasks[i];
        li.textContent = currentTask.taskName;    
        deleteBtn.textContent = 'Delete';
        document.getElementById('taskList').appendChild(li);
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', function() {
                tasks.splice(tasks.indexOf(currentTask), 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                li.remove();
        });
        deleteBtn.classList.add('delete-btn');
        }; 


document.getElementById('addBtn').addEventListener('click', function() {
        let taskText = document.getElementById('taskInput').value;
        

if (taskText === ''){

console.log("No character input");

}

else{
        let newTask = { taskName: taskText, completed: false };
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        let li = document.createElement('li');
        let deleteBtn = document.createElement('button');
        li.textContent = newTask.taskName;
        deleteBtn.textContent = 'Delete';
        document.getElementById('taskList').appendChild(li);
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', function() {
                tasks.splice(tasks.indexOf(newTask), 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                li.remove();
        });
        document.getElementById('taskInput').value = '';
        
        deleteBtn.classList.add('delete-btn');

}
});
