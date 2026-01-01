// ECU ME17.9.11.1 Pin Definitions
// Based on standard Kia/Hyundai 94-pin connector layout research
const pinData = [];

// Initialize 94 pins with default values first
for (let i = 1; i <= 94; i++) {
    pinData.push({
        id: i,
        number: i,
        type: 'unused', // Default
        name: 'Pin Desasignado / Reservado',
        description: '',
        details: ''
    });
}

// Update specific pins based on ME17.9.11.1 research and user image
// Pin Data Configuration
const knownPins = [
    // 1-94 Full List (Strict Pins from User Request + Image Translation for General Table)
    { id: 1, type: 'coil', name: 'Bobina Cil 1 (1.6L), Cil 1,4 (1.4L)' },
    { id: 2, type: 'gnd', name: 'Masa / Tierra' },
    { id: 3, type: 'coil', name: 'Bobina Cil 3 (1.6L), Cil 2,3 (1.4L)' },
    { id: 6, type: 'r-ppal-pos', name: 'Entrada Relé Principal (Encendido)' },
    { id: 7, type: 'coil', name: 'Bobina Cil 4 (1.6L)' },
    { id: 8, type: '-', name: 'Entrada Presostato A/A' },
    { id: 10, type: '-', name: 'Señal Interruptor Dirección Asistida' },
    { id: 11, type: '-', name: 'Sensor Detonación "A"' },
    { id: 12, type: '-', name: 'Masa Sensor TPS' },
    { id: 15, type: 'testigo-masa', name: 'Masa de Sensores' },
    { id: 16, type: '-', name: 'Masa Sonda Lambda (Post)' },
    { id: 17, type: '-', name: 'Masa Sensor Fase (CMP)' },
    { id: 18, type: 'module', name: 'Línea Inmovilizador' },
    { id: 19, type: '-', name: 'Sensor MAP' },
    { id: 22, type: 'r-ppal-neg', name: 'Control Relé Principal' },
    { id: 23, type: '-', name: 'Control Relé Electroventilador (Alta)' },
    { id: 24, type: 'injector', name: 'Control Inyector #3' },
    { id: 25, type: '-', name: 'Válvula ISCA (Cerrar)' },
    { id: 28, type: '-', name: 'Control Relé Electroventilador (Baja)' },
    { id: 29, type: 'coil', name: 'Bobina Cil 2 (1.6L)' },
    { id: 30, type: '-', name: 'Señal A/A "ON"' },
    { id: 31, type: '-', name: 'Interruptor Luces Principales' },
    { id: 32, type: '-', name: 'Sensor Detonación "B"' },
    { id: 33, type: '-', name: 'Masa Transductor Presión A/A' },
    { id: 35, type: 'testigo-masa', name: 'Masa de Sensores' },
    { id: 36, type: '-', name: 'Señal Sonda Lambda (Post)' },
    { id: 38, type: '-', name: 'Masa Sonda Lambda (Pre)' },
    { id: 39, type: '-', name: 'Señal Sensor TPS' },
    { id: 40, type: '-', name: 'Señal Transductor Presión A/A' },
    { id: 43, type: '-', name: 'Sensor temperatura aire admisión (IATS)' },
    { id: 45, type: '-', name: 'Control Relé A/A' },
    { id: 46, type: 'pump', name: 'Control Relé Bomba Combustible' },
    { id: 47, type: 'injector', name: 'Control Inyector #2' },
    { id: 48, type: 'module', name: 'Salida Luz Testigo Inmovilizador' },
    { id: 51, type: 'gnd', name: 'Masa / Tierra' },
    { id: 54, type: '-', name: 'Señal Sonda Lambda (Pre)' },
    { id: 58, type: '-', name: 'Entrada Velocidad Rueda "A"' },
    { id: 59, type: '-', name: 'Alim. Transductor Presión A/A' },
    { id: 60, type: '-', name: 'Alim. Sensor TPS' },
    { id: 62, type: '-', name: 'CAN (Low)' },
    { id: 63, type: 'phase', name: 'Señal Sensor Fase (CMP)' },
    { id: 64, type: '-', name: 'Señal Velocidad Vehículo' },
    { id: 66, type: '-', name: 'Señal Relé Desempañador "ON"' },
    { id: 67, type: '-', name: 'Salida Señal RPM a Tacómetro' },
    { id: 68, type: 'injector', name: 'Control Inyector #4' },
    { id: 69, type: '-', name: 'Control Válvula PCSV (Canister)' },
    { id: 70, type: '-', name: 'Salida Luz Testigo Mil (Check Engine)' },
    { id: 71, type: '-', name: 'Calefacción Sonda Lambda (Post)' },
    { id: 72, type: '-', name: 'Calefacción Sonda Lambda (Pre)' },
    { id: 73, type: 'gnd', name: 'Masa / Tierra' },
    { id: 77, type: '-', name: 'Señal Sensor' },
    { id: 79, type: '-', name: 'Entrada Velocidad Rueda "B"' },
    { id: 81, type: 'testigo-5v', name: 'Alim. Sensores 5V' },
    { id: 82, type: '12v', name: 'Batería (+30)' },
    { id: 83, type: 'ign', name: 'Entrada Ignición/Arranque (+15)' },
    { id: 84, type: '-', name: 'CAN (High)' },
    { id: 86, type: 'ckp-minus', name: 'Sensor Posición Cigüeñal (CKP) "B"' },
    { id: 87, type: 'ckp-plus', name: 'Sensor Posición Cigüeñal (CKP) "A"' },
    { id: 88, type: '-', name: 'Salida Señal Consumo Corriente' },
    { id: 90, type: '-', name: 'Válvula ISCA (Abrir)' },
    { id: 91, type: 'injector', name: 'Control Inyector #1' },
    { id: 92, type: '-', name: 'Válvula Control Aceite CVVT' },

];

