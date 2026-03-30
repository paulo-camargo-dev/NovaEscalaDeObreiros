const DATA_BASE = new Date(2025, 0, 1);
const ALERTA_HORA = 17;
const ALERTA_MINUTO = 0;
const ALERTA_INTERVALO_MS = 30000;
const FIREBASE_CONFIG_STORAGE_KEY = "escala-firebase-config";
const CUSTOM_MEMBER_STORAGE_KEY = "escala-custom-members";
const SATURDAY_CONFIG_STORAGE_KEY = "escala-saturday-config";
const HIDDEN_MEMBER_NAMES_STORAGE_KEY = "escala-hidden-member-names";
const ADMIN_SESSION_STORAGE_KEY = "escala-admin-auth";
const THEME_PALETTE_STORAGE_KEY = "escala-theme-palette";
const ADMIN_PASSWORD = "admin123";
const MAX_BASE64_IMAGE_SIZE_BYTES = 700 * 1024;
const REQUIRED_SATURDAY_MEMBERS = 3;

const THEME_PALETTES = {
  areia: {
    "--bg-spot-1": "rgba(232, 188, 134, 0.3)",
    "--bg-spot-2": "rgba(149, 180, 159, 0.26)",
    "--bg-gradient-start": "#f1e7d9",
    "--bg-gradient-mid": "#f6f1ea",
    "--bg-gradient-end": "#fbf8f4"
  },
  ceu: {
    "--bg-spot-1": "rgba(164, 199, 238, 0.32)",
    "--bg-spot-2": "rgba(199, 224, 247, 0.3)",
    "--bg-gradient-start": "#dfeefd",
    "--bg-gradient-mid": "#eef6fd",
    "--bg-gradient-end": "#fafcff"
  },
  oliva: {
    "--bg-spot-1": "rgba(186, 180, 124, 0.28)",
    "--bg-spot-2": "rgba(138, 160, 132, 0.24)",
    "--bg-gradient-start": "#e8e4d5",
    "--bg-gradient-mid": "#f2f0e6",
    "--bg-gradient-end": "#fbfaf5"
  },
  vinho: {
    "--bg-spot-1": "rgba(188, 126, 137, 0.25)",
    "--bg-spot-2": "rgba(205, 175, 164, 0.22)",
    "--bg-gradient-start": "#efe2e3",
    "--bg-gradient-mid": "#f7eff0",
    "--bg-gradient-end": "#fcf8f8"
  },
  aurora: {
    "--bg-spot-1": "rgba(31, 91, 214, 0.36)",
    "--bg-spot-2": "rgba(255, 205, 59, 0.28)",
    "--bg-gradient-start": "#0f1115",
    "--bg-gradient-mid": "#162847",
    "--bg-gradient-end": "#3f3410"
  },
  fusion: {
    "--bg-spot-1": "rgba(34, 101, 214, 0.34)",
    "--bg-spot-2": "rgba(26, 145, 82, 0.26)",
    "--bg-gradient-start": "#0d0f14",
    "--bg-gradient-mid": "#18243e",
    "--bg-gradient-end": "#4b171c"
  }
};

const baseGrupo = [
  { nome: "Coop Paulo", cargo: "Cooperador", endereco: "Av: Fortunato Camargo 1075", contato: "(11) 91356-3576", atividade: "ABRIR E FECHAR A IGREJA", foto: "img/Cpaulo.PNG", modoEscala: "sequencia", diaFixo: "" },
  { nome: "D Reginaldo", cargo: "Diácono", endereco: "Rua F", contato: "(11) 96305-0243", atividade: "ABRIR E FECHAR A IGREJA", foto: "img/reginaldo2.PNG", modoEscala: "sequencia", diaFixo: "" },
  { nome: "D Carlinhos", cargo: "Diácono", endereco: "Rua H", contato: "(11) 95362-4938", atividade: "ABRIR E FECHAR A IGREJA", foto: "img/carlinhos.PNG", modoEscala: "sequencia", diaFixo: "" },
  { nome: "D João", cargo: "Diácono", endereco: "Rua D", contato: "(11) 98553-8590", atividade: "ABRIR E FECHAR A IGREJA", foto: "img/Djoao.jpg", modoEscala: "sequencia", diaFixo: "" },
  { nome: "Coop Eliazer", cargo: "Cooperador", endereco: "Rua E", contato: "(11) 98255-3053", atividade: "ABRIR E FECHAR A IGREJA", foto: "img/eliazer.jpg", modoEscala: "sequencia", diaFixo: "" },
  { nome: "D Paulo", cargo: "Diácono", endereco: "Rua B", contato: "(11) 94685-8301", atividade: "ABRIR E FECHAR A IGREJA", foto: "img/Dpaulo.jpg", modoEscala: "sequencia", diaFixo: "" },
  { nome: "Coop Manuel", cargo: "Cooperador", endereco: "Rua G", contato: "(11) 98980-6608", atividade: "ABRIR E FECHAR A IGREJA", foto: "img/manuel.PNG", modoEscala: "sequencia", diaFixo: "" },
  { nome: "D zezinho", cargo: "Diácono", endereco: "Rua Curitiba", contato: "(11) 95083-4846", atividade: "ABRIR E FECHAR A IGREJA", foto: "img/zezinho.PNG", modoEscala: "sequencia", diaFixo: "" }
];

const ensaio = { nome: "ENSAIO", atividade: "Anúncio de ensaio", foto: "img/ensaio.jpg" };
const faesp = { nome: "FAESP", atividade: "Anúncio de FAESP", foto: "img/faesp.PNG" };

const sabadosPadrao = [
  {
    ordem: 1,
    nome: "CULTO DOS JOVENS",
    atividade: "Primeiro sábado do mês",
    foto: "img/jovens.png",
    membros: ["D João", "Coop Eliazer", "D zezinho"]
  },
  {
    ordem: 2,
    nome: "SANTA CEIA NA SEDE",
    atividade: "Segundo sábado do mês",
    foto: "img/adbelem.jpeg",
  },
  {
    ordem: 3,
    nome: "CULTO DOS VARÕES",
    atividade: "Terceiro sábado do mês",
    foto: "img/varoes.jpeg",
    membros: ["D Carlinhos", "D Reginaldo"]
  },
  {
    ordem: 4,
    nome: "CULTO DOS ADOLESCENTES",
    atividade: "Quarto sábado do mês",
    foto: "img/adolecentes.png",
    membros: ["Coop Manuel", "D Paulo", "D Reginaldo"]
  },
  {
    ordem: 5,
    nome: "ESCALA A DEFINIR",
    atividade: "Quinto sábado (quando houver)",
    foto: "img/adbelem.jpeg",
    membros: []
  }
];

const state = {
  dataAtual: new Date(),
  customMembers: [],
  hiddenMemberNames: [],
  saturdayConfigs: sabadosPadrao.map((item) => ({ ...item })),
  firebaseReady: false,
  firebase: null
};
let memberEditingContext = null;
let saturdayPersonEditingSlotIndex = null;

