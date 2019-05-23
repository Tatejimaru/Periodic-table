"use strict";

import { get_table } from "./get_table";




// const s = "ans: ";

// const func = (x) => {
//     const el = document.querySelectorAll(".msg");
//     let msg = "";
//     for (let i = 0; i < 5; ++i)
//     {
//         const l = s + i;
//         console.log(l);
//         el[i].textContent = l;
//     }

//     const el2 = document.querySelector("#msg2");
//     const arr = [1, 2, 3];
//     let msg2 = "";
//     for (const x of arr)
//     {
//         console.log(x);
//         msg2 += x + ", ";
//     }
//     el2.textContent = msg2;
// }

// console.log("added");

// func(s);

// const getCSV = () => 
// {
//     const req = new XMLHttpRequest();
//     req.open("GET", "./Periodic Table of Elements.csv", true);
//     req.send(null);
//     req.onload = () =>{
//         const target = req.responseText;
//         const reader = new FileReader();
//         reader.readAsText(target);

//         for (let i = 0; i < 10; ++i)
//         {
//             console.log(reader.result.split(","));
//         }
//     }
// }
