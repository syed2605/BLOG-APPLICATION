var sub=document.getElementById("submit");
sub.addEventListener("click",calling);

async function calling(){
    var blogdata={
        title: document.getElementById("title").value,
        body: document.getElementById("body").value,
        author: document.getElementById("author").value,
    category: document.getElementById("Categeroy").value,
    tags: document.getElementById("tags").value,
    };
    console.log(JSON.stringify(blogdata)+"bb");
    try {
        var response=await fetch("http://localhost:3000/blog",{
            method:"POST",
            body: JSON.stringify(blogdata),
            headers:{
                "Content-Type":"application/json"
            }
        });
        var data=await response.json();
        location.href="main.html";
    } catch (error) {
        console.log("error");
    }
}