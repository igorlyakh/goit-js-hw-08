function markup(data) {
  const imgs = data.map(item => {
    const img = `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" loading="lazy" />
   </a>
</li>`;
    return img;
  });
  return imgs.join('');
}

export { markup };
