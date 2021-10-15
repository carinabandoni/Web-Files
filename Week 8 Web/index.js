// console.log("hello world");
// console.log(Math.floor(Math.random()*3);


// console.log (document.getElementsByClassName('options'));
// console.log (document.getElementsByClassName('options')[0].innerHTML);
// for(i=0;i<3;i++){

const images = ["bunny.jpg", "sushi.jpg", "cat.jpg"]
const title = ["bunny", "sushi", "cat"]

for(i=0;i<document.getElementsByClassName('options').length;i++){
  console.log(document.getElementsByClassName('options')[i].innerHTML);

  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/' + images[i]+ ' "> ';
  document.getElementsByClassName("options")[i].setAttriblute("id",title[i]);
  document.getElementsByClassName("options")[i].addEventListener("click", function(){changeColor(this.id)});
}

function changeColor(sectionID){
  console.log(sectionID);
  document.getElementById(sectionID).classList.toggle("blue");

}
