function mutation(arr) {
  const item1 = arr[0].toLowerCase();
  const item2 = arr[1].toLowerCase();
  for (let i = 0; i < item2.length; i++) {
    if (item1.indexOf(item2[i]) == -1) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
