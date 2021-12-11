console.log('hello!');

let pics = 3;
let pic;

let path= ["Curated/curated.html","Ness/ness.html","Truecoach/truecoach.html"];

for(i=0;i<pics;i++){
  pic = 1+i;
// document.getElementById('portfolio').innerHTML += "<div class= 'pimage'> <img src='assets/portfolio/" + pic + ".jpg'" + "class='portfoliopic' id='pic'/> </div>";
// }
document.getElementById('portfolio').innerHTML += "<div class= 'pimage'> <a href='" + path[i] + "'>" + "<img src='assets/portfolio/" + pic + ".jpg'" + "class='portfoliopic' id='pic'/> </a> </div>";
}

let displaydetails = false;
document.getElementsById('portfolio').addEventListener("click",showDetails);

function showDeatails(){
  document.getElementById('details').style.display ="block";
  document.getElementById('detailsoverlay').style.display ="block";
  document.getElementById('detailsoverlay').addEventListener('click',clickedOverlay)


}
