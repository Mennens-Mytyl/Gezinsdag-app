// === ACTIVITEITEN EN MARKERS ===
const activities = [
  { id: 0,  title: 'Ontvangst', description: 'Welkom bij de Gezinsdag!' },
  { id: 1,  title: 'Fotobooth', description: 'Maak een leuke foto!' },
  { id: 2,  title: 'Bingo', description: 'Doe mee met de bingo en win prijzen!' },
  { id: 3,  title: 'Gamen met Mark', description: 'Iedereen kan gamen.' },
  { id: 4,  title: 'Gamen met Mark', description: 'Iedereen kan gamen.' },
  { id: 6,  title: 'Drummen met Dave', description: 'Leer drummen met Dave.' },
  { id: 7,  title: 'Dans', description: 'Dansworkshop voor iedereen.' },
  { id: 8,  title: 'Kunst met Chocolade', description: 'Maak kunst met chocolade.' },
  { id: 9,  title: 'MR', description: 'Meer informatie over de Medezeggenschapsraad.' },
  { id: 10, title: 'Lotte & Max', description: 'Een voorstelling van Lotte & Max.' },
  { id: 11, title: 'Schminken en tattoos', description: 'Laat je schminken of zet een tattoo.' },
  { id: 12, title: 'Muziek met Monique', description: 'Muziekworkshop met Monique.' },
  { id: 13, title: 'Mantelzorgers', description: 'Informatiepunt voor mantelzorgers.' },
  { id: 14, title: 'Zandtekenaar', description: 'Bekijk de zandtekenaar in actie.' },
  { id: 15, title: 'Kunst met Katja', description: 'Kunstworkshop met Katja.' },
  { id: 16, title: 'Reptielenshow', description: 'Ontmoet reptielen van dichtbij.' },
  { id: 17, title: 'Tiuri', description: 'Doe mee met het belevingstheater van Tiuri.'},
  { id: 18, title: 'Rustplek', description: 'Even ontspannen op de rustplek.' },
  { id: 19, title: 'Clini Clowns', description: 'Clini Clowns lopen rond en hebben een eigen kraampje met meer informatie.' },
  { id: 20, title: 'Frietkraam', description: 'Haal een frietje bij de frietkraam (tot 15.45).' },
  { id: 21, title: 'Springkussen', description: 'Springkussen op het Cruijff court.' },
  { id: 22, title: 'Bar/Popcorn/Suikerspin', description: 'Haal iets lekkers bij de bar.' },
];

// Voorbeeld markerposities (x/y als percentage van de kaartafbeelding)
let markers = [
    {
      "activityId": 0,
      "x": 0.32731512827002673,
      "y": 0.8267104420646909
    },
    {
      "activityId": 1,
      "x": 0.28035413037873047,
      "y": 0.6412559188227416
    },
    {
      "activityId": 2,
      "x": 0.27729145660321114,
      "y": 0.5409516820405869
    },
    {
      "activityId": 3,
      "x": 0.17979634141584608,
      "y": 0.5402300688263267
    },
    {
      "activityId": 4,
      "x": 0.17469188512331388,
      "y": 0.3800319352605832
    },
    {
      "activityId": 6,
      "x": 0.15886807061646405,
      "y": 0.12963214991232647
    },
    {
      "activityId": 7,
      "x": 0.2834168041542498,
      "y": 0.25807930205062535
    },
    {
      "activityId": 8,
      "x": 0.404392418287263,
      "y": 0.3381783688334971
    },
    {
      "activityId": 9,
      "x": 0.4741652246362879,
      "y": 0.3447494790250974
    },
    {
      "activityId": 10,
      "x": 0.6713554823866972,
      "y": 0.38869129383170453
    },
    {
      "activityId": 11,
      "x": 0.6540003309920878,
      "y": 0.5055926345418417
    },
    {
      "activityId": 12,
      "x": 0.6565525591383539,
      "y": 0.6196075223949384
    },
    {
      "activityId": 13,
      "x": 0.6917811174139747,
      "y": 0.7801837595863148
    },
    {
      "activityId": 14,
      "x": 0.47381302386570096,
      "y": 0.8252672884590686
    },
    {
      "activityId": 15,
      "x": 0.4049028639165162,
      "y": 0.824545602612606
    },
    {
      "activityId": 16,
      "x": 0.9406219483164021,
      "y": 0.5620534477127881
    },
    {
      "activityId": 17,
      "x": 0.9465619455097177,
      "y": 0.8655068593648454
    },
    {
      "activityId": 18,
      "x": 0.947018868370742,
      "y": 0.9197667369653459
    },
    {
      "activityId": 19,
      "x": 0.4988248596991087,
      "y": 0.514251993112963
    },
    {
      "activityId": 20,
      "x": 0.85409501765935,
      "y": 0.7567140331043586
    },
    {
      "activityId": 21,
      "x": 0.2808645760079837,
      "y": 0.12818892348380626
    },
    {
      "activityId": 22,
      "x": 0.35845231165447317,
      "y": 0.5712594370395113
    }
  ];

