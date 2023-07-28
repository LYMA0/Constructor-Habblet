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
        <div id="desativar-up" class="d-flex align-items-center justify-content-center btn btn-primary btn-sm">
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
        <div id="desativar-state" class="d-flex align-items-center justify-content-center btn btn-primary btn-sm">
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
        <div id="desativar-spin" class="d-flex align-items-center justify-content-center btn btn-primary btn-sm">
          Desativar
        </div>
      </div>
      <div class="d-inline text-black">
        Comandos tile
      </div>
      <div class="d-flex gap-2">
        <div id="" class="d-flex align-items-center justify-content-center btn btn-primary btn-sm">
          Copiar
        </div>
        <div id="" class="d-flex align-items-center justify-content-center btn btn-primary btn-sm">
          Pegar
        </div>
        <div id="" class="d-flex align-items-center justify-content-center btn btn-primary btn-sm">
          Mover
        </div>
      </div>
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

    <div><input id="search-input-enable" type="text" class="form-control form-control-sm" placeholder="Procurar" value=""></div>
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

    <div><input id="search-input-handitem" type="text" class="form-control form-control-sm" placeholder="Procurar" value=""></div>
    <div id="handitems" class="d-flex overflow-auto flex-column gap-2 justify-content-between container-fluid content-area custon-handitem">
    </div>
</div>
`;
let historicData = [];
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
