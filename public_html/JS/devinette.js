/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nombre = Math.round(Math.random()*10);
var compteur = 0;
do{
  compteur++;
  var choix = prompt("Veuillez saisir un nombre entre 1 et 10 :");
  if(choix < nombre) alert("Trop petit");
  if(choix > nombre) alert("Trop grand");
}
while(nombre != choix);
switch(compteur){
  case 1 :
      alert ("Génial! " + compteur + " essai");
      break;
  case 2 :
      alert ("Super! " + compteur+ " 2 essais");
      break;
  case 3 :
      alert ("Pas mal! " + compteur+ " 3 essais");
      break;
  default:
      alert ("Gagné! " + compteur+ " 4 essais");
}