const mapImg = document.getElementById('map-image');
const markersLayer = document.getElementById('markers-layer');
const activityList = document.getElementById('activity-list');
const popup = document.getElementById('popup');
const adminBtn = document.getElementById('admin-toggle');

let adminMode = false;
let selectedMarkerIdx = null;
let draggingMarkerIdx = null;
let dragOffset = { x: 0, y: 0 };
let mapPan = { x: 0, y: 0 };
let mapZoom = 1;
let lastTouchDist = null;
let panStart = null;

// === HAMBURGER MENU & ZIJMENU ===
const hamburgerBtn = document.getElementById('hamburger-menu');
const sideMenu = document.getElementById('side-menu');
const menuOverlay = document.getElementById('menu-overlay');
const sideActivityList = document.getElementById('side-activity-list');
const closeMenuBtn = document.getElementById('close-menu');

window.addEventListener('DOMContentLoaded', () => {
  renderActivityList();
  renderMarkers();
  setupMapPanZoom();
  adminBtn.addEventListener('click', toggleAdminMode);
  hamburgerBtn.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', closeMenu);
});

function renderActivityList() {
  activityList.innerHTML = '';
  activities.forEach(act => {
    const el = document.createElement('div');
    el.className = 'activity-item';
    el.textContent = `${act.id}. ${act.title}`;
    el.title = act.description;
    el.addEventListener('click', () => {
      selectMarkerByActivity(act.id);
    });
    activityList.appendChild(el);
  });
}
function selectMarkerByActivity(activityId) {
  const idx = markers.findIndex(m => m.activityId === activityId);
  if (idx !== -1) {
    selectedMarkerIdx = idx;
    renderMarkers();
    showPopupForMarker(idx);
    highlightActivity(activityId);
  }
}
function highlightActivity(activityId) {
  [...activityList.children].forEach(el => {
    el.classList.toggle('selected', el.textContent.startsWith(activityId + '.'));
  });
}

function setMarkersLayerSize() {
  // Zorg dat markers-layer exact over de afbeelding ligt
  const rect = mapImg.getBoundingClientRect();
  markersLayer.style.width = mapImg.offsetWidth + 'px';
  markersLayer.style.height = mapImg.offsetHeight + 'px';
  markersLayer.style.left = mapImg.offsetLeft + 'px';
  markersLayer.style.top = mapImg.offsetTop + 'px';
}

function renderMarkers() {
  setMarkersLayerSize();
  markersLayer.innerHTML = '';
  markers.forEach((marker, idx) => {
    const act = activities.find(a => a.id === marker.activityId);
    if (!act) return;
    const el = document.createElement('div');
    el.className = 'marker' + (adminMode ? ' admin' : '') + (selectedMarkerIdx === idx ? ' selected' : '');
    // Marker positie relatief aan markers-layer (dus afbeelding)
    el.style.left = (marker.x * mapImg.offsetWidth) + 'px';
    el.style.top = (marker.y * mapImg.offsetHeight) + 'px';
    el.textContent = act.id;
    el.title = act.title;
    el.style.transform = `translate(-50%, -50%)`;
    if (adminMode) {
      el.addEventListener('mousedown', e => startDragMarker(idx, e));
      el.addEventListener('touchstart', e => startDragMarker(idx, e));
    } else {
      el.addEventListener('click', e => {
        e.stopPropagation();
        selectedMarkerIdx = idx;
        renderMarkers();
        showPopupForMarker(idx);
        highlightActivity(marker.activityId);
      });
    }
    markersLayer.appendChild(el);
  });
  renderAdminPanel();
}

