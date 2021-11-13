import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/layout";
import BreadCrumbs from "../../components/breadCrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  getCategoriesBySlug,
  getCategories,
  getCategoryArticles,
} from "../../lib/api";
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
        <div className="p-6 mt-6 text-left border w-full bg-gray-200 rounded-xl flex">
          {category.icon && (
            <div className="text-3xl font-bold p-10 flex items-center justify-center">
              <FontAwesomeIcon icon={category.icon} />
            </div>
          )}
          <div>
            <h3 className="text-2xl font-bold">{category.title}</h3>
            <p className="mt-4 text-xl">{category.summary}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-around">
          {articles.map((article) => (
            <Link
              key={article.slug}
              as={`/${category.folder}/${article.slug}`}
              href="/[categorySlug]/[slug]"
            >
              <div className="p-6 mt-6 text-left border w-full bg-white rounded-xl hover:text-primary-600 focus:text-primary-600">
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
        categorySlug: category.folder,
      },
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
