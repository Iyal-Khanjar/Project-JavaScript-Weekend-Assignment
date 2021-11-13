// Ex1.1 - Yes or No
function trueOrfalse(str) {
    console.log(str === true ? 'Yes' : str === false ? 'No' : 'Not a boolean');
}
trueOrfalse(false)

// Ex2.1 - Sum of lowest numbers
function sumOfLowestNumbers(numbers) {
    numbers = numbers.sort((a, b) => a - b)
    console.log(numbers[0] + numbers[1]);
}
sumOfLowestNumbers([19, 5, 42, 2, 77])

// Ex2.2 - One and Zero - Binary
function binary(binaryArr) {
    let str = binaryArr.join('')
    console.log(parseInt(str, 2));
}
binary([1, 1, 0, 1, 0, 0, 0])

// Ex2.3 - Find the Next Perfect Square
function findNextSquare(num) {
    if (Math.sqrt(num) % 1 !== 0) {
        console.log(-1);
    }
    else if (Math.sqrt(num) % 1 === 0) {
        console.log((Math.sqrt(num) + 1) * (Math.sqrt(num) + 1));
    }
}
findNextSquare(625)

// Ex2.4 - Unique
const stray = numbers => {
    let number = 0
    numbers.forEach(x => numbers.indexOf(x) ? number = x : null)
    return number
}
console.log(stray([1, 1, 1, 2, 1, 1]))

// Ex2.5 - Summation
function summation(n) {
    let sum = 0
    for (i = n; i >= 0; i--) {
        sum += i
    }
    console.log(sum);
}
summation(8)

// Ex2.6 - Years and Centuries
function yearsAndCenturies(year) {
    if ((year / 100) % 1 == 0)
        console.log(year / 100);
    else if ((year / 100) % 1 !== 0)
        console.log(Math.floor(year / 100) + 1);
}
yearsAndCenturies(1800)

// Ex2.7 - Basic Math
function operations(str, num1, num2) {
    console.log(str == '+' ? num1 + str + num2 + '=' + (num1 + num2) : str == '-' ?
        num1 + str + num2 + '=' + (num1 - num2) : str == '*' ?
            num1 + str + num2 + '=' + (num1 * num2) : str == '/' ?
                num1 + str + num2 + '=' + (num1 / num2) : 'Unknow operater');
}
operations('+', 10, 5)

// Ex3.1 - Growth Of population
function nb_year(p0, percent, aug, p) {
    for (i = 0; p0 < p; i++)
        p0 += p0 * percent / 100 + aug
    return i
}
console.log(nb_year(1500, 5, 100, 5000));

// Ex3.2 - People on the Bus
let number = function (busStops) {
    let peopleIn = 0;
    let peopleOut = 0;
    for (let i = 0; i < busStops.length; i++) {
        peopleIn += busStops[i][0];
        peopleOut += busStops[i][1];
    }
    return peopleIn - peopleOut;
}

// Ex4.1 - Fibonacci -
function Fibonacci(n) {
    let arr = [0, 1]
    for (i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    console.log(arr.join(','));
}
Fibonacci(11)

// Ex4.2 - Tribonacci -
function Tribonacci(n) {
    let arr = [0, 0, 1]
    for (i = 3; i <= n; i++) {
        if (n == 0) {
            arr = []
            console.log(arr);
        }
        else if (n >= 3) {
            arr.push(arr[i - 3] + arr[i - 2] + arr[i - 1])

            console.log(arr.join(','));
        }
        else if (n > 0 && n < 3) {
            console.log('number must be >= 3');
        }
    }
}
Tribonacci(3)

// Ex5.1 - trimming string
function word(str) {
    str = str.split('')
    str.shift()
    str.pop()
    console.log(str.join(''));
}
word('Hello')

// Ex5.2 - String Repeat
function repeat_str(str, times) {
    console.log(str.repeat(times));
}
repeat_str('|', 5)

// Ex5.3 - To Camel Case
let camalize = function camalize(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
console.log(camalize('the-stealth-warrior'));

// Ex5.4 - To Weird Case
const to_weird_case = (string) => {
    let newString = [];
    for (let i in string) {
        if (i % 2 == 0) {
            newString.push(string[i].toUpperCase());
        } else {
            newString.push(string[i].toLowerCase());
        }
    }
    return newString.join('');
};
console.log(to_weird_case('Weird string case'));

// Ex5.5 - Abbreviate two words
function abbrevName(name) {
    return name.split(" ").map(el => el[0].toUpperCase()).join(".")
}
console.log(abbrevName('sam harris'));

// Ex5.6 - Mask
function maskify(str) {
    let str1 = str.slice(0, -4)
    let str2 = '#'
    console.log(str2.repeat(str1.length) + str.slice(-4));
}
maskify('4556364607935616');

// Ex5.7 - shortest words
function findShortestWord(str) {
    var words = str.split(' ');
    var shortest = words.reduce((shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest;
}
console.log(findShortestWord("The quick brown fox jumped over the lazy dog is"));

// Ex5.8 - shortest words version 2
function findLongestWord(str) {
    var words = str.split(' ');
    var longest = words.reduce((longestWord, currentWord) => {
        return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, words[0]);
    return longest;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// Ex6.1 - Mumbling
function mumbling(str) {
    let str1 = str.split('')
    let arr = []
    for (let i = 0; i <= str1.length - 1; i++) {
        arr.push(str1[i].toUpperCase() + Array(i + 1).join(str1[i].toLowerCase()));
        // + Array(i + 1).join(str1[i].toLowerCase())

    }
    return arr.join('-')
}
console.log(mumbling('abcd'));

// Ex6.2 - Counting Duplicates
function duplicateCount(text) {
    let result = 0,
        soltingObject = {};
    text.toLowerCase().split('').map(str => {
        if (!soltingObject.hasOwnProperty(str)) {
            soltingObject[str] = 0;
        } else {
            if (soltingObject[str] === 0) {
                result += 1;
            }
            soltingObject[str] = soltingObject[str] + 1;
        }
    });
    return result;
}
console.log(duplicateCount('Indivisibilities'));

// Ex6.3 - organize strings
function longestWord(str) {
    let a = "xyaabbbccccdefww"
    let b = "xxxxyyyyabklmopq"
    str = a + b
    console.log(str
        .split('')
        .filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        })
        .sort().join(''));
}
longestWord()

// Ex6.4 - isogram
function isIsogram(str) {
    return str.toLowerCase().split('').filter((item, pos, arr) => arr.indexOf(item) == pos).length == str.length;
}
console.log(isIsogram('moOse'));

// Ex7 - Implement The Following JS Methods -
// Filter
function isBigEnough(value) {
    return value >= 10
}
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
console.log(filtered);
// ForEach
const items = ['item1', 'item2', 'item3']
const copyItems = []
items.forEach(function (item) {
    copyItems.push(item)
})
console.log(copyItems);
// Map
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);

// Ex 8 - Find the Perimeter of a Rectangle
function perimeter(length, width) {
    return 2 * (length + width)
}
console.log(perimeter(10, 20));