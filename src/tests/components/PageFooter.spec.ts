import { test, expect, type Locator } from '@playwright/test';

/** テスト対象となるページのルート相対パス (全ページ共通のためトップページで確認) */
const TARGET_ROOT_RELATIVE_PATH: string = '/';

test('ページフッタが正しいこと', async ({ page }) => {
  await test.step('トップページにアクセスする', async () => {
    await page.goto(TARGET_ROOT_RELATIVE_PATH);
  });

  /** ページフッタ */
  const FOOTER_LOCATOR: Locator = page.locator('footer.footer');

  await test.step('トップページへのリンクが正しいこと', async () => {
    await expect(FOOTER_LOCATOR.getByText('イナジカ.com')).toHaveAttribute(
      'href',
      '/',
    );
  });

  await test.step('フッタ内のタイトルが存在すること', async () => {
    await expect(FOOTER_LOCATOR.locator('h6.footer-title')).toHaveText([
      'Contents',
      'Social',
    ]);
  });

  await test.step('自己紹介ページへのリンクが正しいこと', async () => {
    await expect(FOOTER_LOCATOR.getByText('About Me')).toHaveAttribute(
      'href',
      '/about/',
    );
  });

  await test.step('ブログ一覧ページへのリンクが正しいこと', async () => {
    await expect(FOOTER_LOCATOR.getByText('Blogs')).toHaveAttribute(
      'href',
      '/blogs/1/', // ブログ一覧の先頭ページ
    );
  });

  await test.step('Xへのリンクが存在していること', async () => {
    await expect(FOOTER_LOCATOR.locator('a[aria-label="X"]')).toHaveAttribute(
      'href',
      'https://x.com/inaji01',
    );
  });

  await test.step('Instagramへのリンクが存在していること', async () => {
    await expect(
      FOOTER_LOCATOR.locator('a[aria-label="Instagram"]'),
    ).toHaveAttribute('href', 'https://www.instagram.com/inaji01/');
  });

  await test.step('Mastodonへのリンクが存在していること', async () => {
    await expect(
      FOOTER_LOCATOR.locator('a[aria-label="Mastodon"]'),
    ).toHaveAttribute('href', 'https://mstdn.kemono-friends.info/@inaji01');
  });

  await test.step('Blueskyへのリンクが存在していること', async () => {
    await expect(
      FOOTER_LOCATOR.locator('a[aria-label="Bluesky"]'),
    ).toHaveAttribute('href', 'https://bsky.app/profile/bsky.inajika.com');
  });

  await test.step('mixi2へのリンクが存在していること', async () => {
    await expect(
      FOOTER_LOCATOR.locator('a[aria-label="mixi2"]'),
    ).toHaveAttribute('href', 'https://mixi.social/@inaji01');
  });
  await test.step('GitHubへのリンクが存在していること', async () => {
    await expect(
      FOOTER_LOCATOR.locator('a[aria-label="GitHub"]'),
    ).toHaveAttribute('href', 'https://github.com/inajika');
  });
});
