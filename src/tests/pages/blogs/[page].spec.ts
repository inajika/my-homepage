import { test, expect } from '@playwright/test';

/** テスト対象となるページのルート相対パス */
// ブログ一覧ページは共通なので、先頭のページで実施
const TARGET_ROOT_RELATIVE_PATH: string = '/blogs/1/';

test('ブログ記事一覧ページのメタデータが正しい', async ({ page }) => {
  await test.step('ブログ一覧ページにアクセスする', async () => {
    await page.goto(TARGET_ROOT_RELATIVE_PATH);
  });

  await test.step('ページタイトルが正しいこと', async () => {
    await expect(page).toHaveTitle('ブログ記事一覧 - イナジカ.com');
  });

  await test.step('ページ説明文が正しいこと', async () => {
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      'ブログ記事の一覧です。',
    );
  });
});

test('ブログ記事一覧ページのOGP設定が正しい', async ({ page }) => {
  await test.step('ブログ一覧ページにアクセスする', async () => {
    await page.goto(TARGET_ROOT_RELATIVE_PATH);
  });

  await test.step('ページ種別の設定が正しいこと', async () => {
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      'content',
      'website',
    );
  });

  await test.step('ページタイトルの設定が正しいこと', async () => {
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      'content',
      'ブログ記事一覧',
    );
  });

  await test.step('ページ説明の設定が正しいこと', async () => {
    await expect(
      page.locator('meta[property="og:description"]'),
    ).toHaveAttribute('content', 'ブログ記事の一覧です。');
  });
});
