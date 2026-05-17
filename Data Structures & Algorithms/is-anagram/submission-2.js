class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const myMap = new Map();

        if(s.length!==t.length) return false;
        for(let i=0;i<s.length;i++){
            myMap.set(s[i],myMap.get(s[i])?myMap.get(s[i])+1:1);
        }

        for(let i=0;i<t.length;i++){
           if(!myMap.get(t[i])||myMap.get(t[i])===0){
            return false;
           }
           myMap.set(t[i],myMap.get(t[i])-1);
        }

        return true;
    }
}
