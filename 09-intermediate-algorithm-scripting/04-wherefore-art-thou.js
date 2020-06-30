function whatIsInAName(collection, source) {
  let keys = Object.keys(source);
  // Only change code below this line
  return collection.filter(prop => {
    return keys.every(key => {
      return prop.hasOwnProperty(key) && prop[key] == source[key]
    });
  });

  // Only change code above this line

}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
