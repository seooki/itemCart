export function compareStoreList(keyword, data) {
  const test = data[0].storeNm.split("");
  const keyTest = keyword.split("");

  let count = 0;

  const testLength = test.length;
  const keyTestLength = keyTest.length;

  if (testLength < keyTestLength) {
    for (let i = 0; i < keyTestLength - testLength; i++) {
      console.log("실행");
      test.push(" ");
    }
  } else if (test.length > keyTest.length) {
    for (let i = 0; i < testLength - keyTestLength; i++) {
      keyTest.push(" ");
    }
  } else {
  }
  console.log(test, keyTest);

  for (let i = 0; i < testLength; i++) {
    for (let j = 0; j < keyTestLength; j++) {
      if (test[i] == keyTest[j]) {
        count += 1;
      }
    }
  }

  if (count >= 2) {
    console.log(data[0]);
  }

  console.log(count);
}
