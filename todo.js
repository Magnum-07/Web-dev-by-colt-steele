message = prompt("What do you wanna do?").toLowerCase();
items =[];
while(message !== "quit"){
    if(message === "new"){
        newItem = prompt("Enter new todo!");
        items.push(newItem)
        console.log(`${newItem} added to list!`);
    }
    else if (message === "list"){
        console.log("*");
        for (let i=0; i< items.length; i++){
            console.log(`${i}: ${items[i]}`);
        }
        console.log("*")
    }
    else if (message === "delete"){
        const indexDelete = prompt("Which index element do you want to delete?");
        items.splice(indexDelete,1);
        console.log("Element Deleted!");
    }
    message = prompt("What do you wanna do?").toLowerCase();
    if (message === null){
        break;
    }
}
console.log("YOU QUIT THE APP");