const getElementAbsoluteOffsetTop = element => {
  // eslint-disable-next-line no-undef
  const bodyRect = document.body.getBoundingClientRect();
  const elemRect = element.getBoundingClientRect();

  return elemRect.top - bodyRect.top;
};

export default getElementAbsoluteOffsetTop;
