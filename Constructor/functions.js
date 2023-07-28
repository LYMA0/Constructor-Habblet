// Removendo anúncios e player da rádio
function removeAd() {
    const area_player = document.querySelector("#area_player");
    area_player.remove();
    const ad1 = document.querySelector("#ad1");
    const ad2 = document.querySelector("#ad2");
    if (ad1 == null) {
        return;
    }
    ad1.remove();
    ad2.remove();

    const adgoogle = document.querySelectorAll(".adsbygoogle.adsbygoogle-noablate");

    for (let i = 0; i < adgoogle.length; i++) {
        const adevent = adgoogle[i];
        adevent.remove();
    }
}

// Esperar elemento ser criado
function waitForElm(selector) {
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

//
//CONSTRUCTOR
//

function createConstructor() {
    if (windowOpened) {
        return; // Retorna se a janela já tiver sido aberta
    }
    const windowPai = document.getElementById("draggable-windows-container");
    const windowNew = document.createElement("div");

    windowNew.classList.add("position-absolute", "draggable-window");

    //let zIndex = document.querySelectorAll(".position-absolute.draggable-window");
    const tam = 409
    windowNew.setAttribute("style", `z-index: ${tam}; top: calc(50vh - 110px); left: calc(50vw - 137.5px); transform: translate(0px, 0px); visibility: visible;`);

    windowNew.innerHTML = htmlConstructor;
    windowPai.appendChild(windowNew);
    windowOpened = true;
    windowElement = windowNew;

    // Tornar a div criada arrastável
    dragElement(windowNew);

    // Criando ação no botão UP
    waitForElm("#enviar-up")
        .then(element => {
            const inputUp = document.querySelector("#up");
            const strUp = "up";
            const strDsUp = " ";
            const buttonUp = document.querySelector("#enviar-up");
            const buttonDsUp = document.querySelector("#desativar-up");

            buttonUp.addEventListener("click", function() {
                exeCommand(strUp, inputUp.value);
            });
            buttonDsUp.addEventListener("click", function() {
                exeCommand(strUp, strDsUp);
            });
        });

    // Criando ação no botão STATE
    waitForElm("#enviar-state")
        .then(element => {
            const inputState = document.querySelector("#state");
            const strState = "state";
            const strDsState = " ";
            const buttonState = document.querySelector("#enviar-state");
            const buttonDsState = document.querySelector("#desativar-state");

            buttonState.addEventListener("click", function() {
                exeCommand(strState, inputState.value);
            });
            buttonDsState.addEventListener("click", function() {
                exeCommand(strState, strDsState);
            });
        });

    // Criando ação no botão SPIN
    waitForElm("#enviar-spin")
        .then(element => {
            const inputSpin = document.querySelector("#spin");
            const strSpin = "spin";
            const strDsSpin = " ";
            const buttonSpin = document.querySelector("#enviar-spin");
            const buttonDsSpin = document.querySelector("#desativar-spin");

            buttonSpin.addEventListener("click", function() {
                exeCommand(strSpin, inputSpin.value);
            });
            buttonDsSpin.addEventListener("click", function() {
                exeCommand(strSpin, strDsSpin);
            });
        });


    // Adicionar evento de clique ao elemento de fechar a janela
    const closeButton = windowNew.querySelector(".nitro-card-header-close");
    closeButton.addEventListener("click", function() {
        windowNew.remove(); // Remover a janela quando o botão de fechar for clicado
        windowOpened = false;
        windowElement = null;
    });
}

//
//ENABLE
//

function createEnable() {
    const windowPai = document.getElementById("draggable-windows-container");
    const windowNew = document.createElement("div");

    windowNew.classList.add("position-absolute", "draggable-window");

    //let zIndex = document.querySelectorAll(".position-absolute.draggable-window");
    const tam = 409
    windowNew.setAttribute("style", `z-index: ${tam}; top: calc(50vh - 110px); left: calc(50vw - 137.5px); transform: translate(0px, 0px); visibility: visible;`);


    windowNew.innerHTML = htmlEnable;
    windowPai.appendChild(windowNew);

    const divPai = document.querySelector("#enables");
    let div1 = document.createElement("div");
    div1.classList.add("custom-previw", "justify-content-between");
    divPai.appendChild(div1);

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

        div1.appendChild(div2);
        div2.appendChild(divNome);
        div2.appendChild(divId);
        div2.appendChild(divStatus);
        div2.appendChild(div4);
        div4.appendChild(div5);

        const avatarElements = document.querySelectorAll(".avatar-enable");
        let avatarElement = avatarElements[i];
        if (enable.id == 193 || enable.id == 194 || enable.id == 195 || enable.id == 500 || enable.id == 501){
            avatarElement.style.backgroundImage = `url("https://imager.blet.in/habblet-imaging/avatarimage?figure=${avatar}&direction=4&head_direction=4&img_format=gif&effect=${enable.id}")`;
        }
        /*else if (enable.id == 175 || enable.id == 176 || enable.id == 523 || enable.id == 524 || enable.id == 541 || enable.id == 542 || enable.id == 543 || enable.id == 544){

        }*/
        else{
            avatarElement.style.backgroundImage = `url("https://imager.blet.in/habblet-imaging/avatarimage?figure=${avatar}&direction=4&head_direction=4&img_format=png&effect=${enable.id}&frame_num=3")`;
        }
    }

    buttonsEnable = document.querySelectorAll(".custom-previw-2-enable");
    for (let i = 0; i < buttonsEnable.length; i++) {
        let getID = buttonsEnable[i].querySelector(".d-inline.text-black:nth-child(2)");
        const string = "enable";
        buttonsEnable[i].addEventListener("click", function() {
            exeCommand(string, getID.textContent);
        });
    }

    windowOpenedEnable = true;
    windowElementEnable = windowNew;

    // Tornar a div criada arrastável
    dragElement(windowNew);

    document.getElementById("enables").scrollTop = scrollPositionEnable;

    // Adicionar evento de clique ao elemento de fechar a janela
    const closeButton = windowNew.querySelector(".nitro-card-header-close");
    closeButton.addEventListener("click", function() {
        scrollPositionEnable = document.getElementById("enables").scrollTop;
        windowNew.remove();
        windowOpenedEnable = false;
        windowElementEnable = null;
    });

    let input = document.getElementById("search-input-enable");
    const type = input.id;
    input.addEventListener("input", function() {
        search(type);
    });
}

