import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { getArticleBySlug, getArticles } from "../../lib/api";
import RenderArticle from "../../components/renderArticle";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Post({ article }) {
  const router = useRouter();
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <RenderArticle article={article}></RenderArticle>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug);
  const content = await markdownToHtml(article.content || "");

  return {
    props: {
      article: {
        ...article,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = [];

  getArticles().map((article) => {
    paths.push({
      params: {
        slug: article.slug.split("/"),
      },
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
