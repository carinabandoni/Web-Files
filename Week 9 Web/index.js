let days = ["Look1", "Look2", "Look3"];
let image = ["Look1.jpg", "Look3.jpg", "Look2.jpg"];
let prevlooks;

for(i=0;i<document.getElementsByClassName("looks").length;i++){
  document.getElementsByClassName("looks")[i].innerHTML = "<h2>" + days[i] + "</h2>";
  document.getElementsByClassName("looks")[i].addEventListener("click", setActive, false);
  document.getElementsByClassName("looks")[i].id = days[i];
}

document.getElementById("Look1").classList.toggle('active');
document.getElementById("image").innerHTML = "<img src='assets/" + image[0] + "' >";
function setActive(e){


  prevlooks = document.getElementsByClassName("active")[0].id;
  if(prevlooks != undefined){
    document.getElementById(prevlooks).classList.toggle("active");
    document.getElementById(prevlooks + "clothes").style.display = "none";
}

  if(e.target.tagName == "H2"){
    e.target.parentNode.classList.toggle("active");

  }else{
    e.target.classList.toggle("active");
  }

  looks = document.getElementsByClassName('active')[0].id;
  console.log(looks);
  document.getElementById(looks + "clothes").style.display = "block";
  document.getElementById("image").innerHTML = "<img src='assets/" + looks + ".jpg' >"

}
