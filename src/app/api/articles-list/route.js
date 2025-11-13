// 전체 게시글 조회
import { getAllArticles } from "@/lib/services/ArticleApi";

export async function GET() {
  try {
    const articles = await getAllArticles();
    return Response.json(articles);
  } catch (error) {
    return Response.json(
      { error: "articles 데이터를 가져오는 데 실패했습니다." },
      { status: 500 }
    );
  }
}
