// Function to search for the country's medal information
export async function searchCountry() {
    const input = document.getElementById('country-input').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Searching...';

    if (!input) {
        resultDiv.innerHTML = 'Please enter a country name.';
        return;
    }

    try {
        // Fetch the JSON data (Make sure 'life.json' is accessible at the correct path)
        const response = await fetch('life.json');
        const data = await response.json();

        // Search for country in the data (case insensitive)
        const matchedCountry = data.find(country => country.countries.toLowerCase() === input);

        if (!matchedCountry) {
            resultDiv.innerHTML = 'Country not found.';
        } else {
            // Show the matched country details
            resultDiv.innerHTML = `
                <h3>Medals for ${matchedCountry.countries}:</h3>
                <p>Gold: ${matchedCountry.summer_gold}</p>
                <p>Silver: ${matchedCountry.summer_silver}</p>
            `;
        }
    } catch (error) {
        // Handle errors (e.g., network issues, file not found)
        resultDiv.innerHTML = `Error: ${error.message}`;
    }
}

// Wait for the DOM to load before attaching the event listener
document.addEventListener("DOMContentLoaded", () => {
    // Get the button by its ID
    const searchBtn = document.getElementById('search-btn');
    
    // Ensure the button exists before attaching the event listener
    if (searchBtn) {
        searchBtn.addEventListener('click', searchCountry);
    }
});
