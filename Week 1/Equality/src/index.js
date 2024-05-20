function arrayEquality(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!arrayEquality(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function objectEquality(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (
      (typeof val1 === "object" &&
        typeof val2 === "object" &&
        !objectEquality(val1, val2)) ||
      (!(typeof val1 === "object" && typeof val2 === "object") && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
}

module.exports = { arrayEquality, objectEquality };
