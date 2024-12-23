import { test, expect } from '@playwright/test';

/** テスト対象となるページのルート相対パス */
const TARGET_ROOT_RELATIVE_PATH: string = '/';

test('トップページのメタデータが正しい', async ({ page }) => {
  await test.step('トップページにアクセスする', async () => {
    await page.goto(TARGET_ROOT_RELATIVE_PATH);
  });

  await test.step('ページタイトルが正しいこと', async () => {
    await expect(page).toHaveTitle('イナジカ.com');
  });

  await test.step('ページ説明文が正しいこと', async () => {
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      'イナジカのホームページです。',
    );
  });
});

test('トップページのOGP設定が正しい', async ({ page }) => {
  await test.step('トップページにアクセスする', async () => {
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
      'イナジカ.com',
    );
  });

  await test.step('ページ説明の設定が正しいこと', async () => {
    await expect(
      page.locator('meta[property="og:description"]'),
    ).toHaveAttribute('content', 'イナジカのホームページです。');
  });
});
