let list=[];
        function add(){
            let todo=document.getElementById("todoentry").value 
            list.push(todo);
            display(list);
            document.getElementById("todoentry").value=" "
        }
    
        function display(list){
            let whole="";
            for(let i=0; i<list.length; i++)
            {
                whole=whole+"<li>"+list[i]+"</li>"; 
            }
            document.getElementById("ollist").innerHTML=whole;
        }
function save(){
    localStorage.setItem("todo",JSON.stringify(list))
}
function empty(){
    var toDoItems = ollist.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}