function showPopupForMarker(idx) {
  const marker = markers[idx];
  const act = activities.find(a => a.id === marker.activityId);
  if (!act) return;
  popup.innerHTML = `<button class="close-btn" onclick="hidePopup()">×</button>
    <strong>${act.title}</strong><br><span>${act.description}</span>`;
  popup.classList.remove('hidden');
}
function hidePopup() {
  popup.classList.add('hidden');
  selectedMarkerIdx = null;
  renderMarkers();
  highlightActivity(-1);
}
window.hidePopup = hidePopup;

function toggleAdminMode() {
  adminMode = !adminMode;
  adminBtn.classList.toggle('active', adminMode);
  hidePopup();
  renderMarkers();
  if (adminMode) {
    adminBtn.textContent = '⚙️';
    adminBtn.title = 'Admin modus actief';
  } else {
    adminBtn.textContent = '🛠️';
    adminBtn.title = 'Admin modus aan/uit';
  }
}

function renderAdminPanel() {
  let panel = document.getElementById('admin-panel');
  if (panel) panel.remove();
  if (!adminMode) return;
  panel = document.createElement('div');
  panel.id = 'admin-panel';
  panel.style.position = 'fixed';
  panel.style.left = '50%';
  panel.style.bottom = '5.5rem';
  panel.style.transform = 'translateX(-50%)';
  panel.style.background = '#fff';
  panel.style.borderRadius = '1rem';
  panel.style.boxShadow = '0 2px 12px #0002';
  panel.style.padding = '0.7rem 1.2rem';
  panel.style.zIndex = 300;
  panel.style.display = 'flex';
  panel.style.gap = '1rem';
  panel.innerHTML = `<button id="show-coords-btn">Toon coördinaten</button>`;
  document.body.appendChild(panel);
  document.getElementById('show-coords-btn').onclick = showCoordsPopup;
}

