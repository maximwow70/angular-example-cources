export class ComponentRender {
  createElement(tag, classList, html) {
    const element = document.createElement(tag);
    this.updateElement(element, classList, html);
    return element;
  }
  updateElement(element, classList, html) {
    if (classList) {
      element.setAttribute("class", "");
      classList.forEach((className) => {
        element.classList.add(className);
      });
    }
    if (html) {
      element.innerHTML = html;
    }
  }
}
