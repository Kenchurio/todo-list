let savedTasks = localStorage.getItem('tasks');
let parsedTasks = JSON.parse(savedTasks) || [];
let tasks = parsedTasks;

        for ( let i = 0; i < parsedTasks.length; i++ ){
        let li = document.createElement('li');
        let deleteBtn = document.createElement('button');
        li.textContent = parsedTasks[i];     
        deleteBtn.textContent = 'Delete';
        document.getElementById('taskList').appendChild(li);
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', function() {
                tasks.splice(i,1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                li.remove();
        });
        deleteBtn.classList.add('delete-btn');
        }; 

document.getElementById('addBtn').addEventListener('click', function() {
        let taskText = document.getElementById('taskInput').value;
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        let li = document.createElement('li');
        let deleteBtn = document.createElement('button');
        li.textContent = taskText;     
        deleteBtn.textContent = 'Delete';
        document.getElementById('taskList').appendChild(li);
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', function() {
                tasks.splice(tasks.indexOf(taskText), 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                li.remove();
        });
        document.getElementById('taskInput').value = '';
        
        deleteBtn.classList.add('delete-btn');
});
