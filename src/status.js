let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

export default (index) => {
  tasks = tasks.map((task) => {
    if (task.index === index) {
      const test = task.completed;
      if (test) {
        task.completed = false;
      } else {
        task.completed = true;
      }
    }
    return task;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  document.location.reload();
};