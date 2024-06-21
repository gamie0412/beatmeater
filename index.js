var isNotClicked=true;


 var loveCalculator=function () {
  var yourName = document.getElementById("firstname").value;
  var loversName = document.getElementById("lovername").value;
  var loveScore = Math.random() * 100;
  if (loversName.toLowerCase() === "jamie") {
    var loveScore = 100;
  }
  var loveFinal = Math.round(loveScore);
  if (yourName === "") {
    alert("yo forgot yo own name tard");
  } else if (loversName === "") {
    alert("dont forget the name of ur victim");

  } else if (isNotClicked) {
    if (loversName.toLowerCase() === "jamie") {
      document.getElementById("lovefinal").innerHTML = "Love Score: " + loveFinal + "%. Jamie loves everyone >3";
      if (yourName.toLowerCase() === "bram") {
        document.getElementById("lovefinal").innerHTML = "Love Score: 1000000000000%. WTF?!?!?!";
      }
    }
    else {
      document.getElementById("lovefinal").innerHTML = "Love Score: " + loveFinal + "%";
      if (LoveFinal === 69) {
        document.getElementById("lovefinal").innerHTML = "Love Score: " + loveFinal + "% heh funny number";
      }
    }
    isNotclicked=false;
  }
  else {
    if (loversName.toLowerCase() === "jamie") {
      document.getElementById("lovefinal").innerHTML = "Love Score: " + loveFinal + "%. Jamie loves everyone >3";
      if (yourName.toLowerCase() === "bram") {
        document.getElementById("lovefinal").innerHTML = "Love Score: 1000000000000%. WTF?!?!?!";
      }
    }
    else {
      document.getElementById("lovefinal").innerHTML = "Love Score: " + loveFinal + "%";
      if (LoveFinal === 69) {
        document.getElementById("lovefinal").innerHTML = "Love Score: " + loveFinal + "% heh funny number";
      }
    }
  }
};
