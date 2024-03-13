let addToDoButton=document.getElementById("submit");
let toDoContainer=document.getElementById("toDoContainer");
let inputfield=document.getElementById("inputfield");

addToDoButton.addEventListener("click",function(){

    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();

    var paragraph=document.createElement("p");
    toDoContainer.appendChild(paragraph);
    paragraph.innerText=inputfield.value;

    paragraph.style.fontWeight="800";
    paragraph.style.fontSize="18px";
    paragraph.style.fontFamily="Josefin Sans, sans-serif";
    paragraph.style.marginTop="9px";
    paragraph.style.color="white";

    paragraph.classList.add("paragraph-styling");
    inputfield.value="";
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through";
        paragraph.style.color="gray";
    })
    paragraph.addEventListener("dblclick",function(){
        toDoContainer.removeChild(paragraph);
    })
})