// Info needed from JSON:
// Location (coordinates), magnitude, depth
constant jsonData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create a createMap Function
function createMap(magLessThree, magThreeFive, magFiveSeven, magGreaterSeven) {

    // Create a tile Layer that will be the base 
    var lightMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "light-v10",
        accessToken: API_KEY
    });

    // Create a baseMap Object
    var baseMap = {
        "Light Map": lightMap
    };

    // Create an overlayMap object
    var overlayMap = {
        "Magnitude < 3:": magLessThree,
        "Magnitude 3-5:": magThreeFive,
        "Magnitude 5-7:": magFiveSeven,
        "Magnitude 7+:": magGreaterSeven
    };

    // Create the map object
    var map = L.map("mapid", {
        // Center of US
        center: [39.83, -98.58],
        zoom: 20,
        layers: [lightMap, magLessThree, magThreeFive, magFiveSeven, magGreaterSeven]
    });

    // Create a layer control, passing in the overlay maps
    L.control.layers(baseMap, overlayMap, {
        collapsed: false
    }).addTo(map);

}

// Create a createCircle Function

    // Pull the earthquakes from the JSON

    // Initalize an array to hold all of the locations of each earthquakes by magnitude
    // an array for each magnitude range;
    // 0-1,1-2,2-3,3-4,4-5,5-6,6-7,7-8,9+

    // Loop Through the earthqake array

        // For each earthquake, create a circle with a color for respective Depth 
        // and size to reflect magnitude
        // Color Scale goes from Green - Yellow - Red
        // Size will be a the magnitude multiplied by a base number to scale appropriatel


        // Add the circle to the locations array to the respective magnitude
  
    // Create the layer groups for each magnitude range and pass it to createMap

// Create a createLegend Function
    
    // Create a Legend

    // Append a div element to the HTML to add the Legend

    // Add the Legend to the map

// Read in JSON and and pass parameters to the createCircle Function
d3.json(jsonData, createCircle);
// Add the Legend to the Map