const calendarEl = document.getElementById("calendar");
const monthYearEl = document.getElementById("monthYear");
const toastEl = document.getElementById("toast");
const modalEl = document.getElementById("modal");
const modalFotosEl = document.getElementById("modalFotos");
const modalNomeEl = document.getElementById("modalNome");
const modalCargoEl = document.getElementById("modalCargo");
const modalEnderecoEl = document.getElementById("modalEndereco");
const modalContatoEl = document.getElementById("modalContato");
const modalAtividadeEl = document.getElementById("modalAtividade");
const todayTitleEl = document.getElementById("todayTitle");
const todaySubtitleEl = document.getElementById("todaySubtitle");
const nextSaturdayTitleEl = document.getElementById("nextSaturdayTitle");
const nextSaturdaySubtitleEl = document.getElementById("nextSaturdaySubtitle");
const memberCountEl = document.getElementById("memberCount");
const upcomingListEl = document.getElementById("upcomingList");
const memberListEl = document.getElementById("memberList");
const memberFormEl = document.getElementById("memberForm");
const fotoInputEl = document.getElementById("fotoInput");
const uploadPreviewEl = document.getElementById("uploadPreview");
const saveMemberBtnEl = document.getElementById("saveMemberBtn");
const cancelMemberEditBtnEl = document.getElementById("cancelMemberEditBtn");
const firebaseFormEl = document.getElementById("firebaseForm");
const firebaseStatusEl = document.getElementById("firebaseStatus");
const toggleFirebaseConfigBtn = document.getElementById("toggleFirebaseConfig");
const memberModeSelectEl = document.getElementById("memberModeSelect");
const fixedDayFieldEl = document.getElementById("fixedDayField");
const saturdayFormEl = document.getElementById("saturdayForm");
const saturdayOrderSelectEl = document.getElementById("saturdayOrderSelect");
const saturdayPhotoInputEl = document.getElementById("saturdayPhotoInput");
const saturdayPreviewEl = document.getElementById("saturdayPreview");
const saturdayMemberSelectEls = [
  document.getElementById("saturdayMember1"),
  document.getElementById("saturdayMember2"),
  document.getElementById("saturdayMember3")
];
const saturdayPersonTriggerEls = Array.from(document.querySelectorAll(".saturday-person-trigger"));
const saturdayPersonModalEl = document.getElementById("saturdayPersonModal");
const saturdayPersonFormEl = document.getElementById("saturdayPersonForm");
const saturdayPersonModalTitleEl = document.getElementById("saturdayPersonModalTitle");
const saturdayPersonNameEl = document.getElementById("saturdayPersonName");
const saturdayPersonRoleEl = document.getElementById("saturdayPersonRole");
const saturdayPersonPhotoInputEl = document.getElementById("saturdayPersonPhotoInput");
const saturdayPersonPreviewEl = document.getElementById("saturdayPersonPreview");
const saturdayListEl = document.getElementById("saturdayList");
const monthNoticeEl = document.getElementById("monthNotice");
const adminPanelEl = document.getElementById("adminPanel");
const adminModalEl = document.getElementById("adminModal");
const adminAccessBtn = document.getElementById("adminAccessBtn");
const adminLoginFormEl = document.getElementById("adminLoginForm");
const adminPasswordInputEl = document.getElementById("adminPasswordInput");
const adminLogoutBtn = document.getElementById("adminLogoutBtn");
const themeFormEl = document.getElementById("themeForm");
const themePaletteSelectEl = document.getElementById("themePaletteSelect");

document.getElementById("prev").addEventListener("click", () => mudarMes(-1));
document.getElementById("next").addEventListener("click", () => mudarMes(1));
document.getElementById("closeModal").addEventListener("click", fecharModal);
toggleFirebaseConfigBtn.addEventListener("click", () => firebaseFormEl.classList.toggle("hidden"));
document.getElementById("clearFirebaseConfig").addEventListener("click", limparFirebaseConfig);
memberFormEl.addEventListener("submit", salvarIntegrante);
firebaseFormEl.addEventListener("submit", salvarFirebaseConfig);
fotoInputEl.addEventListener("change", () => atualizarPreviewArquivo(fotoInputEl, uploadPreviewEl));
cancelMemberEditBtnEl.addEventListener("click", cancelarEdicaoIntegrante);
memberModeSelectEl.addEventListener("change", atualizarCampoDiaFixo);
saturdayFormEl.addEventListener("submit", salvarSabado);
saturdayPhotoInputEl.addEventListener("change", () => atualizarPreviewArquivo(saturdayPhotoInputEl, saturdayPreviewEl));
saturdayOrderSelectEl.addEventListener("change", preencherFormularioSabadoSelecionado);
saturdayPersonTriggerEls.forEach((triggerEl) => {
  triggerEl.addEventListener("click", () => abrirModalCadastroPessoaSabado(Number(triggerEl.dataset.slotIndex)));
});
saturdayPersonFormEl.addEventListener("submit", salvarPessoaNoSabadoSelecionado);
saturdayPersonPhotoInputEl.addEventListener("change", () => atualizarPreviewArquivo(saturdayPersonPhotoInputEl, saturdayPersonPreviewEl));
document.getElementById("closeSaturdayPersonModal").addEventListener("click", fecharModalCadastroPessoaSabado);
memberListEl.addEventListener("click", handleMemberListClick);
saturdayListEl.addEventListener("click", handleSaturdayListClick);
adminAccessBtn.addEventListener("click", abrirAdminModal);
document.getElementById("closeAdminModal").addEventListener("click", fecharAdminModal);
adminLoginFormEl.addEventListener("submit", validarLoginAdmin);
adminLogoutBtn.addEventListener("click", sairModoAdmin);
themeFormEl.addEventListener("submit", salvarPaletaTema);
modalEl.addEventListener("click", (event) => {
  if (event.target === modalEl) fecharModal();
});
adminModalEl.addEventListener("click", (event) => {
  if (event.target === adminModalEl) fecharAdminModal();
});
saturdayPersonModalEl.addEventListener("click", (event) => {
  if (event.target === saturdayPersonModalEl) fecharModalCadastroPessoaSabado();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    fecharModal();
    fecharAdminModal();
    fecharModalCadastroPessoaSabado();
  }
});

function getGrupoCompleto() {
  return getGrupoComOrigem().map((item) => item.pessoa);
}

function getGrupoComOrigem() {
  const hiddenNames = new Set(state.hiddenMemberNames);
  const base = baseGrupo
    .map((pessoa, baseIndex) => ({ pessoa, source: "base", baseIndex }))
    .filter((item) => !hiddenNames.has(item.pessoa.nome));
  const custom = state.customMembers
    .map((pessoa, customIndex) => ({ pessoa, source: "custom", customIndex }))
    .filter((item) => !hiddenNames.has(item.pessoa.nome));

  return [...base, ...custom];
}

function getIntegrantesSequenciais() {
  return getGrupoCompleto().filter((pessoa) => pessoa.modoEscala !== "fixo");
}

function getIntegrantesFixosPorDia(dayOfWeek) {
  return getGrupoCompleto().filter((pessoa) => pessoa.modoEscala === "fixo" && Number(pessoa.diaFixo) === dayOfWeek);
}

function getSaturdayConfig(ordem) {
  const config = state.saturdayConfigs.find((item) => item.ordem === ordem) || sabadosPadrao[ordem - 1];
  return normalizarSabadoConfig(config);
}

function getResponsavelPadraoSabado(ordem) {
  const defaults = {
    1: "D João",
    2: "Todos os obreiros",
    3: "D Carlinhos",
    4: "Coop Manuel",
    5: "A definir"
  };

  return defaults[ordem] || "A definir";
}

