const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,  //unique number for card id
        imageUrl: document.getElementById(imageurl).value,
        taskTitle: document.getElementById(tasktitle).value,
        taskType: document.getElementById(tasktype).value,
        taskDescription: document.getElementById(taskdescription).value,
    };
    console.log(taskData);
};