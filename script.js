
var likearr = [9,12,9];

function addLike(id,index) { 
    likearr[index]++;

    var likes = document.querySelector(id);
    likes.innerText = (likearr[index]) + "like(s)";           //como hago para que like empiece a sumar desde el numero escrito en el p (9,12,9)

}



// PRIMER INTENTO DE EJERCICIO 


// // var allLikes = [like, like2, like3];
// var like = 9;
// var like2 = 12;
// var like3 = 9

// var countLikes = document.querySelector("#like-count");

// function addLike(){
//     like++;
//     countLikes.innerText = like + "  like(s)";
// }

// var countLikes2 = document.querySelector("#like-count2");

// function addLike2(){
//     like2++;
//     countLikes2.innerText = like2 + "  like(s)";
// }

// var countLikes3 = document.querySelector("#like-count3");

// function addLike3(){
//     like3++;
//     countLikes3.innerText = like3 + "  like(s)";
// }
