// Variables
const DYNAMIC_DATA_BASE_URL = "https://raw.githubusercontent.com/EonZeNx/soulforge_example/refs/heads/main";
const DYNAMIC_DATA_VERSION = "v1";


// IO functions
function saveCharacterWithData(characterData) {
  if (localStorage.getItem("soulforge_characters")) {
    const characters = JSON.parse(localStorage.getItem("soulforge_characters"));

    characters.push(characterData);
    localStorage.setItem("soulforge_character_id", `${characters.length - 1}`);

    localStorage.setItem("soulforge_characters", JSON.stringify(characters));
    return;
  }

  localStorage.setItem("soulforge_characters", JSON.stringify([characterData]));
}

function saveCharacter(index) {
  if (index === null || index === undefined)
    return;

  const characterData = getCharacterData();
  saveCharacterWithData(characterData);
}

function getCharacterData() {
  const characterData = {};
  const editableElements = document.querySelectorAll('input, select, textarea');

  editableElements.forEach(e => {
    if (!e.name)
      return;

    let data = e.value;
    if (e.type === 'checkbox') {
      data = e.checked;
    }

    characterData[e.name] = data;
  });

  return characterData;
}

function loadCharacter(index) {
  if (localStorage.getItem("soulforge_characters")) {
    const characters = JSON.parse(localStorage.getItem("soulforge_characters"));

    if (characters.length > 0 && characters.length > index) {
      localStorage.setItem("soulforge_character_id", index);
      return characters[index];
    }
  }

  // no character found
  saveCharacter(index);

  return loadCharacter(0);
}

function updateSheet(index) {
  const characterData = loadCharacter(index);
  updateSheetWithData(characterData);
}

function updateSheetWithData(characterData) {
  const editableElements = document.querySelectorAll('input, select, textarea');

  editableElements.forEach(e => {
    if (!e.name)
      return;

    const data = characterData[e.name];
    if (!data) {
      return;
    }

    if (e.type === 'checkbox') {
      e.checked = data;
    }
    else {
      e.value = data;
    }
  });
}

function downloadCharacter() {
  const characterData = getCharacterData();

  const a = document.createElement("a");
  const file = new Blob([JSON.stringify(characterData, null, 2)], { type: "text/plain" });

  a.href = URL.createObjectURL(file);
  a.download = `SoulForge_Character_${characterData.name}.json`;
  a.click();

  URL.revokeObjectURL(a.href);
}

function loadCharacterFromFile() {
  const input = document.getElementById("character_load_file");
  if(!input.files.length) {
    input.click();
    return;
  }

  if(!input.files.length) {
    console.debug("what");
    return;
  }

  const file = input.files[0];
  input.value = null;

  const reader = new FileReader();

  reader.onloadend = e => {
    const characterData = JSON.parse(reader.result);
    saveCharacterWithData(characterData);

    keystoneUpdate();
    kinfolkUpdate();
    updateSheet(getCurrentCharacterIndex());
  };

  reader.readAsText(file);
}

function getCurrentCharacterIndex() {
  return parseInt(localStorage.getItem("soulforge_character_id")) ?? 0;
}


// Keystone stuff
// todo: should really make this a session data thing
let KEYSTONE_DATA = [];

function keystoneUpdate() {
  const selectElement = document.getElementById('character_keystone');

  const temp = loadCharacter(getCurrentCharacterIndex());
  const keystoneId = parseInt(
    selectElement.value === "custom" ? temp.keystone ?? -1 : selectElement.value);

  const filteredKeystoneData = KEYSTONE_DATA.filter(x => x.id === keystoneId) ?? [];
  if (!filteredKeystoneData.length)
  {
    console.error(`failed to find keystone with id ${keystoneId}`);
    return;
  }

  const keystoneData = filteredKeystoneData[0];
  const titleElement = document.getElementById('keystone_title');
  titleElement.textContent = `Keystone: ${keystoneData.name}`;

  const abilityContainer = document.getElementById('keystone_ability_container');
  abilityContainer.textContent = '';

  const abilityTemplate = document.getElementById('ability-template');

  keystoneData.abilities.forEach((ability, i) => {
    const isUltimate = ability.name.startsWith("Ultimate");
    if (isUltimate) {
      i = "ultimate";
    }

    const baseSelector = `keystone_ability_${i}`;

    const abilityInstance = abilityTemplate.cloneNode(true);
    abilityInstance.classList.remove("hidden");

    const keystoneAbilityTitle = abilityInstance.querySelector("#keystone_ability_title");
    keystoneAbilityTitle.id = `${baseSelector}_title`
    keystoneAbilityTitle.textContent = ability.name;

    const keystoneAbilityDescription = abilityInstance.querySelector("#keystone_ability_description");
    keystoneAbilityDescription.id = `${baseSelector}_description`
    keystoneAbilityDescription.textContent = ability.desc;

    const keystoneAbilityExhaust = abilityInstance.querySelector("#keystone_ability_exhaust");
    keystoneAbilityExhaust.id = `${baseSelector}_exhaust`
    keystoneAbilityExhaust.name = `${baseSelector}_exhaust`

    if (isUltimate) {
      abilityInstance.classList.add("col-span-2");
    }

    abilityContainer.appendChild(abilityInstance);
  });
}


