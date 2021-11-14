export default function RenderArticle({ article }) {
  return (
    <div className="mx-auto container max-w-4xl py-2 md:py-5 prose lg:prose-lg">
      <div className="md:rounded-xl bg-white p-4 md:p-10 md:shadow">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </div>
  );
}
