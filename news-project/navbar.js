const dropdownLinks=document.querySelector(".dropdown-links");
const dropdownMenu=document.querySelector(".dropdown-menu");
const dots = document.querySelector("#dots");
const closeBtn=document.querySelector("#close-dropdown");
let kucuk632 = false;
let kucuk600=false;
function resizeAddElement(){
    if(window.innerWidth<632 && kucuk632==false){
        const list =`
        <li><a href="#" >Worklife</a></li>
        <li><a href="#" >Travel</a></li>
        <li><a href="#" >Future</a></li>
        <li><a href="#" >Culture</a></li>
                
        `;
        dropdownLinks.insertAdjacentHTML("beforeend",list);
        kucuk632=true;
    }
    if(window.innerWidth>632 && kucuk632==true){
        const list =`
            <li><a href="#">TV</a></li>
            <li><a href="#">Weather</a></li>
            <li><a href="#">Sounds</a></li>
        `;
        dropdownLinks.innerHTML=list;
        kucuk632=false;
    }
    if(window.innerWidth<600 && kucuk600==false){

        const list =`
        <li><a href="#" >Home</a></li>
        <li><a href="#" >News</a></li>
        <li><a href="#" >Sport</a></li>
        `;
        dropdownLinks.insertAdjacentHTML("afterbegin",list);
        kucuk600=true;
        dropdownLinks.style.display="block";
    }
    if(window.innerWidth>600 && kucuk600==true){
        dropdownLinks.style.display="flex";
        const list =`
            <li><a href="#">TV</a></li>
            <li><a href="#">Weather</a></li>
            <li><a href="#">Sounds</a></li>
        `;
        dropdownLinks.innerHTML=list;
        kucuk600=false;
    }
    
}

dots.addEventListener("click",()=>{
    dropdownMenu.classList.add("show");
});
closeBtn.addEventListener("click",()=>{
    dropdownMenu.classList.remove("show");
});