knownPins.forEach(p => {
    const existing = pinData.find(pd => pd.number === p.id);
    if (existing) {
        existing.type = p.type;
        existing.name = p.name;
    }
});

// DOM Elements
const gridContainer = document.getElementById('connector-grid');
const listContainer = document.getElementById('pin-list');
const generalTableContainer = document.getElementById('general-pin-table');
const searchInput = document.getElementById('search-pin');
const ecuSelector = document.getElementById('ecu-selector');

// Render Grid
function renderGrid() {
    if (!gridContainer) return;
    gridContainer.innerHTML = '';
    gridContainer.className = 'connector-grid';

    // 1. Power Section (Left Block)
    const powerPinIds = [5, 6, 3, 4, 1, 2];

    const powerSection = document.createElement('div');
    powerSection.className = 'connector-section power-section';

    powerPinIds.forEach(id => {
        const pin = pinData.find(p => p.number === id);
        const pinEl = document.createElement('div');
        pinEl.className = `pin pin-large type-${pin.type}`;
        pinEl.textContent = id;

        pinEl.dataset.id = id;
        pinEl.title = `${pin.number}: ${pin.name}`;
        pinEl.addEventListener('mouseenter', () => highlightPin(id));
        powerSection.appendChild(pinEl);
    });
    gridContainer.appendChild(powerSection);

    // 2. Signal Section (Right Block)
    const signalSection = document.createElement('div');
    signalSection.className = 'connector-section signal-section';

    // Top Group: Row 1 (73-94) and Row 2 (51-72)
    const topRowGroup = document.createElement('div');
    topRowGroup.className = 'signal-row-group';

    // Row 1: 73 to 94
    for (let i = 73; i <= 94; i++) {
        createSignalPin(i, topRowGroup);
    }
    // Row 2: 51 to 72
    for (let i = 51; i <= 72; i++) {
        createSignalPin(i, topRowGroup);
    }
    signalSection.appendChild(topRowGroup);

    // Separator
    const separator = document.createElement('div');
    separator.className = 'signal-separator';
    separator.innerHTML = `
        <div class="separator-dash"></div>
        <div class="separator-dash"></div>
        <div class="separator-dash"></div>
        <div class="separator-dash"></div>
    `;
    signalSection.appendChild(separator);

    // Bottom Group: Row 3 (29-50) and Row 4 (7-28)
    const botRowGroup = document.createElement('div');
    botRowGroup.className = 'signal-row-group';

    // Row 3: 29 to 50
    for (let i = 29; i <= 50; i++) {
        createSignalPin(i, botRowGroup);
    }
    // Row 4: 7 to 28
    for (let i = 7; i <= 28; i++) {
        createSignalPin(i, botRowGroup);
    }
    signalSection.appendChild(botRowGroup);

    gridContainer.appendChild(signalSection);
}

