const initLikeButton = () => {
  const likeWrapper = document.getElementById('likeBtn');
  const likeCountSpan = likeWrapper?.querySelector('.card__like-count');

  if (!likeWrapper || !likeCountSpan) return;

  let count = 57;
  let isLiked = false;

  const handleClick = () => {
    if (isLiked) {
      count--;
      likeWrapper.classList.remove('card__like--liked');
      isLiked = false;
    } else {
      count++;
      likeWrapper.classList.add('card__like--liked');
      isLiked = true;
    }
    likeCountSpan.textContent = count;
  };

  likeWrapper.addEventListener('click', handleClick);
};

export default initLikeButton;