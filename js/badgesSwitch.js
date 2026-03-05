const badgesSwitch = (selector = '.card__badge', activeClass = 'card__badge--active') => {
  const badges = document.querySelectorAll(selector);

  badges.forEach(badge => {
    badge.addEventListener('click', (e) => {
      badges.forEach(b => b.classList.remove(activeClass));
      e.currentTarget.classList.add(activeClass);
    });
  });
};

export default badgesSwitch;