function createSignalPin(id, container) {
    const pin = pinData.find(p => p.number === id);
    if (!pin) return;

    const pinEl = document.createElement('div');
    pinEl.className = `pin pin-small type-${pin.type}`;
    pinEl.textContent = id;

    pinEl.dataset.id = id;
    pinEl.title = `${pin.number}: ${pin.name}`;
    pinEl.addEventListener('mouseenter', () => highlightPin(id));
    container.appendChild(pinEl);
}

// Render Summary Table
function renderSummaryTable() {
    const tableBody = document.getElementById('summary-table-body');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    // Group pins EXACTLY by user request
    const groupings = [
        { label: 'Bateria (+30)', type: '12v', colorClass: 'type-12v' },
        { label: 'GND', type: 'gnd', colorClass: 'type-gnd' },
        { label: 'Ignición (+15)', type: 'ign', colorClass: 'type-ign' },
        { label: 'R.PPAL-', type: 'r-ppal-neg', colorClass: 'type-r-ppal-neg' },
        { label: 'R.PPAL+', type: 'r-ppal-pos', colorClass: 'type-r-ppal-pos' },
        { label: 'Hall', type: 'hall', colorClass: 'type-hall' },
        { label: 'Bomba', type: 'pump', colorClass: 'type-pump' },
        { label: 'Inyectores', type: 'injector', colorClass: 'type-injector' },
        { label: 'Bobinas', type: 'coil', colorClass: 'type-coil' },
        { label: 'Modulos', type: 'module', colorClass: 'type-module' },
        { label: 'CKP RPM+', type: 'ckp-plus', colorClass: 'type-ckp-plus' },
        { label: 'CKP RPM-', type: 'ckp-minus', colorClass: 'type-ckp-minus' },
        { label: 'Fase', type: 'phase', colorClass: 'type-phase' },
        { label: 'Testigo 5v', type: 'testigo-5v', colorClass: 'type-testigo-5v' },
        { label: 'Testigo Masa', type: 'testigo-masa', colorClass: 'type-testigo-masa' }
    ];

    // Filter pinData for each group
    groupings.forEach(group => {
        // Allow multiple types or single type
        const pins = pinData.filter(p => {
            if (Array.isArray(group.type)) return group.type.includes(p.type);
            return p.type === group.type;
        }).sort((a, b) => a.number - b.number);

        const row = document.createElement('tr');
        row.className = 'summary-row';
        row.dataset.type = group.type;
        row.dataset.pins = pins.map(p => p.number).join(',');

        // Highlight logic interaction
        row.addEventListener('mouseenter', () => {
            highlightPins(pins.map(p => p.number)); // NEW
        });
        row.addEventListener('mouseleave', () => removeHighlight());

        // Function Column
        const funcCell = document.createElement('td');
        funcCell.textContent = group.label;
        row.appendChild(funcCell);

        // Color Column
        const colorCell = document.createElement('td');
        const badge = document.createElement('div');
        badge.className = `pin-badge ${group.colorClass}`;
        badge.style.width = '24px';
        badge.style.height = '24px';
        badge.style.borderRadius = '4px';
        colorCell.appendChild(badge);
        row.appendChild(colorCell);

        // Pin List Column
        const pinCell = document.createElement('td');
        if (pins.length > 0) {
            pinCell.textContent = pins.map(p => p.number).join(', ');
        } else {
            pinCell.textContent = 'None';
            pinCell.style.color = '#475569';
        }
        row.appendChild(pinCell);

        tableBody.appendChild(row);
    });
}

