// Função para criar o observador de mutação para verificar a criação/remoção do elemento
function observarMutacoes() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                verificarElemento();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

function verificarElemento() {
    // Variaveis de controle (Verifica se a janela está aberta ou fechada)
    let statusJanelaEnable = document.querySelector("#draggable-windows-container > div > div > div.d-flex.position-relative.flex-column.gap-2.align-items-center.justify-content-center.drag-handler.container-fluid.nitro-card-header > div > span");
    let statusJanelaHanditem = document.querySelector("#draggable-windows-container > div > div > div.d-flex.position-relative.flex-column.gap-2.align-items-center.justify-content-center.drag-handler.container-fluid.nitro-card-header > div > span");
    let statusJanelaFlood = document.querySelector("#draggable-windows-container > div > div > div.d-flex.position-relative.flex-column.gap-2.align-items-center.justify-content-center.drag-handler.container-fluid.nitro-card-header > div > span");
    
    // Variaveis de perfil
    const alvo = document.querySelector(".d-flex.align-items-center.py-1.px-2");
    const profile = document.querySelector("#draggable-windows-container > div > div > div.d-flex.overflow-hidden.flex-column.gap-2.container-fluid.content-area.pt-0.pl-0.pr-0 > div.d-flex.align-items-center.profile-bar > div.text-row.w-50.text-truncate");
    const buttonAlvo = document.querySelector("#root > div > div.animate__animated > div > div.w-100.h-100 > div.d-flex.flex-column.gap-2.align-items-end.nitro-infostand-container > div > div > div.d-flex.flex-column.gap-1.motto-container > div > div > div.encurtador-button.cursor-pointer");
    const buttonProfile = document.querySelector("#draggable-windows-container button.btn-hyperlink.mx-2");


    // Variaveis de condições especificas
    const chat = document.querySelector("#toolbar-chat-input-container > div > div.chatinput-container > input");

    const container = document.querySelector("#root > div > div.animate__animated > div > div:nth-child(1) > div > div.container.h-100.py-3.overflow-hidden.landing-widgets > div > div.col-9.h-100.d-flex.flex-column > div.col-12.row.mx-0");

    if(container && !statusContainer){
        statusContainer = true;

        const html = document.createElement('div');
        html.classList.add('widget-slot', 'slot-4', 'col-7');
        html.style.marginTop = '10px';
        html.innerHTML = htmlContainer;
        container.appendChild(html);

        const img = document.querySelector("#root > div > div.animate__animated > div > div:nth-child(1) > div > div.container.h-100.py-3.overflow-hidden.landing-widgets > div > div.col-9.h-100.d-flex.flex-column > div.col-12.row.mx-0 > div:nth-child(5) > div > div.widgetcontainer-image.flex-shrink-0");

        img.style.background = `url(${chrome.runtime.getURL("assets/img_update.png")})`;
        img.style.backgroundRepeat = 'no-repeat';
    }
    if(!container && statusContainer === true){
        statusContainer = false;
    }

    if(profile != null && buttonProfile == null){
        type = 2;
        profileCriado = true;
        createProfileButton(type);
    }
    if(alvo != null && buttonAlvo == null){
        type = 1;
        alvoCriado = true;
        createProfileButton(type);
    }

    if(!statusJanelaEnable){
        statusEnable = true;
    }
    if(!statusJanelaHanditem){
        statusHanditem = true;
    }
    if(!statusJanelaFlood){
        statusFlood = true;
    }
    if(!statusHistoric){
        statusHistoric = true;
    }
    

    if(!chat){
        chatCriado = false;
        let imageClickthrough = chrome.runtime.getURL("assets/clickthroughOFF.png");
        let img = document.querySelector("#root > div > div.animate__animated > div > div.d-flex.gap-2.align-items-center.justify-content-between.nitro-toolbar.py-1.px-3 > div:nth-child(2) > div.d-flex.gap-2 > div.cursor-pointer.navigation-item.icon.icon-menu-custom.icon-clickthrough > img");
        img.src = imageClickthrough;
        buttonClickthrough = false;
    }
}

