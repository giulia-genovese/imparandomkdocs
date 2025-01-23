# **Sperimentazione md / html** 
## Ciao! Questi che vedi qui sotto sono dei **color picker**! Puoi creare una palette da cui ricavare i codici HEX per utilizzarli nei tuoi progetti!

### (Questo è il mio primo approccio alla scrittura di un codice html)


<div class="your-custom-html">
  <!-- HTML content goes here -->
</div>

<p>

 <!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Picker</title>
    <style>
        .color-picker {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .color-info {
            font-family: Arial, sans-serif;
            font-size: 14px;
        }
    </style>
</head>
<body>

    <script>
        const colorInput = document.getElementById('colorInput');
        const colorInfo = document.getElementById('colorInfo');

        // Funzione per aggiornare le informazioni sul colore
        function updateColorInfo() {
            const hexColor = colorInput.value;
            const rgbColor = hexToRgb(hexColor);
            colorInfo.textContent = `HEX: ${hexColor} | RGB: ${rgbColor}`;
        }

        // Funzione per convertire HEX in RGB
        function hexToRgb(hex) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `${r}, ${g}, ${b}`;
        }

        // Aggiorna le informazioni sul colore quando l'input cambia
        colorInput.addEventListener('input', updateColorInfo);
    </script>
</body>
</html>

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Picker Multipli</title>
    <style>
        /* Stili per centrare i color picker */
        .color-picker-container {
            display: flex;
            justify-content: center; /* centra orizzontalmente */
            align-items: center;
            gap: 20px; /* distanza tra i color picker */
            margin-top: 50px; /* margine superiore per centrare meglio nella pagina */
        }
        .color-picker {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
        }
        .color-info {
            font-family: Arial, sans-serif;
            font-size: 14px;
        }
    </style>
</head>
<body>

    <div class="color-picker-container">
        <div class="color-picker">
            <input type="color" id="colorInput1" value="#e92063">
            <div class="color-info" id="colorInfo1">HEX: #e92063</div>
        </div>
        <div class="color-picker">
            <input type="color" id="colorInput2" value="#7e56c2">
            <div class="color-info" id="colorInfo2">HEX: #7e56c2</div>
        </div>
        <div class="color-picker">
            <input type="color" id="colorInput3" value="#00a398">
            <div class="color-info" id="colorInfo3">HEX: #00a398</div>
        </div>
        <div class="color-picker">
            <input type="color" id="colorInput4" value="#ffc800">
            <div class="color-info" id="colorInfo4">HEX: #ffc800</div>
        </div>
    </div>

    <script>
        // Funzione per aggiornare le informazioni sul colore
        function updateColorInfo(colorInputId, colorInfoId) {
            const colorInput = document.getElementById(colorInputId);
            const colorInfo = document.getElementById(colorInfoId);

            colorInput.addEventListener('input', () => {
                colorInfo.textContent = `HEX: ${colorInput.value}`;
            });
        }

        // Aggiungi l'evento di aggiornamento per ciascun color picker
        updateColorInfo('colorInput1', 'colorInfo1');
        updateColorInfo('colorInput2', 'colorInfo2');
        updateColorInfo('colorInput3', 'colorInfo3');
        updateColorInfo('colorInput4', 'colorInfo4');
    </script>

</body>
</html>

