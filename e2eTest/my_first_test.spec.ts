  import { test, expect } from '@playwright/test';

test('has title', async ({ page, context }) => {
  await context.tracing.start(
    {
      screenshots: true, snapshots: true
    });
  await page.goto('https://playwright.dev/');
  // JS is a Async PL, Asynchronous calls do not block (or wait) 
  //for the API call to return from the server. Execution continues
  // on in your program, and when the call returns from the server,
  // a “callback” function is executed.
  // keyword async before a function makes the function return a promise


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  await context.tracing.stop({path: 'test123_trace.zip'})
});
// keyword "await" before a function makes the function wait for a promise

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get startedTEST' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
