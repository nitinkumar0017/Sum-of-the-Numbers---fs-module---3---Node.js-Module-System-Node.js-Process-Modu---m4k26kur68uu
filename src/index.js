const fs = require("fs")

let ans = fs.readFileSync("input.txt","utf-8")

let data = ans.split("\n")

total = 0

data.forEach((ele)=>{
    let num = ele.split(" ")[1]
    total += Number(num)
})

fs.writeFileSync("output.txt",String(total))
