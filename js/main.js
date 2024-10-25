const form = document.getElementById('form')
const taskInput = document.getElementById('taskInput')
const tasksList = document.getElementById('tasksList')
const emptyList = document.getElementById('emptyList')




console.log('hello');



form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputValue = taskInput.value

    if (inputValue.trim()) {
        const html = `<li class="list-group-item d-flex justify-content-between task-item">
        <span class="task-title">${inputValue}</span>
        <div class="task-item__buttons">
            <button type="button" data-action="done" class="btn-action">
                <img src="./img/tick.svg" alt="Done" width="18" height="18">
            </button>
            <button type="button" data-action="delete" class="btn-action">
                <img src="./img/cross.svg" alt="Done" width="18" height="18">
            </button>
        </div>
    </li>`

        tasksList.insertAdjacentHTML('beforeend', html)
        taskInput.value = ''
        taskInput.focus()

        if (tasksList.children.length > 1) {
            emptyList.classList.add('none')
        }
    } else {
        alert('Invalid Data')
    }


})

tasksList.addEventListener('click', (e) => {
    if(e.target.dataset.action === 'delete'){
        const parentNode = e.target.closest('.list-group-item')
        parentNode.remove()
        if (tasksList.children.length === 1) {
            emptyList.classList.remove('none')
        }
    }

    if(e.target.dataset.action === 'done') {
       const parentNode = e.target.closest('.list-group-item')
       const span = parentNode.querySelector('.task-title')
       span.classList.add('task-title--done')
       
    }

})

