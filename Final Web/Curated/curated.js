console.log('hello!');

let pics = 6;
let pic;

for(i=0;i<pics;i++){
  curated = 1+i;
  document.getElementById('flexbox').innerHTML += "<img src='../assets/curated/" + curated + ".jpg'" + "class='curatedpic' id='curated' />";
}
