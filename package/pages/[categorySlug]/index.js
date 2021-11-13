import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/layout";
import BreadCrumbs from "../../components/breadCrumbs";
import {
  getCategoriesBySlug,
  getCategories,
  getCategoryArticles,
} from "../../lib/api";
import RenderArticle from "../../components/renderArticle";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Post({ category, articles }) {
  const router = useRouter();
  if (!router.isFallback && !category?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <div className="max-w-4xl mt-6 sm:w-full mx-auto">
        <BreadCrumbs category={category} article={null} />
        <div className="p-6 mt-6 text-left border w-full bg-gray-200 rounded-xl ">
          <h3 className="text-2xl font-bold">{category.title}</h3>
          <p className="mt-4 text-xl">{category.summary}</p>
        </div>
        <div className="flex flex-wrap items-center justify-around">
          {articles.map((article) => (
            <Link
              key={article.slug}
              as={`${category.slug}/${article.slug}`}
              href="[categorySlug]/[...slug]"
            >
              <div className="p-6 mt-6 text-left border w-full bg-white rounded-xl hover:text-blue-600 focus:text-blue-600">
                <h3 className="text-2xl font-bold">{article.title}</h3>
                <p className="mt-4 text-xl">{article.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const category = getCategoriesBySlug(params.categorySlug);
  const content = await markdownToHtml(category.content || "");

  return {
    props: {
      category: {
        ...category,
        content,
      },
      articles: getCategoryArticles(params.categorySlug),
    },
  };
}

export async function getStaticPaths() {
  const paths = [];

  getCategories().map((category) => {
    paths.push({
      params: {
        categorySlug: category.slug,
      },
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
