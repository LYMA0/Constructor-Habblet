// Removendo anúncios e player da rádio
removeAd();

// Criando um novo botão no menu
waitForElm("#root > div > div.animate__animated > div > div.d-flex.gap-2.align-items-center.justify-content-between.nitro-toolbar.py-1.px-3 > div:nth-child(1) > div.d-flex.gap-2.align-items-center").then(element => {
    const div = document.querySelector("#root > div > div.animate__animated > div > div.d-flex.gap-2.align-items-center.justify-content-between.nitro-toolbar.py-1.px-3 > div:nth-child(1) > div.d-flex.gap-2.align-items-center");

    // Criar o primeiro elemento div
    const imageSrc1 = chrome.runtime.getURL("assets/constructor.png");
    const createdDiv1 = document.createElement("div");
    createdDiv1.classList.add("cursor-pointer", "navigation-item", "icon", "icon-menu-custom", "icon-constructor");
    createdDiv1.innerHTML =`<img src="${imageSrc1}">`;
    div.appendChild(createdDiv1);

    // Criar o segundo elemento div
    const imageSrc2 = chrome.runtime.getURL("assets/enable.png");
    const createdDiv2 = document.createElement("div");
    createdDiv2.classList.add("cursor-pointer", "navigation-item", "icon", "icon-menu-custom", "icon-enable");
    createdDiv2.innerHTML =`<img src="${imageSrc2}">`;
    div.appendChild(createdDiv2);

    // Criar o terceiro elemento div
    const imageSrc3 = chrome.runtime.getURL("assets/handitem.png");
    const createdDiv3 = document.createElement("div");
    createdDiv3.classList.add("cursor-pointer", "navigation-item", "icon", "icon-menu-custom", "icon-handitem");
    createdDiv3.innerHTML =`<img src="${imageSrc3}">`;
    div.appendChild(createdDiv3);
});


let windowOpened = false;
let windowElement = null;
waitForElm(".icon-menu-custom.icon-constructor").then(element => {
        const button = document.querySelector(".icon-menu-custom.icon-constructor");
        button.addEventListener("click", function(){
            if (!windowOpened || !windowElement) {
                createdWindow();
            }
        });
});

waitForElm(".icon-menu-custom.icon-enable").then(element => {
    const button = document.querySelector(".icon-menu-custom.icon-enable");
    button.addEventListener("click", function(){
        alert("Essa função está em desenvolvimento.\nVerifique se a extensão já foi atualizada, para saber se já se encontra disponível.");
    });
});

waitForElm(".icon-menu-custom.icon-handitem").then(element => {
    const button = document.querySelector(".icon-menu-custom.icon-handitem");
    button.addEventListener("click", function(){
        alert("Essa função está em desenvolvimento.\nVerifique se a extensão já foi atualizada, para saber se já se encontra disponível.");
    });
});
