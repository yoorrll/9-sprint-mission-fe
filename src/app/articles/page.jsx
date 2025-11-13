import PageLayout from "@/components/common/PageLayout";
import BestItems from "./_components/BestItems";
import Items from "./_components/Items";
import { getAllArticles } from "@/lib/services/ArticleApi";

export default async function ArticlePage() {
  const response = await getAllArticles();
  const articles = response.data;

  return (
    <PageLayout>
      <div className="flex flex-col gap-10 my-6">
        <BestItems articles={articles.slice(0, 3)} />
        <Items articles={articles} />
      </div>
    </PageLayout>
  );
}
