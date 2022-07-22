/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length-1 // 5
    
    while(left <= right){    
    let mid = left + Math.floor((right - left) /2) // 2
        if(target > nums[mid]){
            left = mid + 1 //3
        }else if (target === nums[mid]){
            return mid; 
        }else {
            right = mid -1;
        }
    }
    return -1;
};