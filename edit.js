var id=localStorage.getItem("editId");
console.log(id);
async function viewing()
{
    try {
        var response=await fetch ("http://localhost:3000/blog/"+id);
        var data=await response.json();
        console.log(data);
        display(data);
    } catch (error) {
        console.log(error);
    }
}
viewing();
function display(data)
{
    document.getElementById("title").value=data.title;
    console.log(document.getElementById("title").textContent);
    document.getElementById("body").value=data.body;
    document.getElementById("author").value=data.author;
    document.getElementById("Categeroy").value=data.category;
    document.getElementById("tags").value=data.tags;
}

var btn=document.getElementById("submit");
btn.addEventListener("click",async function (){
    var blogData={
        title:document.getElementById("title").value,
        body:document.getElementById("body").value,
        author:document.getElementById("author").value,
        category:document.getElementById("Categeroy").value,
        tags:document.getElementById("tags").value,
    }

    try {
            var response=await fetch ("http://localhost:3000/blog/"+id,{
                method:"PATCH",
                body:JSON.stringify(blogData),
                headers:{
                    "Content-Type":"application/json "
                }

            });
            var data= await response.json(); 
            location.href="main.html";
    } catch (error) {
        console.log(error);
    }
})