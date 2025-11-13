const BASE_URL = "https://sprint-7-server.onrender.com/articles";

// 전체 articles
export async function getAllArticles() {
  const res = await fetch(`${BASE_URL}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("articles 가져오기 실패");
  }

  return res.json();
}

// 단일 article
export async function getArticleById(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });

  if (!res.ok) throw new Error("id에 따른 article 가져오기 실패");

  return res.json();
}

// article 생성
export async function createArticle(data) {
  const res = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("article 생성 실패");

  return res.json();
}

// article 수정
export async function updateArticle(id, data) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("article 수정 실패");

  return res.json();
}

// article 삭제
export async function deleteArticle(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("article 삭제 실패");

  return res.json();
}