function showCoordsPopup() {
  let popup = document.getElementById('coords-popup');
  if (popup) popup.remove();
  popup = document.createElement('div');
  popup.id = 'coords-popup';
  popup.style.position = 'fixed';
  popup.style.left = '50%';
  popup.style.top = '50%';
  popup.style.transform = 'translate(-50%,-50%)';
  popup.style.background = '#fff';
  popup.style.borderRadius = '1rem';
  popup.style.boxShadow = '0 4px 32px #0005';
  popup.style.padding = '1.2rem 1.2rem 1.2rem 1.2rem';
  popup.style.zIndex = 9999;
  popup.style.maxWidth = '95vw';
  popup.style.width = '420px';
  popup.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.7rem;">
      <strong>Coördinaten markers</strong>
      <button id="close-coords-popup" style="font-size:1.3rem;background:none;border:none;cursor:pointer;">×</button>
    </div>
    <textarea id="coords-json" style="width:100%;height:180px;font-size:0.98rem;">${JSON.stringify(markers, null, 2)}</textarea>
    <button id="copy-coords-btn" style="margin-top:0.7rem;">Kopieer naar klembord</button>
  `;
  document.body.appendChild(popup);
  document.getElementById('close-coords-popup').onclick = () => popup.remove();
  document.getElementById('copy-coords-btn').onclick = () => {
    const ta = document.getElementById('coords-json');
    ta.select();
    document.execCommand('copy');
    document.getElementById('copy-coords-btn').textContent = 'Gekopieerd!';
    setTimeout(() => document.getElementById('copy-coords-btn').textContent = 'Kopieer naar klembord', 1200);
  };
}

// === MARKER DRAGGEN (ADMIN) ===
function startDragMarker(idx, e) {
  if (!adminMode) return;
  draggingMarkerIdx = idx;
  document.body.style.cursor = 'grabbing';
  e.preventDefault();
}
function stopDragMarker() {
  draggingMarkerIdx = null;
  document.body.style.cursor = '';
}
function moveMarker(e) {
  if (draggingMarkerIdx === null) return;
  const rect = mapImg.getBoundingClientRect();
  let clientX, clientY;
  if (e.touches) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  let x = (clientX - rect.left) / rect.width;
  let y = (clientY - rect.top) / rect.height;
  x = Math.max(0, Math.min(1, x));
  y = Math.max(0, Math.min(1, y));
  markers[draggingMarkerIdx].x = x;
  markers[draggingMarkerIdx].y = y;
  renderMarkers();
}

// === MAP PAN/ZOOM ===
function setupMapPanZoom() {
  let isPanning = false;
  let start = { x: 0, y: 0 };

  mapImg.parentElement.addEventListener('mousedown', e => {
    if (adminMode) return;
    isPanning = true;
    start = { x: e.clientX - mapPan.x, y: e.clientY - mapPan.y };
  });
  window.addEventListener('mousemove', e => {
    if (isPanning) {
      mapPan.x = e.clientX - start.x;
      mapPan.y = e.clientY - start.y;
      updateMapTransform();
    }
    if (draggingMarkerIdx !== null && adminMode) moveMarker(e);
  });
  window.addEventListener('mouseup', e => {
    if (isPanning) {
      clampPan();
      updateMapTransform();
    }
    isPanning = false;
    if (draggingMarkerIdx !== null && adminMode) stopDragMarker();
  });
  // Touch
  mapImg.parentElement.addEventListener('touchstart', e => {
    if (adminMode && e.target.classList.contains('marker')) {
      // handled by marker
    } else if (e.touches.length === 1) {
      isPanning = true;
      start = { x: e.touches[0].clientX - mapPan.x, y: e.touches[0].clientY - mapPan.y };
    } else if (e.touches.length === 2) {
      lastTouchDist = getTouchDist(e);
    }
  });
  mapImg.parentElement.addEventListener('touchmove', e => {
    if (isPanning && e.touches.length === 1) {
      mapPan.x = e.touches[0].clientX - start.x;
      mapPan.y = e.touches[0].clientY - start.y;
      updateMapTransform();
    } else if (e.touches.length === 2) {
      const dist = getTouchDist(e);
      if (lastTouchDist) {
        const delta = dist / lastTouchDist;
        mapZoom = Math.max(0.5, Math.min(2.5, mapZoom * delta));
        updateMapTransform();
      }
      lastTouchDist = dist;
    }
  }, { passive: false });
  window.addEventListener('touchend', e => {
    if (isPanning) {
      clampPan();
      updateMapTransform();
    }
    isPanning = false;
    if (draggingMarkerIdx !== null && adminMode) stopDragMarker();
    lastTouchDist = null;
  });
  // Zoom met muiswiel
  mapImg.parentElement.addEventListener('wheel', e => {
    if (adminMode) return;
    e.preventDefault();
    const delta = e.deltaY < 0 ? 1.1 : 0.9;
    mapZoom = Math.max(0.5, Math.min(2.5, mapZoom * delta));
    updateMapTransform();
  });
}
function updateMapTransform() {
  mapImg.style.transform = `translate(${mapPan.x}px,${mapPan.y}px) scale(${mapZoom})`;
  markersLayer.style.transform = mapImg.style.transform;
}
function getTouchDist(e) {
  const [a, b] = e.touches;
  return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
}

function clampPan() {
  // Geen beperking meer: panning is volledig vrij
}

mapImg.parentElement.addEventListener('click', e => {
  if (!e.target.classList.contains('marker')) hidePopup();
});
window.addEventListener('resize', () => {
  setMarkersLayerSize();
  renderMarkers();
});
mapImg.addEventListener('load', () => {
  setMarkersLayerSize();
  renderMarkers();
});

function openMenu() {
  sideMenu.classList.add('open');
  sideMenu.classList.remove('hidden');
  menuOverlay.classList.remove('hidden');
  renderSideActivityList();
}
function closeMenu() {
  sideMenu.classList.remove('open');
  setTimeout(() => sideMenu.classList.add('hidden'), 300);
  menuOverlay.classList.add('hidden');
}

function renderSideActivityList() {
  sideActivityList.innerHTML = '';
  activities.forEach(act => {
    const el = document.createElement('div');
    el.className = 'side-activity-item';
    el.textContent = `${act.id}. ${act.title}`;
    el.title = act.description;
    if (selectedMarkerIdx !== null && markers[selectedMarkerIdx]?.activityId === act.id) {
      el.classList.add('selected');
    }
    el.addEventListener('click', () => {
      selectMarkerByActivity(act.id);
      closeMenu();
    });
    sideActivityList.appendChild(el);
  });
}
