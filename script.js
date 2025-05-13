document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const activities = [
        { id: 0, number: 0, name: "Ontvangst", description: "Welkom", locationKey: 'loc_0' },
        { id: 1, number: 1, name: "Fotobooth", description: "Maak leuke foto's!", locationKey: 'loc_1' },
        { id: 2, number: 2, name: "Bingo", description: "Speel bingo en win prijzen.", locationKey: 'loc_2' },
        { id: 3, number: '3 & 4', name: "Gamen met Mark", description: "Gamen voor iedereen.", locationKey: 'loc_3_4' },
        { id: 6, number: 6, name: "Drummen met Dave", description: "Laat je ritme horen!", locationKey: 'loc_6' },
        { id: 7, number: 7, name: "Dans", description: "Dans met Adil & Anne-Fleur.", locationKey: 'loc_7' },
        { id: 8, number: 8, name: "Kunst met Chocolade", description: "Creatief met chocolade.", locationKey: 'loc_8' },
        { id: 10, number: 10, name: "Lotte & Max", description: "Activiteit met Lotte & Max.", locationKey: 'loc_10' },
        { id: 11, number: 11, name: "Schminken en tattoos", description: "Laat je schminken of een coole tattoo zetten.", locationKey: 'loc_11' },
        { id: 12, number: 12, name: "Muziek met Monique", description: "Geniet van live muziek.", locationKey: 'loc_12' },
        { id: 13, number: 13, name: "Mantelzorgers", description: "Informatie en ondersteuning voor mantelzorgers.", locationKey: 'loc_13' },
        { id: 14, number: 14, name: "Zandtekenaar", description: "Bewonder de kunst van de zandtekenaar.", locationKey: 'loc_14' },
        { id: 15, number: 15, name: "Kunst met Katja", description: "Maak je eigen kunstwerk.", locationKey: 'loc_15' },
        { id: 16, number: 16, name: "Reptielenshow", description: "Bekijk de spannende reptielenshow.", locationKey: 'loc_16' },
        { id: 17, number: 17, name: "Rustplek", description: "Even bijkomen in de rustplek.", locationKey: 'loc_17' },
        { id: 18, number: 18, name: "Klankschalen", description: "Ontspan bij de klankschalensessie.", locationKey: 'loc_18' },
        { id: 19, number: 19, name: "Clini Clowns", description: "Ontmoet de Clini Clowns bij hun kraampje!", locationKey: 'loc_19_gang' },
        { id: 20, number: 20, name: "Frietkraam", description: "Haal een lekker frietje buiten.", locationKey: 'loc_20_buiten' },
        { id: 21, number: 21, name: "Springkussen", description: "Spring en speel op het springkussen buiten.", locationKey: 'loc_21_buiten' },
        { id: 22, number: 22, name: "Bar/Popcorn/Suikerspin", description: "Haal hier drinken, popcorn of een suikerspin.", locationKey: 'loc_22_bar' }
    ];

    const locationsData = {
        loc_0: {
            top: '83.0%',
            left: '33.0%',
            number: 'O'
        },
        loc_1: {
            top: '64.3%',
            left: '28.8%',
            number: '1'
        },
        loc_2: {
            top: '53.7%',
            left: '28.5%',
            number: '2'
        },
        loc_3_4: [
            {
                top: '38.6%',
                left: '18.0%',
                number: '4'
            },
            {
                top: '54.4%',
                left: '18.2%',
                number: '3'
            }
        ],
        loc_5: {
            top: '28.2%',
            left: '15.4%',
            number: '5'
        },
        loc_6: {
            top: '13.6%',
            left: '16.7%',
            number: '6'
        },
        loc_7: {
            top: '25.3%',
            left: '32.3%',
            number: '7'
        },
        loc_8: {
            top: '34.2%',
            left: '40.8%',
            number: '8'
        },
        loc_9: {
            top: '34.3%',
            left: '47.3%',
            number: '9'
        },
        loc_10: {
            top: '38.0%',
            left: '66.7%',
            number: '10'
        },
        loc_11: {
            top: '50.4%',
            left: '66.3%',
            number: '11'
        },
        loc_12: {
            top: '61.4%',
            left: '65.8%',
            number: '12'
        },
        loc_13: {
            top: '77.1%',
            left: '66.3%',
            number: '13'
        },
        loc_14: {
            top: '82.9%',
            left: '47.6%',
            number: '14'
        },
        loc_15: {
            top: '83.5%',
            left: '40.5%',
            number: '15'
        },
        loc_16: {
            top: '56.1%',
            left: '94.5%',
            number: '16'
        },
        loc_17: {
            top: '91.1%',
            left: '93.6%',
            number: '17'
        },
        loc_18: {
            top: '86.1%',
            left: '93.5%',
            number: '18'
        },
        loc_19_gang: {
            top: '50.7%',
            left: '49.8%',
            number: '19'
        },
        loc_20_buiten: {
            top: '74.0%',
            left: '84.7%',
            number: '20'
        },
        loc_21_buiten: {
            top: '12.7%',
            left: '29.4%',
            number: '21'
        },
        loc_22_bar: {
            top: '58.2%',
            left: '36.5%',
            number: '22'
        }
    };
    
    // --- DOM Elements ---
    const showListBtn = document.getElementById('show-list-btn');
    const showMapBtn = document.getElementById('show-map-btn');
    const listView = document.getElementById('list-view');
    const mapView = document.getElementById('map-view');
    const activityListUl = document.getElementById('activity-list');
    const mapContainer = document.getElementById('map-container');
    const mapWrapper = document.getElementById('map-wrapper');
    const modal = document.getElementById('details-modal');
    const modalTitle = document.getElementById('modal-activity-title');
    const modalDescription = document.getElementById('modal-activity-description');
    const modalShowOnMapBtn = document.getElementById('modal-show-on-map-btn');
    const closeModalBtn = modal.querySelector('.close-btn');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');

    let currentActivityId = null;
    let isZoomed = false;
    let zoom = 1.7; // standaard zoom
    let panX = 0;
    let panY = 0;
    let isPanning = false;
    let startX, startY, startPanX, startPanY;
    const MOBILE_BREAKPOINT = 600;

    // --- Helper voor marker info onder marker tonen ---
    let infoBox = null;
    function showMarkerInfo(marker, activity) {
        removeMarkerInfo();
        infoBox = document.createElement('div');
        infoBox.className = 'marker-info-box';
        infoBox.innerHTML = `<strong>${activity.number}. ${activity.name}</strong><br>${activity.description}`;
        // Positioneer de infoBox onder de marker
        infoBox.style.position = 'absolute';
        infoBox.style.left = marker.style.left;
        infoBox.style.top = `calc(${marker.style.top} + 36px)`; // 36px onder de marker
        infoBox.style.transform = 'translate(-50%, 0)';
        infoBox.style.background = '#fffbe8';
        infoBox.style.color = '#231f20';
        infoBox.style.padding = '10px 14px';
        infoBox.style.borderRadius = '12px';
        infoBox.style.boxShadow = '0 2px 8px #fbc83455';
        infoBox.style.fontSize = '1rem';
        infoBox.style.zIndex = 20;
        infoBox.style.minWidth = '180px';
        mapWrapper.appendChild(infoBox);
    }
    function removeMarkerInfo() {
        if (infoBox && infoBox.parentNode) infoBox.parentNode.removeChild(infoBox);
        infoBox = null;
    }

    // --- Aangepaste marker click handler ---
    function markerClickHandler(activity, marker) {
        if (mapView.style.display !== 'none') {
            // In plattegrondweergave: highlight marker en toon info onder marker
            removeMapHighlights();
            removeMarkerInfo();
            marker.classList.add('highlight');
            showMarkerInfo(marker, activity);
        } else {
            // In lijstweergave: open modal
            showDetails(activity.id);
        }
    }

    // --- Pas createMapMarkers aan om deze handler te gebruiken ---
    function createMapMarkers() {
        // Remove old markers if any
        mapWrapper.querySelectorAll('.map-marker').forEach(m => m.remove());
        Object.entries(locationsData).forEach(([locationKey, value]) => {
            const coordsArray = Array.isArray(value) ? value : [value];
            coordsArray.forEach(coords => {
                const activity = activities.find(act => act.locationKey === locationKey);
                if (activity) {
                    const marker = document.createElement('div');
                    marker.classList.add('map-marker');
                    marker.style.top = coords.top;
                    marker.style.left = coords.left;
                    marker.title = activity.name;
                    marker.textContent = coords.number;
                    marker.dataset.activityId = activity.id;
                    marker.dataset.locationKey = locationKey;
                    marker.addEventListener('click', (e) => {
                        e.stopPropagation();
                        markerClickHandler(activity, marker);
                    });
                    mapWrapper.appendChild(marker);
                }
            });
        });
    }

    // --- Pas removeMapHighlights aan om ook infoBox te verwijderen ---
    function removeMapHighlights() {
        mapWrapper.querySelectorAll('.map-marker.highlight').forEach(marker => {
            marker.classList.remove('highlight');
        });
        removeMarkerInfo();
    }

    // --- Functions ---
    function isMobile() {
        return window.innerWidth <= MOBILE_BREAKPOINT;
    }

    function switchView(showView) {
        const isMob = isMobile();

        // Verberg alle views direct via style.display
        listView.style.display = 'none';
        mapView.style.display = 'none';
        
        // Verwijder .active class van knoppen
        showListBtn.classList.remove('active');
        showMapBtn.classList.remove('active');

        if (showView === 'list') {
            listView.style.display = isMob ? 'flex' : 'block';
            showListBtn.classList.add('active');
            resetMapZoom(); // Reset zoom als we naar de lijst gaan
        } else { // 'map'
            mapView.style.display = isMob ? 'flex' : 'block';
            showMapBtn.classList.add('active');
            // Zorg ervoor dat de kaart correct wordt weergegeven (kan nodig zijn na display none)
            setTimeout(() => {
                applyTransform(); 
                if (!isZoomed && panX === 0 && panY === 0) { 
                   centerOnMarker0(); 
                }
            }, 0);
        }
    }

    function populateActivityList() {
        activityListUl.innerHTML = '';
        activities.forEach(activity => {
            const li = document.createElement('li');
            li.textContent = `${activity.number}. ${activity.name}`;
            li.dataset.activityId = activity.id;
            li.addEventListener('click', () => showDetails(activity.id));
            activityListUl.appendChild(li);
        });
    }

    function showDetails(activityId) {
        const activity = activities.find(act => act.id === activityId);
        if (!activity) return;
        currentActivityId = activityId;
        modalTitle.textContent = `${activity.number}. ${activity.name}`;
        modalDescription.textContent = activity.description;
        if (activity.locationKey && locationsData[activity.locationKey]) {
            modalShowOnMapBtn.style.display = 'block';
            modalShowOnMapBtn.onclick = () => {
                closeModal();
                switchView('map');
                highlightMapLocation(activity.locationKey);
            };
        } else {
            modalShowOnMapBtn.style.display = 'none';
        }
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
        currentActivityId = null;
    }

    function highlightMapLocation(locationKey) {
        removeMapHighlights();
        const markers = mapWrapper.querySelectorAll(`.map-marker[data-location-key="${locationKey}"]`);
        markers.forEach(marker => {
            marker.classList.add('highlight');
        });
        // Zoom naar de marker, maar alleen als we niet al ingezoomd zijn door pannen/knoppen
        // Of, als de gebruiker expliciet op een marker klikt, willen we misschien altijd zoomen?
        // Voor nu: zoom alleen als de kaart nog niet handmatig is ingezoomd.
        if (!isZoomed || zoom === 1.7) { // 1.7 is de initiële zoom
             const targetMarker = mapWrapper.querySelector(`.map-marker[data-location-key="${locationKey}"]`);
             if(targetMarker) zoomToMarker(targetMarker);
        }
    }

    function zoomToMarker(marker) {
        const targetLeft = parseFloat(marker.style.left);
        const targetTop = parseFloat(marker.style.top);
        zoom = 2.5; // Stel een vast zoomniveau in voor marker focus
        panX = 50 - targetLeft;
        panY = 50 - targetTop;
        applyTransform();
        isZoomed = true; 
    }

    function resetMapZoom() {
        if (isZoomed) {
            zoom = 1.7; // Terug naar initiële zoom
            centerOnMarker0(); // Hercentreer op marker 0
            isZoomed = false;
        }
    }

    function handleMapClick(e) {
        // Reset zoom alleen als er direct op de kaartafbeelding wordt geklikt
        // en niet op een marker of een ander interactief element.
        if (isZoomed && e.target.id === 'map-image') {
            resetMapZoom();
        }
    }
    
    function centerOnMarker0() {
        const marker0 = mapWrapper.querySelector('.map-marker[data-location-key="loc_0"]');
        if (!marker0) return;
        const left = parseFloat(marker0.style.left);
        const top = parseFloat(marker0.style.top);
        panX = 50 - left;
        panY = 50 - top;
        applyTransform();
    }

    function applyTransform() {
        mapWrapper.style.transform = `scale(${zoom}) translate(${panX}%, ${panY}%)`;
    }

    function startPan(e) {
        isPanning = true;
        startX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
        startY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
        startPanX = panX;
        startPanY = panY;
        mapWrapper.style.cursor = 'grabbing';
    }

    function panMove(e) {
        if (!isPanning) return;
        e.preventDefault(); // Voorkom scrollen van de pagina tijdens het pannen van de kaart
        const x = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
        const y = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
        const dx = ((x - startX) / mapContainer.offsetWidth) * 100 / zoom;
        const dy = ((y - startY) / mapContainer.offsetHeight) * 100 / zoom;
        panX = startPanX + dx;
        panY = startPanY + dy;
        applyTransform();
        isZoomed = true; // Pannen betekent dat de gebruiker de zoom/pan heeft aangepast
    }

    function endPan() {
        isPanning = false;
        mapWrapper.style.cursor = 'grab';
    }

    mapWrapper.addEventListener('mousedown', startPan);
    mapWrapper.addEventListener('touchstart', startPan, { passive: false });
    window.addEventListener('mousemove', panMove);
    window.addEventListener('touchmove', panMove, { passive: false });
    window.addEventListener('mouseup', endPan);
    window.addEventListener('touchend', endPan);
    mapContainer.addEventListener('click', handleMapClick);

    zoomInBtn.addEventListener('click', () => {
        zoom = Math.min(zoom + 0.4, 4);
        applyTransform();
        isZoomed = true;
    });

    zoomOutBtn.addEventListener('click', () => {
        zoom = Math.max(zoom - 0.4, 1);
        if (zoom <= 1) isZoomed = false; // Als volledig uitgezoomd, reset isZoomed status
        applyTransform();
    });

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const currentActiveButton = document.querySelector('nav button.active');
            if (currentActiveButton) {
                switchView(currentActiveButton.id === 'show-list-btn' ? 'list' : 'map');
            }
            // Hercalculeer pannen indien nodig na resize, vooral als aspect ratio verandert
            applyTransform(); 
        }, 200);
    });

    // --- Initialization ---
    populateActivityList();
    createMapMarkers();
    switchView('list'); 
    mapWrapper.style.cursor = 'grab'; 
    setTimeout(() => {
        const initialActiveButton = document.querySelector('nav button.active');
        if (initialActiveButton && initialActiveButton.id === 'show-map-btn'){
            centerOnMarker0();
        } else {
            applyTransform(); // Zorg voor initiële transformatie ook als lijst startview is
        }
    }, 100); // Kleine delay om zeker te zijn dat alles geladen is

    showListBtn.addEventListener('click', () => switchView('list'));
    showMapBtn.addEventListener('click', () => switchView('map'));
    closeModalBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}); 