function updateEcuTitle() {
    const ecuTitle = document.getElementById('ecu-title'); // Define locally if needed, or global
    if (ecuTitle && ecuSelector) {
        ecuTitle.textContent = ecuSelector.options[ecuSelector.selectedIndex].text;
    }
}


// New Function: Render General Table
function renderGeneralTable() {
    if (!generalTableContainer) return;
    generalTableContainer.innerHTML = '';

    // Create 3 columns
    const colRanges = [
        { start: 1, end: 32 },
        { start: 33, end: 64 },
        { start: 65, end: 94 }
    ];

    colRanges.forEach(range => {
        const column = document.createElement('div');
        column.className = 'general-table-column';

        for (let i = range.start; i <= range.end; i++) {
            const pin = pinData.find(p => p.number === i);
            if (!pin) continue;

            const row = document.createElement('div');
            row.className = 'gen-table-row';
            row.dataset.pinId = i;

            // Pin Number
            const numDiv = document.createElement('div');
            numDiv.className = `gen-pin-num type-${pin.type}`;
            numDiv.textContent = i;

            // Description - UPDATED TO USE NAME
            const descDiv = document.createElement('div');
            descDiv.className = `gen-pin-desc ${pin.type === 'unused' ? 'unused' : ''}`;
            descDiv.textContent = pin.name || '-';

            row.addEventListener('mouseenter', () => highlightPin(i));

            row.appendChild(numDiv);
            row.appendChild(descDiv);
            column.appendChild(row);
        }
        generalTableContainer.appendChild(column);
    });
}

// Interaction
function highlightPin(id) {
    highlightPins([id]);
}

function highlightPins(ids) {
    // 1. Reset all highlights
    removeHighlight();

    if (!ids || ids.length === 0) return;

    // 2. Highlight Grid Pins
    ids.forEach(id => {
        const targetPin = document.querySelector(`.pin[data-id="${id}"]`);
        if (targetPin) targetPin.classList.add('active');
    });

    // 3. Highlight General Table Rows
    // Improve performance by selecting all rows once if possible, or querying specifically
    // Since ids list is small (usually), querySelectorAll is fine for resetting in removeHighlight
    // Here we need to find specific rows.
    ids.forEach(id => {
        const genRow = document.querySelector(`.gen-table-row[data-pin-id="${id}"]`);
        if (genRow) {
            genRow.style.background = 'rgba(56, 189, 248, 0.2)';
        }
    });

    // 4. Highlight Summary Row (Only if single ID or user wants to see which group it belongs to)
    // If multiple IDs are passed (group hover), we probably already are hovering the row.
    // But if we hover a specific pin, we might want to highlight the group row.
    // Let's stick to the previous logic: if ANY of the ids match a row, highlight it?
    // Actually, distinct highlighting for "Group Hover" vs "Single Pin Hover" might be better.

    // For now, if single ID, highlight the summary row containing it.
    if (ids.length === 1) {
        const rows = document.querySelectorAll('.summary-row');
        const targetRow = Array.from(rows).find(row => {
            const rowPins = row.dataset.pins ? row.dataset.pins.split(',') : [];
            return rowPins.includes(String(ids[0]));
        });
        if (targetRow) targetRow.classList.add('active');
    }
}


function removeHighlight() {
    document.querySelectorAll('.pin').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.summary-row').forEach(r => r.classList.remove('active'));
    document.querySelectorAll('.gen-table-row').forEach(r => r.style.background = '');
}

// Init
renderGrid();
renderSummaryTable();
renderGeneralTable();
updateEcuTitle();
