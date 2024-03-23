/*
    This script is responsible for handling the product data fetched from products.json and populating the product cards on the products.html page. It also handles the modal functionality to display additional information when the "Saiba Mais" button is clicked.

    The script fetches product data from products.json using the Fetch API.
    Once the data is fetched, it dynamically creates HTML elements for each product card, including an image, title, info, and a "Saiba Mais" button.
    When the "Saiba Mais" button is clicked, it retrieves additional information from learn-more.json and displays it in a modal window.

    If an error occurs during the fetch operations, error messages are logged to the console.

    Note: The products.json file contains mock product data for demonstration purposes, and the learn-more.json file contains additional information about each product.
*/

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {

    // Fetch the products.json file which contains data for populating the cards
    fetch('/products/products.json')
        .then(response => response.json())
        .then(data => {

            // Select the container where the cards will be appended
            const cards = document.querySelector(".cards-container");

            // Iterate over each item in the JSON data criating the elements for each card
            data.forEach((item, index) => {
                const cardDiv = document.createElement("div");
                cardDiv.classList.add("cards-container-card");

                const cardImage = document.createElement("img");
                cardImage.src = item["img-path"];
                cardImage.alt = item["img-alt"];

                const cardTitle = document.createElement("h4");
                cardTitle.textContent = item.title;

                const cardInfo = document.createElement("p");
                cardInfo.textContent = item.info;

                const learnMoreButton = document.createElement("button");
                const btnId = `learn-more-btn${index}`
                learnMoreButton.textContent = "Saiba Mais";
                learnMoreButton.classList.add("btn");
                learnMoreButton.id = btnId

                cardDiv.appendChild(cardImage);
                cardDiv.appendChild(cardTitle);
                cardDiv.appendChild(cardInfo);
                cardDiv.appendChild(learnMoreButton);

                cards.appendChild(cardDiv);
            });
        })
        .catch(error => console.error('Error loading data:', error));
});


// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {

    // Create overlay and modal elements for displaying detailed product information
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    // Function to close modal
    const closeModal = () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    };

    // Function to display modal with detailed product information
    const showModal = (title, info, subinfo, imgPath, imgAlt, closeBtnPath, characteristics) => {
        const content = `
            <div class="modal-container">
                <img src=${closeBtnPath} alt="Botão de fechar" id="close-modal">
                <div class="modal-content">
                    <div class="modal-content_info">
                        <img src="${imgPath}" alt="${imgAlt}">
                        <div class="modal-text">
                            <h5>${title}</h5>
                            <p>${info}</p>
                            <p>${subinfo}</p>
                        </div>
                    </div>
                    <hr class="divider">
                    <ul class="modal-content_list">
                        ${characteristics.map((characteristic) => `<li><img src="/assets/icons/leaf-icon.png">${characteristic}<li/>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        modal.innerHTML = content;

        // Add event listener to close button
        const closeButton = modal.querySelector("#close-modal");
        closeButton.addEventListener("click", closeModal);

        // Display overlay and modal
        overlay.style.display = "block";
        modal.style.display = "block";
    };

     // Fetch additional product details from learn-more.json
    fetch('/products/learn-more.json')
        .then(response => response.json())
        .then(data => {
            const cards = document.querySelectorAll(".cards-container-card");

            // Add event listener to "Learn More" button for each card
            cards.forEach((card, index) => {
                const learnMoreButton = card.querySelector(".btn");
                // Display modal with detailed product information on button click
                learnMoreButton.addEventListener("click", () => {
                    const { title, info, subinfo, "img-path": imgPath, "img-alt": imgAlt, closeBtnPath, characteristics } = data[index];
                    showModal(title, info, subinfo, imgPath, imgAlt, closeBtnPath, characteristics);
                });
            });
        })
        .catch(error => console.error('Error loading data:', error));
});