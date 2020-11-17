
function dataBox(sample) {
    d3.json("samples.json").then((importedData) => {
        console.log(importedData);
        var data = importedData.metadata;
        console.log(data)

        var idFilter = data.filter(metaData => metaData.id == sample)[0];
        var Demographics = d3.select('#sample-metadata');
        Demographics.html("")

        Object.entries(idFilter).forEach(([key, value]) => {
            Demographics.append("h5").text(`${key}: ${value}`);
        });

    });
}

function dropDown() {
    var selectID = d3.select("#selDataset");
    d3.json("samples.json").then((importedData) => {
        var data = importedData.names;


        data.forEach((sample) => {
            selectID.append("option").text(sample).property('value', sample)
        });
        var sampleOne = data[0];
        dataBox(sampleOne);
        ///Graph function

    });
}

function optionChanged(newInfo) {
    dataBox(newInfo);
    // graph function
}

dropDown()

// // Sort the data by Greek search results
// var sortedByPatientSearch = data.sort((a, b) => b.greekSearchResults - a.greekSearchResults);

// ////////// SORT DESCENDING
// // resulting order is (101, 10, 3, 2, 1)
// numArray.sort(function (firstNum, secondNum) {
//     return secondNum - firstNum;
// });


// // Use D3 to create an event handler
// d3.select('#selectOption').on('change', updatePage);

// function updatePage() {
//     // Use D3 to select the dropdown menu
//     var dropdownMenu = d3.select('#selectOption');

//     // Assign the dropdown menu item ID to a variable
//     var dropdownMenuID = dropdownMenu.property("id");

//     // Assign the dropdown menu option to a variable
//     var selectedOption = dropdownMenu.property("value");

//     console.log(dropdownMenuID);
//     console.log(selectedOption);
// // 1. Use the filter method to create a custom filtering function
// //  that returns the movies with a rating greater than 8.9

// function filterMovieRatings(movie) {
//     return movie.imdbRating > 8.9;

// }


// // 2. Use filter() to pass the function as its argument
// var filteredMovies = topMovies.filter(filterMovieRatings);
// console.log(filteredMovies);

// // 3. Use the map method with the arrow function to return all the filtered movie titles.
// var titles = filteredMovies.map(movies => movies.title);
// console.log(titles);

// // 4. Use the map method with the arrow function to return all the filtered movie metascores.
// var ratings = filteredMovies.map(movies => movies.metascore);
// console.log(ratings);

// // 5. Create your trace.
// var trace = {
//     x: titles,
//     y: ratings,
//     type: "bar"
// };

// // 6. Create the data array for our plot
// var data = [trace];

// // 7. Define our plot layout
// var layout = {
//     title: "The highest critically acclaimed movies",
//     xaxis: { title: "Title" },
//     yaxis: { title: "Metascore (Critic) Rating" }
// };

// // 8. Plot the chart to a div tag with id "bar-plot"
// Plotly.newPlot("bar-plot", data, layout);
