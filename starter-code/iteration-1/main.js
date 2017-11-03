var myArray = [];
function addTask(task) {
    myArray.push(task);
}
;
function listAllTasks(i) {
    for (i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}
function deleteTask(task) {
    if (myArray.indexOf(task) != -1) {
        var index = myArray.indexOf(task);
        delete myArray[index];
        console.log(task, " has been deleted! There are " + myArray.length + "tasks left.");
        return;
    }
    else if (myArray.indexOf(task) === -1) {
        console.log("Trick, I can't find that!");
    }
}
;
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
