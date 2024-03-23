/*
    This script is responsible for populating the card section on the index.html page with data fetched from advantages.json.

    It utilizes the Fetch API to retrieve data from advantages.json, then parses the JSON response. Once the data is obtained, it iterates through each item and dynamically creates HTML elements for each card, including an image, title, info, and subinfo.
    These elements are then appended to the DOM inside the cards-container.

    If an error occurs during the fetch operation, an error message is logged to the console.

    Note: The advantages.json file contains mock data for demonstration purposes.
*/

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {

     // Fetch the advantages.json file which contains data for populating the cards
    fetch('/advantages.json')
        .then(response => response.json())
        .then(data => {

            // Select the container where the cards will be appended
            const cards = document.querySelector(".cards-container");

            // Iterate over each item in the JSON data criating the elements for each card
            data.forEach(item => {
                const cardDiv = document.createElement("div");
                cardDiv.classList.add("cards-container-card");

                const cardImage = document.createElement("img");
                cardImage.src = item["img-path"];
                cardImage.alt = item["img-alt"];

                const cardTitle = document.createElement("h4");
                cardTitle.textContent = item.title;

                const cardInfo = document.createElement("p");
                cardInfo.textContent = item.info;

                const cardSubinfo = document.createElement("p");
                cardSubinfo.classList.add("subinfo");
                cardSubinfo.textContent = item.subinfo;

                cardDiv.appendChild(cardImage);
                cardDiv.appendChild(cardTitle);
                cardDiv.appendChild(cardInfo);
                cardDiv.appendChild(cardSubinfo);

                cards.appendChild(cardDiv);
            });
        })
        .catch(error => console.error('Error loading data:', error));
})
