function criandoElementoEnable(novaJanela, divAlvo){
     novaJanela.innerHTML = htmlEnable;
     divAlvo.appendChild(novaJanela); // Criando a nova janela
     statusEnable = false; // Muda a variavel de controle para poder abrir somente uma janela

     const divEnable = document.querySelector("#enables");
     divEnable.appendChild(avatarEnables);

     const enableButton = document.querySelectorAll(".custom-previw-2-enable");
     for (let i = 0; i < enableButton.length; i++) {
          let getID = enableButton[i].querySelector(".d-inline.text-black:nth-child(2)");
          enableButton[i].addEventListener("click", function() {
               executarComando("enable", getID.textContent);
          });
     }

     const input = document.getElementById("search-input-enable");
     const type = input.id;
     input.addEventListener("input", function() {
          barraDeProcura(type);
     });

     document.getElementById("enables").scrollTop = scrollPositionEnable;

     janelaArrastavel(novaJanela); // Tornar a div criada arrastável
     const closeButton = novaJanela.querySelector(".nitro-card-header-close");
     closeButton.addEventListener("click", function() { // Criando ação de fechar janela
          scrollPositionEnable = document.getElementById("enables").scrollTop;

          // Limpar filtragem do input busca
          const elementos = document.getElementsByClassName("custom-previw-2-enable");
          for (let i = 0; i < elementos.length; i++) {
               elementos[i].style.display = "flex";
          }
          // Limpar a barra de pesquisa
          const input = document.getElementById("search-input-enable");
          input.value = "";

          statusEnable = true;
          novaJanela.remove(); // Remover a janela quando o botão de fechar for clicado
     });
}

function criandoElementoHanditem(novaJanela, divAlvo){
     novaJanela.innerHTML = htmlHanditem;
     divAlvo.appendChild(novaJanela);
     statusHanditem = false;

     janelaArrastavel(novaJanela);

     const divHanditem = document.querySelector("#handitems");
     divHanditem.appendChild(avatarHanditem);

     const enableHanditem = document.querySelectorAll(".custom-previw-2-handitem");
     for (let i = 0; i < enableHanditem.length; i++) {
          let getID = enableHanditem[i].querySelector(".d-inline.text-black:nth-child(2)");
          enableHanditem[i].addEventListener("click", function() {
               executarComando("handitem", getID.textContent);
          });
     }
     
     const input = document.getElementById("search-input-handitem");
     const type = input.id;
     input.addEventListener("input", function() {
          barraDeProcura(type);
     });


     document.getElementById("handitems").scrollTop = scrollPositionHanditem;

     const closeButton = novaJanela.querySelector(".nitro-card-header-close");
     closeButton.addEventListener("click", function() { // Criando ação de fechar janela
          scrollPositionHanditem = document.getElementById("handitems").scrollTop;

          // Limpar filtragem do input busca
          const elementos = document.getElementsByClassName("custom-previw-2-handitem");
          for (let i = 0; i < elementos.length; i++) {
               elementos[i].style.display = "flex";
          }
          // Limpar a barra de pesquisa
          const input = document.getElementById("search-input-handitem");
          input.value = "";

          statusHanditem = true;
          novaJanela.remove(); // Remover a janela quando o botão de fechar for clicado
     });
}

function criandoElementoFlood(novaJanela, divAlvo){
     novaJanela.innerHTML = htmlFlood;
     divAlvo.appendChild(novaJanela);
     statusFlood = false;

     janelaArrastavel(novaJanela);

     let checkbox = document.getElementById("defaultBrowser");

     if(defaultKeyBrowser === false){
          checkbox.checked = false
     }
     else{
          checkbox.checked = true;
     }

     checkbox.addEventListener("change", function (params) {
          if(checkbox.checked){
              defaultKeyBrowser = true;
          }
          else{
              defaultKeyBrowser = false;
          }
     });

     const divFlood = document.querySelector("#flood");
     let ul = document.createElement("ul");
     ul.classList.add("users-custom");
     divFlood.appendChild(ul);

     let keyContent = [];
     for(let i = 1; i <= 12; i++){
         keyContent[i] = document.querySelector(`#f${i}`);
         keyContent[i].value = tecla[i];
         keyContent[i].addEventListener("input", function(event) {tecla[i] = keyContent[i].value;});
     }

     const closeButton = novaJanela.querySelector(".nitro-card-header-close");
     closeButton.addEventListener("click", function() { // Criando ação de fechar janela
          statusFlood = true;
          novaJanela.remove(); // Remover a janela quando o botão de fechar for clicado
     });
}

function criandoElementoHistoric(novaJanela, divAlvo){
     novaJanela.innerHTML = htmlHistoric;
     divAlvo.appendChild(novaJanela);
     statusHistoric = false;

     janelaArrastavel(novaJanela);


     const divPai = document.querySelector("#historic");
     let ul = document.createElement("ul");
     ul.classList.add("users-custom");
     divPai.appendChild(ul);

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

     const closeButton = novaJanela.querySelector(".nitro-card-header-close");
     closeButton.addEventListener("click", function() { // Criando ação de fechar janela
          statusHistoric = true;
          novaJanela.remove(); // Remover a janela quando o botão de fechar for clicado
     });
}