
async function call(){
    try{
        var response=await fetch ("http://localhost:3000/blog");
    var data=await response.json();
    console.log(data);
    display(data);
    }
    catch (e){
        console.log(e+"eeee");
    };
}
call();
function display(data)
{
    var urll="http://localhost:3000/blog/";
    var tbody=document.getElementById("table-body");
    for (var i=0;i<data.length;i++)
    {
        let x=`<td>${data[i].id}</td>
    <td>${data[i].title}</td>
    <td>${data[i].category}</td>
    <td><button id="view" onclick="view(${data[i].id})">View</button></td>
    <td><button id="edit" onclick="edit(${data[i].id})">Edit</button></td>
    <td><button id="delete" onclick="deletee(${data[i].id})">Delete</button></td>`;
    tbody.innerHTML+=x;
    }
}

function view(id){
    localStorage.setItem("blogId",id);
    location.href= "view.html" ;
    console.log("viewewewe");
}
function edit(id){
    localStorage.setItem("editId",id);
    location.href= "edit.html" ;
    console.log("viewewewe");
}
async function deletee(id){
    try {
        var response=await fetch ("http://localhost:3000/blog/"+id,{
        method:"DELETE",
    });
    var data=await response.json();
    console.log(data);
    } catch (error) {
        console.log(error);
    }
}