import PageLayout from "@/components/common/PageLayout";
import BestItems from "./_components/BestItems";
import Items from "./_components/Items";

export default function ArticlePage() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-10 my-6">
        <BestItems />
        <Items />
      </div>
    </PageLayout>
  );
}
