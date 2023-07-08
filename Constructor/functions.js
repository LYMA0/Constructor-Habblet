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
        //avatarElement.style.backgroundImage = `url("https://avatar.habbletxd.com.br/?user=${nickname}&action=std,crr=&crr=,drk=&drk=&size=b&head_direction=2&direction=2&gesture=std&headonly=0&effect=${i}")`; outro metodo que pode ser utilizado porem não consegue aplicar em todos os avatares no personagem.
        if (i <= 214) {
            avatarElement.style.backgroundImage = `url("https://imager.blet.in/habblet-imaging/avatarimage?figure=${avatar}&direction=4&head_direction=4&img_format=png&effect=${i}")`;
        } else if (i >= 215) {
            let y = i;
            y = y + 285;
            if (y == 500 || y == 501) {
                avatarElement.style.backgroundImage = `url("https://imager.blet.in/habblet-imaging/avatarimage?figure=${avatar}&direction=4&head_direction=4&img_format=gif&effect=${y}")`;
            } else {
                avatarElement.style.backgroundImage = `url("https://imager.blet.in/habblet-imaging/avatarimage?figure=${avatar}&direction=4&head_direction=4&img_format=png&effect=${y}")`;
            }
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


    // Adicionar evento de clique ao elemento de fechar a janela
    const closeButton = windowNew.querySelector(".nitro-card-header-close");
    closeButton.addEventListener("click", function() {
        windowNew.remove(); // Remover a janela quando o botão de fechar for clicado
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


    // Adicionar evento de clique ao elemento de fechar a janela
    const closeButton = windowNew.querySelector(".nitro-card-header-close");
    closeButton.addEventListener("click", function() {
        windowNew.remove(); // Remover a janela quando o botão de fechar for clicado
        windowOpenedHanditem = false;
        windowElementHanditem = null;
    });

    const input = document.getElementById("search-input-handitem");
    const type = input.id;
    input.addEventListener("input", function() {
        search(type);
    });
}

function search(valor) {
    let input, filter, divs;

    if(valor == "search-input-enable"){
        input = document.getElementById("search-input-enable");
        filter = input.value.toLowerCase();
        divs = document.getElementsByClassName("custom-previw-2-enable");
    }
    else if(valor == "search-input-handitem"){
        input = document.getElementById("search-input-handitem");
        filter = input.value.toLowerCase();
        divs = document.getElementsByClassName("custom-previw-2-handitem");
    }

    for (let i = 0; i < divs.length; i++) {
        let div = divs[i];
        let children = div.getElementsByClassName("d-inline text-black");
        let nome = children[0].textContent.toLowerCase();

        if (nome.includes(filter)) {
            div.style.display = "flex";
        } else {
            div.style.display = "none";
        }
    }
}

function createLinkButton() {

};

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
    const urlRegex = /(?:^|\s)(\S+\.\S{2,}|www\.\S{2,})(?:\s|$)/gi;
    const urls = text.match(urlRegex);

    if (urls) {
        // Remove espaços em branco extras dos URLs encontrados
        const cleanedUrls = urls.map(url => url.trim());
        return cleanedUrls;
    }

    return [];
}


function shortener() {
    const userMission = document.querySelector("#root > div > div.animate__animated > div > div.w-100.h-100 > div.d-flex.flex-column.gap-2.align-items-end.nitro-infostand-container > div > div > div.d-flex.flex-column.gap-1.motto-container > div > div > div")
        .textContent;

    const links = extractLinksFromString(userMission);
    if (links.length > 0) {
        // Abre cada link em uma nova aba com o protocolo "https://"
        links.forEach(link => {
            if (!link.startsWith("http://www.") && !link.startsWith("https://www.")) {
                link = "https://" + link;
            }
            window.open(link, "_blank");
        });
    } else {
        // Nenhum link encontrado
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