//removeAnuncio
function removerAnuncio() {
    //Player da rádio
    const area_player = document.querySelector("#area_player");
    if(area_player){
        area_player.remove();
    }

    //Placa de ADS HABBO
    const ad1 = document.querySelector("#ads1");
    const ad2 = document.querySelector("#ads2");
    if(ad1 && ad2){
        ad1.remove();
        ad2.remove();
    }    

    setTimeout(function() {
        //Anuncios com tag INS
        var elementosIns = document.querySelectorAll('ins');
        elementosIns.forEach(function(elemento) {
            elemento.remove(); // Remove o elemento <ins> atual
        });

        const body = document.body;
        if(body.style.paddingBottom !== "0px"){
            body.style.padding = "0px";
        }
    }, 2000);
}

// Desenvolvendo
function carregarImagemAvatar(avatars, type){
    avatars.classList.add("custom-previw", "justify-content-between");

    if(type == 0){
        for (let i = 0; i < enables.length; i++) {
            const enable = enables[i];
    
            let div2 = document.createElement("div");
            div2.classList.add("custom-previw-2-enable");
    
            let divNome = document.createElement("div"); //mudar para divNome depois
            divNome.classList.add("d-inline", "text-black");
            divNome.innerHTML = enable.nome;
    
            let divId = document.createElement("div");
            divId.classList.add("d-inline", "text-black");
            divId.innerHTML = enable.id;
    
            let divStatus = document.createElement("div");
            divStatus.classList.add("d-inline", "text-black");
            divStatus.innerHTML = enable.status;
    
            let div4 = document.createElement("div");
            div4.classList.add("avatar-user");
    
            let div5 = document.createElement("div");
            div5.classList.add("avatar-user-previw", "avatar-enable");
    
            avatars.appendChild(div2);
            div2.appendChild(divNome);
            div2.appendChild(divId);
            div2.appendChild(divStatus);
            div2.appendChild(div4);
            div4.appendChild(div5);
    
            if (enable.id == 193 || enable.id == 194 || enable.id == 195 || enable.id == 500 || enable.id == 501) {
                div5.style.backgroundImage = `url("https://cdn.habbix.ws/habblet-imaging/avatarimage?figure=${avatar}&direction=4&head_direction=4&img_format=gif&effect=${enable.id}")`;
            }
            else {
                div5.style.backgroundImage = `url("https://cdn.habbix.ws/habblet-imaging/avatarimage?figure=${avatar}&direction=4&head_direction=4&img_format=png&effect=${enable.id}")`;
            }
        }
    }
    else
    {
        for (let i = 0; i < handitems.length; i++) {
            const handitem = handitems[i];

            let div2 = document.createElement("div");
            div2.classList.add("custom-previw-2-handitem");

            let divNome = document.createElement("div"); //mudar para divNome depois
            divNome.classList.add("d-inline", "text-black");
            divNome.innerHTML = handitem.nome;

            let divId = document.createElement("div");
            divId.classList.add("d-inline", "text-black");
            divId.innerHTML = handitem.id;

            let divStatus = document.createElement("div");
            divStatus.classList.add("d-inline", "text-black");
            divStatus.innerHTML = handitem.status;

            let div4 = document.createElement("div");
            div4.classList.add("avatar-user");

            let div5 = document.createElement("div");
            div5.classList.add("avatar-user-previw", "avatar-handitem");

            avatars.appendChild(div2);
            div2.appendChild(divNome);
            div2.appendChild(divId);
            div2.appendChild(divStatus);
            div2.appendChild(div4);
            div4.appendChild(div5);

            div5.style.backgroundImage = `url("https://cdn.habbix.ws/habblet-imaging/avatarimage?figure=${avatar}&action=std,crr=${handitem.id}&crr=${handitem.id},drk=avatar%7D&direction=4&head_direction=4&img_format=png$crr=1")`;
        }
    }
    return avatars;
}

