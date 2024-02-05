function translatePigLatin(str, charPos = 0) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(str[0])) {
    return str + (charPos === 0 ? 'way' : 'ay');
  } else if (charPos === str.length) {
    return str + 'ay';
  } else {
    return translatePigLatin(str.slice(1) + str[0], charPos + 1);
  }
}

translatePigLatin("consonant");