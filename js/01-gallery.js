import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')
// console.log(gallery)


const markup = galleryItems.map(({preview, original, description}) => `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" data-source="${original}" src="${preview}" alt="${description}" ></a></li>`).join(''); // width="300"

gallery.insertAdjacentHTML('beforeend', markup)


gallery.addEventListener('click', onClick)


function onClick(e) {
    e.preventDefault();
    if (e.target.classList.contains('gallery__image')) {
        const source = e.target.dataset.source;
        const instance = basicLightbox.create(`<img src="${source}" alt="Image">`);
        instance.show();
    }
}

const instance = basicLightbox.create(`
    <h1>Dynamic Content</h1>
    <p>You can set the content of the lightbox with JS.</p>
`)

// console.log(instance)

instance.show()


















// console.log(galleryItems);