// Esperar elemento ser criado
function esperarElemento(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

// Criar elementos no menu do jogo (novos botoes)
function criarBotao(iconImg, iconClass, menuDiv){
    const imageSorce = chrome.runtime.getURL(iconImg);
    const criarDiv = document.createElement("div");
    criarDiv.classList.add("cursor-pointer", "navigation-item", "icon", "icon-menu-custom", iconClass);
    criarDiv.innerHTML = `<img src="${imageSorce}">`;
    menuDiv.appendChild(criarDiv);
}

// Criar janela definia pelo botão clicado
function criarJanela(janela) {
    if (janela) {
        const divAlvo = document.getElementById("draggable-windows-container");
        const novaJanela = document.createElement("div");
        novaJanela.classList.add("position-absolute", "draggable-window");
        const tam = 409
        novaJanela.setAttribute("style", `z-index: ${tam}; top: calc(30vh - 110px); left: calc(50vw - 137.5px); transform: translate(0px, 0px); visibility: visible;`);

        if (janela == "Enable") {
            criandoElementoEnable(novaJanela, divAlvo);
        }
        else if (janela == "Handitem"){
            criandoElementoHanditem(novaJanela, divAlvo);
        }
        else if (janela == "Flood"){
            criandoElementoFlood(novaJanela, divAlvo);
        }
        else if (janela == "Historic"){
            criandoElementoHistoric(novaJanela, divAlvo);
        }
    }
}

// Transforma a janela arrastavel para qualquer lugar da tela.
function janelaArrastavel(element) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    // Adicione um manipulador de eventos de mouse para o cabeçalho da div
    const header = element.querySelector("#draggable-windows-container > div > div > div.d-flex.position-relative.flex-column.gap-2.align-items-center.justify-content-center.drag-handler.container-fluid.nitro-card-header");
    header.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Obtenha a posição inicial do cursor
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // Chame a função sempre que o cursor se mover
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Calcule a nova posição do cursor
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Defina a nova posição do elemento
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // Pare de arrastar quando o botão do mouse for liberado
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Executa o comando via chat
function executarComando(string, value) {
    const chat = document.querySelector("#toolbar-chat-input-container > div > div.chatinput-container > input");
    if(!chat){
        return;
    }
    const inputTarget = document.querySelector("#toolbar-chat-input-container > div > div.chatinput-container > input");
    inputTarget.value = `:${string} ${value}`;
    console.log(inputTarget.value);
    const keyboardEvent = new KeyboardEvent('keydown', {
        code: 'Enter',
        key: 'Enter',
        charCode: 13,
        keyCode: 13,
        view: window,
        bubbles: true
    });
    inputTarget.dispatchEvent(keyboardEvent);

    //TriggerEnter(inputTarget);
    inputTarget.value = "";
    inputTarget.parentElement.dataset.value = "";
}

// Acionador do enter via chat
function TriggerEnter(element) {
    console.log(element);
    const event = new KeyboardEvent("keydown", {
        code: "Enter",
        tecla: "Enter",
        charCode: 13,
        keyCode: 13,
        view: window,
        bubbles: true,
    });
    element.dispatchEvent(event);
}

function teclaFlood(){
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        // Verifica se a tecla pressionada é uma tecla de função (F1 a F12)

        for(let i = 1; i <= 12; i++){
            if (name === `F${i}`) {
                if(defaultKeyBrowser === false){
                    event.preventDefault(); // Impede o comportamento padrão apenas para F1 a F12
                }
                executarComandoFlood(tecla[i]);
            }
        }
    }, false);
}

// Executando flood
function executarComandoFlood(string) {
    //alert(string);
    const inputTarget = document.querySelector("#toolbar-chat-input-container > div > div.chatinput-container > input");
    inputTarget.value = `${string}`;
    const keyboardEvent = new KeyboardEvent('keydown', {
        code: 'Enter',
        key: 'Enter',
        charCode: 13,
        keyCode: 13,
        view: window,
        bubbles: true
    });
    inputTarget.dispatchEvent(keyboardEvent);
    //TriggerEnter(inputTarget);
    inputTarget.value = "";
    inputTarget.parentElement.dataset.value = "";
}

