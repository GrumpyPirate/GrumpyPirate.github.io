const getElementAbsoluteOffsetTop = (element: HTMLElement) => {
  const bodyRect = document.body.getBoundingClientRect();
  const elemRect = element.getBoundingClientRect();

  return elemRect.top - bodyRect.top;
};

export default getElementAbsoluteOffsetTop;
