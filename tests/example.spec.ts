import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Test prueba1 valen', async ({ page }) => {
 
  await page.goto(`https://www.mercadolibre.com.ar/`) //con goto pedimos que abra el browser con ciertas configuraciones

  await page.locator(`input[id="cb1-edit"]`).fill(`Iphone`) //con locator localizamos/navegamos el id y con fill buscamos 

  await page.keyboard.press(`Enter`)
  await expect(page.locator(`//ol[contains(@class, 'ui-search-layout')]`)).toBeVisible() //que espere a que este elemento sea visible
  await page.pause() //pause permite detenernos en la ejecucion para comprobar que este correcto 

});