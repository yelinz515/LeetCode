/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1
        let right =n
        while(left < right){
           const mid = left + Math.floor((right-left)/2)
           if(isBadVersion(mid)){ // n이 5이면 isBadVersion(3) -> false
               right = mid
           }else{
            left = mid + 1
           }
        }
       return left; 
    };
};