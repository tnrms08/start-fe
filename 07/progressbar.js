const $progress = document.querySelector('#progress');

let progressPercent = 0;
let unit = 11;
const doingProgress = () => {
  if (progressPercent > 100 || progressPercent < 0) {
    unit = -unit;
  }
  progressPercent += unit;
  $progress.style.width = `${progressPercent}%`;
};

setInterval(doingProgress, 100);
