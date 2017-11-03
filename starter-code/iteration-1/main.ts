// Iteration 1
// 1. Create an array of strings
let myArray: Array<string> = [];
// let myArray = []

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task: string) {
  myArray.push(task)
};

// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(i){
for (i = 0; i < myArray.length; i++) {
console.log(myArray[i]);
  }
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task: string){
  if (myArray.indexOf(task)!=-1){
    let index=myArray.indexOf(task);
    delete myArray[index];
    console.log(task," has been deleted! There are " + myArray.length + "tasks left.")
    return
  }  else if(myArray.indexOf(task)=== -1) {
    console.log("Trick, I can't find that!")
  }
};
//[1, 2, 3].includes(2);     // true


// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
