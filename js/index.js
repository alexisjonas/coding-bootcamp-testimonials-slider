var index = 1;

showdiv(index);

function getdiv(n){
   showdiv(index += n);
}

function showdiv(n){

   var i;
   var as = document.getElementsByClassName("testimonial__item");
   if(n > as.length){
     index = 1;
   }
   if(n < 1 ){
    index = as.length;
   }
   for(i=0;i<as.length;i++){ 
    as[i].style.display="none";
    }
    as[index-1].style.display="grid"; 
}
