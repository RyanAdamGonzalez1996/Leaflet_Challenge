// Info needed from JSON:
// Location (coordinates), magnitude, depth
test
// Create a createMap Function

    // Create a tile Layer that will be the base 

    // Create a baseMap Object

    // Create an overlayMap object

    // Create the map object

    // Create a layer control, passing in the overlay maps


// Create a createCircle Function

    // Pull the earthquakes from the JSON

    // Initalize an array to hold all of the locations of eache arthquakes my magnitude
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

// Add the Legend to the Map