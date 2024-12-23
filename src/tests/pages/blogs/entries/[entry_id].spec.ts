import { test, expect } from '@playwright/test';

/** テスト対象となるページのルート相対パス */
// ブログ記事ページは共通なので、テスト用ページで実施
const TARGET_ROOT_RELATIVE_PATH: string = '/blogs/entries/9999999999/';

test('ブログ記事ページのメタデータが正しい', async ({ page }) => {
  await test.step('ブログ記事ページにアクセスする', async () => {
    await page.goto(TARGET_ROOT_RELATIVE_PATH);
  });

  await test.step('ページタイトルが正しいこと', async () => {
    await expect(page).toHaveTitle('テスト記事 - イナジカ.com');
  });

  await test.step('ページ説明文が正しいこと', async () => {
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      '表示を確認するためのテスト記事です。',
    );
  });
});

test('ブログ記事ページのOGP設定が正しい', async ({ page }) => {
  await test.step('ブログ記事ページにアクセスする', async () => {
    await page.goto(TARGET_ROOT_RELATIVE_PATH);
  });

  await test.step('ページ種別の設定が正しいこと', async () => {
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      'content',
      'article',
    );
  });

  await test.step('ページタイトルの設定が正しいこと', async () => {
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      'content',
      'テスト記事',
    );
  });

  await test.step('ページ説明の設定が正しいこと', async () => {
    await expect(
      page.locator('meta[property="og:description"]'),
    ).toHaveAttribute('content', '表示を確認するためのテスト記事です。');
  });
});