//
//HANDITEM
//

function createHanditem() {
    const windowPai = document.getElementById("draggable-windows-container");
    const windowNew = document.createElement("div");

    windowNew.classList.add("position-absolute", "draggable-window");

    //let zIndex = document.querySelectorAll(".position-absolute.draggable-window");
    const tam = 409
    windowNew.setAttribute("style", `z-index: ${tam}; top: calc(50vh - 110px); left: calc(50vw - 137.5px); transform: translate(0px, 0px); visibility: visible;`);



    windowNew.innerHTML = htmlHanditem;
    windowPai.appendChild(windowNew);

    const divPai = document.querySelector("#handitems");
    let div1 = document.createElement("div");
    div1.classList.add("custom-previw", "justify-content-between");
    divPai.appendChild(div1);

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

        div1.appendChild(div2);
        div2.appendChild(divNome);
        div2.appendChild(divId);
        div2.appendChild(divStatus);
        div2.appendChild(div4);
        div4.appendChild(div5);

        const avatarElements = document.querySelectorAll(".avatar-handitem");
        let avatarElement = avatarElements[i];
        //avatarElement.style.backgroundImage = `url("")`; outro metodo que pode ser utilizado porem não consegue aplicar em todos os avatares no personagem.
        avatarElement.style.backgroundImage = `url("https://imager.blet.in/habblet-imaging/avatarimage?figure=${avatar}&action=std,crr=${handitem.id}&crr=${handitem.id},drk=avatar%7D&direction=4&head_direction=4&img_format=png$crr=1")`;
    }

    buttonsHanditem = document.querySelectorAll(".custom-previw-2-handitem");
    for (let i = 0; i < buttonsHanditem.length; i++) {
        let getID = buttonsHanditem[i].querySelector(".d-inline.text-black:nth-child(2)");
        const string = "handitem";
        buttonsHanditem[i].addEventListener("click", function() {
            exeCommand(string, getID.textContent);
        });
    }

    windowOpenedHanditem = true;
    windowElementHanditem = windowNew;

    // Tornar a div criada arrastável
    dragElement(windowNew);

    document.getElementById("handitems").scrollTop = scrollPositionHanditem;

    // Adicionar evento de clique ao elemento de fechar a janela
    const closeButton = windowNew.querySelector(".nitro-card-header-close");
    closeButton.addEventListener("click", function() {
        scrollPositionHanditem = document.getElementById("handitems").scrollTop;
        windowNew.remove();
        windowOpenedHanditem = false;
        windowElementHanditem = null;
    });

    const input = document.getElementById("search-input-handitem");
    const type = input.id;
    input.addEventListener("input", function() {
        search(type);
    });
}

