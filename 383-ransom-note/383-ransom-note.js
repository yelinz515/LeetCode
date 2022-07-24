/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let dicArr = [...magazine];
    for(let c of ransomNote){
        let index = dicArr.indexOf(c);
        if(index <0) return false;
        dicArr.splice(index,1);
    }
    return true
};