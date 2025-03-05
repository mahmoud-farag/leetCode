/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
  let targetIndices = [];
  for(let index= 0; index < nums.length -1; index++) {

      for (let nestedIndex = index +1; nestedIndex < nums.length; nestedIndex++) {
           
           if (nums[index] + nums[nestedIndex] === target) {
              targetIndices = [index, nestedIndex];
              break;
           } 
      }
      if (targetIndices.length) break;
  }

  return targetIndices;
};