//
//HISTORIC
//

function createHistoric(){
    const windowPai = document.getElementById("draggable-windows-container");
    const windowNew = document.createElement("div");

    windowNew.classList.add("position-absolute", "draggable-window");

    //let zIndex = document.querySelectorAll(".position-absolute.draggable-window");
    const tam = 409
    windowNew.setAttribute("style", `z-index: ${tam}; top: calc(50vh - 110px); left: calc(50vw - 137.5px); transform: translate(0px, 0px); visibility: visible;`);

    windowNew.innerHTML = htmlHistoric;
    windowPai.appendChild(windowNew);

    // Tornar a div criada arrastável
    dragElement(windowNew);

    windowOpenedHistoric = true;
    windowElementHistoric = windowNew;

    //Remover elemento
    const closeButton = windowNew.querySelector(".nitro-card-header-close");
    closeButton.addEventListener("click", function() {
        windowNew.remove(); // Remover a janela quando o botão de fechar for clicado
        windowOpenedHistoric = false;
        windowElementHistoric = null;
    });

    const divPai = document.querySelector("#historic");
    let ul = document.createElement("ul");
    ul.classList.add("users-custom");
    divPai.appendChild(ul);
  
    // Exibir os dados do histórico global na lista de histórico
    historicData.forEach(data => {
        let divAvatar = document.createElement("div");
        divAvatar.classList.add("avatar-user-list");
        divAvatar.style.backgroundImage = `${data.avatar}`;

        let divName = document.createElement("div");
        divName.classList.add("name-user-list");
        divName.textContent = `${data.name}`;

        let link = document.createElement("a");
        link.classList.add("link-user-list");
        link.href = data.link;
        link.textContent = `${data.link}`;

        let li = document.createElement("li");
        li.classList.add("user-list", "justify-content-around");
        li.appendChild(divAvatar);
        li.appendChild(divName);
        li.appendChild(link);
    
        ul.appendChild(li);
        /*let hr = document.createElement("hr");
        ul.insertAdjacentElement("beforeend", hr);*/
    });

    const input = document.getElementById("search-input-historic");
    const type = input.id;
    input.addEventListener("input", function() {
        search(type);
    });
}

