
// NAVIGATION WITH PURE JAVASCRIPT
// $bar = document.querySelector(".bar").onclick = function(e){
//   $nav = document.querySelector(".nav").style.display;
//   if($nav == '' || $nav == 'none' ){
//     document.querySelector(".nav").style.display = "block";
//   }else{
//     document.querySelector(".nav").style.display = "none";
//     console.log("showing");
//   }
// }


// NAVIGATION WITH JQUERY
$(document).ready(function(){
  

  $(".bar").click(navDisplay);

})



function navDisplay(){
  $(".nav").slideToggle();
}

