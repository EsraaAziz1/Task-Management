let addTask = document.querySelector('.add');
let txt = document.querySelector('.txt');
let Tasks = document.querySelector('.NoTask')
let hideNotTask = document.querySelector('.NoTask span');
let counter = document.querySelector('.counter');
let Teams = document.querySelector('.persons');
let countTask = document.querySelector('.counter2')

let count = 0;
addTask.addEventListener('click', () => {
      if (txt.value == '') {
            alert('Please Enter Tasks!!!')
      }
      else {
            hideNotTask.style.display = 'none';
            counter.innerHTML = ++count;
            // Tasks.innerHTML += `
            //       <div class="task" draggable="true" id=${Date.now()}>
            //             <P class="taskTXT" >${txt.value} </P>
            //             <p class="remove"> ❌</p>
            //       </div> <br>`
            let taskDiv = document.createElement('div');
            taskDiv.className = 'task';
            taskDiv.draggable = true;
            taskDiv.id = Date.now();

            let p = document.createElement('p');
            p.className = 'taskTXT';
            p.textContent = txt.value;

            let p2 = document.createElement('p');
            p2.className = 'remove';
            p2.textContent = "❌";

            let br = document.createElement('br');

            taskDiv.appendChild(p);
            taskDiv.appendChild(p2);

            Tasks.appendChild(taskDiv);
            Tasks.appendChild(br);

      }
      txt.value = ''
})

/////// Remove Task before dragging/////////
Tasks.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
            e.target.parentElement.remove();
            counter.innerHTML = document.querySelectorAll('.NoTask .task').length;
      }
})

// ///////////////////////Enter Names Of Team //////////////////////////

let Names_Of_Team = prompt('Enter your Name of Teams seperate , between each Name');

let arrOfName = Names_Of_Team.split(',');
arrOfName.forEach((name, index) => {
      Teams.innerHTML += `
           <div class="person1">
                        <h3><span>👤${name}</span> <span class="counter2">0</span></h3>
                        <div class="dragTask" data-task='task' id=${index}>
                        </div> 
                    </div>`
})



/////////////////////////////////Drag & Drop////////////////////////////
// start Drag
document.addEventListener('dragstart', (e) => {
      // e.preventDefault();
      // console.log('dragstart fired', e.target);
      let taskDragged = e.target.closest('.task')
      // console.log(e)
      if (taskDragged && taskDragged.draggable) {
            // console.log("Drag started!", taskDragged);
            // console.log("Drag started id!", taskDragged.id);
            e.dataTransfer.setData('task', taskDragged.id);

            let parentDropZone = taskDragged.closest('.dragTask');
            if (parentDropZone) {
                  e.dataTransfer.setData('currentDropZone', parentDropZone.id);
                  // console.log('dragstart parentElement id: ' + parentDropZone.id)

            } else {
                  e.dataTransfer.setData('currentDropZone', '');
            }
            document.querySelectorAll('.person1').forEach(person => {
                  person.classList.add('dragging');
            });
      }
});
//  Drag End for start Drop
document.addEventListener('dragend', (e) => {
      document.querySelectorAll('.person1').forEach(person => {
            person.classList.remove('dragging');
      });
})

//  Drag over
document.addEventListener('dragover', (e) => {
      let dropZone = e.target.classList.contains('dragTask') ? e.target : e.target.closest('.dragTask');
      //    console.log('dragover target:', e.target);
      if (dropZone) e.preventDefault();
});

document.addEventListener('drop', (e) => {
      let dropZone = e.target.closest('.dragTask');
      //  console.log('drop', e.target); 
      if (!dropZone) return;

      let taskID = e.dataTransfer.getData('task');
      let currentTask = document.getElementById(taskID)
      if (currentTask && dropZone !== currentTask.parentElement) {
            let select = document.createElement('select');
            select.className = 'selectAction'
            select.innerHTML = `
                  <option value="Not Started">Not Started</option>
                  <option value="onGoing">onGoing</option>
                  <option value="Finished">Finished</option>
            `
            dropZone.appendChild(currentTask);
            if (!currentTask.querySelector('select.selectAction')) {
                  currentTask.appendChild(select);
                  currentTask.classList.add('currentTaskDragging', 'removeCurrentTask')
                  currentTask.style.backgroundColor = 'rgb(248, 100, 100)';
                  currentTask.style.borderLeft = '4px solid rgb(223, 44, 44)';
                  currentTask.style.height = '40px';

                  //////////// change select/////////////
                  select.addEventListener('change', (e) => {
                        if (e.target.value === 'Not Started') {
                              currentTask.style.backgroundColor = 'rgb(248, 100, 100)';
                              currentTask.style.borderLeft = '4px solid rgb(223, 44, 44)';
                        }
                        else if (e.target.value === 'onGoing') {
                              currentTask.style.backgroundColor = 'rgba(82, 146, 249, 0.767)';
                              currentTask.style.borderLeft = '4px solid rgba(58, 99, 165, 0.77)';
                        }
                        else if (e.target.value === 'Finished') {
                              currentTask.style.backgroundColor = 'rgba(82, 249, 129, 0.77)';
                              currentTask.style.borderLeft = '4px solid rgba(56, 169, 88, 0.77)';
                              currentTask.draggable = false;
                              currentTask.style.cursor = 'not-allowed'

                        }
                  })
            }


      }
      let currentDropZoneID = e.dataTransfer.getData('currentDropZone');
      // console.log(currentDropZoneID)
      let currentDropZone = document.getElementById(currentDropZoneID);


      // counter for each person 
      if (currentDropZone) { //  counter for current dropzone 
            let oldPerson = currentDropZone.closest('.person1');
            if (oldPerson) {
                  oldPerson.querySelector('.counter2').innerHTML = oldPerson.querySelectorAll('.task').length;
            }
      }

      let person = dropZone.closest('.person1');
      if (person) {
            person.querySelector('.counter2').innerHTML = person.querySelectorAll('.task').length;
      }

      // counter for tasks
      counter.innerHTML = document.querySelectorAll('.NoTask .task').length;
});


//////////// Remove Task After drop//////////////////
Teams.addEventListener('click', (e) => {
      let dropZone = e.target.closest('.dragTask');
      if (e.target.classList.contains('remove')) {
            e.target.parentElement.remove();
            let count_after_delect = dropZone.closest('.person1');
            if (count_after_delect) {
                  count_after_delect.querySelector('.counter2').innerHTML = count_after_delect.querySelectorAll('.task').length;
            }
      }

})