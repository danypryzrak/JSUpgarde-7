import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector('.gallery')
let instance

const createPicture = () => {
    for (const galleryItem of galleryItems) {
        const item = document.createElement('li')
        item.classList.add('gallery__item')
        item.innerHTML = `
    <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>`
        gallery.append(item)
    }
}

gallery.addEventListener('click', (ev) => {
    ev.preventDefault()
    if (ev.target.nodeName !== 'IMG') {
        return
    }
    instance = basicLightbox.create(`
    <img src="${ev.target.dataset.source}" width="800" height="600">
    `)

    instance.show()
})

document.addEventListener("keydown", event => {
if (event.key !== 'Escape') {
    return
}
    
    if (basicLightbox.visible() === true) {
        
        instance.close()
    }
});

createPicture()
