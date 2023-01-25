export async function getData(key, index) {
  const data = await fetch(
    `https://apis.data.go.kr/4510000/GetBrGoodsService/getBrGoodsDataInfo?serviceKey=${key}&pageIndex=${index}&firstIndex=1&dataType=json`
  );
  const response = await data.json();
  return response.response.body.items.item;
}
