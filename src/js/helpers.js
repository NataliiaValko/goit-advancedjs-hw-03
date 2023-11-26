export const setVisibleElement = ({ bool, element }) => {
  bool
    ? element.classList.replace('hidden', 'visible')
    : element.classList.replace('visible', 'hidden');
};
