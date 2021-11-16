console.log('hello!');

let pics = 8;
let pic;

for(i=0;i<pics;i++){
  pic = 1+i;
document.getElementById('portfolio').innerHTML += "<divclass= 'pimage'> <img src='assets/portfolio/" + pic + ".jpg'" + "class='portfoliopic' id='pic" + pic+ "' /> </div>";
}

let displaydetails = false;
document.getElementsById('portfolio').addEventListener("click",showDetails);

function showDeatails(){
  document.getElementById('details').style.display ="block";
  document.getElementById('detailsoverlay').style.display ="block";
  document.getElementById('detailsoverlay').addEventListener('click',clickedOverlay)

  // this is where we eneded in class!

}
