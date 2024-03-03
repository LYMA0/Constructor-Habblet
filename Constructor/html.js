const htmlConstructor = `
<div class="d-flex overflow-hidden position-relative flex-column nitro-card theme-primary-slim custon-constructor">
    <div class="d-flex position-relative flex-column gap-2 align-items-center justify-content-center drag-handler container-fluid nitro-card-header ">
      <div class="d-flex w-100 align-items-center justify-content-center">
        <span class="nitro-card-header-text">Constructor</span>
        <div class="position-absolute end-0 nitro-card-header-close"></div>
      </div>
    </div>
    <div class="d-flex overflow-auto flex-column gap-2 justify-content-between container-fluid content-area">
      <div class="d-inline text-black">
        Definir altura:
      </div>
      <div class="d-flex gap-2">
        <input id="up" class="show-number-arrows" type="number" min="0" max="40" value="0" style="width: 50px;">
        <div id="enviar-up" class="d-flex align-items-center justify-content-center btn btn-primary btn-sm custon-constructor-button">
          Aplicar
        </div>
        <div id="opcao-up" class="d-flex align-items-center justify-content-center btn btn-primary btn-sm">
          Desativar
        </div>
      </div>
      <div class="d-inline text-black">
        Definir estado:
      </div>
      <div class="d-flex gap-2">
        <input id="state" class="show-number-arrows" type="number" min="0" max="40" value="0" style="width: 50px;">
        <div id="enviar-state" class="d-flex align-items-center justify-content-center btn btn-primary btn-sm custon-constructor-button">
          Aplicar
        </div>
        <div id="opcao-state" class="d-flex align-items-center justify-content-center btn btn-primary btn-sm">
          Desativar
        </div>
      </div>
      <div class="d-inline text-black">
        Definir rotação:
      </div>
      <div class="d-flex gap-2">
        <input id="spin" class="show-number-arrows" type="number" min="0" max="40" value="0" style="width: 50px;">
        <div id="enviar-spin" class="d-flex align-items-center justify-content-center btn btn-primary btn-sm custon-constructor-button">
          Aplicar
        </div>
        <div id="opcao-spin" class="d-flex align-items-center justify-content-center btn btn-primary btn-sm">
          Desativar
        </div>
      </div>
      <div class="d-inline text-black">
        Comandos tile
      </div>
      <div class="d-flex gap-2">
        <div id="enviar-copy" class="d-flex align-items-center justify-content-center btn btn-primary btn-sm">
          Copiar
        </div>
        <div id="enviar-place" class="d-flex align-items-center justify-content-center btn btn-primary btn-sm">
          Colar
        </div>
        <div id="enviar-pick" class="d-flex align-items-center justify-content-center btn btn-primary btn-sm">
          Pegar
        </div>
        <div id="enviar-move" class="d-flex align-items-center justify-content-center btn btn-primary btn-sm">
          Mover
        </div>
      </div>
      <span>Lembre-se de desativar os comandos tile!</span>
    </div>
</div>
    `;
