import { test, expect, type Locator } from '@playwright/test';

/** テスト対象となるページのルート相対パス (全ページ共通のためトップページで確認) */
const TARGET_ROOT_RELATIVE_PATH: string = '/';

test('ページヘッダが正しいこと', async ({ page }) => {
  await test.step('トップページにアクセスする', async () => {
    await page.goto(TARGET_ROOT_RELATIVE_PATH);
  });

  /** ページヘッダ */
  const HEADER_LOCATOR: Locator = page.locator('div.navbar');

  await test.step('トップページへのリンクが正しいこと', async () => {
    await expect(HEADER_LOCATOR.getByText('イナジカ.com')).toHaveAttribute(
      'href',
      '/',
    );
  });

  await test.step('ハンバーガーメニューにある自己紹介ページへのリンクが正しいこと', async () => {
    await expect(HEADER_LOCATOR.getByText('About Me')).toHaveAttribute(
      'href',
      '/about/',
    );
  });

  await test.step('ハンバーガーメニューにあるブログ一覧ページへのリンクが正しいこと', async () => {
    await expect(HEADER_LOCATOR.getByText('Blogs')).toHaveAttribute(
      'href',
      '/blogs/1/', // ブログ一覧の先頭ページ
    );
  });
});
