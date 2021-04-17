var el = document.querySelectorAll('.jga');
for(var i=0;i<el.length;++i){
el[i].onclick = function(e){
   e.target.classList.toggle('yellow');
}
}


