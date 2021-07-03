const Element = (props) => {
  if (!props) return false;

  const _element = document.createElement(props.type);

  if (props.sons) _element.append(...props.sons);

  if (props.text) _element.textContent = props.text;
  if (props.class) _element.classList.add(...props.class);
  if (props.src) _element.src = props.src;
  if (props.placeholder) _element.placeholder = props.placeholder;
  if (props.id) _element.id = props.id;
  return _element;
};
export default Element;
