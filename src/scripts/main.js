'use strict';

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = document.querySelector('.spider');
  let spiderY = e.offsetY - spider.offsetHeight / 2;
  let spiderX = e.offsetX - spider.offsetWidth / 2;

  const maxY = wall.clientHeight - spider.offsetHeight;
  const maxX = wall.clientWidth - spider.offsetWidth;

  if (spiderY < 0) {
    spiderY = 0;
  } else if (spiderY > maxY) {
    spiderY = maxY;
  }

  if (spiderX < 0) {
    spiderX = 0;
  } else if (spiderX > maxX) {
    spiderX = maxX;
  }

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});
