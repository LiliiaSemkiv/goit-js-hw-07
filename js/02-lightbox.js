import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')
// console.log(gallery)


const markup = galleryItems.map(({preview, original, description}) => `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" data-source="${original}" src="${preview}" alt="${description}" ></a></li>`).join(''); // width="300"

gallery.insertAdjacentHTML('beforeend', markup)


let lightbox = new SimpleLightbox('.gallery a', {
    captions: "true",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});