document.addEventListener("DOMContentLoaded", function () {
    fetch('/advantages.json')
        .then(response => response.json())
        .then(data => {
            const cards = document.querySelector(".cards-container");

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
