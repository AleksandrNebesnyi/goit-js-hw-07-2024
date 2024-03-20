import { galleryItems } from './gallery-items.js';
// Change code below this line


{/* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li> */}
// Посилання на оригінальне зображення повинно зберігатися в 
// data-атрибуті source на елементі <img>, і вказуватися в href посилання. Не додавай інші HTML теги або 
// CSS класи, крім тих, що містяться в цьому шаблоні.


const galleryContainer = document.querySelector('.gallery');

const galleryMarkup= createGalleryMarkup(galleryItems);


galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener('click', onContainerClick);



// if ('loading' in HTMLImageElement.prototype) {
//     console.log('suport lazyLoading');
    
// } else {
//     console.log('notSuport lazyLoading');
// }

function createGalleryMarkup( galleryItems) {
    return galleryItems.map(({original,preview,description})=>{
        return `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>      
        `
    }).join("");   
};



function showModal(obj) {
    obj.show();
    window.addEventListener('keydown',(evt)=>{
        console.log('add');
        if (evt.code === "Escape") {
            obj.close();
        }  
    },{once:true});   
};


function onContainerClick(event ) {
    event.preventDefault();

if(!event.target.classList.contains("gallery__image")){
    return;
   }
const largeImgUrl= event.target.dataset.source;
const instance = basicLightbox.create(`
    <img src="${largeImgUrl}" width="800" height="600">`);
showModal(instance);
};




