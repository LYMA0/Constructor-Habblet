//________________________1¶¶¶¶_____________________
//_______________________1¶__¶¶¶¶___________________
//_______________________¶1___1¶¶¶__________________
//_______________________¶1____11¶¶_________________
//_______________________¶1_____11¶1________________
//___________1111111_____¶1______¶1¶________________
//________1¶¶111111¶¶¶¶1_¶1______11¶¶_______________
//________¶¶¶111______1¶¶¶1_______¶1¶_______________
//_________1¶¶¶¶¶¶¶1_____¶¶_______¶1¶1______________
//_____________1¶¶¶¶¶1___1¶_______11¶¶______________
//________________¶¶1¶1__1¶_______11¶¶______________
//_________________1¶_¶___¶________11¶______________
//__________________¶¶1¶__¶________11¶______________
//___________________¶_¶1_¶________11¶11111_________
//___________________1¶_¶_¶________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1_
//____________________¶1¶¶¶1______¶1111111¶11¶___1¶_
//___________________1111111¶¶__1¶111_11¶11¶_¶1___¶1
//________________1¶1111111¶1¶¶1¶_¶1_11¶___1¶1¶___¶1
//_____________11¶¶_1¶1_____1_¶¶_¶1_1¶¶_____¶_____¶_
//___________1¶¶¶¶_¶¶¶1_______¶_¶1_1¶¶1_____¶____¶¶_
//__________1¶__¶_¶1__¶¶_____111¶_¶11¶______¶___¶¶__
//__________¶1___1¶___¶¶______1__11¶¶______1¶__¶¶___
//__________¶____¶____¶1_____1¶__¶¶¶1______¶1_¶1____
//_________1¶___¶¶___¶¶_____¶¶__¶1¶¶______1¶_¶1_____
//_________¶¶__¶¶___¶¶_____¶¶___1¶¶_______¶¶1¶______
//_________¶1_¶¶__1¶1____1¶1___¶1¶_________11_______
//________¶¶_¶¶__¶¶____1¶¶___1¶1¶___________________
//_______1¶¶¶1_¶¶1____¶¶1___11¶¶____________________
//________11__¶¶____1¶¶_____¶¶¶_____________________
//___________¶1____¶¶1____¶¶1¶______________________
//__________¶1___1¶1____1¶1¶¶_______________________
//_________¶1___¶¶____111¶¶1________________________
//________¶¶__1¶1___1_1¶¶¶__________________________
//________¶1_1¶1____¶¶¶¶1___________________________
//_______¶¶__1¶__1¶¶¶¶1_____________________________
//____1¶¶1____1¶¶¶¶¶1_______________________________
//1¶¶¶¶1__1¶¶¶¶11___________________________________
//¶¶¶¶_1¶¶1_________________________________________
//1¶1¶¶¶____________________________________________


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
    });

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//Toda essa area fechada é spy profile rever para aplicar funções no arquivo functions.js corretamente posteriormente


// Variável de controle
let elementoFoiEncontrado = false;
let conteudoAtual = '';

// Função para criar a nova div
function criarNovaDiv() {
    // Verifica se a nova div já foi criada anteriormente
    if (elementoFoiEncontrado) {
        return; // Se a div já existe, sai da função
    }

    // Cria uma nova div
    const imageSrc = chrome.runtime.getURL("assets/profile.png");
    const novaDiv = document.createElement('div');
    novaDiv.classList.add("encurtador-button", "cursor-pointer");
    novaDiv.style.backgroundImage = `url("${imageSrc}")`;

    // Obtém a referência para o elemento destino
    const elementoDestino = document.querySelector("#root > div > div.animate__animated > div > div.w-100.h-100 > div.d-flex.flex-column.gap-2.align-items-end.nitro-infostand-container > div > div > div:nth-child(1) > div.d-flex.align-items-center.justify-content-between > div");

    // Insere a nova div no elemento destino
    elementoDestino.appendChild(novaDiv);

    novaDiv.addEventListener("click", function() {
        shortener();
    });

    // Atualiza as variáveis de controle
    elementoFoiEncontrado = true;
    conteudoAtual = elementoObservado.innerHTML;
}

// Função para verificar periodicamente a existência do elemento e alterações em seu conteúdo
function verificarElemento() {
    // Verifica se o elemento existe
    const elementoObservado = document.querySelector("#root > div > div.animate__animated > div > div.w-100.h-100 > div.d-flex.flex-column.gap-2.align-items-end.nitro-infostand-container > div > div > div:nth-child(1) > div.d-flex.align-items-center.justify-content-between > div > div.d-inline.text-white.fw-bold.small.text-wrap.goldfish");

    if (elementoObservado && !elementoFoiEncontrado) {
        // O elemento foi encontrado pela primeira vez, cria a nova div
        criarNovaDiv();
    } else if (elementoObservado && elementoFoiEncontrado) {
        // O elemento foi encontrado novamente, verifica se houve alteração no conteúdo
        if (elementoObservado.innerHTML !== conteudoAtual) {
            // O conteúdo foi alterado, chama a função para criar a nova div novamente
            criarNovaDiv();
        }
    } else if (!elementoObservado) {
        // O elemento não foi encontrado, redefine o estado para permitir que a nova div seja criada novamente
        elementoFoiEncontrado = false;
        conteudoAtual = '';
    }
}

// Chama a função de verificação periodicamente a cada 1 segundo (1000 milissegundos)
setInterval(verificarElemento, 1000);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

//Faz com que só possa ser criado uma janela de cada botão
let activeWindow = null;
let windowOpened = false;
let windowElement = null;
let windowOpenedEnable = false;
let windowElementEnable = null;
let windowOpenedHanditem = false;
let windowElementHanditem = null;

waitForElm(".icon-menu-custom.icon-constructor")
    .then(element => {
        const button = document.querySelector(".icon-menu-custom.icon-constructor");
        button.addEventListener("click", function() {
            if (!windowOpened || !windowElement) {
                createConstructor();
            }
        });
    });

waitForElm(".icon-menu-custom.icon-enable")
    .then(element => {
        const button = document.querySelector(".icon-menu-custom.icon-enable");
        button.addEventListener("click", function() {
            if (!windowOpenedEnable || !windowElementEnable) {
                createEnable();
            }
        });
    });

waitForElm(".icon-menu-custom.icon-handitem")
    .then(element => {
        const button = document.querySelector(".icon-menu-custom.icon-handitem");
        button.addEventListener("click", function() {
            if (!windowOpenedHanditem || !windowElementHanditem) {
                createHanditem();
            }
        });
    });

waitForElm(".icon-menu-custom.icon-historico")
    .then(element => {
        const button = document.querySelector(".icon-menu-custom.icon-historico");
        button.addEventListener("click", function() {
            alert("Opá, essa are-a está em desenvolvimento. Verifique se o Constructor está atualizado corretamente");
        });
    });