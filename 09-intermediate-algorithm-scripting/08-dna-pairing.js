function matchPair(element) {
  switch (element) {
    case 'A':
      return ['A', 'T'];
    case 'T':
      return ['T', 'A'];
    case 'C':
      return ['C', 'G'];
    case 'G':
      return ['G', 'C'];
  }
}

function pairElement(str) {
  return str
    .split('')
    .map(element => matchPair(element));
}

console.log(pairElement("GCG"));