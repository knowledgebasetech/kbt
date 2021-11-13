import { useRouter } from "next/router";
import Layout from "../../components/layout";
import {
  getArticleBySlug,
  getCategoriesBySlug,
  getArticles,
} from "../../lib/api";
import RenderArticle from "../../components/renderArticle";
import markdownToHtml from "../../lib/markdownToHtml";
import BreadCrumbs from "../../components/breadCrumbs";

export default function Post({ article, category }) {
  const router = useRouter();

  if (!router.isFallback && !article?.folder) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <div className="max-w-4xl mt-6 sm:w-full mx-auto">
        <BreadCrumbs category={category} article={category} />
      </div>
      <RenderArticle article={article}></RenderArticle>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const category = getCategoriesBySlug(params.categorySlug);
  const article = getArticleBySlug(params.categorySlug, params.slug);
  const content = await markdownToHtml(article.content || "");

  return {
    props: {
      article: {
        ...article,
        content,
      },
      category: category,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];

  getArticles().map((article) => {
    paths.push({
      params: {
        categorySlug: article.folder,
        slug: article.slug,
      },
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
