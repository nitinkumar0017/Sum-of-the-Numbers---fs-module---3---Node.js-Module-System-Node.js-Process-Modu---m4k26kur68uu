// const fs = require("fs")

// let ans = fs.readFileSync("input.txt","utf-8")

// let data = ans.split("\n")

// let total = 0

// data.forEach((ele) => {
//     if (ele.trim().length > 0) { 
//         let parts = ele.split(" ");
//         let num = parts[1];
//         total += Number(num);
//     }
// });


// fs.writeFileSync("output.txt",String(total))

const fs = require("fs");
const path = require("path");

// input aur output ka exact path banate hain
const inputPath = path.join(__dirname, "input.txt");
const outputPath = path.join(__dirname, "output.txt");

// input file padho
let ans = fs.readFileSync(inputPath, "utf-8");

// split by line
let data = ans.trim().split("\n");

let total = 0;

data.forEach((ele) => {
    let parts = ele.trim().split(/\s+/); // multiple spaces bhi handle
    let num = parts[1];
    total += Number(num);
});

// output file me likho
fs.writeFileSync(outputPath, String(total));
