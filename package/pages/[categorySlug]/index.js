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
      <div className="max-w-4xl sm:w-full mx-auto">
        <BreadCrumbs category={category} article={null} />
        <div className="bg-gray-100 p-4 md:p-6 rounded-xl mt-4">
          <div className="flex items-start md:items-stretch flex-col md:grid md:grid-cols-12 md:gap-8 text-left w-full bg-gray-100 rounded-xl">
            {category.icon && (
              <div className="col-span-3 bg-gray-50 text-4xl md:text-5xl text-primary-400 p-4 flex w-full md:w-auto items-start md:items-center justify-center rounded-lg">
                <FontAwesomeIcon icon={category.icon} />
              </div>
            )}
            <div className="col-span-9 mt-3 md:mt-0">
              <h3 className="text-xl md:text-2xl font-medium">
                {category.title}
              </h3>
              <p className="mt-3 text-gray-700">{category.summary}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-around bg-white shadow-md divide-y divide-gray-200 mt-6 lg:rounded-lg overflow-hidden">
            {articles.map((article) => (
              <Link
                key={article.slug}
                as={`/${category.folder}/${article.slug}`}
                href="/[categorySlug]/[slug]"
              >
                <div className="w-full bg-white py-6 focus:text-primary-600 cursor-pointer hover:ring-inset hover:ring-primary-500">
                  <div className="relative before:absolute before:inset-y-0 before:w-1 before:rounded-r before:bg-primary-400">
                    <h3 className="text-xl font-medium text-primary-500 px-6">
                      {article.title}
                    </h3>
                  </div>
                  <p className="px-6 mt-2 text-gray-600">{article.summary}</p>
                </div>
              </Link>
            ))}
          </div>
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
