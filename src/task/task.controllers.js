const taskDB = [
    {
      id: 1,
      title: "",
      description: "",
      completed: "",

    },
  ];

  //? El controlador para retornar todos mis usuarios
  const getAllTasks = () => {
    return taskDB;
  };
  
  const getTaskById = (id) => {
    const filteredDB = taskDB.filter((task) => task.id === id);
    return filteredDB[0];
  };
  
  const createTask = (taskObj) => {
    if (taskDB.length === 0) {
      const newTask = {
        id: 1,
        title: taskObj.title,
        description: taskObj.description,
        completed: taskObj.completed,

      };
      taskDB.push(newTask);
      return newTask;
    }
    const newTask = {
      id: taskDB[taskDB.length - 1].id + 1,
      title: taskObj.title,
      description: taskObj.description,
      completed: taskObj.completed,
    };
    taskDB.push(newTask);
    return newTask;
  };

  
const deleteTask = (id) => {
  const index = taskDB.findIndex((item) => item.id === id);
  if (index !== -1){
    taskDB.splice(index, 1)
    return true
  }
  return false
}

const editTask = (id, data) => {
  const index = taskDB.findIndex((item) => item.id === id);
  if (index !== -1){
    taskDB[index] = data
    return taskDB[index]
  } else {
    createUser(data)
    return taskDB.at(-1)
  }
}
  


  module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask,
    editTask
  };