import { images } from './images';
import { createMarkup } from './services';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../styles/index.scss';

const refs = {
  galleryContainer: document.querySelector('.js-gallery'),
};

refs.galleryContainer.insertAdjacentHTML('afterbegin', createMarkup(images));

const options = {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
};
const gallery = new SimpleLightbox('.js-gallery a', options);
