export function createMarkup(array) {
  return array
    .map(({ preview, original, description }) => {
      return `
        <li>
        <a href="${original}">
        <img src="${preview}" alt="${description}" width="300" />
        </a>
        </li>
        `;
    })
    .join("");
}
