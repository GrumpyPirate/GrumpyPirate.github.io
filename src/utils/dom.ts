/**
 * @param  {HTMLElement} element
 * @returns number
 */
const getElementAbsoluteOffsetTop = (element: HTMLElement): number => {
  const bodyRect = document.body.getBoundingClientRect();
  const elemRect = element.getBoundingClientRect();

  return elemRect.top - bodyRect.top;
};

export default getElementAbsoluteOffsetTop;
