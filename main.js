

import galleryItems from './gallery-items.js';
// console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const openModal = document.querySelector('.js-lightbox');
const openImageInModal = document.querySelector('.lightbox__image');
const buttonCloseModal = document.querySelector('.lightbox__button');

const imagesMarkup = createCardsMarcup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', imagesMarkup);
galleryList.addEventListener('click', onGalleryListClick);
buttonCloseModal.addEventListener('click', buttonCloseModalClick);

function createCardsMarcup(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
      return `
<li class="gallery__item">
   <a
     class="gallery__link"
     href="${original}"
   >
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </li>
      `
  }).join('');
}
  
function onGalleryListClick(e) { 
  e.preventDefault();
  if (e.target.classList.contains('js-gallery')) {
    return;
  }
  onOpenModalClick();
  onAddModalImage(e);
};

function onOpenModalClick() {
  openModal.classList.add('is-open');
};

function onAddModalImage(e) {
  openImageInModal.src = e.target.dataset.source;
  openImageInModal.alt = e.target.alt;
};
 
function buttonCloseModalClick() {
  openModal.classList.remove('is-open');
  onClearModalImage()
};

 function onClearModalImage() {
  openImageInModal.src = ``;
  openImageInModal.alt = ``;
};