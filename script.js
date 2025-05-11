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
            top: '82.8%',
            left: '36.0%',
            number: 'O'
        },
        loc_1: {
            top: '65.2%',
            left: '32.0%',
            number: '1'
        },
        loc_2: {
            top: '53.7%',
            left: '30.5%',
            number: '2'
        },
        loc_3_4: [
            {
                top: '38.4%',
                left: '23.0%',
                number: '4'
            },
            {
                top: '54.4%',
                left: '23.0%',
                number: '3'
            }
        ],
        loc_5: {
            top: '28.5%',
            left: '21.4%',
            number: '5'
        },
        loc_6: {
            top: '13.1%',
            left: '21.4%',
            number: '6'
        },
        loc_7: {
            top: '25.3%',
            left: '32.3%',
            number: '7'
        },
        loc_8: {
            top: '34.4%',
            left: '42.1%',
            number: '8'
        },
        loc_9: {
            top: '34.8%',
            left: '47.6%',
            number: '9'
        },
        loc_10: {
            top: '37.2%',
            left: '64.0%',
            number: '10'
        },
        loc_11: {
            top: '50.4%',
            left: '63.5%',
            number: '11'
        },
        loc_12: {
            top: '61.9%',
            left: '63.6%',
            number: '12'
        },
        loc_13: {
            top: '77.1%',
            left: '66.3%',
            number: '13'
        },
        loc_14: {
            top: '82.7%',
            left: '48.0%',
            number: '14'
        },
        loc_15: {
            top: '83.2%',
            left: '42.3%',
            number: '15'
        },
        loc_16: {
            top: '55.3%',
            left: '85.1%',
            number: '16'
        },
        loc_17: {
            top: '91.6%',
            left: '87.0%',
            number: '17'
        },
        loc_18: {
            top: '86.3%',
            left: '86.8%',
            number: '18'
        },
        loc_19_gang: {
            top: '50.7%',
            left: '49.9%',
            number: '19'
        },
        loc_20_buiten: {
            top: '76.1%',
            left: '78.9%',
            number: '20'
        },
        loc_21_buiten: {
            top: '12.7%',
            left: '32.1%',
            number: '21'
        },
        loc_22_bar: {
            top: '57.7%',
            left: '38.6%',
            number: '22'
        }
    }

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

    let currentActivityId = null;
    let isZoomed = false;

    // --- Functions ---
    function switchView(showView) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
        document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));

        if (showView === 'list') {
            listView.classList.add('active-view');
            showListBtn.classList.add('active');
        } else {
            mapView.classList.add('active-view');
            showMapBtn.classList.add('active');
        }
        removeMapHighlights();
        resetMapZoom();
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

    function createMapMarkers() {
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
                        showDetails(activity.id);
                    });
                    mapWrapper.appendChild(marker);
                }
            });
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
            zoomToMarker(marker);
        });
    }

    function removeMapHighlights() {
        mapWrapper.querySelectorAll('.map-marker.highlight').forEach(marker => {
            marker.classList.remove('highlight');
        });
    }

    function zoomToMarker(marker) {
        const rect = marker.getBoundingClientRect();
        const containerRect = mapContainer.getBoundingClientRect();
        
        // Calculate the center point of the marker relative to the container
        const centerX = (parseFloat(marker.style.left) / 100) * containerRect.width;
        const centerY = (parseFloat(marker.style.top) / 100) * containerRect.height;
        
        // Reset any existing transform
        resetMapZoom();
        
        // Apply the new transform
        mapWrapper.style.transform = `scale(2) translate(${50 - parseFloat(marker.style.left)}%, ${50 - parseFloat(marker.style.top)}%)`;
        isZoomed = true;
        
        // Add click listener to reset zoom
        if (!mapContainer.dataset.hasZoomListener) {
            mapContainer.addEventListener('click', handleMapClick);
            mapContainer.dataset.hasZoomListener = 'true';
        }
    }

    function resetMapZoom() {
        if (isZoomed) {
            mapWrapper.style.transform = 'none';
            isZoomed = false;
        }
    }

    function handleMapClick(e) {
        if (isZoomed && e.target.id === 'map-image') {
            resetMapZoom();
        }
    }

    // --- Event Listeners ---
    showListBtn.addEventListener('click', () => switchView('list'));
    showMapBtn.addEventListener('click', () => switchView('map'));
    closeModalBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // --- Initialization ---
    populateActivityList();
    createMapMarkers();
    switchView('list');
}); 
