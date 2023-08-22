// Removendo anúncios e player da rádio
removeAd();

//Nickname do usuario que sera utilizado na lista de enable e handitem
var getNickname = localStorage.getItem("nickname");
const nickname = getNickname;

var getAvatar = localStorage.getItem("avatar");
const avatar = getAvatar;


// Criando novos botõtes no menu
waitForElm("#root > div > div.animate__animated > div > div.d-flex.gap-2.align-items-center.justify-content-between.nitro-toolbar.py-1.px-3 > div:nth-child(1) > div.d-flex.gap-2.align-items-center")
    .then(element => {
        const div = document.querySelector("#root > div > div.animate__animated > div > div.d-flex.gap-2.align-items-center.justify-content-between.nitro-toolbar.py-1.px-3 > div:nth-child(1) > div.d-flex.gap-2.align-items-center");
        // Criar o primeiro elemento div
        const imageSrc1 = chrome.runtime.getURL("assets/constructor.png");
        const createdDiv1 = document.createElement("div");
        createdDiv1.classList.add("cursor-pointer", "navigation-item", "icon", "icon-menu-custom", "icon-constructor");
        createdDiv1.innerHTML = `<img src="${imageSrc1}">`;
        div.appendChild(createdDiv1);
        
        // Criar o segundo elemento div
        const imageSrc2 = chrome.runtime.getURL("assets/enable.png");
        const createdDiv2 = document.createElement("div");
        createdDiv2.classList.add("cursor-pointer", "navigation-item", "icon", "icon-menu-custom", "icon-enable");
        createdDiv2.innerHTML = `<img src="${imageSrc2}">`;
        div.appendChild(createdDiv2);
        
        // Criar o terceiro elemento div
        const imageSrc3 = chrome.runtime.getURL("assets/handitem.png");
        const createdDiv3 = document.createElement("div");
        createdDiv3.classList.add("cursor-pointer", "navigation-item", "icon", "icon-menu-custom", "icon-handitem");
        createdDiv3.innerHTML = `<img src="${imageSrc3}">`;
        div.appendChild(createdDiv3);
        
        //Criar o elemento historico div
        const divHistorico = document.querySelector("#root > div > div.animate__animated > div > div.d-flex.gap-2.align-items-center.justify-content-between.nitro-toolbar.py-1.px-3 > div:nth-child(2) > div.d-flex.gap-2");
        const imageHistorico = chrome.runtime.getURL("assets/historico.png");
        const createdHistorico = document.createElement("div");
        createdHistorico.classList.add("cursor-pointer", "navigation-item", "icon", "icon-menu-custom", "icon-historico");
        createdHistorico.innerHTML = `<img src="${imageHistorico}">`;
        divHistorico.appendChild(createdHistorico);
        
        //Corrigindo alinhamentos de elementos
        aling = document.querySelector("#root > div > div.animate__animated > div > div.d-flex.gap-2.align-items-center.justify-content-between.nitro-toolbar.py-1.px-3 > div:nth-child(2) > div.d-flex.gap-2");
        aling.classList.add("align-items-center");
    });

// Variável de controle para rastrear o estado do elemento
let alvoCriado = false;
let profileCriado = false;
let nicknameTarget = null;



// Chamar a função para iniciar a observação de mutações
observarMutacoes();




//Faz com que só possa ser criado uma janela de cada botão
let activeWindow = null;

let windowOpened = false;
let windowElement = null;

let windowOpenedEnable = false;
let windowElementEnable = null;

let windowOpenedHanditem = false;
let windowElementHanditem = null;

let windowOpenedHistoric = false;
let windowElementHistoric = null;


let scrollPositionEnable = 0;
let scrollPositionHanditem = 0;


waitForElm(".icon-menu-custom.icon-constructor")
    .then(element => {
        const button = document.querySelector(".icon-menu-custom.icon-constructor");
        button.addEventListener("click", function() {
            if(!windowOpened || !windowElement) {
                createConstructor();
            }
        });
    });

waitForElm(".icon-menu-custom.icon-enable")
    .then(element => {
        const button = document.querySelector(".icon-menu-custom.icon-enable");
        button.addEventListener("click", function() {
            if(!windowOpenedEnable || !windowElementEnable) {
                createEnable();
            }
        });
    });

waitForElm(".icon-menu-custom.icon-handitem")
    .then(element => {
        const button = document.querySelector(".icon-menu-custom.icon-handitem");
        button.addEventListener("click", function() {
            if(!windowOpenedHanditem || !windowElementHanditem) {
                createHanditem();
            }
        });
    });

waitForElm(".icon-menu-custom.icon-historico")
    .then(element => {
        const button = document.querySelector(".icon-menu-custom.icon-historico");
        button.addEventListener("click", function() {
            if(!windowOpenedHistoric || !windowElementHistoric) {
                createHistoric();
            }
        });
    });