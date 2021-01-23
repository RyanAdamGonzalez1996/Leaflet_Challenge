// Info needed from JSON:
// Location (coordinates), magnitude, depth
const jsonData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create a createMap Function
function createMap(magLessOne, magOneThree, magThreeFive, magFiveSeven, magGreaterSeven) {

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
        "Magnitude <1:": magLessOne,
        "Magnitude 1-3:": magOneThree,
        "Magnitude 3-5:": magThreeFive,
        "Magnitude 5-7:": magFiveSeven,
        "Magnitude 7+:": magGreaterSeven
    };

    // Create the map object
    var map = L.map("map", {
        // Center of US
        center: [0, 0],
        zoom: 2,
        layers: [lightMap, magLessOne, magOneThree, magThreeFive, magFiveSeven, magGreaterSeven]
    });

    // Create a layer control, passing in the overlay maps
    L.control.layers(baseMap, overlayMap, {
        collapsed: false
    }).addTo(map);

}

// Create a createCircle Function
function createCircle(response) {
    // Color Scale goes from DarkGreen - LightGreen - Yellow
    // Darker higher depth lighter lower depth
    // Size will be a the magnitude multiplied by a base number to scale appropriately

    // Pull the earthquakes from the JSON
    var earthquakes = response.features;
    console.log(earthquakes);

    // Initalize an array to hold all of the locations of each earthquakes by magnitude
    // an array for each magnitude range;
    var magLessOne = [];
    var magOneThree = [];
    var magThreeFive = [];
    var magFiveSeven = [];
    var magGreaterSeven = [];

    // Loop Through the earthqake array
    for (var index = 0; index < earthquakes.length; index++){
        var earthquake = earthquakes[index];

        // Test magnitude
        console.log(earthquake.properties.mag);
        // Test Depth
        console.log(earthquake.geometry.coordinates[2]);

        // Variables to hold the Coordinates
        var lon = earthquake.geometry.coordinates[1];
        var lat = earthquake.geometry.coordinates[0];
        //Test Coordinate variables
        console.log(lon);
        console.log(lat);

        // Variables to hold Depth and Magnitude
        var depth = earthquake.geometry.coordinates[2];
        var magnitude = earthquake.properties.mag;

        // Set depthColor to a value corresponding to the earthquakes depth
        if (depth > 90) {
            var depthColor = "red";
        }else if (depth >= 70) {
            var depthColor = "orangered";
        }else if (depth >= 50) {
            var depthColor = "orange";
        }else if (depth >= 30) {
            var depthColor = "yellow";
        }else if (depth >= 10) {
            var depthColor = "lightgreen";
        }else {
            var depthColor = "green";
        }

        // For each earthquake, create a circle with a color for respective Depth 
        // and size to reflect magnitude
        var earthquakeCircle = L.circle([lon,lat], {
            color: depthColor,
            fillcolor: depthColor,
            fillOpacity: 0.70,
            radius: 5000 * magnitude
        });

        // Add the circle to the locations array to the respective magnitude
        if (magnitude > 7) {
            magGreaterSeven.push(earthquakeCircle);
        }else if (magnitude >= 5) {
            magFiveSeven.push(earthquakeCircle);
        }else if (magnitude >= 3) {
            magThreeFive.push(earthquakeCircle);
        }else if (magnitude >= 1) {
            magOneThree.push(earthquakeCircle);
        }else {
            magLessOne = [];
        }
      
    }

    console.log(magGreaterSeven);
    console.log(magFiveSeven);
    console.log(magThreeFive);
    console.log(magOneThree);
    console.log(magLessOne);
    // Create the layer groups for each magnitude range and pass it to createMap
    createMap(L.layerGroup(magLessOne), L.layerGroup(magOneThree), L.layerGroup(magThreeFive), L.layerGroup(magFiveSeven), L.layerGroup(magGreaterSeven));

}
// Create a createLegend Function
    
    // Create a Legend

    // Append a div element to the HTML to add the Legend

    // Add the Legend to the map

// Read in JSON and and pass parameters to the createCircle Function
d3.json(jsonData, createCircle);

// Add the Legend to the Map
