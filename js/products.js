document.addEventListener("DOMContentLoaded", function () {
    fetch('/products/products.json')
        .then(response => response.json())
        .then(data => {
            const cards = document.querySelector(".cards-container");

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

document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    const closeModal = () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    };

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

        const closeButton = modal.querySelector("#close-modal");
        closeButton.addEventListener("click", closeModal);

        overlay.style.display = "block";
        modal.style.display = "block";
    };

    fetch('/products/learn-more.json')
        .then(response => response.json())
        .then(data => {
            const cards = document.querySelectorAll(".cards-container-card");

            cards.forEach((card, index) => {
                const learnMoreButton = card.querySelector(".btn");
                learnMoreButton.addEventListener("click", () => {
                    const { title, info, subinfo, "img-path": imgPath, "img-alt": imgAlt, closeBtnPath, characteristics } = data[index];
                    showModal(title, info, subinfo, imgPath, imgAlt, closeBtnPath, characteristics);
                });
            });
        })
        .catch(error => console.error('Error loading data:', error));
});