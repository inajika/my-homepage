import type { EntryFieldTypes } from 'contentful';
import { createClient } from 'contentful';

/**
 * ContentfulAPIのクライアント
 */
export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_TOKEN,
  host: import.meta.env.NODE_ENV === 'production'
    ? 'cdn.contentful.com'
    : 'preview.contentful.com',
});

/**
 * ブログ記事
 */
export interface BlogEntry {
  /** コンテンツID */
  contentTypeId: 'blog_entries',
  /** コンテンツ */
  fields: {
    /** 記事ID(ユニークな整数) */
    entry_id: EntryFieldTypes.Integer,
    /** 記事タイトル(短いテキスト) */
    entry_title: EntryFieldTypes.Text,
    /** 記事本文(リッチテキスト) */
    entry_body: EntryFieldTypes.RichText,
    /** アイキャッチ画像 */
    eyecatch: EntryFieldTypes.AssetLink,
    /** 記事の概要(短いテキスト) */
    description: EntryFieldTypes.Text,
  },
};

/**
 * 画像レンダリング用オプション
 * 
 * 画像の代替テキストは次のように決まります。
 * 最優先→画像の説明
 * 次点→画像のタイトル
 * 最後→「画像」
 */
export const renderImageOption = {
  renderNode: {
    "embedded-asset-block": (node: any) => 
      `<img src="${node.data.target.fields.file.url}" alt="${
        node.data.target.fields.description
          ? node.data.target.fields.description
          : node.data.target.fields.title
            ? node.data.target.fields.title
            : '画像'
      }">`,
  },
};
