const fs = require("fs")

let ans = fs.readFileSync("input.txt","utf-8")

let data = ans.split("\n")

let total = 0

data.forEach((ele) => {
    if (ele.trim().length > 0) { 
        let parts = ele.split(" ");
        let num = parts[1];
        total += Number(num);
    }
});


fs.writeFileSync("output.txt",String(total))