// Barra de procura da lista de enable e handitem
function barraDeProcura(valor) {
    let input, filter, divs;

    if (valor == "search-input-enable") {
        input = document.getElementById("search-input-enable");
        filter = input.value.toLowerCase();
        divs = document.getElementsByClassName("custom-previw-2-enable");
    } else if (valor == "search-input-handitem") {
        input = document.getElementById("search-input-handitem");
        filter = input.value.toLowerCase();
        divs = document.getElementsByClassName("custom-previw-2-handitem");
    } else if (valor == "search-input-historic") {
        input = document.getElementById("search-input-historic");
        filter = input.value.toLowerCase();
        divs = document.getElementsByClassName("user-list");
    }
    for (let i = 0; i < divs.length; i++) {
        let div = divs[i];

        if (valor == "search-input-handitem" || valor == "search-input-enable") {
            let children = div.getElementsByClassName("d-inline text-black");
            let nome = children[0].textContent.toLowerCase();

            if (nome.includes(filter)) {
                div.style.display = "flex";
            } else {
                div.style.display = "none";
            }
        } else if (valor == "search-input-historic") {
            let children = div.getElementsByClassName("name-user-list");
            let nome = children[0].textContent.toLowerCase();

            if (nome.includes(filter)) {
                div.style.display = "flex";
            } else {
                div.style.display = "none";
            }
        }
    }
}


const domainMappings = {
    "ayo.so": ["ay.so", "ao.so", "yo.so", "ayo.s", "ayo.o"],
    "fwck.me": ["fwc.me", "fck.me", "fwk.me", "fwck.m", "fwck.e", "wck.me"],
    "abre.ai": ["abr.ai", "abe.ai", "are.ai", "bre.ai", "abre.i", "abre.a"]
    // Adicione mais domínios e variações conforme necessário
};

// Corrigir erro de links quebrados que são proibidos
function autoCompleteDomain(url) {
    const domainKeys = Object.keys(domainMappings);

    for (const domain of domainKeys) {
        const variations = domainMappings[domain];
        for (const variation of variations) {
            if (url.includes(variation)) {
                return url.replace(variation, domain);
            }
        }
    }

    return url;
}

// realizar o regex e a limpesa da bio pra pegar o link
function extractLinksFromString(text) {
    const urlRegex = /(?:https?:\/\/)?(?:www\.)?(\S+\.\S{2,})/gi;
    const matches = text.matchAll(urlRegex);
    const urls = [];

    for (const match of matches) {
        const originalUrl = match[1];
        const cleanedUrl = originalUrl.trim();
        const correctedUrl = autoCompleteDomain(cleanedUrl);
        urls.push(correctedUrl);
    }

    if (urls.length > 0) {
        return urls;
    }

    return [];
}



// Abre o link em uma nova janela
function shortener(getUserLink, userName, userAvatar) {
    const links = extractLinksFromString(getUserLink);
    if (links.length > 0) {

        links.forEach(link => {
            if (!link.startsWith("http://") && !link.startsWith("https://")) {
                link = "https://" + link;
            } else if (link.startsWith("www.")) {
                link = "https://" + link;
            }
            let userLink = link;
            const user = {
                avatar: userAvatar,
                name: userName,
                link: userLink
            };
            historicData.push(user); // Adicionar os dados do usuário ao histórico global
            window.open(link, "_blank");
        });
    } else {
        alertError();
    }
}