function normalizarSabadoConfig(config) {
  const membrosDetalhes = Array.from({ length: REQUIRED_SATURDAY_MEMBERS }, (_, index) => {
    const detalhe = Array.isArray(config.membrosDetalhes) ? config.membrosDetalhes[index] : null;
    if (!detalhe || typeof detalhe !== "object") return null;
    return {
      nome: String(detalhe.nome || "").trim(),
      cargo: String(detalhe.cargo || "").trim(),
      foto: String(detalhe.foto || "").trim()
    };
  });

  return {
    ...config,
    responsavel: config.responsavel || getResponsavelPadraoSabado(Number(config.ordem)),
    membros: (config.membros || []).filter((nome) => !state.hiddenMemberNames.includes(nome)),
    membrosDetalhes
  };
}

function getDetalheMembroSabado(config, index) {
  if (!config || !Array.isArray(config.membrosDetalhes)) return null;
  const detalhe = config.membrosDetalhes[index];
  if (!detalhe) return null;
  if (!detalhe.nome && !detalhe.cargo && !detalhe.foto) return null;
  return detalhe;
}

function mudarMes(delta) {
  state.dataAtual.setMonth(state.dataAtual.getMonth() + delta);
  renderCalendar();
}

function isSameDate(a, b) {
  return a.getFullYear() === b.getFullYear()
    && a.getMonth() === b.getMonth()
    && a.getDate() === b.getDate();
}

function getNextSaturday(fromDate) {
  const date = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
  const delta = (6 - date.getDay() + 7) % 7;
  date.setDate(date.getDate() + delta);
  return date;
}

