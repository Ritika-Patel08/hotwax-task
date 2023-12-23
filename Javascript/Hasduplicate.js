function hasDuplicates(nums) {
    const numSet = new Set();
  
    for (const num of nums) {
      if (numSet.has(num)) {
        return true; 
      } else {
        numSet.add(num);
      }
    }
  
    return false; 
}
  const array1 = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
  console.log(hasDuplicates(array1)); 
  
  const array2 = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19];
  console.log(hasDuplicates(array2));
  