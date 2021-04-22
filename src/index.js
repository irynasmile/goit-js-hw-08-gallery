
import galleryItems from './gallery-items.js';
// import './css/styles.scss';
import sumNumbers from "./app.js";

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const btn = document.getElementById("sumBtn");
const result = document.getElementById("result");

btn.addEventListener("click", e => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
   result.innerHTML = sumNumbers(num1, num2);
});

// console.log(sumNumbers(2,3));
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
};


function onGalleryListClick(e) { 
  e.preventDefault();
  if (e.target.classList.contains('js-gallery')) {
    return;
  }
  onOpenModalClick();
  updateModalImg(e.target.dataset.source, e.target.alt)
};

function onOpenModalClick() {
  openModal.classList.add('is-open');
};
function updateModalImg(src,alt  ) {
    openImageInModal.src = src;
    openImageInModal.alt = alt;

}
function buttonCloseModalClick() {
  openModal.classList.remove('is-open');
  updateModalImg('','')
};

