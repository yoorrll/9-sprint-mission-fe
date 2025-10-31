import axios from 'axios';

const ITEM_PAGE = 1;
const ITEM_PAGE_NUMBER = 4;
const ORDER_BY = 'recent';

const api = axios.create({
  baseURL: 'https://panda-market-api.vercel.app/products',
});

export async function getProductList({
  page = ITEM_PAGE,
  pageSize = ITEM_PAGE_NUMBER,
  orderBy = ORDER_BY,
}) {
  const res = await api.get('/', {
    params: { page, pageSize, orderBy },
  });
  console.log(res.data.list);
  console.log(res.data.totalCount);

  return {
    list: res.data.list,
    totalCount: res.data.totalCount,
  };
}
