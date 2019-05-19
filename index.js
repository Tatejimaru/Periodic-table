"use strict";

const s = "ans: ";

const func = (x) => {
    const el = document.querySelectorAll(".msg");
    let msg = "";
    for (let i = 0; i < 5; ++i)
    {
        const l = s + i;
        console.log(l);
        el[i].textContent = l;
    }

    const el2 = document.querySelector("#msg2");
    const arr = [1, 2, 3];
    let msg2 = "";
    for (const x of arr)
    {
        console.log(x);
        msg2 += x + ", ";
    }
    el2.textContent = msg2;
}

console.log("added");

func(s);