// Kinfolk stuff
// todo: should really make this a session data thing
let KINFOLK_DATA = {};

function kinfolkUpdate() {
  const selectElement = document.getElementById('character_kinfolk');

  const characterData = loadCharacter(getCurrentCharacterIndex());
  const kinfolkId = parseInt(
    selectElement.value === "custom" ? characterData.kinfolk ?? -1 : selectElement.value);

  const filteredKinfolkData = KINFOLK_DATA.kinfolk.filter(x => x.id === kinfolkId) ?? [];
  if (!filteredKinfolkData.length)
  {
    console.error(`failed to find kinfolk with id ${kinfolkId}`);
    return;
  }

  const kinfolkData = filteredKinfolkData[0];
  const titleElement = document.getElementById('kinfolk_title');
  titleElement.textContent = `Kinfolk: ${kinfolkData.name}`;


}


// Data load functions
function dynamicDataURL(endpoint) {
  return `${DYNAMIC_DATA_BASE_URL}/${DYNAMIC_DATA_VERSION}/${endpoint}`
}

async function loadAspirationsData() {
  try {
    const aspirationResponse = await fetch(dynamicDataURL("aspirations.json"));
    const aspirations = await aspirationResponse.json();
    console.debug("aspirations", aspirations);

    const selectElement = document.getElementById('character_aspiration');
    aspirations.forEach(aspiration => {
      const option = document.createElement('option');
      option.value = aspiration.id;
      option.innerHTML = `<strong>${aspiration.name}:</strong> <span style="font-style: italic">${aspiration.desc}</span>`;
      selectElement.appendChild(option);
    });
  }
  catch(e) {
    console.error(e);
  }
}

async function loadCoreValuesData() {
  try {
    const coreValuesResponse = await fetch(dynamicDataURL("core_values.json"));
    const coreValues = await coreValuesResponse.json();
    console.debug("coreValues", coreValues);

    const selectElement = document.getElementById('character_core_value');
    coreValues.forEach(coreValue => {
      const option = document.createElement('option');
      option.value = coreValue.id;
      option.innerHTML = `<strong>${coreValue.name}:</strong> <span style="font-style: italic">${coreValue.desc}</span>`;
      selectElement.appendChild(option);
    });
  }
  catch(e) {
    console.error(e);
  }
}

async function loadVicesData() {
  try {
    const vicesResponse = await fetch(dynamicDataURL("vices.json"));
    const vices = await vicesResponse.json();
    console.debug("vices", vices);

    const selectElement = document.getElementById('character_vice');
    vices.forEach(vice => {
      const option = document.createElement('option');
      option.value = vice.id;
      option.innerHTML = `<strong>${vice.name}:</strong> <span style="font-style: italic">${vice.desc}</span>`;
      selectElement.appendChild(option);
    });
  }
  catch(e) {
    console.error(e);
  }
}

async function loadKeystoneData() {
  try {
    const keystonesResponse = await fetch(dynamicDataURL("keystones.json"));
    KEYSTONE_DATA = await keystonesResponse.json();
    console.debug("KEYSTONE_DATA", KEYSTONE_DATA);

    const selectElement = document.getElementById('character_keystone');
    KEYSTONE_DATA.forEach(keystone => {
      const option = document.createElement('option');
      option.value = keystone.id;
      option.innerHTML = keystone.name;
      selectElement.appendChild(option);
    });
  }
  catch(e) {
    console.error(e);
  }
}

async function loadKinfolkData() {
  try {
    const kinfolkResponse = await fetch(dynamicDataURL("kinfolk.json"));
    KINFOLK_DATA = await kinfolkResponse.json();
    console.debug("KINFOLK_DATA", KINFOLK_DATA);

    const selectElement = document.getElementById('character_kinfolk');
    KINFOLK_DATA.kinfolk.forEach(kinfolk => {
      const option = document.createElement('option');
      option.value = kinfolk.id;
      option.innerHTML = kinfolk.name;
      selectElement.appendChild(option);
    });
  }
  catch(e) {
    console.error(e);
  }
}

async function loadDynamicData() {
  await loadAspirationsData();
  await loadCoreValuesData();
  await loadVicesData();
  await loadKeystoneData();
  await loadKinfolkData();
}


// Meta functions
function onPageLoad() {
  loadDynamicData()
    .then(() => {
      const index = getCurrentCharacterIndex();
      keystoneUpdate();
      kinfolkUpdate();
      updateSheet(index);

      bindAllCharacterInputs();
    });
}

function characterPropertyUpdated(event) {
  const e = event.target;
  if (!e.id.startsWith("character_") && !e.id.startsWith("keystone_")) {
    return;
  }

  const index = getCurrentCharacterIndex();
  saveCharacter(index);
}

function bindCharacterInputs(elements) {
  elements.forEach(e => {
    e.addEventListener('change', characterPropertyUpdated);
  });
}

function bindAllCharacterInputs() {
  const editableElements = document.querySelectorAll('input, select, textarea');
  bindCharacterInputs(editableElements);
}

















