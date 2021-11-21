import Link from "next/link";
import { title, tagline, description, headerNavLinks } from "../kbt.settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: { keyword: search },
    });
  };
  return (
    <header className="flex-shrink-0">
      <div className="bg-primary-900 hero-header relative">
        <div className="max-w-4xl container mx-auto py-6 px-4 md:px-0 relative z-10 ">
          <div className="flex flex-col-reverse md:flex-row md:justify-between items-center">
            <div className="text-white font-bold pt-4 md:pt-0">
              <Link href="/">
                <a className="inline-flex items-center">
                  <img
                    className="inline-block relative z-30 w-40 md:w-56 h-full object-contain"
                    src="/knowledgebase-logo-white.svg"
                    alt="Knowlegebase Logo"
                  />
                  {tagline && (
                    <span className="font-light text-base md:text-xl ml-2 pl-2 md:ml-3 md:pl-3 border-l-2">
                      {tagline}
                    </span>
                  )}
                </a>
              </Link>
            </div>
            <div className="flex space-x-5 text-white items-center">
              {headerNavLinks.map(({ title, link, icon }) => (
                <a
                  target="_blank"
                  rel="noopener"
                  href={link}
                  className="px-3 py-2 border border-transparent rounded flex space-x-2 items-center bg-primary-100 bg-opacity-10 text-sm hover:bg-opacity-20 hover:shadow-lg transition"
                >
                  <span>
                    <FontAwesomeIcon icon={icon || "external-link-alt"} />
                  </span>
                  <span>{title}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="pt-6 pb-4">
            {description && (
              <h1 className="text-base md:text-xl text-center md:text-left md:pt-6 text-gray-100">
                {description}
              </h1>
            )}
            <form onSubmit={onSubmit}>
              <input
                type="text"
                className="mt-3 w-full rounded focus:outline-none focus:ring ring-primary-500 text-lg py-3 px-4 shadow-lg"
                placeholder="Search for articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name="search"
              />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
