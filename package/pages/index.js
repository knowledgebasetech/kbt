import Layout from "../components/layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getCategories } from "../lib/api";

export default function Home({ categories }) {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
          {categories.map((category) => (
            <Link
              key={category.folder}
              as={`/${category.folder}`}
              href="/[categorySlug]/"
            >
              <div className="p-6 mt-6 text-left border w-full bg-white rounded-xl hover:text-primary-600 focus:text-primary-600 flex">
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
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      categories: getCategories(),
    },
  };
}
