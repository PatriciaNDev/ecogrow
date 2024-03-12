fetch('/products/products.json')
    .then(response => response.json())
    .then(data => {
        const titles = document.querySelectorAll('.eco-grow-section_title');
        const infos = document.querySelectorAll('.eco-grow-section_info');
        const images = document.querySelectorAll('.eco-grow-section_image');

        data.forEach((item, index) => {
            titles[index].textContent = item.title;
            infos[index].textContent = item.info;
            images[index].src = item['img-path'];
            images[index].alt = item['img-alt'];
        });
    })
    .catch(error => console.error('Error loading data:', error));