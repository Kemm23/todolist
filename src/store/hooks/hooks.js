export function getParentByNodeName(children, nodeName) {
  while (children.parentElement) {
    if (
      children.parentElement.nodeName.toLowerCase() === nodeName.toLowerCase()
    ) {
      return children.parentElement;
    }
    children = children.parentElement;
  }
}
