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
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
            cursor: default;  /* Show default cursor */
            background-color: #222;
        }

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
    <script>
        const trailContainer = document.createElement("div");
        trailContainer.style.position = "absolute";
        trailContainer.style.pointerEvents = "none";
        document.body.appendChild(trailContainer);

        function createCursorTrail(x, y) {
            const trailElement = document.createElement("div");
            trailElement.classList.add("cursor-trail");
            
            const img = document.createElement("img");
            img.src = "/assets/logo_rosso.svg"; // Path to the SVG file

            trailElement.appendChild(img);
            trailElement.style.left = `${x - 10}px`;
            trailElement.style.top = `${y - 10}px`;

            trailContainer.appendChild(trailElement);

            setTimeout(() => {
                trailElement.style.opacity = 1;
                trailElement.style.transform = "scale(1)";
            }, 0);

            setTimeout(() => {
                trailElement.style.opacity = 0;
                trailElement.style.transform = "scale(0.5)";
                setTimeout(() => {
                    trailElement.remove();
                }, 200);
            }, 500);
        }

        document.addEventListener("mousemove", (e) => {
            const x = e.pageX;
            const y = e.pageY;
            createCursorTrail(x, y);
        });
    </script>
</body>
</html>
