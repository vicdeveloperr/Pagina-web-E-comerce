//NAV
const itemActivo = document.querySelectorAll(".navs-item--1");
const itemsNav = document.querySelectorAll(".navs-item");

for(i=0; i< itemsNav.length; i++){
    itemsNav[i].addEventListener("mouseenter", function(){
        for(e=0; e<itemActivo.length; e++){
            if(this != itemActivo[e]){
                itemActivo[e].style.color = "#ccc";
            }else{
                break;
            }
        }
    });
    itemsNav[i].addEventListener("mouseleave", function(){
        for(e=0; e<itemActivo.length; e++){
            if(this == itemActivo[e]){
                break
            }else{
                itemActivo[e].style.color = "#222";
            }
        }
    });
}
// INPUT 
document.querySelector("#mostrarInput").addEventListener("click", function(){
    document.querySelector("#buscador").style.display = "inline-block";
    this.style.display = "none";
});