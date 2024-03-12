fetch('/advantages.json')
    .then(response => response.json())
    .then(data => {
        const titles = document.querySelectorAll('.cards-card-text_title');
        const infos = document.querySelectorAll('.cards-card-text_info');
        const subinfos = document.querySelectorAll('.cards-card-text_subinfo');
        const images = document.querySelectorAll('.cards-card-image_img');

        data.forEach((item, index) => {
            titles[index].textContent = item.title;
            infos[index].textContent = item.info;
            subinfos[index].textContent = item.subinfo;
            images[index].src = item['img-path'];
            images[index].alt = item['img-alt'];
        });
    })
    .catch(error => console.error('Error loading data:', error));