// Cria o botão para abrir encurtador de link
function createProfileButton(type){
    if(type == 1){//Target
        const description = document.querySelector("#root > div > div.animate__animated > div > div.w-100.h-100 > div.d-flex.flex-column.gap-2.align-items-end.nitro-infostand-container > div > div > div.d-flex.flex-column.gap-1.motto-container > div > div");
        const image = chrome.runtime.getURL("assets/target.png");
        const div = document.createElement("div");
        div.classList.add("encurtador-button", "cursor-pointer");
        div.style.backgroundImage = `url("${image}")`;
        description.appendChild(div);
        div.addEventListener("click", function(){
            let getUserAvatar = document.querySelector("#root > div > div.animate__animated > div > div.w-100.h-100 > div.d-flex.flex-column.gap-2.align-items-end.nitro-infostand-container > div > div > div:nth-child(2) > div.d-flex.gap-1 > div.d-flex.w-100.flex-column.gap-2.body-image > div");
            let urlAvatar = getComputedStyle(getUserAvatar);
            let userAvatar = urlAvatar.backgroundImage;
    
            //pegando o nome do alvo
            let getUserName = document.querySelector("#root > div > div.animate__animated > div > div.w-100.h-100 > div.d-flex.flex-column.gap-2.align-items-end.nitro-infostand-container > div > div > div:nth-child(1) > div.d-flex.align-items-center.justify-content-between > div > div.d-inline.text-white.fw-bold.small.text-wrap.goldfish");
            let userName = getUserName.textContent;
    
    
            //pegando a mission do alvo
            let getUserMission = document.querySelector("#root > div > div.animate__animated > div > div.w-100.h-100 > div.d-flex.flex-column.gap-2.align-items-end.nitro-infostand-container > div > div > div.d-flex.flex-column.gap-1.motto-container > div > div > div");
            let userMission = getUserMission.textContent;
    
            //Realizando alterações na mission para coleta de link
            shortener(userMission, userName, userAvatar);
        });
        const mySelf = document.querySelector("#root > div > div.animate__animated > div > div.w-100.h-100 > div.d-flex.flex-column.gap-2.align-items-end.nitro-infostand-container > div > div > div:nth-child(1) > div.d-flex.align-items-center.justify-content-between > div > div.d-inline.text-white.fw-bold.small.text-wrap.goldfish");
        if(mySelf.textContent == nickname){
            const editWidth = document.querySelector("#root > div > div.animate__animated > div > div.w-100.h-100 > div.d-flex.flex-column.gap-2.align-items-end.nitro-infostand-container > div > div > div.d-flex.flex-column.gap-1.motto-container > div > div > div.d-flex.flex-grow-1.align-items-center.motto-content > div");
            editWidth.style = 'width: 115px !important';
        }
        else{
            const editWidth = document.querySelector("#root > div > div.animate__animated > div > div.w-100.h-100 > div.d-flex.flex-column.gap-2.align-items-end.nitro-infostand-container > div > div > div.d-flex.flex-column.gap-1.motto-container > div > div > div.w-100.cursor-pointer.d-inline.text-white.text-wrap.text-break.goldfish");
            editWidth.style = 'width: 95% !important';
        }

    }
    else if(type == 2){//Profile

        // Cria um elemento de botão
        let button = document.createElement("button");

        // Adiciona os atributos e classes ao botão
        button.setAttribute("type", "button");
        button.setAttribute("class", "btn btn-hyperlink mx-2");

        // Adiciona o texto "Mensagem" ao botão
        button.appendChild(document.createTextNode("Link"));

        // Obtém o contêiner onde o botão será inserido
        let container = document.querySelector("#draggable-windows-container > div > div > div.d-flex.overflow-hidden.flex-column.gap-2.container-fluid.content-area.pt-0.pl-0.pr-0 > div.d-flex.align-items-center.position-relative > div.profile-cover.overflow-hidden.w-100.d-flex.align-items-end.justify-content-end > div.d-flex.position-absolute.align-items-center.profile-actions");

        // Adiciona o botão ao contêiner
        container.appendChild(button);

        // Obtém o primeiro elemento filho do contêiner
        //let firstChild = container.firstChild;

        //container.insertBefore(button, firstChild);
   
        
        button.addEventListener("click", function () {
            //pegando o avatar do alvo
            let getUserAvatar = document.querySelector("#draggable-windows-container > div > div > div.d-flex.overflow-hidden.flex-column.gap-2.container-fluid.content-area.pt-0.pl-0.pr-0 > div.d-flex.align-items-center.profile-details.w-100 > div > div.avatar-image.profile-look-part");
            let urlAvatar = getComputedStyle(getUserAvatar);
            let userAvatar= urlAvatar.backgroundImage;
    
            //pegando o nome do alvo
            let getUserName = document.querySelector("#draggable-windows-container > div > div > div.d-flex.overflow-hidden.flex-column.gap-2.container-fluid.content-area.pt-0.pl-0.pr-0 > div.d-flex.align-items-center.profile-bar > div.d-inline.text-black.username");
            let userName = getUserName.textContent;
    
    
            //pegando a mission do alvo
            let getUserMission = document.querySelector("#draggable-windows-container > div > div > div.d-flex.overflow-hidden.flex-column.gap-2.container-fluid.content-area.pt-0.pl-0.pr-0 > div.d-flex.align-items-center.profile-bar > div.text-row.w-50.text-truncate");
            let userMission = getUserMission.textContent;
    
            shortener(userMission, userName, userAvatar);
        });
    }
}