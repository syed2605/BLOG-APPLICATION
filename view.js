var root=document.getElementById("root");
var id=localStorage.getItem("blogId");
console.log(id);
viewing();
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
function display (data)
{
    var root=document.getElementById("root");
    var div1=document.createElement("div");
    div1.className="div1";
    let x=`<h2>Title : ${data.title}</h2>
    <h2>Category: ${data.category}</h2>`;
    var div2=document.createElement("div");
    div2.className="div2";
    let y=`<h2>Body: ${data.body}</h2>`;
    var div3=document.createElement("div");
    div3.className="div3";
    let z=`
    <h2>Author : ${data.author}</h2>
    <h2>Tags: ${data.tags}</h2>`;
    div1.innerHTML+=x;
    div2.innerHTML+=y;
    div3.innerHTML+=z;
    root.append(div1,div2,div3);

}