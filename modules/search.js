export function Search(updateValue, clickButton) {
  let inputBoxValue = "";
  inputBox.addEventListener("input", updateValue);
  inputBtn.addEventListener("click", clickButton);
}
