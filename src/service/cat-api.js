import { theCatAPI } from './theCatAPIService';

export const fetchBreeds = () => {
  return theCatAPI('/breeds').then(res => res.data);
};

export const fetchCatByBreed = breedId => {
  return theCatAPI(`/images/search?breed_ids=${breedId}`).then(
    res => res.data[0]
  );
};

// назва породи, опис і темперамент.
