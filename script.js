//var corretos = [10, 7, 3];

const listaImgs = ["./imgs/interrogacao.png",
"./imgs/interrogacao.png",
"./imgs/interrogacao.png",
"./imgs/interrogacao.png"];


function criarBlocos(){

   //const inputQuantidade = document.querySelector("#iptQuantidade");
   //const qtd = inputQuantidade.value;

   const jogo = document.querySelector("#jogo");
   jogo.innerHTML = "";

   const bttGerar = document.querySelector("#bttGerar");
   bttGerar.innerHTML = "Reiniciar";
   bttGerar.onclick = function () {
     alert("Esse jogo esta sendo reiniciado ");
     criarBlocos();
   } ;

    var corretos = Array.from({length: 1}, () => Math.floor(Math.random(4) * (5)));
    var cartas = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20];
   var cartas = numerosCartas();
  // cartas = shuffle(cartas);//
    console.log(numerosCartas());
   
   let gtc = "";
   let codCell = 0;
   for (let c=0; c<4*5; c++){
       
       for (let k = 0; k<1; k++){
           const bloco = document.createElement("div");
           bloco.classList.add('box');
           bloco.value = cartas[codCell];
           bloco.innerHTML = "<span class='infoBloco'>"+bloco.value+"</span>";
           bloco.style.backgroundImage = "url('./imgs/interrogacao.png')";
           bloco.style.backgroundSize = "contain";
           
           bloco.setAttribute("id", k);
           // bloco.onclick = function (){alert("Olá mundo")};
           
           // bloco.addEventListener("click", cellClickHandler)
           bloco.addEventListener("click", function() {
               if (corretos.includes(this.value)){
                   this.style.backgroundColor = "green";
                   alert("Parabéns você ganhou!!!");
                   document.location.reload(true);  
               }else{
                   this.style.backgroundColor = "red";
               }
                    
               // this.backgroundImage = listaImgs[this.value];

               
               spanClicado = document.querySelector("#spanClicado");
               spanClicado.innerHTML = this.value; 
             });

           bloco.addEventListener("mouseover", function() {
               this.style.border = "3px solid orange";
             });  

           bloco.addEventListener("mouseout", function() {
               this.style.border = "";
             });  
           
           jogo.appendChild(bloco);

           codCell++;
       }    
       // const quebraLinha = document.createElement("br");
       // jogo.appendChild(quebraLinha);
       gtc = gtc + " auto";
   }

   function bttGerarHandler(){
     alert("Esse jogo foi reiniciado");
   }

   // document.querySelectorAll(".box").forEach(cell => {
   //     cell.addEventListener("click", cellClickHandler)
   // });

   // function cellClickHandler(){
   //     alert("OI turma");
   // }
   
   // function cellClickHandler(e){
   //     // e.target.classList.toggle("green")
   //     alert(e.target.value);
   // }

   jogo.style.gridTemplateColumns = gtc;

}



//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
   let currentIndex = array.length,  randomIndex;
 
   // While there remain elements to shuffle.
   while (currentIndex != 0) {
 
     // Pick a remaining element.
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex--;
 
     // And swap it with the current element.
     [array[currentIndex], array[randomIndex]] = [
       array[randomIndex], array[currentIndex]];
   }
 
   return array;
 }


function numerosCartas(q){

 const array = [];
 var j = 0;
 for (let valor=0; valor<4*5; valor++){
   array[j] = valor;
   j = j +1;

 }
 return array;
}
