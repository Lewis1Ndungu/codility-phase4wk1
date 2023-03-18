function mergeStrings(str1, str2) {
    // Check if strings are empty or null
    if (!str1) return str2;
    if (!str2) return str1;
  
    const len1 = str1.length;
    const len2 = str2.length;
  
    // Check if the end of the first string is the same as the start of the second string
    for (let i = 1; i <= Math.min(len1, len2); i++) {
      if (str1.slice(len1 - i) === str2.slice(0, i)) {
        return str1 + str2.slice(i);
      }
    }
  
    // If there is no overlap, concatenate the strings
    return str1 + str2;
  }
  