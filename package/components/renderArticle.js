export default function RenderArticle({ article }) {
  return (
    <div className="mx-auto container max-w-4xl py-2 md:py-5 prose lg:prose-lg">
      <div className="rounded bg-white px-4 md:px-10 py-1 md:shadow">
        <h2>{article.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </div>
  );
}
