const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Abre tu sitio web
  await page.goto('https://manelfarre.github.io/CarNextDoor/index.html');
  
  // Espera a que todos los botones estén cargados
  await page.waitForSelector('.btn');  // Cambia '.btn' por el selector de los elementos

  // Obtén todos los elementos que deseas interactuar
  const botones = await page.$$('.btn'); // Esto devuelve una lista de elementos DOM

  // Genera un índice aleatorio para elegir un botón
  const randomIndex = Math.floor(Math.random() * botones.length);

  // Realiza un clic en el botón seleccionado aleatoriamente
  await botones[randomIndex].click();

  // Espera 2 segundos
 

  // Cierra el navegador
  await browser.close();
})();
