//  for 1st image

var randomNumber1 = Math.floor( Math.random() * 6 ) + 1;

var randomImageNumber1 = "dice" + randomNumber1 + ".png";

var source1 = "images/" + randomImageNumber1;

document.querySelector(".image1").setAttribute( "src" , source1);



//  for 2nd image

var randomNumber2 = Math.floor( Math.random() * 6 ) + 1;

var randomImageNumber2 = "dice" + randomNumber2 + ".png";

var source2 = "images/" + randomImageNumber2;

document.querySelector(".image2").setAttribute( "src" , source2);


if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML="player1 wins";
    
}


else if (randomNumber2 > randomNumber1) {

    document.querySelector("h1").innerHTML="player2 wins";

}

else {

    document.querySelector("h1").innerHTML="draw";

}