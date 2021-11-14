import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/layout";
import BreadCrumbs from "../../components/breadCrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getArticles } from "../../lib/api";

export default function Post({ category, articles }) {
  const router = useRouter();
  const keyword = router.query?.keyword;
  const filteredArticles = keyword
    ? articles.filter(
        (article) =>
          article.title.toLowerCase().includes(keyword.toLowerCase()) ||
          article.summary.toLowerCase().includes(keyword.toLowerCase())
      )
    : articles;
  return (
    <Layout>
      <div className="max-w-4xl sm:w-full mx-auto">
        <div>
          Showing search results for{" "}
          <span className="font-bold">{keyword}</span>
        </div>
        <div className="bg-gray-100 p-4 md:p-6 rounded-xl mt-4">
          <div className="flex flex-wrap items-center justify-around bg-white shadow-md divide-y divide-gray-200 mt-6 lg:rounded-lg overflow-hidden">
            {filteredArticles.length === 0 && (
              <div className="py-10">
                No results found for the search term{" "}
                <span className="font-bold">{keyword}</span>
              </div>
            )}
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                as={`/${article.folder}/${article.slug}`}
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

export async function getStaticProps() {
  return {
    props: {
      articles: getArticles(),
    },
  };
}
