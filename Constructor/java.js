function createHistoric(username, userLink, charImage) {
    const emptyDivContainer = document.getElementById("empty-list");
    const ulContainer = document.getElementById("list-ul");
  
    // Remover elemento vazio de aviso
    if (emptyDivContainer) {
      emptyDivContainer.remove();
    }
  
    // Criar elementos HTML
    const liElement = document.createElement("li");
    const charDiv = document.createElement("div");
    const charHabbo = document.createElement("div");
    const divUser = document.createElement("div");
    const spanName = document.createElement("span");
    const linkComponent = document.createElement("div");
  
    // Adicionar classes CSS aos elementos
    charDiv.classList.add("charDiv");
    charHabbo.classList.add("habbo");
    divUser.classList.add("user-list-name");
    spanName.classList.add("user-nickname");
    liElement.classList.add("list-container-style-li");
    linkComponent.classList.add("link-main-component");
  
    // Definir imagem de fundo do personagem
    charHabbo.style.backgroundImage = `url(${charImage})`;
  
    // Definir nome de usuário
    spanName.innerHTML = username;
  
    // Anexar elementos corretamente
    divUser.appendChild(spanName);
    charDiv.appendChild(divUser);
    charDiv.appendChild(charHabbo);
    liElement.appendChild(charDiv);
    ulContainer.prepend(liElement);
    liElement.appendChild(linkComponent);
  
    // Criar e anexar elementos de link
    userLink.forEach((link) => {
      const linkItem = document.createElement("div");
      const buttonItem = document.createElement("button");
  
      linkItem.classList.add("link-item-component");
      buttonItem.classList.add("ext-btn-success");
      buttonItem.innerHTML = "Abrir";
  
      buttonItem.addEventListener("click", () => {
        abrirLink(link);
      });
  
      linkItem.innerHTML = `
        <div>
          <span class="span-category">Link:</span>
          <span class="link-item">${link}</span>
        </div>
      `;
  
      linkItem.appendChild(buttonItem);
      linkComponent.appendChild(linkItem);
    });
  
    // Adicionar o nome de usuário à lista de usuários verificados
    checkUser.push(username);
  }  