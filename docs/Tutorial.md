# **Come fare un sito:**
  
**1.** Impiega dalle 2 alle 15 ore per scaricare tutto quello che ti serve

**2.** Guarda il tutorial senza capire niente

**3.** Chiedi a Rossana a chi chiedere

**4.** Chiedi a Fernanda, Vincenzo, Carmine e Samuele

**5.** Usa questo sito, no veramente: [clicca qui](https://squidfunk.github.io/mkdocs-material/creating-your-site/)

**Ora hai creato il tuo sito, fortissimǝ!**
<figure markdown="span">
  ![Cavolfiore](assets/pink_flower.png){ width="300" }
  <figcaption>Fiorellino x te</figcaption>
</figure>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cursor Trail with SVG Path</title>
    <style>
        /* Basic styles for the page */
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
            cursor: default;  /* Show default cursor */
            background-color: #222; /* Dark background for better contrast */
        }

        h1 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
        }

        /* Style for the cursor trail */
        .cursor-trail {
            position: absolute;
            pointer-events: none;
            transition: all 0.2s ease-out;
            opacity: 0;
        }

        .cursor-trail img {
            width: 20px;  /* Adjust the size of the trail */
            height: 20px;
        }
    </style>
</head>
<body>
    <h1>Cursor Trail Effect</h1>

    <script>
        // Create a container for the cursor trail
        const trailContainer = document.createElement("div");
        trailContainer.style.position = "absolute";
        trailContainer.style.pointerEvents = "none";
        document.body.appendChild(trailContainer);

        // Function to create the trail and animate it
        function createCursorTrail(x, y) {
            const trailElement = document.createElement("div");
            trailElement.classList.add("cursor-trail");
            
            // Create the image tag to use the SVG as the trail
            const img = document.createElement("img");
            img.src = "/assets/star_grey.svg"; // Path to the SVG file

            trailElement.appendChild(img);
            trailElement.style.left = `${x - 10}px`;  // Center the trail image at the cursor
            trailElement.style.top = `${y - 10}px`;

            // Append the trail element to the container
            trailContainer.appendChild(trailElement);

            // Animate the trail
            setTimeout(() => {
                trailElement.style.opacity = 1;
                trailElement.style.transform = "scale(1)";
            }, 0);

            // Remove the trail after animation
            setTimeout(() => {
                trailElement.style.opacity = 0;
                trailElement.style.transform = "scale(0.5)";
                setTimeout(() => {
                    trailElement.remove();
                }, 200); // Allow time for the animation to finish before removing
            }, 500); // Duration of the trail animation
        }

        // Track mouse movement
        document.addEventListener("mousemove", (e) => {
            const x = e.pageX;
            const y = e.pageY;
            createCursorTrail(x, y);
        });
    </script>
</body>
</html>












