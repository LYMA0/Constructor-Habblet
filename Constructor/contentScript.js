
// Variaveis de controle
let statusConstructor;
let statusEnable;
let statusHanditem;
let statusFlood;
let statusHistoric;

let Clickthrough = false;
let defaultKeyBrowser = false;

let scrollPositionEnable = 0;
let scrollPositionHanditem = 0;

let tecla = [];
let historicData = [];
for(let i = 1; i <= 12; i++){
    tecla[i]  = "";
}

//Nickname do usuario que sera utilizado na lista de enable e handitem
var getNickname = localStorage.getItem("nickname");
const nickname = getNickname;

var getAvatar = localStorage.getItem("avatar");
const avatar = getAvatar;

// Removendo anúncios e player da rádio
removerAnuncio();



//
let avatarEnables = document.createElement("div");
let avatarHanditem = document.createElement("div");
carregarImagemAvatar(avatarEnables, 0);
carregarImagemAvatar(avatarHanditem, 1);

document.querySelector("#draggable-windows-container > div > div > div.d-flex.overflow-hidden.flex-column.gap-2.container-fluid.content-area.pt-0.pl-0.pr-0 > div.d-flex.align-items-center.position-relative > div.profile-cover.overflow-hidden.w-100.d-flex.align-items-end.justify-content-end > div.d-flex.position-absolute.align-items-center.profile-actions")

// Criando novos botõtes no menu esquerdo
esperarElemento("#root > div > div.animate__animated > div > div.d-flex.gap-2.align-items-center.justify-content-between.nitro-toolbar.py-1.px-3 > div:nth-child(1) > div.d-flex.gap-2.align-items-center").then(element => {
    criarBotao("assets/constructor.png", "icon-constructor", element);
    criarBotao("assets/enable.png", "icon-enable", element);
    criarBotao("assets/handitem.png", "icon-handitem", element);
    criarBotao("assets/flood.png", "icon-flood", element);
});

// Criando novos botões no menu direito
esperarElemento("#root > div > div.animate__animated > div > div.d-flex.gap-2.align-items-center.justify-content-between.nitro-toolbar.py-1.px-3 > div:nth-child(2) > div.d-flex.gap-2").then(element => {
    criarBotao("assets/historico.png", "icon-historico", element);
    criarBotao("assets/clickthroughOFF.png", "icon-clickthrough", element);

    const centerIcons = document.querySelector("#root > div > div.animate__animated > div > div.d-flex.gap-2.align-items-center.justify-content-between.nitro-toolbar.py-1.px-3 > div:nth-child(2) > div.d-flex.gap-2");
    centerIcons.classList.add("align-items-center");
});

observarMutacoes(); // Chamar a função para iniciar a observação de mutações

esperarElemento(".icon-menu-custom.icon-constructor").then(element => {
    element.addEventListener("click", function() {
        console.log(statusConstructor);
        if(statusConstructor == true) {
            criarJanela("Constructor");
        }
    });
});

esperarElemento(".icon-menu-custom.icon-enable").then(element => {
    element.addEventListener("click", function() {
        if(statusEnable == true) {
            criarJanela("Enable");
        }
    });
});

esperarElemento(".icon-menu-custom.icon-handitem").then(element => {
    element.addEventListener("click", function() {
        if(statusHanditem == true) {
            criarJanela("Handitem");
        }
    });
});

esperarElemento(".icon-menu-custom.icon-flood").then(element => {
    element.addEventListener("click", function() {
        if(statusFlood == true) {
            criarJanela("Flood");
        }
    });
});

esperarElemento(".icon-menu-custom.icon-historico").then(element => {
    element.addEventListener("click", function() {
        if(statusHistoric == true) {
            criarJanela("Historic");
        }
    });
});

esperarElemento(".icon-menu-custom.icon-clickthrough").then(element => {
    element.addEventListener("click", function() {
        let img = document.querySelector("#root > div > div.animate__animated > div > div.d-flex.gap-2.align-items-center.justify-content-between.nitro-toolbar.py-1.px-3 > div:nth-child(2) > div.d-flex.gap-2 > div.cursor-pointer.navigation-item.icon.icon-menu-custom.icon-clickthrough > img");
        let imgClickthroughON = chrome.runtime.getURL("assets/clickthroughON.png");
        let imgClickthroughOFF = chrome.runtime.getURL("assets/clickthroughOFF.png");
        if(Clickthrough === false){
            executarComando("ct","");
            img.src = imgClickthroughON;
            Clickthrough = true;
        }
        else{
            executarComando("ct","");
            img.src = imgClickthroughOFF;
            Clickthrough = false;
        }
    });
});


teclaFlood(); // Chama a função para flood do F1 ao F12