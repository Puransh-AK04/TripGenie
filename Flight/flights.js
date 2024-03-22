// List of airports (you may need to fetch this data from an API)
const airports = [
    "New York JFK",
    "Los Angeles LAX",
    "London Heathrow",
    "Tokyo Haneda",
    "Paris Charles de Gaulle",
    "Beijing Capital",
    "Dubai International",
    "Chicago O'Hare",
    "Amsterdam Schiphol",
    "Hong Kong International",
    "Frankfurt Airport",
    "Dallas/Fort Worth International",
    "Denver International",
    "Madrid Barajas",
    "Singapore Changi",
    "Incheon International",
    "Shanghai Pudong",
    "Toronto Pearson",
    "Guangzhou Baiyun",
    "Las Vegas McCarran",
    "San Francisco International",
    "Seattle-Tacoma International",
    "Munich Airport",
    "Zurich Airport",
    "Sydney Kingsford Smith",
    "Bangkok Suvarnabhumi",
    "Istanbul Airport",
    "New Delhi Indira Gandhi",
    "Atlanta Hartsfield-Jackson",
    "Rome Fiumicino",
    "Manchester Airport",
    "Miami International",
    "Orlando International",
    "Philadelphia International",
    "Barcelona-El Prat",
    "Melbourne Tullamarine",
    "San Diego International",
    "Phoenix Sky Harbor",
    "Vancouver International",
    "Osaka Kansai",
    "Honolulu Daniel K. Inouye",
    "Abu Dhabi International",
    "Kuala Lumpur International",
    "Berlin Brandenburg",
    "Vienna International",
    "Boston Logan",
    "Washington Dulles",
    "Seoul Gimpo",
    "Dublin Airport",
    "Moscow Sheremetyevo",
    "Doha Hamad",
    "Athens International",
    "Mumbai Chhatrapati Shivaji",
    "Stockholm Arlanda",
    "Copenhagen Kastrup",
    "Lisbon Humberto Delgado",
    "Brussels Airport",
    "Geneva Airport",
    "Oslo Gardermoen",
    "Helsinki-Vantaa",
    "Warsaw Chopin",
    "Prague Václav Havel",
    "Budapest Ferenc Liszt",
    "Nice Côte d'Azur",
    "Venice Marco Polo",
    "Marseille Provence",
    "Malaga Costa del Sol",
    "Palma de Mallorca",
    "Ibiza",
    "Valencia",
    "Alicante-Elche",
    "Bilbao",
    "Gran Canaria",
    "Tenerife South",
    "Lanzarote",
    "Fuerteventura",
    "Menorca",
    "Ibiza",
    "Cork Airport",
    "Shannon Airport",
    "Belfast International",
    "Glasgow Airport",
    "Edinburgh Airport",
    "Dublin Airport (1)",
    "Cardiff Airport",
    "Bristol Airport",
    "Manchester Airport (1)",
    "Birmingham Airport",
    "East Midlands Airport",
    "London Gatwick",
    "London Stansted",
    "London Luton",
    "Liverpool John Lennon",
    "Leeds Bradford Airport",
    "Newcastle Airport",
    "Aberdeen Airport",
    "Inverness Airport",
    "Southampton Airport",
    "Exeter Airport",
    "Bournemouth Airport",
    "Isle of Man Airport",
    "Jersey Airport",
    "Guernsey Airport",
    "London City Airport",
    "London Southend Airport",
    "London Biggin Hill Airport",
    "Farnborough Airport",
    "Belfast City Airport",
    "George Best Belfast City Airport (1)",
    "George Best Belfast City Airport (2)",
    "George Best Belfast City Airport (3)",
    "George Best Belfast City Airport (4)",
    "George Best Belfast City Airport (5)",
    "George Best Belfast City Airport (6)",
    "George Best Belfast City Airport (7)",
    "George Best Belfast City Airport (8)",
    "George Best Belfast City Airport (9)",
    "George Best Belfast City Airport (10)",
    "George Best Belfast City Airport (11)",
    "George Best Belfast City Airport (12)",
];
function autocomplete(input, airportList, oppositeInput) {
    let currentFocus;

    input.addEventListener("input", function(e) {
        let dropdown, autocompleteItems, airport, val = this.value;

        // Close any already open dropdown
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;

        // Create a div element that will contain the items (values)
        dropdown = document.createElement("div");
        dropdown.setAttribute("class", "autocomplete-items");

        // Append the div element as a child of the autocomplete container
        this.parentNode.appendChild(dropdown);

        // For each item in the airportList array
        for (let i = 0; i < airportList.length; i++) {
            // Check if the item contains the search value
            let index = airportList[i].toUpperCase().indexOf(val.toUpperCase());
            if (index !== -1) {
                // Create a div element for each matching element
                autocompleteItems = document.createElement("div");
                autocompleteItems.innerHTML = airportList[i].substr(0, index) + "<strong>" + airportList[i].substr(index, val.length) + "</strong>" + airportList[i].substr(index + val.length);
                autocompleteItems.innerHTML += "<input type='hidden' value='" + airportList[i] + "'>";
                autocompleteItems.addEventListener("click", function(e) {
                    // Insert the value for the autocomplete text field
                    input.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                
                // Check if the selected airport is not the same as in the opposite input
                if (oppositeInput && oppositeInput.value !== airportList[i]) {
                    dropdown.appendChild(autocompleteItems);
                }
            }
        }
    });

    input.addEventListener("keydown", function(e) {
        let dropdown = document.getElementById(this.id + "autocomplete-items");
        if (dropdown) {
            dropdown = dropdown.getElementsByTagName("div");
        }
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(dropdown);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(dropdown);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (dropdown) dropdown[currentFocus].click();
            }
        }
    });

    function addActive(dropdown) {
        if (!dropdown) return false;
        removeActive(dropdown);
        if (currentFocus >= dropdown.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (dropdown.length - 1);
        dropdown[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(dropdown) {
        for (let i = 0; i < dropdown.length; i++) {
            dropdown[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(element) {
        let dropdowns = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < dropdowns.length; i++) {
            if (element != dropdowns[i] && element != input) {
                dropdowns[i].parentNode.removeChild(dropdowns[i]);
            }
        }
    }

    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}

// Initialize autocomplete for departure and destination inputs
const departureInput = document.getElementById("departure");
const destinationInput = document.getElementById("destination");

departureInput.addEventListener("input", function() {
    autocomplete(departureInput, airports, destinationInput);
});

destinationInput.addEventListener("input", function() {
    autocomplete(destinationInput, airports, departureInput);
});
