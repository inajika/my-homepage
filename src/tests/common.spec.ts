import { test, expect } from '@playwright/test';

/** テスト対象となるページのルート相対パス (トップページで確認) */
const TARGET_ROOT_RELATIVE_PATH: string = '/';

test('各画面共通のメタデータが正しい', async ({ page }) => {
  await test.step('トップページにアクセスする', async () => {
    await page.goto(TARGET_ROOT_RELATIVE_PATH);
  });

  await test.step('日本語ページであること', async () => {
    await expect(page.locator('html')).toHaveAttribute('lang', 'ja');
  });

  await test.step('文字コードがUTF-8であること', async () => {
    await expect(page.locator('meta[charset]')).toHaveAttribute(
      'charset',
      'UTF-8',
    );
  });

  await test.step('Viewportの設定が正しいこと', async () => {
    await expect(page.locator('meta[name="viewport"]')).toHaveAttribute(
      'content',
      'width=device-width,initial-scale=1.0',
    );
  });

  await test.step('faviconの設定が正しいこと', async () => {
    await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
      'href',
      '/favicon.ico',
    );
  });
});

test('各画面共通のOGP設定が正しいこと', async ({ page }) => {
  await test.step('トップページにアクセスする', async () => {
    await page.goto(TARGET_ROOT_RELATIVE_PATH);
  });

  await test.step('ロケールの設定が正しいこと', async () => {
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
      'content',
      'ja_JP',
    );
  });

  await test.step('URLの設定が正しいこと', async () => {
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      'content',
      'https://inajika.com/',
    );
  });

  await test.step('ページ画像の設定が正しいこと', async () => {
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      /https:\/\/inajika\.com\/.*MainDeer.*\.jpeg/,
    );
  });
});
