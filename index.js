const taskContainer = document.querySelector(".task_container");
console.log(taskContainer);

const globalStorage = []; //creating array

// html code for input of card
const newCard = (taskData) => ` 
    <div class="col-md-6 col-lg-4 id=${taskData.id}">
    <div class="card text-center">
      <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success" ><i class="fas fa-edit"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></i></button>
      </div>
      <img src="${taskData.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${taskData.taskTitle}</h5>
        <p class="card-text">${taskData.taskDescription}</p>
        <a href="#" class="btn btn-primary">${taskData.taskType}</a>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
      </div>
    </div>
  </div>
  `;

// loading cards not to deleted after refresh also for that this approach

const loadCardData = () => {
    // local storage to get the data
    
    const getCardData = localStorage.getItem("Taskie");

    // converting from string to normal data

    const {cards} = JSON.parse(getCardData);

    // loop over these array of task object to create HTML card ,

    cards.map((cardObject) => {
        // inject it to DOM
        taskContainer.insertAdjacentHTML("beforeend" , newCard(cardObject));
        // update to global storage
        globalStorage.push(cardObject);
    })

}

// inputing data and making changes (or adding card) on clicking to save change
const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,  //unique number for card id
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value,
    };
    console.log(taskData);


  taskContainer.insertAdjacentHTML("beforeend" , newCard(taskData));

  globalStorage.push(taskData); //data pushing into array

  localStorage.setItem("Taskie", JSON.stringify({cards:globalStorage})); //data storing in local storage
};