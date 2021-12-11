console.log('hello!');

let pics = 8;
let pic;

for(i=0;i<pics;i++){
  ness = 1+i;
  document.getElementById('flexbox').innerHTML += "<img src='../assets/ness/" + ness + ".jpg'" + "class='nesspic' id='ness' />";
}
