
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



<p>


<div align="center">
Ciao sono <strong>Giulia Genovese</strong>, ho 19 anni, 
sono al secondo anno di NTA e questa è la mia biografia! 
Per ora sto sperimentando con Markdown e un po' di HTML, vediamo come va :)
<p>
<div align="center">
<img src="assets/selfiepazzeskogirato.jpeg" width="500" height="100">

<div align="center">

<br>
<!DOCTYPE html> 
<html>
<head>
<style> 
  @keyframes example {
    from {
      background-color: #e92063;
    } 
    to {
      background-color: #7e56c2;
    } 
  }



@keyframes slideIn { 
  from {
    margin-left: 100%;
  } 
  to {
    margin-left: 0%;
  } 
}

.animated-text { 
  width: 100%; 
  background-color: red; 
  animation-name: example; 
  animation-duration: 4s; 
  animation-iteration-count: infinite; 
  animation-direction: alternate; 
}

.slide-in-text { 
  width: 100%; 
  margin-left: 100%; 
  animation: slideIn 2s forwards; 
  } 
</style> 
</head> 
<body>

<h1 class="animated-text"><strong>Questa sono io<strong></h1> 
<h1 class="slide-in-text">Yeah</h1>

</body> 
</html>

