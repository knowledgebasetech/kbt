import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  return (
    <header className="flex-shrink-0">
      <div className="bg-indigo-900 ">
        <div className="max-w-4xl container mx-auto py-6 px-4 md:px-0 ">
          <div className="flex flex-col-reverse md:flex-row md:justify-between items-center">
            <h1 className="text-white font-bold text-xl pt-4 md:pt-0">
              <Link href="/">
                <a>
                  Knowledgebase
                  <span className="font-light ml-2 pl-2 border-l-2">
                    Help Center
                  </span>
                </a>
              </Link>
            </h1>
            <div className="flex space-x-5 text-white items-center">
              <a
                target="_blank"
                rel="noopener"
                href="https://Knowledgebase.tech/"
                className="px-3 py-2 border border-transparent rounded flex space-x-2 items-center bg-indigo-100 bg-opacity-10 hover:bg-opacity-20 hover:shadow-lg transition"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
                <span>Go to Knowledgebase</span>
              </a>
            </div>
          </div>
          <label className="inline-block pt-4 md:pt-6 text-indigo-100">
            A simple tool to build knowledge base
          </label>
          <input
            type="text"
            className="mt-2 w-full rounded focus:outline-none focus:ring text-lg py-3 px-4 shadow-lg"
            placeholder="Search for articles..."
            name="search"
          ></input>
        </div>
      </div>
    </header>
  );
}
