 
        inputSubmit.addEventListener('click', function() {
            let valor = tareasPorHacer.value.trim();
        
            if(valor === "") {
                alert('Ingresa un valor correcto');
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
        
                const checkTask = document.createElement('button');
                checkTask.textContent = "La tarea se ha finalizado";
                checkTask.setAttribute("id", "Done");
                
        
        
                const removeTask = document.createElement('button');
                removeTask.textContent = "Dar por terminado";
                removeTask.setAttribute('id', 'botonRemover')
                listContainer.appendChild(removeTask)
                removeTask.addEventListener('click', function() {
                    const li = this.parentNode;
                    tasksContainer.removeChild(li)
                })
                
        
                const edit = document.createElement('button');
                edit.textContent = "Editar esta tarea";
                edit.setAttribute('id', 'edit')
                listContainer.appendChild(edit)
        
                edit.addEventListener('click', function() {
                    let inputParaEditar = document.createElement('input');
                    inputParaEditar.setAttribute('id', 'inputEdit')
                    inputParaEditar.type = 'text';
                    inputParaEditar.value = text.textContent;
                    text.replaceWith(inputParaEditar);
                    inputParaEditar.focus();
                    inputParaEditar.select();
        
                    inputParaEditar.addEventListener('blur', function() {
                        if(inputParaEditar.value === ""){
                            alert("Agregar un valor correcto");
                        }
                        else {
                            text.textContent = inputParaEditar.value;
                            inputParaEditar.replaceWith(text);
                            listContainer.appendChild(edit)
                            listContainer.removeChild(saveButton);
                        }
                    })
        
                    listContainer.removeChild(edit);
                    const saveButton = document.createElement('button');
                    saveButton.textContent = 'Guardar Cambios';
                    listContainer.appendChild(saveButton)
                    saveButton.addEventListener('click', function()
                    {
                        if(inputParaEditar.value === ""){
                            alert("Agregar un valor correcto");
                        }
                        else {
                            text.textContent = inputParaEditar.value;
                            inputParaEditar.replaceWith(text);
                            listContainer.appendChild(edit)
                            listContainer.removeChild(saveButton);
                        }
                    })
        
        
        
                })
                
            }
        });