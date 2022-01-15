const countAppearTimes = (string, object) => {
    string.split('').forEach((letter) => {
        object[letter] ? object[letter]++ : object[letter] = 1;
    });
}

const mergeStrings = (s1, s2) => {
    const recordsString1 = {};
    const recordsString2 = {};
    countAppearTimes(s1, recordsString1);
    countAppearTimes(s2, recordsString2);

    let pointer1 = 0;
    let pointer2 = 0;
    const lenOfS1 = s1.length;
    const lenOfS2 = s2.length;
    const resultString = [];

    while (pointer1 < lenOfS1 && pointer2 < lenOfS2) {
        if (recordsString1[s1[pointer1]] < recordsString2[s2[pointer2]]) {
            resultString.push(s1[pointer1]);
            pointer1 += 1;
        } else if (recordsString1[s1[pointer1]] > recordsString2[s2[pointer2]]) {
            resultString.push(s2[pointer2]);
            pointer2 += 1;
        } else {
            if (s1[pointer1] < s2[pointer2]) {
                resultString.push(s1[pointer1]);
                pointer1 += 1;
            } else if (s1[pointer1] > s2[pointer2]) {
                resultString.push(s2[pointer2]);
                pointer2 += 1;
            }
        }
    }

    while (pointer1 < lenOfS1) {
        resultString.push(s1[pointer1]);
        pointer1 += 1;
    }

    while (pointer2 < lenOfS2) {
        resultString.push(s2[pointer2]);
        pointer2 += 1;
    }

    return resultString.join('');
}

console.log(mergeStrings('super', 'tower'));
