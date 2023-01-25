import { compareStoreList } from "./src/modules/compareStoreList.js";
import { getData } from "./src/modules/getData.js";
import { itemListButton } from "./src/modules/itemListButton.js";
import { key } from "./src/modules/key.js";
import { updateValue } from "./src/modules/updateValue.js";

const totCnt = 787; //api가 갖고 있는 데이터 개수

const inputBox = document.querySelector(".inputBox");
const inputBtn = document.querySelector(".inputBtn");

const totItemList = await getData(key, totCnt);

/**if (totItemList) {
  console.log(totItemList);
}**/
inputBox.addEventListener("input", () => {
  updateValue(inputBox.value);
});
inputBtn.addEventListener("click", () => {
  const value = compareStoreList(inputBox.value, totItemList);
  console.log(value);
});

itemListButton();
