const foto1 = document.querySelector("#fotoOverMij")

function draai() {
    foto1.style.transform = "rotate(90deg)"
}

foto1.addEventListener("click", draai)

const fotoOvermij2 = document.querySelector("#fotoOvermij2")

function del()  {
    fotoOvermij2.style.transform = "blue"

fotoOvermij2.addEventListener("click", blue)
}




function suprise() {
    console.log("suprise")
}

function popup() {
    alert("hoi");
}

setInterval(popup, 50000000)

function randombackground() {
    let multicolor = ["red", "blue", "green", "#0077b3"]
    let arrayCount = multicolor.length

    let randnumber = Math.floor(Math.random() * arrayCount)

    document.body.style.backgroundColor = multicolor [randnumber];

}

setInterval(randombackground, 500)

const video = document.querySelector("#video")

function color() {
    skills.style.color = "orange"
}



function chanceimage() {
    alert("Dit werkt")

}
const bal = document.querySelector("#bal")
bal.addEventListener("click",chanceimage)

function popup3(){
    alert("desta");
}

document.addEventListener("scroll",popup3)
}
console.log ("desta");

const sumbit = document.querySelector("#sumbit")

function changecolor(){
    document.body.style.backgroundColor= "blue"

sumbit.addEventListener("click,changecolor")}
