const clampFallback = (el, lines = 2) => {
  if (supportsClamp) return;

  const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
  const maxHeight = lineHeight * lines;
  const originalText = el.textContent;

  let text = originalText;

  while (el.scrollHeight > maxHeight && text.length > 0) {
    text = text.slice(0, -1);
    el.textContent = text;
  }

  if (text !== originalText) {
    el.textContent = text.trim() + '...';
  }
};

const applyClampFallback = (selector = '.card__title', lines = 2) => {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  elements.forEach(el => clampFallback(el, lines));
};

export default applyClampFallback;