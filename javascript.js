
let tareasPorHacer = document.querySelector('#tasks');
let tasksContainer = document.querySelector('#tasks-container');
let inputSubmit = document.querySelector('#button-to-add-tasks');
let modal = document.querySelector('#alertMessage');
let btonToClose = document.querySelector('#btn-to-close-modal');


const tasks = [];
loadTasks()
        
inputSubmit.addEventListener('click', addtaskAction);


function addtaskAction() {
    let valor = tareasPorHacer.value.trim();
                
        if(valor === "") {
            modal.showModal();
            return
        } else if (valor.length >= 1){
            let listContainer = document.createElement('li');
            let text = document.createElement('span');
                        text.setAttribute('id', 'texto-tareas');
                        listContainer.setAttribute('id', 'list-container')
                        listContainer.appendChild(text);
                        tasksContainer.appendChild(listContainer);
                        text.innerText = `${valor}`
                        tareasPorHacer.value = "";
                        tasks.push(listContainer);
        
                        buttons(tasks); 
                        saveTasks();
                }
                    }


function buttons(tasks) {
    tasks.forEach((task) => {
        if(!task.querySelector('.edit') && !task.querySelector('.removeTask')){
            const removeTask = document.createElement('button');
            removeTask.setAttribute('class', 'removeTask')
            removeTask.textContent = "Finished";
            task.appendChild(removeTask);

            let editButton = document.createElement('button');
            editButton.setAttribute('class', 'edit')
            editButton.textContent = "Edit";
            task.appendChild(editButton);




            editButton.addEventListener('click', function() {
                let inputParaEditar = document.createElement('input');
                inputParaEditar.setAttribute('id', 'inputEdit')
                inputParaEditar.type = 'text';

                let textoAEditar = task.querySelector('#texto-tareas');
                inputParaEditar.value = textoAEditar.textContent;
                textoAEditar.replaceWith(inputParaEditar);
                inputParaEditar.focus();
                inputParaEditar.select();

                inputParaEditar.addEventListener('blur', function() {
                    if(inputParaEditar.value.trim() === ""){
                        modal.showModal();
                        return
                    }
                    else {
                        textoAEditar.textContent = inputParaEditar.value;
                        inputParaEditar.replaceWith(textoAEditar);
                        task.appendChild(editButton)
                        task.removeChild(saveButton);
                        saveTasks()
                        
                    }
                })

                task.removeChild(editButton);
                let saveButton = document.createElement('button');
                saveButton.textContent = 'Save Changes';
                saveButton.setAttribute('class', 'edit')
                task.appendChild(saveButton)
                saveButton.addEventListener('click', function()
                    {
                        if(inputParaEditar.value.trim() === ""){
                            modal.showModal();
                            return
                        }
                        else {
                        textoAEditar.textContent = inputParaEditar.value;
                        inputParaEditar.replaceWith(textoAEditar);
                        task.appendChild(editButton)
                        task.removeChild(saveButton);
                        saveTasks()
                        }
                    })
            })

            removeTask.addEventListener('click', function() {
                const li = this.parentNode;
                tasksContainer.removeChild(li);

                const index = tasks.indexOf(li);
                if (index !== -1) {
                    tasks.splice(index, 1);
                    saveTasks()}
            })
        }
  });

};

function saveTasks() {
    let contenedor = [];
    tasks.forEach(function(task) {
        let text = task.querySelector('#texto-tareas').textContent.trim();
        contenedor.push(text);
    });

    localStorage.setItem('contenedor', JSON.stringify(contenedor));
}

function loadTasks() {
    const contenedor = JSON.parse(localStorage.getItem('contenedor')) || [];
    contenedor.forEach(function(valor) {
        let listContainer = document.createElement('li');
        let text = document.createElement('span');
        text.setAttribute('id', 'texto-tareas');
        listContainer.setAttribute('id', 'list-container');
        listContainer.appendChild(text);
        tasksContainer.appendChild(listContainer);
        text.innerText = valor;
        tasks.push(listContainer);
    });

    buttons(tasks);
}
  
btonToClose.addEventListener('click', () => {
    modal.close()
})




