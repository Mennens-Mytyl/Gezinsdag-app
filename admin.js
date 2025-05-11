document.addEventListener('DOMContentLoaded', () => {
    // Import the initial locations data from the main app
    const locationsData = {
        loc_0: {
            top: '64.9%',
            left: '31.8%',
            number: 'O'
        },
        loc_1: {
            top: '64.9%',
            left: '31.8%',
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

    const mapContainer = document.getElementById('map-container');
    const coordOutput = document.getElementById('coordinates-output');
    const exportBtn = document.getElementById('export-btn');
    let draggedMarker = null;
    let dragOffset = { x: 0, y: 0 };

    // Keep track of the markers and their positions
    const markers = new Map();

    function createMarker(locationKey, coords) {
        const marker = document.createElement('div');
        marker.classList.add('map-marker');
        marker.style.top = coords.top;
        marker.style.left = coords.left;
        marker.textContent = coords.number;
        marker.dataset.locationKey = locationKey;
        
        // Make the marker draggable
        marker.draggable = true;
        
        // Add drag event listeners
        marker.addEventListener('mousedown', handleDragStart);
        
        mapContainer.appendChild(marker);
        markers.set(locationKey + '-' + coords.number, { marker, coords });
    }

    function handleDragStart(e) {
        draggedMarker = e.target;
        draggedMarker.classList.add('dragging');
        
        // Calculate the offset between mouse and marker center
        const rect = draggedMarker.getBoundingClientRect();
        dragOffset.x = e.clientX - (rect.left + rect.width / 2);
        dragOffset.y = e.clientY - (rect.top + rect.height / 2);
        
        // Add temporary event listeners
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', handleDragEnd);
        
        // Prevent default drag behavior
        e.preventDefault();
    }

    function handleDrag(e) {
        if (!draggedMarker) return;
        
        const rect = mapContainer.getBoundingClientRect();
        
        // Calculate position as percentage, accounting for the offset
        const x = ((e.clientX - dragOffset.x - rect.left) / rect.width) * 100;
        const y = ((e.clientY - dragOffset.y - rect.top) / rect.height) * 100;
        
        // Constrain the position within the container (0-100%)
        const constrainedX = Math.max(0, Math.min(100, x));
        const constrainedY = Math.max(0, Math.min(100, y));
        
        // Update marker position
        draggedMarker.style.left = constrainedX + '%';
        draggedMarker.style.top = constrainedY + '%';
        
        // Update the coordinates in our tracking Map
        const key = draggedMarker.dataset.locationKey + '-' + draggedMarker.textContent;
        const markerData = markers.get(key);
        if (markerData) {
            markerData.coords.left = constrainedX.toFixed(1) + '%';
            markerData.coords.top = constrainedY.toFixed(1) + '%';
        }
        
        updateCoordinatesDisplay();
    }

    function handleDragEnd(e) {
        if (!draggedMarker) return;
        
        draggedMarker.classList.remove('dragging');
        draggedMarker = null;
        
        // Remove temporary event listeners
        document.removeEventListener('mousemove', handleDrag);
        document.removeEventListener('mouseup', handleDragEnd);
        
        updateCoordinatesDisplay();
    }

    function updateCoordinatesDisplay() {
        const output = {};
        
        // Group markers by locationKey
        markers.forEach((value, key) => {
            const [locationKey] = key.split('-');
            const coords = {
                top: value.coords.top,
                left: value.coords.left,
                number: value.coords.number
            };
            
            if (!output[locationKey]) {
                output[locationKey] = coords;
            } else if (Array.isArray(output[locationKey])) {
                output[locationKey].push(coords);
            } else {
                output[locationKey] = [output[locationKey], coords];
            }
        });
        
        // Format and display the coordinates
        coordOutput.textContent = 'const locationsData = ' + 
            JSON.stringify(output, null, 4)
                .replace(/"([^"]+)":/g, '$1:') // Remove quotes from property names
                .replace(/"/g, "'"); // Replace double quotes with single quotes
    }

    function exportCoordinates() {
        const dataStr = coordOutput.textContent;
        
        // Create a temporary textarea to copy the text
        const el = document.createElement('textarea');
        el.value = dataStr;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        
        // Show feedback
        const originalText = exportBtn.textContent;
        exportBtn.textContent = 'Gekopieerd!';
        setTimeout(() => {
            exportBtn.textContent = originalText;
        }, 2000);
    }

    // Initialize markers
    Object.entries(locationsData).forEach(([locationKey, value]) => {
        if (Array.isArray(value)) {
            value.forEach(coords => createMarker(locationKey, coords));
        } else {
            createMarker(locationKey, value);
        }
    });

    // Initial coordinates display
    updateCoordinatesDisplay();

    // Export button click handler
    exportBtn.addEventListener('click', exportCoordinates);
}); 