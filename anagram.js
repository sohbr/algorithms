var isAnagram = function(s, t) {
    let count = {};

    for (let i = 0; i < s.length; i++) {
        if (!count[s[i]]) count[s[i]] = 0;
        count[s[i]]++;
    }

    for (let j = 0; j < t.length; j++) {
        if (!count[t[j]]) count[t[j]] = 0;
        count[t[j]]--;
    }

    count = Object.values(count);
    console.log(count);

    for (let k = 0; k < count.length; k++) {
      if (count[k] !== 0) return false;
    }

    return true;
};

console.log(isAnagram('a','b'));
console.log(isAnagram('anagram','nagaram'));
