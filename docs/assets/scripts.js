const cursor = document.querySelector('.cursor');
const trails = [];
let trailCount = 10;  // Number of trail elements to follow the cursor

const trailImageURL = '/assets/star_grey.svg';  // Make sure this is correct

for (let i = 0; i < trailCount; i++) {
  const trail = document.createElement('div');
  trail.classList.add('trail');
  trail.style.backgroundImage = `url(${trailImageURL})`;  // Set background image for the trail
  document.body.appendChild(trail);
  trails.push(trail);  // Add trail to array
}

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
  cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;

  trails.forEach((trail, index) => {
    const delay = index * 50;  // Delay for each trail element
    setTimeout(() => {
      trail.style.left = `${e.pageX - trail.offsetWidth / 2}px`;
      trail.style.top = `${e.pageY - trail.offsetHeight / 2}px`;
      trail.style.opacity = 1 - (index / trailCount);
    }, delay);
  });
});

setInterval(() => {
  trails.forEach(trail => {
    trail.style.opacity = '0';  // Fade out trails after movement
  });
}, 200);