function search(valor) {
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


function makeDraggable(element) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    element.addEventListener("mousedown", (event) => {
        isDragging = true;
        offsetX = event.offsetX;
        offsetY = event.offsetY;
    });

    document.addEventListener("mousemove", (event) => {
        if (isDragging) {
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;
            element.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
}

// Executando comando
function exeCommand(string, value) {
    const inputTarget = document.getElementsByClassName("chat-input")[0];
    inputTarget.value = `:${string} ${value}`;
    TriggerEnter(inputTarget);
    inputTarget.value = "";
    inputTarget.parentElement.dataset.value = "";
}

function TriggerEnter(element) {
    const event = new KeyboardEvent("keydown", {
        code: "Enter",
        key: "Enter",
        charCode: 13,
        keyCode: 13,
        view: window,
        bubbles: true,
    });

    element.dispatchEvent(event);
}

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
    novaDiv.addEventListener("click", function() {//AQUI   
        //pegando o avatar do alvo
        let getUserAvatar = document.querySelector("#root > div > div.animate__animated > div > div.w-100.h-100 > div.d-flex.flex-column.gap-2.align-items-end.nitro-infostand-container > div > div > div:nth-child(2) > div.d-flex.gap-1 > div.d-flex.w-100.flex-column.gap-2.body-image > div");
        let urlAvatar = getComputedStyle(getUserAvatar);
        let userAvatar= urlAvatar.backgroundImage;

        //pegando o nome do alvo
        let getUserName = document.querySelector("#root > div > div.animate__animated > div > div.w-100.h-100 > div.d-flex.flex-column.gap-2.align-items-end.nitro-infostand-container > div > div > div:nth-child(1) > div.d-flex.align-items-center.justify-content-between > div > div.d-inline.text-white.fw-bold.small.text-wrap.goldfish");
        let userName = getUserName.textContent;


        //pegando a mission do alvo
        let getUserMission = document.querySelector("#root > div > div.animate__animated > div > div.w-100.h-100 > div.d-flex.flex-column.gap-2.align-items-end.nitro-infostand-container > div > div > div.d-flex.flex-column.gap-1.motto-container > div > div > div");
        let userMission = getUserMission.textContent;

        //Realizando alterações na mission para coleta de link
        shortener(userMission, userName, userAvatar);
    });

    // Atualiza as variáveis de controle
    elementoFoiEncontrado = true;
    conteudoAtual = elementoObservado.innerHTML;
}

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

function criarNovaDivProfile() {
    // Verifica se a nova div já foi criada anteriormente
    if (elementoFoiEncontradoProfile) {
        return; // Se a div já existe, sai da função
    }

    // Cria uma nova div
    const imageSrc = chrome.runtime.getURL("assets/profile.png");
    const novaDiv = document.createElement('div');
    novaDiv.classList.add("encurtador-button", "cursor-pointer");
    novaDiv.style.backgroundImage = `url("${imageSrc}")`;

    // Obtém a referência para o elemento destino
    const elementoDestino = document.querySelector("#draggable-windows-container > div > div > div.d-flex.overflow-hidden.flex-column.gap-2.container-fluid.content-area > div:nth-child(1) > div.d-flex.flex-column.gap-1.g-col-7.user-container.pe-2 > div.d-flex.gap-2 > div:nth-child(2) > div:nth-child(1)");

    // Insere a nova div no elemento destino
    elementoDestino.appendChild(novaDiv);

    novaDiv.addEventListener("click", function() {

        //pegando o avatar do alvo
        let getUserAvatar = document.querySelector("#draggable-windows-container > div > div > div.d-flex.overflow-hidden.flex-column.gap-2.container-fluid.content-area > div:nth-child(1) > div.d-flex.flex-column.gap-1.g-col-7.user-container.pe-2 > div.d-flex.gap-2 > div.d-flex.flex-column.gap-2.align-items-center.justify-content-center.avatar-container > div");
        let urlAvatar = getComputedStyle(getUserAvatar);
        let userAvatar= urlAvatar.backgroundImage;

        //pegando o nome do alvo
        let getUserName = document.querySelector("#draggable-windows-container > div > div > div.d-flex.overflow-hidden.flex-column.gap-2.container-fluid.content-area > div:nth-child(1) > div.d-flex.flex-column.gap-1.g-col-7.user-container.pe-2 > div.d-flex.gap-2 > div:nth-child(2) > div:nth-child(1) > div.d-inline.text-black.fw-bold");
        let userName = getUserName.textContent;


        //pegando a mission do alvo
        let getUserMission = document.querySelector("#draggable-windows-container > div > div > div.d-flex.overflow-hidden.flex-column.gap-2.container-fluid.content-area > div:nth-child(1) > div.d-flex.flex-column.gap-1.g-col-7.user-container.pe-2 > div.d-flex.gap-2 > div:nth-child(2) > div:nth-child(1) > div.d-inline.text-black.fst-italic.small.text-break");
        let userMission = getUserMission.textContent;

        shortener(userMission, userName, userAvatar);
    });

    // Atualiza as variáveis de controle
    elementoFoiEncontradoProfile = true;
    conteudoAtualProfile = elementoObservadoProfile.innerHTML; 
}

function verificarElementoProfile() {
    // Verifica se o elemento existe
    const elementoObservadoProfile = document.querySelector("#draggable-windows-container > div > div > div.d-flex.overflow-hidden.flex-column.gap-2.container-fluid.content-area > div:nth-child(1) > div.d-flex.flex-column.gap-1.g-col-7.user-container.pe-2 > div.d-flex.gap-2 > div:nth-child(2) > div:nth-child(1) > div.d-inline.text-black.fw-bold");

    if (elementoObservadoProfile && !elementoFoiEncontradoProfile) {
        // O elemento foi encontrado pela primeira vez, cria a nova div
        criarNovaDivProfile();
    } else if (elementoObservadoProfile && elementoFoiEncontradoProfile) {
        // O elemento foi encontrado novamente, verifica se houve alteração no conteúdo
        if (elementoObservadoProfile.innerHTML !== conteudoAtualp) {
            // O conteúdo foi alterado, chama a função para criar a nova div novamente
            criarNovaDivProfile();
        }
    } else if (!elementoObservadoProfile) {
        // O elemento não foi encontrado, redefine o estado para permitir que a nova div seja criada novamente
        elementoFoiEncontradoProfile = false;
        conteudoAtualProfile = '';
    }
}

function dragElement(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

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

function extractLinksFromString(text) {
    const urlRegex = /(?:https?:\/\/)?(?:www\.)?(\S+\.\S{2,})/gi;
    const matches = text.matchAll(urlRegex);
    const urls = [];
  
    for (const match of matches) {
      urls.push(match[1]);
    }
  
    if (urls.length > 0) {
      const cleanedUrls = urls.map(url => url.trim());
      return cleanedUrls;
    }
  
    return [];
  }
  
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
        const user = { avatar: userAvatar, name: userName, link: userLink };
        historicData.push(user); // Adicionar os dados do usuário ao histórico global
        window.open(link, "_blank");
      });
    } else {
      alertError();
    }
  }
  
  

function alertError(){
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="animate__animated" style="">
            <div class="d-flex overflow-hidden gap-2 align-items-center nitro-notification-bubble rounded">
                <div class="d-flex align-items-center justify-content-center bubble-image-container"><img class="no-select" src="https://images.habblet.city/c_images/notifications/hashtag.png" alt="hashtag"></div>
                <div class="d-inline text-white text-wrap">
                ERRO: Link não encontrado.
                </div>
            </div>
        </div>
    `;

    const divPai = document.querySelector("#root > div > div.animate__animated > div > div.nitro-right-side > div > div:nth-child(2)");
    divPai.appendChild(div);

    setTimeout(function() {
        div.classList.add('fade-out');

        setTimeout(function() {
            div.remove();
        }, 2000); // 2 segundos de duração da animação de desaparecimento
    }, 3000); // 3 segundos de espera antes de começar a desaparecer

}