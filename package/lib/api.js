import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const root = join(process.cwd(), "docs");

export function formatSlug(slug) {
  return slug.join("/").replace(/\.md$/, "");
}

export function getArticleSlugs() {
  const articleSlugs = [];

  fs.readdirSync(root).forEach((folder) => {
    const files = fs.readdirSync(`${root}/${folder}`);
    files.forEach((file) => articleSlugs.push([`${folder}`, file]));
  });

  return articleSlugs;
}

export function getArticleBySlug(slug) {
  const fullPath = join(root, `/${formatSlug(slug)}.md`);
  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));

  return {
    slug: formatSlug(slug),
    content: content,
    ...data,
  };
}

export function getCategoriesBySlug(slug) {
  const fullPath = join(root, `/${slug}/_index.md`);
  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));

  return {
    slug: slug,
    content: content,
    ...data,
  };
}

export function getArticles() {
  const articles = getArticleSlugs()
    .map((slug) => getArticleBySlug(slug))
    .sort((x, y) => (x.date > y.date ? -1 : 1));
  return articles;
}

export function getCategories() {
  const categories = [];

  fs.readdirSync(root).forEach((folder) => {
    const files = fs.readdirSync(`${root}/${folder}`);
    if (files.indexOf("_index.md") > -1) {
      categories.push(getCategoriesBySlug(folder));
    }
  });

  return categories;
}

export function getCategoryArticles(slug) {
  const articles = getArticleSlugs()
    .filter((articleSlug) => articleSlug[0] === slug)
    .map((articleSlug) => getArticleBySlug(articleSlug))
    .sort((x, y) => (x.date > y.date ? -1 : 1));
  return articles;
}
