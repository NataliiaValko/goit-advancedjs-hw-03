import SlimSelect from 'slim-select';
import iziToast from 'izitoast';

import { makeOptionsMarkup, makeCatInfoMarkup } from '@/service/markupService';
import { fetchBreeds, fetchCatByBreed } from '@/service/cat-api';
import { setVisibleElement } from './helpers';
import { refs } from './refs';

import 'slim-select/dist/slimselect.css';
import 'izitoast/dist/css/iziToast.min.css';

const onLoad = () => {
  setVisibleElement({ bool: true, element: refs.loaderRef });
  fetchBreeds()
    .then(breeds => {
      refs.breedSelectRef.innerHTML = makeOptionsMarkup(breeds);
      new SlimSelect({
        select: refs.breedSelectRef,
        settings: {
          placeholderText: 'Choose a breed',
        },
      });
      setVisibleElement({ bool: true, element: refs.breedSelectRef });
    })
    .catch(error =>
      iziToast.error({
        title: 'Oops!',
        message: 'Something went wrong! Try reloading the page!',
        position: 'topRight',
      })
    )
    .finally(() => setVisibleElement({ bool: false, element: refs.loaderRef }));
};

const onChangeBreedsSelect = ({ target: { value } }) => {
  //   setVisibleElement({ bool: false, element: refs.errorRef });
  setVisibleElement({ bool: true, element: refs.loaderRef });
  refs.catInfoRef.innerHTML = '';
  fetchCatByBreed(value)
    .then(breed => (refs.catInfoRef.innerHTML = makeCatInfoMarkup(breed)))
    .catch(error =>
      iziToast.error({
        title: 'Oops!',
        message: 'Something went wrong! Try reloading the page!',
        position: 'topRight',
      })
    )
    .finally(() => setVisibleElement({ bool: false, element: refs.loaderRef }));
};

onLoad();

refs.breedSelectRef.addEventListener('change', onChangeBreedsSelect);
