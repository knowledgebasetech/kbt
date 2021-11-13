import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const root = join(process.cwd(), "docs");
const CATEGORY_FILE_NAME = "_index.md";

export function formatSlug(slug) {
  return slug.replace(/\.md$/, "");
}

export function getArticleSlugs() {
  const articleSlugs = [];
  fs.readdirSync(root).forEach((folder) => {
    const files = fs.readdirSync(`${root}/${folder}`);
    if (files.indexOf(CATEGORY_FILE_NAME) > -1) {
      files.forEach((file) => {
        if (file !== CATEGORY_FILE_NAME) {
          articleSlugs.push({ folder: folder, file: file });
        }
      });
    }
  });

  return articleSlugs;
}

export function getArticleBySlug(folder, file) {
  const fullPath = join(root, `/${folder}/${formatSlug(file)}.md`);
  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));

  return {
    folder: folder,
    file: file,
    slug: formatSlug(file),
    path: fullPath,
    content: content,
    ...data,
  };
}

export function getCategoriesBySlug(folder) {
  const fullPath = join(root, `/${folder}/${CATEGORY_FILE_NAME}`);
  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));

  return {
    folder: folder,
    file: CATEGORY_FILE_NAME,
    slug: formatSlug(CATEGORY_FILE_NAME),
    fullPath: fullPath,
    content: content,
    ...data,
  };
}

export function getArticles() {
  const articles = getArticleSlugs()
    .map((path) => getArticleBySlug(path.folder, path.file))
    .sort((x, y) => (x.date > y.date ? -1 : 1));
  return articles;
}

export function getCategories() {
  const categories = [];

  fs.readdirSync(root).forEach((folder) => {
    const files = fs.readdirSync(`${root}/${folder}`);
    if (files.indexOf(CATEGORY_FILE_NAME) > -1) {
      categories.push(getCategoriesBySlug(folder));
    }
  });

  return categories;
}

export function getCategoryArticles(slug) {
  const articles = getArticleSlugs()
    .filter((path) => path.folder === slug)
    .map((path) => getArticleBySlug(path.folder, path.file))
    .sort((x, y) => (x.date > y.date ? -1 : 1));
  return articles;
}