function contarDiasEscala(data) {
  let count = 0;
  const cursor = new Date(DATA_BASE);

  while (cursor < data) {
    if ([0, 1, 3, 5].includes(cursor.getDay())) {
      count += 1;
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return count;
}

function contarOcorrenciasDoDiaSemana(data, targetDay) {
  let count = 0;
  const cursor = new Date(DATA_BASE);

  while (cursor < data) {
    if (cursor.getDay() === targetDay) {
      count += 1;
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return count;
}

function findPessoaByNome(nome) {
  return getGrupoCompleto().find((pessoa) => pessoa.nome === nome) || null;
}

function pessoaParaData(data) {
  const dayOfWeek = data.getDay();

  if (dayOfWeek === 2) {
    return { pessoa: ensaio, classe: "ensaio", tipo: "anuncio" };
  }

  if (dayOfWeek === 4) {
    return { pessoa: faesp, classe: "faesp", tipo: "anuncio" };
  }

  if (dayOfWeek === 6) {
    const weekOfMonth = Math.ceil(data.getDate() / 7);
    return { pessoa: getSaturdayConfig(weekOfMonth), classe: "sabado", tipo: "sabado" };
  }

  if ([0, 1, 3, 5].includes(dayOfWeek)) {
    const fixosDoDia = getIntegrantesFixosPorDia(dayOfWeek);
    if (fixosDoDia.length) {
      const ocorrencias = contarOcorrenciasDoDiaSemana(data, dayOfWeek);
      return { pessoa: fixosDoDia[ocorrencias % fixosDoDia.length], classe: "grupoA", tipo: "escala" };
    }

    const grupoSequencial = getIntegrantesSequenciais();
    if (grupoSequencial.length) {
      const diasPassados = contarDiasEscala(data);
      return { pessoa: grupoSequencial[diasPassados % grupoSequencial.length], classe: "grupoA", tipo: "escala" };
    }
  }

  return { pessoa: null, classe: "", tipo: "vazio" };
}

function getChipLabel(tipo) {
  if (tipo === "anuncio") return "Aviso";
  if (tipo === "sabado") return "Especial";
  if (tipo === "escala") return "Escala";
  return "";
}

function formatDate(date) {
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

function nomeDiaSemana(day) {
  const nomes = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  return nomes[day] || "Dia não definido";
}

function renderCalendar() {
  calendarEl.innerHTML = "";

  const month = state.dataAtual.getMonth();
  const year = state.dataAtual.getFullYear();
  const today = new Date();
  const nextSaturday = getNextSaturday(today);

  monthYearEl.textContent = state.dataAtual.toLocaleString("pt-BR", {
    month: "long",
    year: "numeric"
  });
  monthNoticeEl.textContent = "Aviso geral: nos dias de escala o responsável permanece com a atividade de abrir e fechar a igreja.";

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i += 1) {
    const empty = document.createElement("div");
    empty.className = "day is-empty";
    calendarEl.appendChild(empty);
  }

  for (let day = 1; day <= totalDays; day += 1) {
    const date = new Date(year, month, day);
    const isToday = isSameDate(date, today);
    const isUpcomingSaturday = !isToday && date.getDay() === 6 && isSameDate(date, nextSaturday);
    const { pessoa, classe, tipo } = pessoaParaData(date);

    const card = document.createElement("button");
    card.type = "button";
    card.className = `day ${classe}`.trim();
    card.innerHTML = "";

    if (pessoa) {
      const responsavelHtml = "";
      const membrosHtml = Array.isArray(pessoa.membros) && pessoa.membros.length
        ? `<div class="group-members group-members-sabado"><span>Todos os obreiros estão escalados</span></div>`
        : Array.isArray(pessoa.membros) && pessoa.membros.length
        ? `
          <div class="group-members ${tipo === "sabado" ? "group-members-sabado" : ""}">
            ${pessoa.membros.map((nome, index) => {
              const detalhe = getDetalheMembroSabado(pessoa, index);
              const membro = findPessoaByNome(nome);
              const nomeExibicao = detalhe?.nome || nome;
              const fotoExibicao = detalhe?.foto || membro?.foto || "";
              if (tipo === "sabado" && fotoExibicao) {
                return `<span class="member-badge"><img src="${fotoExibicao}" alt="${nomeExibicao}"><small>${nomeExibicao}</small></span>`;
              }
              return `<span>${nomeExibicao}</span>`;
            }).join("")}
          </div>
        `
        : "";
      const membrosHtmlRender = Array.isArray(pessoa.membros) && pessoa.membros.length
        ? `
          <div class="group-members ${tipo === "sabado" ? "group-members-sabado" : ""}">
            ${pessoa.membros.map((nome, index) => {
              const detalhe = getDetalheMembroSabado(pessoa, index);
              const membro = findPessoaByNome(nome);
              const nomeExibicao = detalhe?.nome || nome;
              const fotoExibicao = detalhe?.foto || membro?.foto || "";
              if (tipo === "sabado" && fotoExibicao) {
                return `<span class="member-badge"><img src="${fotoExibicao}" alt="${nomeExibicao}"><small>${nomeExibicao}</small></span>`;
              }
              return `<span>${nomeExibicao}</span>`;
            }).join("")}
          </div>
        `
        : "";

      card.innerHTML = `
        <div class="chip-wrap">
          <span class="chip">${getChipLabel(tipo)}</span>
        </div>
        <div class="person">
          <div class="person-media">
            <img src="${pessoa.foto}" alt="${pessoa.nome}">
            <span class="${isToday ? "blink" : ""}">${pessoa.nome}</span>
          </div>
         
        </div>
        <div class="day-number">
          <span class="number">${day}</span>
        </div>
      `;

      if (tipo === "sabado") {
        const saturdayGroupEl = card.querySelector(".group-members-sabado");
        if (saturdayGroupEl) {
          saturdayGroupEl.innerHTML = "<span></span>";
        }
      }

      card.dataset.pessoa = JSON.stringify(pessoa);
      card.dataset.issabado = tipo === "sabado" ? "1" : "0";
      card.addEventListener("click", () => abrirModal(JSON.parse(card.dataset.pessoa), card.dataset.issabado === "1"));
    } else {
      card.disabled = true;
      card.style.cursor = "default";
      card.innerHTML = `<div class="day-number"><span class="number">${day}</span></div>`;
    }

    if (isToday) {
      card.classList.add("is-today", "blink-day");
    }
    if (isUpcomingSaturday) {
      card.classList.add("blink-soon");
    }

    calendarEl.appendChild(card);
  }

  updateDashboard();
}

function updateDashboard() {
  const today = new Date();
  const nextSaturday = getNextSaturday(today);
  const todayInfo = pessoaParaData(today);
  const saturdayInfo = pessoaParaData(nextSaturday);

  todayTitleEl.textContent = todayInfo.pessoa ? todayInfo.pessoa.nome : "Sem programação";
 todaySubtitleEl.textContent = todayInfo.pessoa
  ? `${todayInfo.pessoa.atividade || "Sem atividade"}`
  : "Sem programação";

  nextSaturdayTitleEl.textContent = saturdayInfo.pessoa ? saturdayInfo.pessoa.nome : "Sem programação";
  nextSaturdaySubtitleEl.textContent = `${formatDate(nextSaturday)} • ${saturdayInfo.pessoa?.atividade || ""}`;
  memberCountEl.textContent = String(getGrupoCompleto().length);

  renderUpcomingList();
  renderMemberList();
  renderSaturdayMemberOptions();
  preencherFormularioSabadoSelecionado();
  renderSaturdayList();
}

function renderUpcomingList() {
  const items = [];
  const start = new Date();

  for (let offset = 0; offset < 14 && items.length < 4; offset += 1) {
    const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + offset);
    const info = pessoaParaData(date);
    if (info.pessoa) {
      items.push({ date, ...info });
    }
  }

  upcomingListEl.innerHTML = items.map((item) => `
    <article class="upcoming-item">
      <img src="${item.pessoa.foto}" alt="${item.pessoa.nome}">
      <div>
        <strong>${item.pessoa.nome}</strong>
        <span>${formatDate(item.date)}</span>
        <span>${item.pessoa.atividade || ""}</span>
      </div>
    </article>
  `).join("");
}

async function handleMemberListClick(event) {
  const editButton = event.target.closest(".member-edit-btn");
  if (editButton) {
    iniciarEdicaoIntegrante({
      source: editButton.dataset.memberSource,
      baseIndex: editButton.dataset.baseIndex ? Number(editButton.dataset.baseIndex) : null,
      customIndex: editButton.dataset.customIndex ? Number(editButton.dataset.customIndex) : null,
      memberId: editButton.dataset.memberId || "",
      memberName: editButton.dataset.memberName || ""
    });
    return;
  }

  const deleteButton = event.target.closest(".member-delete-btn");
  if (!deleteButton) return;

  const memberName = deleteButton.dataset.memberName || "";
  const memberId = deleteButton.dataset.memberId || "";

  if (!memberName) return;

  const confirmed = window.confirm(`Excluir ${memberName} da escala e dos sábados especiais?`);
  if (!confirmed) return;

  try {
    await excluirIntegrante(memberName, memberId);
    showToast("Integrante excluído com sucesso.");
  } catch (error) {
    console.error("Erro ao excluir integrante:", error);
    showToast(error instanceof Error ? error.message : "Não foi possível excluir o integrante.");
  }
}

function renderMemberList() {
  const group = getGrupoComOrigem();
  memberListEl.innerHTML = group.map((item, index) => {
    const pessoa = item.pessoa;
    return `
    <article class="member-item">
      <img src="${pessoa.foto}" alt="${pessoa.nome}">
      <div>
        <strong>${index + 1}. ${pessoa.nome}</strong>
        <span>${pessoa.cargo || "Sem cargo"}</span>
        <span>${pessoa.modoEscala === "fixo" ? `Dia fixo: ${nomeDiaSemana(Number(pessoa.diaFixo))}` : "Escala sequencial"}</span>
        <span>${pessoa.contato || "Contato não informado"}</span>
      </div>
      <div class="member-actions">
        <button
          type="button"
          class="member-icon-btn member-edit-btn"
          title="Editar integrante"
          aria-label="Editar integrante"
          data-member-source="${item.source}"
          data-base-index="${item.baseIndex ?? ""}"
          data-custom-index="${item.customIndex ?? ""}"
          data-member-name="${pessoa.nome}"
          data-member-id="${pessoa.id || ""}"
        >
          &#9998;
        </button>
        <button
          type="button"
          class="member-icon-btn member-delete-btn"
          title="Excluir integrante"
          aria-label="Excluir integrante"
          data-member-name="${pessoa.nome}"
          data-member-id="${pessoa.id || ""}"
        >
          &#128465;
        </button>
      </div>
    </article>
  `;
  }).join("");
}

function getIntegranteByContext(context) {
  if (!context) return null;

  if (context.source === "base") {
    return baseGrupo[context.baseIndex] || null;
  }

  if (context.source === "custom") {
    if (Number.isInteger(context.customIndex)) {
      const byIndex = state.customMembers[context.customIndex];
      if (byIndex && (!context.memberId || byIndex.id === context.memberId)) return byIndex;
    }
    if (context.memberId) {
      const byId = state.customMembers.find((item) => item.id === context.memberId);
      if (byId) return byId;
    }
    if (context.memberName) {
      return state.customMembers.find((item) => item.nome === context.memberName) || null;
    }
  }

  return null;
}

function preencherFormularioIntegrante(integrante) {
  memberFormEl.elements.namedItem("nome").value = integrante.nome || "";
  memberFormEl.elements.namedItem("cargo").value = integrante.cargo || "";
  memberFormEl.elements.namedItem("endereco").value = integrante.endereco || "";
  memberFormEl.elements.namedItem("contato").value = integrante.contato || "";
  memberFormEl.elements.namedItem("atividade").value = integrante.atividade || "";
  memberModeSelectEl.value = integrante.modoEscala || "sequencia";
  atualizarCampoDiaFixo();
  memberFormEl.elements.namedItem("diaFixo").value = String(
    integrante.modoEscala === "fixo" && integrante.diaFixo !== ""
      ? integrante.diaFixo
      : 0
  );
  fotoInputEl.value = "";
  uploadPreviewEl.src = integrante.foto || "";
  uploadPreviewEl.classList.toggle("hidden", !integrante.foto);
}

function atualizarEstadoEdicaoIntegrante() {
  const isEditing = Boolean(memberEditingContext);
  saveMemberBtnEl.textContent = isEditing ? "Salvar alterações" : "Salvar integrante";
  cancelMemberEditBtnEl.classList.toggle("hidden", !isEditing);
}

function resetMemberForm() {
  memberFormEl.reset();
  memberModeSelectEl.value = "sequencia";
  atualizarCampoDiaFixo();
  fotoInputEl.value = "";
  uploadPreviewEl.src = "";
  uploadPreviewEl.classList.add("hidden");
}

function iniciarEdicaoIntegrante(context) {
  const integrante = getIntegranteByContext(context);
  if (!integrante) {
    showToast("Não foi possível abrir este integrante para edição.");
    return;
  }

  memberEditingContext = context;
  preencherFormularioIntegrante(integrante);
  atualizarEstadoEdicaoIntegrante();
  memberFormEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

function limparEdicaoIntegrante({ limparFormulario = true } = {}) {
  memberEditingContext = null;
  if (limparFormulario) {
    resetMemberForm();
  }
  atualizarEstadoEdicaoIntegrante();
}

function cancelarEdicaoIntegrante() {
  limparEdicaoIntegrante({ limparFormulario: true });
  showToast("Edição cancelada.");
}

function renderSaturdayMemberOptions() {
  const nomesIntegrantes = getGrupoCompleto().map((pessoa) => pessoa.nome);
  const nomesSabados = state.saturdayConfigs.flatMap((config) => (config.membros || []).filter(Boolean));
  const nomesDetalhesSabados = state.saturdayConfigs.flatMap((config) => (
    (config.membrosDetalhes || []).map((detalhe) => detalhe?.nome || "").filter(Boolean)
  ));
  const integrantes = Array.from(new Set([...nomesIntegrantes, ...nomesSabados, ...nomesDetalhesSabados]))
    .map((nome) => ({ nome }));
  const optionsHtml = `
    <option value="">Selecione um integrante</option>
    ${integrantes.map((pessoa) => `<option value="${pessoa.nome}">${pessoa.nome}</option>`).join("")}
  `;

  saturdayMemberSelectEls.forEach((selectEl) => {
    const currentValue = selectEl?.value;
    if (!selectEl) return;
    selectEl.innerHTML = optionsHtml;
    if (currentValue && integrantes.some((pessoa) => pessoa.nome === currentValue)) {
      selectEl.value = currentValue;
    }
  });
}

function preencherFormularioSabadoSelecionado() {
  const ordem = Number(saturdayOrderSelectEl.value);
  const config = getSaturdayConfig(ordem);

  if (!config) return;

  saturdayFormEl.elements.namedItem("nome").value = config.nome || "";
  saturdayFormEl.elements.namedItem("atividade").value = config.atividade || "";

  saturdayMemberSelectEls.forEach((selectEl, index) => {
    selectEl.value = config.membros?.[index] || "";
  });

  saturdayPreviewEl.src = config.foto || "";
  saturdayPreviewEl.classList.toggle("hidden", !config.foto);
}

function abrirModalCadastroPessoaSabado(slotIndex) {
  if (!Number.isInteger(slotIndex) || slotIndex < 0 || slotIndex >= REQUIRED_SATURDAY_MEMBERS) return;

  const ordem = Number(saturdayOrderSelectEl.value);
  const config = getSaturdayConfig(ordem);
  const nomeSelecionado = saturdayMemberSelectEls[slotIndex]?.value || "";
  const detalheAtual = getDetalheMembroSabado(config, slotIndex);
  const pessoaExistente = findPessoaByNome(nomeSelecionado);

  saturdayPersonEditingSlotIndex = slotIndex;
  saturdayPersonModalTitleEl.textContent = `Cadastro da Pessoa ${slotIndex + 1} do ${ordem}º sábado`;
  saturdayPersonNameEl.value = detalheAtual?.nome || nomeSelecionado || "";
  saturdayPersonRoleEl.value = detalheAtual?.cargo || pessoaExistente?.cargo || "";
  saturdayPersonPhotoInputEl.value = "";
  saturdayPersonPreviewEl.src = detalheAtual?.foto || pessoaExistente?.foto || "";
  saturdayPersonPreviewEl.classList.toggle("hidden", !saturdayPersonPreviewEl.src);

  saturdayPersonModalEl.classList.add("show");
  saturdayPersonModalEl.setAttribute("aria-hidden", "false");
  saturdayPersonNameEl.focus();
}

function fecharModalCadastroPessoaSabado() {
  saturdayPersonModalEl.classList.remove("show");
  saturdayPersonModalEl.setAttribute("aria-hidden", "true");
  saturdayPersonEditingSlotIndex = null;
}

async function salvarPessoaNoSabadoSelecionado(event) {
  event.preventDefault();
  if (!Number.isInteger(saturdayPersonEditingSlotIndex)) return;

  const ordem = Number(saturdayOrderSelectEl.value);
  const configAtual = getSaturdayConfig(ordem);
  const nome = saturdayPersonNameEl.value.trim();
  const cargo = saturdayPersonRoleEl.value.trim();
  const file = saturdayPersonPhotoInputEl.files?.[0] || null;

  if (!nome || !cargo) {
    showToast("Preencha nome e cargo da pessoa do sábado.");
    return;
  }

  try {
    let foto = saturdayPersonPreviewEl.src || "";
    if (file) {
      validarImagemParaBase64(file);
      foto = await fileToBase64(file);
    }

    const membros = Array.from({ length: REQUIRED_SATURDAY_MEMBERS }, (_, index) => (
      saturdayMemberSelectEls[index]?.value?.trim() || configAtual.membros?.[index] || ""
    ));
    membros[saturdayPersonEditingSlotIndex] = nome;

    const membrosDetalhes = Array.from({ length: REQUIRED_SATURDAY_MEMBERS }, (_, index) => {
      const atual = getDetalheMembroSabado(configAtual, index);
      return atual ? { ...atual } : null;
    });
    membrosDetalhes[saturdayPersonEditingSlotIndex] = { nome, cargo, foto };

    const configAtualizado = normalizarSabadoConfig({
      ...configAtual,
      membros,
      membrosDetalhes
    });

    await saveSaturdayRecord(configAtualizado);
    saturdayOrderSelectEl.value = String(ordem);
    renderSaturdayMemberOptions();
    preencherFormularioSabadoSelecionado();
    fecharModalCadastroPessoaSabado();
    showToast(`Pessoa ${saturdayPersonEditingSlotIndex + 1} atualizada no sábado selecionado.`);
  } catch (error) {
    console.error("Erro ao salvar pessoa do sábado:", error);
    showToast(error instanceof Error ? error.message : "Não foi possível salvar a pessoa do sábado.");
  }
}

function renderSaturdayList() {
  saturdayListEl.innerHTML = [1, 2, 3, 4, 5].map((ordem) => {
    const config = getSaturdayConfig(ordem);
    const nomesMembros = (config.membros || []).filter(Boolean);
    const membros = nomesMembros.length ? nomesMembros.join(", ") : "Sem integrantes definidos";

    return `
      <article class="member-item saturday-item">
        <img src="${config.foto}" alt="${config.nome}">
        <div>
          <strong>${ordem}º sábado - ${config.nome}</strong>
          <span>${config.atividade || "Sem atividade"}</span>
          <span>${membros}</span>
        </div>
        <button
          type="button"
          class="ghost-btn small saturday-delete-btn"
          data-ordem="${ordem}"
        >
          Excluir cadastro
        </button>
      </article>
    `;
  }).join("");
}

async function handleSaturdayListClick(event) {
  const button = event.target.closest(".saturday-delete-btn");
  if (!button) return;

  const ordem = Number(button.dataset.ordem);
  if (!ordem) return;

  const confirmed = window.confirm(`Excluir o cadastro do ${ordem}º sábado e voltar ao padrão original?`);
  if (!confirmed) return;

  try {
    await excluirCadastroSabado(ordem);
    showToast("Cadastro do sábado excluído com sucesso.");
  } catch (error) {
    console.error("Erro ao excluir sábado:", error);
    showToast(error instanceof Error ? error.message : "Não foi possível excluir o cadastro do sábado.");
  }
}

function abrirModal(pessoa, isSabado) {
  modalEl.classList.add("show");
  modalEl.setAttribute("aria-hidden", "false");
  modalEl.classList.toggle("hide-details", Boolean(isSabado));
  modalFotosEl.innerHTML = "";

  if (Array.isArray(pessoa.membros) && pessoa.membros.length) {
    pessoa.membros.forEach((nome, index) => {
      const detalhe = getDetalheMembroSabado(pessoa, index);
      const membro = findPessoaByNome(nome);
      const foto = detalhe?.foto || membro?.foto || "";
      const nomeExibicao = detalhe?.nome || nome;
      if (!foto) return;
      const image = document.createElement("img");
      image.src = foto;
      image.alt = nomeExibicao;
      modalFotosEl.appendChild(image);
    });
  } else if (pessoa.foto) {
    const image = document.createElement("img");
    image.src = pessoa.foto;
    image.alt = pessoa.nome || "Foto";
    modalFotosEl.appendChild(image);
  }

  modalNomeEl.textContent = pessoa.nome || "";
  modalCargoEl.textContent = isSabado
    ? "Cadastro específico de 3 pessoas para o sábado"
    : pessoa.cargo || "";
  modalEnderecoEl.textContent = pessoa.endereco || "";
  modalContatoEl.textContent = pessoa.contato || "";
  modalAtividadeEl.textContent = pessoa.atividade || "";
}

function fecharModal() {
  modalEl.classList.remove("show");
  modalEl.setAttribute("aria-hidden", "true");
}

function abrirAdminModal() {
  adminModalEl.classList.add("show");
  adminModalEl.setAttribute("aria-hidden", "false");
  adminPasswordInputEl.focus();
}

function fecharAdminModal() {
  adminModalEl.classList.remove("show");
  adminModalEl.setAttribute("aria-hidden", "true");
}

function isAdminAutenticado() {
  return localStorage.getItem(ADMIN_SESSION_STORAGE_KEY) === "1";
}

function atualizarVisibilidadeAdmin() {
  const autenticado = isAdminAutenticado();
  adminPanelEl.classList.toggle("hidden", !autenticado);
  adminLogoutBtn.classList.toggle("hidden", !autenticado);
  adminAccessBtn.textContent = autenticado ? "Painel do administrador" : "Área do administrador";
}

function validarLoginAdmin(event) {
  event.preventDefault();
  const senha = adminPasswordInputEl.value.trim();

  if (senha !== ADMIN_PASSWORD) {
    showToast("Senha do administrador inválida.");
    return;
  }

  localStorage.setItem(ADMIN_SESSION_STORAGE_KEY, "1");
  atualizarVisibilidadeAdmin();
  adminLoginFormEl.reset();
  fecharAdminModal();
  showToast("Modo administrador liberado.");
}

function sairModoAdmin() {
  localStorage.removeItem(ADMIN_SESSION_STORAGE_KEY);
  atualizarVisibilidadeAdmin();
  fecharAdminModal();
  showToast("Modo administrador encerrado.");
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toastEl.classList.remove("show"), 4200);
}

function checarAlerta17h() {
  const now = new Date();
  const storageKey = `alerta-17h-${now.toISOString().slice(0, 10)}`;
  const passedTime = now.getHours() > ALERTA_HORA || (now.getHours() === ALERTA_HORA && now.getMinutes() >= ALERTA_MINUTO);

  if (!passedTime || localStorage.getItem(storageKey)) return;

  localStorage.setItem(storageKey, "1");
  const { pessoa } = pessoaParaData(now);
  showToast(`17:00 - Hoje: ${pessoa?.nome || "Sem programação"}`);
}

function atualizarPreviewArquivo(inputEl, previewEl) {
  const [file] = inputEl.files || [];
  if (!file) {
    previewEl.src = "";
    previewEl.classList.add("hidden");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    previewEl.src = String(reader.result);
    previewEl.classList.remove("hidden");
  };
  reader.readAsDataURL(file);
}

function atualizarCampoDiaFixo() {
  fixedDayFieldEl.classList.toggle("hidden", memberModeSelectEl.value !== "fixo");
}

function getSavedFirebaseConfig() {
  try {
    return JSON.parse(localStorage.getItem(FIREBASE_CONFIG_STORAGE_KEY) || "null");
  } catch {
    return null;
  }
}

function getSavedSaturdayConfigs() {
  try {
    return JSON.parse(localStorage.getItem(SATURDAY_CONFIG_STORAGE_KEY) || "null");
  } catch {
    return null;
  }
}

function getSavedHiddenMemberNames() {
  try {
    return JSON.parse(localStorage.getItem(HIDDEN_MEMBER_NAMES_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function getSavedThemePalette() {
  return localStorage.getItem(THEME_PALETTE_STORAGE_KEY) || "aurora";
}

function applyThemePalette(paletteName) {
  const palette = THEME_PALETTES[paletteName] || THEME_PALETTES.areia;
  Object.entries(palette).forEach(([variable, value]) => {
    document.documentElement.style.setProperty(variable, value);
  });
  themePaletteSelectEl.value = paletteName in THEME_PALETTES ? paletteName : "aurora";
}

function salvarPaletaTema(event) {
  event.preventDefault();
  const paletteName = themePaletteSelectEl.value;
  localStorage.setItem(THEME_PALETTE_STORAGE_KEY, paletteName);
  applyThemePalette(paletteName);
  showToast("Paleta de fundo atualizada.");
}

function setFirebaseStatus(message, ready = false) {
  firebaseStatusEl.textContent = message;
  firebaseStatusEl.style.color = ready ? "var(--secondary)" : "var(--muted)";
}

function preencherFirebaseForm(config) {
  if (!config) return;
  Object.entries(config).forEach(([key, value]) => {
    const input = firebaseFormEl.elements.namedItem(key);
    if (input) input.value = value || "";
  });
}

function persistLocalMembers(members) {
  localStorage.setItem(CUSTOM_MEMBER_STORAGE_KEY, JSON.stringify(members));
}

function getLocalCustomMembers() {
  try {
    return JSON.parse(localStorage.getItem(CUSTOM_MEMBER_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function persistSaturdayConfigs(configs) {
  localStorage.setItem(SATURDAY_CONFIG_STORAGE_KEY, JSON.stringify(configs));
}

function persistHiddenMemberNames(names) {
  localStorage.setItem(HIDDEN_MEMBER_NAMES_STORAGE_KEY, JSON.stringify(names));
}

function loadLocalSaturdayConfigs() {
  const saved = getSavedSaturdayConfigs();
  state.saturdayConfigs = Array.isArray(saved) && saved.length
    ? saved
    : sabadosPadrao.map((item) => ({ ...item }));
}

function loadLocalHiddenMemberNames() {
  state.hiddenMemberNames = getSavedHiddenMemberNames();
}

function normalizarIntegrante(raw) {
  return {
    nome: raw.nome.trim(),
    cargo: raw.cargo.trim(),
    endereco: raw.endereco.trim(),
    contato: raw.contato.trim(),
    atividade: raw.atividade.trim() || "ABRIR E FECHAR A IGREJA",
    foto: raw.foto || "img/adbelem.jpeg",
    modoEscala: raw.modoEscala || "sequencia",
    diaFixo: raw.diaFixo ?? "",
    createdAt: raw.createdAt || Date.now()
  };
}

async function initFirebaseIfConfigured() {
  const config = getSavedFirebaseConfig();

  if (!config?.apiKey || !config?.projectId || !config?.appId) {
    setFirebaseStatus("não configurado");
    preencherFirebaseForm(config);
    return;
  }

  preencherFirebaseForm(config);

  try {
    const [appModule, firestoreModule] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js")
    ]);

    const app = appModule.initializeApp(config);
    const db = firestoreModule.getFirestore(app);

    state.firebase = {
      db,
      addDoc: firestoreModule.addDoc,
      collection: firestoreModule.collection,
      deleteDoc: firestoreModule.deleteDoc,
      doc: firestoreModule.doc,
      getDoc: firestoreModule.getDoc,
      getDocs: firestoreModule.getDocs,
      orderBy: firestoreModule.orderBy,
      query: firestoreModule.query,
      serverTimestamp: firestoreModule.serverTimestamp,
      setDoc: firestoreModule.setDoc
    };
    state.firebaseReady = true;
    setFirebaseStatus("conectado", true);
    await loadHiddenMemberNames();
    await loadCustomMembers();
  } catch (error) {
    console.error("Erro ao iniciar Firebase:", error);
    state.firebaseReady = false;
    setFirebaseStatus("erro ao conectar");
    showToast("Não foi possível conectar ao Firebase.");
    loadLocalHiddenMemberNames();
    await loadCustomMembers();
  }
}

async function loadSaturdayConfigs() {
  if (state.firebaseReady && state.firebase) {
    try {
      const saturdayRef = state.firebase.collection(state.firebase.db, "sabados");
      const saturdayQuery = state.firebase.query(saturdayRef, state.firebase.orderBy("ordem", "asc"));
      const snapshot = await state.firebase.getDocs(saturdayQuery);
      if (snapshot.docs.length) {
        state.saturdayConfigs = snapshot.docs.map((doc) => normalizarSabadoConfig({ id: doc.id, ...doc.data() }));
        persistSaturdayConfigs(state.saturdayConfigs);
        return;
      }
    } catch (error) {
      console.error("Erro ao carregar sábados do Firebase:", error);
    }
  }

  loadLocalSaturdayConfigs();
}

async function loadHiddenMemberNames() {
  if (state.firebaseReady && state.firebase) {
    try {
      const hiddenRef = state.firebase.doc(state.firebase.db, "configuracoes", "integrantesOcultos");
      const snapshot = await state.firebase.getDoc(hiddenRef);
      if (snapshot.exists()) {
        state.hiddenMemberNames = Array.isArray(snapshot.data().nomes) ? snapshot.data().nomes : [];
        persistHiddenMemberNames(state.hiddenMemberNames);
        return;
      }
    } catch (error) {
      console.error("Erro ao carregar integrantes ocultos do Firebase:", error);
    }
  }

  loadLocalHiddenMemberNames();
}

async function loadCustomMembers() {
  if (state.firebaseReady && state.firebase) {
    try {
      const membersRef = state.firebase.collection(state.firebase.db, "integrantes");
      const membersQuery = state.firebase.query(membersRef, state.firebase.orderBy("createdAt", "asc"));
      const snapshot = await state.firebase.getDocs(membersQuery);
      state.customMembers = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: typeof data.createdAt?.toMillis === "function" ? data.createdAt.toMillis() : data.createdAt || Date.now()
        };
      });
      persistLocalMembers(state.customMembers);
      await loadSaturdayConfigs();
      renderCalendar();
      return;
    } catch (error) {
      console.error("Erro ao carregar integrantes do Firebase:", error);
      showToast("Usando dados salvos localmente.");
    }
  }

  state.customMembers = getLocalCustomMembers();
  loadLocalSaturdayConfigs();
  renderCalendar();
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function validarImagemParaBase64(file) {
  if (!file) return;

  if (file.size > MAX_BASE64_IMAGE_SIZE_BYTES) {
    const limiteMb = (MAX_BASE64_IMAGE_SIZE_BYTES / (1024 * 1024)).toFixed(1);
    throw new Error(`A imagem excede ${limiteMb} MB, que é o limite seguro para salvar em base64 no Firestore.`);
  }
}

async function salvarIntegrante(event) {
  event.preventDefault();

  const integranteAtual = getIntegranteByContext(memberEditingContext);
  const formData = new FormData(memberFormEl);
  const file = fotoInputEl.files?.[0] || null;
  const integrante = normalizarIntegrante({
    nome: formData.get("nome") || "",
    cargo: formData.get("cargo") || "",
    endereco: formData.get("endereco") || "",
    contato: formData.get("contato") || "",
    atividade: formData.get("atividade") || "",
    modoEscala: formData.get("modoEscala") || "sequencia",
    diaFixo: formData.get("modoEscala") === "fixo" ? Number(formData.get("diaFixo")) : "",
    foto: integranteAtual?.foto || "",
    createdAt: integranteAtual?.createdAt || Date.now()
  });

  if (!integrante.nome || !integrante.cargo) {
    showToast("Preencha nome e cargo do integrante.");
    return;
  }

  try {
    if (file) {
      validarImagemParaBase64(file);
      integrante.foto = await fileToBase64(file);
    }

    await saveMemberRecord(integrante, memberEditingContext, integranteAtual);
    limparEdicaoIntegrante({ limparFormulario: true });
    showToast(integranteAtual ? "Integrante atualizado com sucesso." : "Integrante salvo com sucesso.");
  } catch (error) {
    console.error("Erro ao salvar integrante:", error);
    showToast(error instanceof Error ? error.message : "Não foi possível salvar o integrante.");
  }
}

async function saveMemberRecord(member, editingContext = null, currentMember = null) {
  if (editingContext && editingContext.source === "base") {
    const baseIndex = Number(editingContext.baseIndex);
    if (!Number.isInteger(baseIndex) || !baseGrupo[baseIndex]) {
      throw new Error("Integrante base não encontrado para edição.");
    }

    baseGrupo[baseIndex] = {
      ...baseGrupo[baseIndex],
      ...member
    };
    renderCalendar();
    return;
  }

  if (editingContext && editingContext.source === "custom" && currentMember) {
    if (state.firebaseReady && state.firebase && currentMember.id) {
      await state.firebase.setDoc(
        state.firebase.doc(state.firebase.db, "integrantes", currentMember.id),
        {
          ...member,
          createdAt: currentMember.createdAt || member.createdAt
        }
      );
      await loadCustomMembers();
      return;
    }

    const customIndex = state.customMembers.indexOf(currentMember);
    if (customIndex >= 0) {
      state.customMembers[customIndex] = {
        ...currentMember,
        ...member,
        id: currentMember.id,
        createdAt: currentMember.createdAt || member.createdAt
      };
      persistLocalMembers(state.customMembers);
      renderCalendar();
      return;
    }
  }

  if (state.firebaseReady && state.firebase) {
    const membersRef = state.firebase.collection(state.firebase.db, "integrantes");
    await state.firebase.addDoc(membersRef, {
      ...member,
      createdAt: state.firebase.serverTimestamp()
    });
    await loadCustomMembers();
    return;
  }

  state.customMembers = [...state.customMembers, member];
  persistLocalMembers(state.customMembers);
  renderCalendar();
}

async function saveHiddenMemberNames() {
  persistHiddenMemberNames(state.hiddenMemberNames);

  if (state.firebaseReady && state.firebase) {
    const hiddenRef = state.firebase.doc(state.firebase.db, "configuracoes", "integrantesOcultos");
    await state.firebase.setDoc(hiddenRef, { nomes: state.hiddenMemberNames });
  }
}

function removerIntegranteDosSabados(nome) {
  state.saturdayConfigs = state.saturdayConfigs.map((config) => normalizarSabadoConfig({
    ...config,
    membros: (config.membros || []).filter((membro) => membro !== nome)
  }));
  persistSaturdayConfigs(state.saturdayConfigs);
}

function limparEdicaoSeIntegranteExcluido(nome, id) {
  if (!memberEditingContext) return;

  const editingTarget = getIntegranteByContext(memberEditingContext);
  if (!editingTarget || editingTarget.nome === nome || (id && editingTarget.id === id)) {
    limparEdicaoIntegrante({ limparFormulario: true });
  }
}

async function excluirIntegrante(nome, id) {
  const integranteCustom = state.customMembers.find((item) => item.nome === nome && (!id || item.id === id));

  if (integranteCustom) {
    if (state.firebaseReady && state.firebase && integranteCustom.id) {
      await state.firebase.deleteDoc(state.firebase.doc(state.firebase.db, "integrantes", integranteCustom.id));
    }

    state.customMembers = state.customMembers.filter((item) => item !== integranteCustom);
    persistLocalMembers(state.customMembers);
  } else if (!state.hiddenMemberNames.includes(nome)) {
    state.hiddenMemberNames = [...state.hiddenMemberNames, nome].sort((a, b) => a.localeCompare(b, "pt-BR"));
    await saveHiddenMemberNames();
  }

  removerIntegranteDosSabados(nome);

  if (state.firebaseReady && state.firebase) {
    for (const config of state.saturdayConfigs) {
      await saveSaturdayRecord(config);
    }
    await loadCustomMembers();
    limparEdicaoSeIntegranteExcluido(nome, id);
    return;
  }

  renderCalendar();
  limparEdicaoSeIntegranteExcluido(nome, id);
}

async function excluirCadastroSabado(ordem) {
  const configPadrao = normalizarSabadoConfig({ ...sabadosPadrao[ordem - 1] });

  state.saturdayConfigs = [
    ...state.saturdayConfigs.filter((item) => item.ordem !== ordem),
    configPadrao
  ].sort((a, b) => a.ordem - b.ordem);
  persistSaturdayConfigs(state.saturdayConfigs);

  if (state.firebaseReady && state.firebase) {
    const saturdayRef = state.firebase.collection(state.firebase.db, "sabados");
    const existentes = await state.firebase.getDocs(saturdayRef);
    const alvo = existentes.docs.find((doc) => Number(doc.data().ordem) === ordem);

    if (alvo) {
      await state.firebase.setDoc(
        state.firebase.doc(state.firebase.db, "sabados", alvo.id),
        configPadrao
      );
    }

    await loadSaturdayConfigs();
    renderCalendar();
    return;
  }

  renderCalendar();
}

async function salvarSabado(event) {
  event.preventDefault();

  const formData = new FormData(saturdayFormEl);
  const ordem = Number(formData.get("ordemSabado"));
  const file = saturdayPhotoInputEl.files?.[0] || null;
  const membros = saturdayMemberSelectEls
    .map((selectEl) => selectEl.value.trim());
  const atual = getSaturdayConfig(ordem);
  const membrosDetalhes = Array.from({ length: REQUIRED_SATURDAY_MEMBERS }, (_, index) => {
    const nomeSelecionado = membros[index] || "";
    const detalheAtual = getDetalheMembroSabado(atual, index);
    if (detalheAtual?.nome === nomeSelecionado) return detalheAtual;
    const integranteAtual = findPessoaByNome(nomeSelecionado);
    if (!nomeSelecionado) return null;
    return {
      nome: nomeSelecionado,
      cargo: integranteAtual?.cargo || "",
      foto: integranteAtual?.foto || ""
    };
  });
  const config = {
    ordem,
    nome: String(formData.get("nome") || "").trim(),
    atividade: String(formData.get("atividade") || "").trim(),
    foto: atual?.foto || "img/adbelem.jpeg",
    membros,
    membrosDetalhes
  };

  if (!config.nome || !config.atividade) {
    showToast("Preencha o nome e a atividade do sábado.");
    return;
  }

  try {
    if (file) {
      validarImagemParaBase64(file);
      config.foto = await fileToBase64(file);
    }

    await saveSaturdayRecord(config);
    saturdayFormEl.reset();
    saturdayOrderSelectEl.value = String(ordem);
    saturdayPhotoInputEl.value = "";
    saturdayPreviewEl.src = "";
    saturdayPreviewEl.classList.add("hidden");
    renderSaturdayMemberOptions();
    preencherFormularioSabadoSelecionado();
    showToast("Sábado salvo com sucesso.");
  } catch (error) {
    console.error("Erro ao salvar sábado:", error);
    showToast(error instanceof Error ? error.message : "Não foi possível salvar o sábado.");
  }
}

async function saveSaturdayRecord(config) {
  state.saturdayConfigs = [...state.saturdayConfigs.filter((item) => item.ordem !== config.ordem), config]
    .sort((a, b) => a.ordem - b.ordem);
  persistSaturdayConfigs(state.saturdayConfigs);

  if (state.firebaseReady && state.firebase) {
    const saturdayRef = state.firebase.collection(state.firebase.db, "sabados");
    const existentes = await state.firebase.getDocs(saturdayRef);
    const alvo = existentes.docs.find((doc) => Number(doc.data().ordem) === config.ordem);
    if (alvo) {
      await state.firebase.setDoc(state.firebase.doc(state.firebase.db, "sabados", alvo.id), config);
    } else {
      await state.firebase.addDoc(saturdayRef, config);
    }
  }

  renderCalendar();
}

async function salvarFirebaseConfig(event) {
  event.preventDefault();
  const formData = new FormData(firebaseFormEl);
  const config = {
    apiKey: String(formData.get("apiKey") || "").trim(),
    authDomain: String(formData.get("authDomain") || "").trim(),
    projectId: String(formData.get("projectId") || "").trim(),
    storageBucket: String(formData.get("storageBucket") || "").trim(),
    messagingSenderId: String(formData.get("messagingSenderId") || "").trim(),
    appId: String(formData.get("appId") || "").trim()
  };

  localStorage.setItem(FIREBASE_CONFIG_STORAGE_KEY, JSON.stringify(config));
  showToast("Configuração do Firebase salva.");
  state.firebaseReady = false;
  state.firebase = null;
  await initFirebaseIfConfigured();
}

function limparFirebaseConfig() {
  localStorage.removeItem(FIREBASE_CONFIG_STORAGE_KEY);
  state.firebaseReady = false;
  state.firebase = null;
  firebaseFormEl.reset();
  setFirebaseStatus("não configurado");
  loadCustomMembers();
  showToast("Configuração do Firebase removida.");
}

function bootstrap() {
  atualizarVisibilidadeAdmin();
  atualizarCampoDiaFixo();
  applyThemePalette(getSavedThemePalette());
  loadLocalHiddenMemberNames();
  loadLocalSaturdayConfigs();
  renderCalendar();
  checarAlerta17h();
  setInterval(checarAlerta17h, ALERTA_INTERVALO_MS);
  initFirebaseIfConfigured();
  atualizarEstadoEdicaoIntegrante();
}

bootstrap();
