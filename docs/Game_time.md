# **Game time!**
## Clicca sulla pallina e vedi cosa succede
(puoi farlo quante volte vuoi)


<div class="your-custom-html">
  <!-- HTML content goes here -->
</div>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cursor Trail with Images</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
    }
    .cursor {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      pointer-events: none;
      transition: transform 0.1s ease;
      opacity: 0.7;
    }

    .trail {
      position: absolute;
      width: 30px;
      height: 30px;
      background-size: cover;
      background-repeat: no-repeat;
      pointer-events: none;
      transition: transform 0.1s ease;
    }
  </style>
</head>
<body>

<div class="cursor"></div>

<script>
  const cursor = document.querySelector('.cursor');
  const trails = [];
  let trailCount = 10; // Number of trail elements

  // Image URL for the trail
const trailImageURL = '/assets/star_grey.svg';  // Temporarily use an online image for testing

  
  // Create trail elements
  for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.backgroundImage = `url(${trailImageURL})`;
    document.body.appendChild(trail);
    trails.push(trail);
  }

  // Update cursor and trails position
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;

    trails.forEach((trail, index) => {
      const delay = index * 50; // Delay for each trail element
      setTimeout(() => {
        trail.style.left = `${e.pageX - trail.offsetWidth / 2}px`;
        trail.style.top = `${e.pageY - trail.offsetHeight / 2}px`;
        trail.style.opacity = 1 - (index / trailCount);
      }, delay);
    });
  });

  // Clean up trails after animation
  setInterval(() => {
    trails.forEach(trail => {
      trail.style.opacity = '0';
    });
  }, 200);
</script>

</body>
</html>







<div style="position: relative; height: 300px; width: 400px; margin: 50px auto; overflow: hidden; border: 1px solid #ccc;" id="ball-container">
    <div class="ball" onclick="duplicateBall(this)"></div>
</div>
<div id="counter" style="text-align: center; font-size: 18px; margin-top: 10px;">
    Conto delle palline: <span id="ball-count">1</span>
</div>

<style>
    .ball {
        width: 50px;
        height: 50px;
        background-color: #e92063;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        animation: circularMove 4s infinite ease-in-out;
    }

    /* Initial circular movement pattern for the first ball */
    @keyframes circularMove {
        0% { top: 20%; left: 20%; }
        25% { top: 20%; left: 80%; }
        50% { top: 80%; left: 80%; }
        75% { top: 80%; left: 20%; }
        100% { top: 20%; left: 20%; }
    }

    /* Random bounce animations for duplicated balls */
    @keyframes randomBounce {
        0% { transform: translate(0, 0); }
        25% { transform: translate(40px, -60px); }
        50% { transform: translate(-50px, 50px); }
        75% { transform: translate(30px, 70px); }
        100% { transform: translate(0, 0); }
    }
</style>

<script>
    let ballCount = 1; // Start with 1 since the initial ball is already in place

    function updateCounter() {
        document.getElementById('ball-count').innerText = ballCount;
    }

    function duplicateBall(originalBall) {
        // Clone the ball element
        const newBall = originalBall.cloneNode(true);
        
        // Randomize size and color for each new ball
        newBall.style.width = `${20 + Math.random() * 50}px`;
        newBall.style.height = newBall.style.width;
        newBall.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

        // Set a random position within the container for the new ball
        newBall.style.top = `${Math.random() * 80}%`;
        newBall.style.left = `${Math.random() * 80}%`;

        // Set a unique random bounce animation duration
        const randomDuration = 2 + Math.random() * 3;
        newBall.style.animation = `randomBounce ${randomDuration}s infinite alternate ease-in-out`;

        // Append the new ball to the container
        document.getElementById('ball-container').appendChild(newBall);

        // Add the same onclick function to the new ball so it can duplicate itself
        newBall.onclick = function() { duplicateBall(newBall); };

        // Update the counter
        ballCount++;
        updateCounter();
    }
</script>
