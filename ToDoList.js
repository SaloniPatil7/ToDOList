let ip= document.querySelector("input");
let btn= document.querySelector("button");
let ul= document.querySelector("ul");

btn.addEventListener("click", function( ){
    let listBy=document.createElement("li");
    listBy.innerText=ip.value;

    let btnBy= document.createElement("button");
    btnBy.innerText="deleteIT"
    listBy.appendChild(btnBy);
    ul.appendChild(listBy);
    ip.value="";

   

});



// let deleteBtnss= document.querySelectorAll(".delete");
// for( deleteBtn of deleteBtnss)
// {
//     deleteBtn.addEventListener("click", function( ){
//        let parent= this.parentElement;
//        console.log(parent);
//        parent.remove();
//     });
// }
//here newly added btn cant be deleted therefore use eventBubbling method i.e assces parent  
    


ul.addEventListener("click",function(event)
{
    if(event.target.nodeName=="BUTTON")
    {
        let parent=event.target.parentElement;
        parent.remove();
    }
})
   

