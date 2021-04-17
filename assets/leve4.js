var btn = document.querySelector('.menuright button');
var menu =document.querySelector('.slip');
var btnheader =document.querySelector('.header .btn1');
var btnli=document.querySelectorAll('.menuright a');
var decor= document.querySelectorAll('.menuright li ');
var test =document.querySelector('.tr');

function fill(){
    btnli[2].style.href='#education';
}

function slip(){
    menu.style.animation =`tele ease .2s,fadeOut linear 1s 3s forwards`;
};
btn.onclick = function(e){
    menu.style.transform = 'translateX(-100%)';
};
btnheader.onclick = function(e){
    menu.style.transform = 'translateX(0)';
  
};

for(var i =0; i< btnli.length ;++i){

   
    btnli[i].onclick = function(e){ 
        for(var j=0;j<btnli.length;j++){
            btnli[j].classList.remove('pinkcolor');
        }
        

        menu.style.transform = 'translateX(-100%)'; 
        e.target.classList.add('pinkcolor');
       
       
    }

}





