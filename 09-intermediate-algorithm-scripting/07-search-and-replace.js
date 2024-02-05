function myReplace(str, before, after) {
  const i = str.indexOf(before);

  return str[i].toUpperCase() === str[i]
    ? str.replace(
      before, (after = after[0].toUpperCase() + after.slice(1))
    )
    : str.replace(
      before, (after = after[0].toLowerCase() + after.slice(1))
    );
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");