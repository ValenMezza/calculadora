/*function suma(numbers) {
    let num1= document.getElementsByClassName("grid-item");
    num1= addEventListener(onclick()=>{
        console.log("gola");
    })
}
function chau(){
    console.log("chaui");
}
showNumbers=()=>{
    let num1 = document.getElementsByClassName("numbers");
    num1= addEventListener("click",function(){
        console.log("holaaaaaaaaaaaa");
    })
}
showNumbers();

mostrar=()=>{
    console.log("hola");
}

mostrar();
chau()*/
const numberButtons = document.querySelectorAll('.numbers');
const screen = document.getElementById("screen");

// Agrega un event listener a cada botón
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        screen.value+=numberButtons.value;
        console.log(button.value);});
    });