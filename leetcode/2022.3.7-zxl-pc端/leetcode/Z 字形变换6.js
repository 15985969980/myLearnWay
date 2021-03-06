/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }
    const re = numRows * 2 - 2;
    const w = Math.floor((s.length + re - 1) / re) * (numRows - 1);
    const arr = new Array(numRows).fill(0).map(() => new Array(w).fill(0));
    for (let i = 0, x = 0, y = 0; i < s.length; i++) {
        arr[x][y] = s[i];
        if (i % re < numRows - 1) {
            x++; 
        } else {
            x--;
            y++; 
        }
    }
    const ans = [];
    for (const row of arr) {
        for (const ch of row) {
            if (ch !== 0) {
                ans.push(ch);
            }
        }
    }
    return ans.join('');
};

console.log(convert("PAYPALISHIRING",3));

// 6. Z 字形变换
// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
 
// 示例 1：

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"
// 示例 2：
// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// 示例 3：

// 输入：s = "A", numRows = 1
// 输出："A"
 
// 提示：

// 1 <= s.length <= 1000
// s 由英文字母（小写和大写）、',' 和 '.' 组成
// 1 <= numRows <= 1000