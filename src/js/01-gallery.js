// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const gallery = document.querySelector(".gallery");

function galleryCreate() {
  const galleryArray = [];

  galleryItems.forEach((el, ind) => {
    const { description, original, preview } = galleryItems[ind];
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    a.classList.add("gallery__item");
    img.classList.add("gallery__image");
    a.setAttribute("href", original);
    img.setAttribute("src", preview);

    img.setAttribute("alt", description);

    li.append(a);
    a.append(img);
    galleryArray.push(li);
  });
  gallery.append(...galleryArray);
}
galleryCreate();

// eslint-disable-next-line prefer-const, no-unused-vars
let lightbox = new SimpleLightbox(".gallery li a", {
  captionsData: "alt",
  captionPosition: "outside",
    captionDelay: 250,
  
});
