import { getData } from "./getData.js";
import { key } from "./key.js";

export const itemArr = [];

export function ItemList() {
  getData(key, index).then((res) =>
    res.response.body.items.item.map((item) => itemArr.push(item))
  );
}

ItemList();
// 1. search() 에서 변수값 가져오기
// 2. itemList() 에서 filter를 통해 변수값을 가지고 있는 배열 찾아서 출력하기
// 3. List에 아이콘 추가해서 아이콘 클릭하면 Cart에 데이터 넘기기
