const badgesSwitch = (cardSelector = '.card', badgeSelector = '.card__badge', activeClass = 'card__badge--active') => {
  const cards = document.querySelectorAll(cardSelector);

  if (!cards.length) return;

  cards.forEach((card) => {
    const badges = card.querySelectorAll(badgeSelector);
    if (!badges.length) return;

    badges.forEach((badge) => {
      badge.addEventListener('click', (e) => {
        badges.forEach((b) => b.classList.remove(activeClass));
        e.currentTarget.classList.add(activeClass);
      });
    });
  });
};

export default badgesSwitch;