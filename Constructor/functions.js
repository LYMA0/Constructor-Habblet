// Removendo anúncios e player da rádio
function removeAd() {
    const area_player = document.querySelector("#area_player");
    const ad1 = document.querySelector("#ad1");
    const ad2 = document.querySelector("#ad2");
    area_player.remove();
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

function createdWindow() {
    if (windowOpened) {
        return; // Retorna se a janela já tiver sido aberta
    }
        const windowPai = document.getElementById("draggable-windows-container");
        const windowNew = document.createElement("div");

        windowNew.classList.add("position-absolute", "draggable-window");

        let zIndex = document.querySelectorAll(".position-absolute.draggable-window");
        const tam = zIndex.length + 1;//ERRO: Pegar lenght esta errado, o correto seria pegar o z-index de outro elemento caso aja um no quertSelector do let zIndex e depois fazer a soma de + 1, caso não ter nenhuma div criada de zIndex seja criado no z-index 401
        windowNew.setAttribute("style", `z-index: ${tam}; top: calc(50vh - 110px); left: calc(50vw - 137.5px); transform: translate(0px, 0px); visibility: visible;`);

        windowNew.innerHTML = html;
        windowPai.appendChild(windowNew);
        windowOpened = true;
        windowElement = windowNew;

        // Tornar a div criada arrastável
        dragElement(windowNew);

        // Criando ação no botão UP
        waitForElm("#enviar-up").then(element => {
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
        waitForElm("#enviar-state").then(element => {
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
        waitForElm("#enviar-spin").then(element => {
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
  