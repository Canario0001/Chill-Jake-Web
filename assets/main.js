console.log("Te peguei hacker safado! N\u00e3o mexa com meu Jake.");
document.getElementById("batata").innerHTML = "Parab\u00e9ns por conseguir ler isso.";
var butao = document.createElement("button");
butao.innerHTML = "Segredinho";
var vid = document.getElementsByTagName("body")[0];
vid.appendChild(butao);
butao.addEventListener ("click", function () {
 alert("Quer dinheiro? Aperta Enter e depois F11. Não pressione F11 duas vezes ou você vai perder o dinheiro.")});