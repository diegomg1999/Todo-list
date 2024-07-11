let tareasPorHacer = document.querySelector('#tasks');
let tasksContainer = document.querySelector('#tasks-container');
let inputSubmit = document.querySelector('#button-to-add-tasks');



inputSubmit.addEventListener('click', function() {
    let valor = tareasPorHacer.value;

    if(valor === "") {
        alert('Ingresa un valor correcto');
        return
    } else if (valor.length >= 1){
        let listContainer = document.createElement('li');
        listContainer.innerHTML = `${valor}` 
        tasksContainer.appendChild(listContainer);
        text.innerText = `${valor}`
        tareasPorHacer.value = "";

        const checkTask = document.createElement('button');
        checkTask.setAttribute('id', 'botonResuelto')
        checkTask.textContent = "Dar por terminado";
        listContainer.appendChild(checkTask)
        checkTask.addEventListener('click', function() {
            const li = this.parentNode;
            tasksContainer.removeChild(li)
        })

        const removeTask = document.createElement('button');
        removeTask.textContent = "Dar por terminado";
        removeTask.setAttribute('id', 'botonRemover')
        listContainer.appendChild(removeTask)
        

        const edit = document.createElement('button');
        edit.textContent = "Editar esta tarea";
        edit.setAttribute('id', 'edit')
        listContainer.appendChild(edit)

        edit.addEventListener('click', function() {
            text.contentEditable = true;
            listContainer.removeChild(removeTask);
            listContainer.removeChild(checkTask);
            listContainer.removeChild(edit);
            const saveButton = document.createElement('button');
            listContainer.appendChild(saveButton)
            saveButton.addEventListener('click', function()
            {
                text.value = text.contentEditable;
            })

        })
        
    }
});




