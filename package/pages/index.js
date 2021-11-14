import Layout from "../components/layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getCategories } from "../lib/api";

export default function Home({ categories }) {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
        <div className="flex flex-wrap space-y-6 items-center justify-around max-w-4xl sm:w-full">
          {categories.map((category) => (
            <Link
              key={category.folder}
              as={`/${category.folder}`}
              href="/[categorySlug]/"
            >
              <div className="p-6 cursor-pointer text-left md:grid md:grid-cols-12 gap-8 w-full bg-white rounded-lg focus:text-primary-600 shadow-md focus:ring focus:ring-offset-2 ring-indigo-500 hover:shadow-lg transition">
                <div className="col-span-3 p-4 flex items-center justify-center rounded-lg bg-gray-50 text-primary-400">
                  {category.icon && (
                    <div className="text-4xl md:text-6xl p-4 flex items-center justify-center">
                      <FontAwesomeIcon icon={category.icon} />
                    </div>
                  )}
                </div>
                <div className="col-span-9">
                  <h3 className="text-2xl text-primary-600 font-semibold mt-3 md:mt-0">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{category.summary}</p>
                  <div className="md:grid md:grid-cols-12 items-start justify-between space-x-2 pt-6">
                    <div className="col-span-8 md:flex items-start space-y-2 md:space-y-0 md:space-x-2">
                      <div className="flex -space-x-1 flex-shrink-0 relative z-0 pt-1">
                        <img
                          className="inline-block relative z-30 h-8 w-8 rounded-full ring-2 ring-white object-center object-cover"
                          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block relative z-20 h-8 w-8 rounded-full ring-2 ring-white object-center object-cover"
                          src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1057&q=80"
                          alt=""
                        />
                        <img
                          className="inline-blockrelative z-10 h-8 w-8 rounded-full ring-2 ring-white object-center object-cover"
                          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
                          alt=""
                        />
                        <div className="inline-flex relative z-0 h-8 w-8 bg-gray-500 text-xs text-white justify-center items-center rounded-full ring-2 ring-white object-center object-cover">
                          +3
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Authors: John Doe,Alex Kim, Jennie kayle and 2 others
                      </p>
                    </div>
                    <div className="col-span-4 flex justify-end">
                      <button className="hidden md:inline-flex items-center bg-gray-200 rounded-lg px-3 py-1.5 font-semibold space-x-2 hover:bg-indigo-50 hover:text-primary-600 transition">
                        <span>{category.articleCount} Articles</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-6 h-6"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
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
