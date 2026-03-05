const initLikeButton = (selector = '.card__like') => {
  const likeButtons = document.querySelectorAll(selector);

  if (!likeButtons.length) return;

  likeButtons.forEach((button) => {
    const likeCountSpan = button.querySelector('.card__like-count');
    if (!likeCountSpan) return;

    let count = parseInt(likeCountSpan.textContent, 10) || 0;
    let isLiked = false;

    const handleClick = () => {
      if (isLiked) {
        count--;
        button.classList.remove('card__like--liked');
        isLiked = false;
      } else {
        count++;
        button.classList.add('card__like--liked');
        isLiked = true;
      }

      likeCountSpan.textContent = count;
    };

    button.addEventListener('click', handleClick);
  });
};

export default initLikeButton;