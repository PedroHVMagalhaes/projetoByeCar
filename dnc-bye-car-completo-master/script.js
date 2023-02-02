const MOTO_CARD = [
  {
    title: "Scooter Elétrica Voltz EV1",
    paragraph:
      "O câmbio de 5 marchas da Scooter Elétrica Voltz EV1 oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
    img: "./assets/img-card-1.png",
  },
  {
    title: "Honda CB 500X",
    paragraph:
      "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
    img: "./assets/img-card-2.png",
  },
];

//Resume os Elementos das Li`s 
let liEls = document.querySelectorAll("ul li");
//Resume o elemento do modal
let modalEl = document.querySelector("#modal");

// Qual item da lista que está aparecendo/selecionada no momento
// Quando o index = 0 quem aparece é a Scooter Elétrica Voltz EV1
// Quando o index = 1 quem aparece é a Honda CB 500X
let index = 0;

// Quando show(-1) o index = 0
// Quando show(+1) o index = 1
function show(indexSum) {
  //        0       -1     =  -1
  //        0       +1     =  1
  index = index + indexSum;
  // Math.min(lista_numeros) retorna o menor numero de uma lista de numeros
  // Math.max(lista_numero) retorna o maior numero de uma lista de numero
  // maior_numero =  Math.max(-1 ou 1 , 0) Esquerda = 0 / Direita = 1
  let maior_numero = Math.max(index, 0)
  // menor_numero =  Math.min(0 ou 1,  [liEls.length é o Numero de elementos da minha lista - 1] = 1) 
  // menor_numero = 0 ou 1                            
  let menor_numero = Math.min(maior_numero, liEls.length - 1)
  index = menor_numero;
  //     0 ou 1
  liEls[index].scrollIntoView({ behavior: "smooth" });
  
  // if(indexSum=== -1){
  //   liEls[0].scrollIntoView({ behavior: "smooth" });
  // }
  // if(indexSum=== 1){
  //   liEls[1].scrollIntoView({ behavior: "smooth" });
  // }
}

setInterval(() => {
  // index === (liEls.length - 1)
  if (index === liEls.length - 1) {
    show(index - 2);
  } else {
    show(index + 1);
  }
}, 5000);

function showModal(index) {
  // Limpando o elemento do modal
  modalEl.innerHTML = "";  

  // Pega o objeto pela posição do indice 
  modalEl.innerHTML = ` 
  <div class="modal-card">
    <button onclick="closeModal()">
      <img src="./assets/close-btn.png" alt="close-button" />
    </button>
    <h1>${MOTO_CARD[index].title}</h1>
    <p>
    ${MOTO_CARD[index].paragraph}
    </p>
    <img src="${MOTO_CARD[index].img}" alt="" />
    <button >Quero Assinar!</button>
  </div>
  `;

  // Faz aparecer o Modal
  modalEl.style.visibility = "visible";
}

function closeModal() {
  modalEl.style.visibility = "hidden";
}
