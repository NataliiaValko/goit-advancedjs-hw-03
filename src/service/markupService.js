export const makeOptionsMarkup = breeds => {
  return [
    '<option data-placeholder="true"></option>',
    ...breeds.map(({ id, name }) => `<option value=${id}>${name}</option>`),
  ].join('');
};

export const makeCatInfoMarkup = ({ url, breeds: [info] }) => {
  const { id, name, description, temperament } = info;

  return `<img src=${url} alt=${name} height="380"/><div><h2>${name}</h2><p>${description}</p><p>${temperament}</p></div>`;
};