const htmlEnable = `
<div class="d-flex overflow-hidden position-relative flex-column nitro-card theme-primary-slim custon-enable" style="width: 500px; height: 500px;">
    <div class="d-flex position-relative flex-column gap-2 align-items-center justify-content-center drag-handler container-fluid nitro-card-header">
      <div class="d-flex w-100 align-items-center justify-content-center">
        <span class="nitro-card-header-text">Enables</span>
        <div class="position-absolute end-0 nitro-card-header-close"></div>
      </div>
    </div>

    <div><input id="search-input-enable" type="text" class="form-control form-control-sm" placeholder="Procurar Enable pelo nome" value=""></div>
    <div class="mt-2 d-flex justify-content-center">Basta clicar no Enable que deseja e o comando sera executado!</div>
    <div id="enables" class="d-flex overflow-auto flex-column gap-2 justify-content-between container-fluid content-area custon-enable">
    </div>
</div>
`;
const htmlHanditem = `
<div class="d-flex overflow-hidden position-relative flex-column nitro-card theme-primary-slim custon-enable" style="width: 500px; height: 500px;">
    <div class="d-flex position-relative flex-column gap-2 align-items-center justify-content-center drag-handler container-fluid nitro-card-header">
      <div class="d-flex w-100 align-items-center justify-content-center">
        <span class="nitro-card-header-text">Handitems</span>
        <div class="position-absolute end-0 nitro-card-header-close"></div>
      </div>
    </div>

    <div><input id="search-input-handitem" type="text" class="form-control form-control-sm" placeholder="Procurar Handitem pelo nome" value=""></div>
    <div class="mt-2 d-flex justify-content-center">Basta clicar no Handitem que deseja e o comando sera executado!</div>
    <div id="handitems" class="d-flex overflow-auto flex-column gap-2 justify-content-between container-fluid content-area custon-handitem">
    </div>
</div>
`;
const htmlHistoric = `
<div class="d-flex overflow-hidden position-relative flex-column nitro-card theme-primary-slim custon-enable" style="width: 500px; height: 500px;">
    <div class="d-flex position-relative flex-column gap-2 align-items-center justify-content-center drag-handler container-fluid nitro-card-header">
      <div class="d-flex w-100 align-items-center justify-content-center">
        <span class="nitro-card-header-text">Historico</span>
        <div class="position-absolute end-0 nitro-card-header-close"></div>
      </div>
    </div>
    <div><input id="search-input-historic" type="text" class="form-control form-control-sm" placeholder="Procurar" value=""></div>
    <div id="historic" class="d-flex overflow-auto flex-column gap-2 justify-content-between container-fluid content-area custon-historic">
    </div>
</div>
`;
const htmlFlood = `
<div class="d-flex overflow-hidden position-relative flex-column nitro-card theme-primary-slim custon-enable" style="width: 500px; height: 500px;">
    <div class="d-flex position-relative flex-column gap-2 align-items-center justify-content-center drag-handler container-fluid nitro-card-header">
      <div class="d-flex w-100 align-items-center justify-content-center">
        <span class="nitro-card-header-text">Flood</span>
        <div class="position-absolute end-0 nitro-card-header-close"></div>
      </div>
    </div>
    <div id="flood" class="d-flex overflow-auto flex-column gap-2 justify-content-between container-fluid content-area custon-flood">
      <div class="d-flex gap-1 align-items-center">
        <input id="defaultBrowser" class="form-check-input" type="checkbox">
        <div class="d-inline text-black">Ativar funcionalidades padrões do navegador</div>
      </div>
      <form action="">
        <ul>
          <li class="li-custom-fi">
            <label for="" class="li-custom">F1 </label><div class="text-row"><span class="border border-left w-100 border-light h-100 mx-1"></span></div><input id="f1" class="form-control form-control-sm" type="text">
          </li>
          <li class="li-custom-fi">
            <label for="" class="li-custom">F2 </label><div class="text-row"><span class="border border-left w-100 border-light h-100 mx-1"></span></div><input id="f2" class="form-control form-control-sm" type="text">
          </li>
          <li class="li-custom-fi">
            <label for="" class="li-custom">F3 </label><div class="text-row"><span class="border border-left w-100 border-light h-100 mx-1"></span></div><input id="f3" class="form-control form-control-sm" type="text">
          </li>
          <li class="li-custom-fi">
            <label for="" class="li-custom">F4 </label><div class="text-row"><span class="border border-left w-100 border-light h-100 mx-1"></span></div><input id="f4" class="form-control form-control-sm" type="text">
          </li>
          <li class="li-custom-fi">
            <label for="" class="li-custom">F5 </label><div class="text-row"><span class="border border-left w-100 border-light h-100 mx-1"></span></div><input id="f5" class="form-control form-control-sm" type="text">
          </li>
          <li class="li-custom-fi">
            <label for="" class="li-custom">F6 </label><div class="text-row"><span class="border border-left w-100 border-light h-100 mx-1"></span></div><input id="f6" class="form-control form-control-sm" type="text">
          </li>
          <li class="li-custom-fi">
            <label for="" class="li-custom">F7 </label><div class="text-row"><span class="border border-left w-100 border-light h-100 mx-1"></span></div><input id="f7" class="form-control form-control-sm" type="text">
          </li>
          <li class="li-custom-fi">
            <label for="" class="li-custom">F8 </label><div class="text-row"><span class="border border-left w-100 border-light h-100 mx-1"></span></div><input id="f8" class="form-control form-control-sm" type="text">
          </li>
          <li class="li-custom-fi">
            <label for="" class="li-custom">F9 </label><div class="text-row"><span class="border border-left w-100 border-light h-100 mx-1"></span></div><input id="f9" class="form-control form-control-sm" type="text">
          </li>
          <li class="li-custom-fi">
            <label for="" class="li-custom">F10 </label><div class="text-row"><span class="border border-left w-100 border-light h-100 mx-1"></span></div><input id="f10" class="form-control form-control-sm" type="text">
          </li>
          <li class="li-custom-fi">
            <label for="" class="li-custom">F11 </label><div class="text-row"><span class="border border-left w-100 border-light h-100 mx-1"></span></div><input id="f11" class="form-control form-control-sm" type="text">
          </li>
          <li class="li-custom-fi">
            <label for="" class="li-custom">F12 </label><div class="text-row"><span class="border border-left w-100 border-light h-100 mx-1"></span></div><input id="f12" class="form-control form-control-sm" type="text">
          </li>
        </ul>
      </form>
    </div>
</div>
`