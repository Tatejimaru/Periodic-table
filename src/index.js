"use strict";

import { get_table } from "./get_table.js";

const table = get_table();
console.log(table);

const el = document.querySelector("#elements");
for (const elment of table)
{
    el.insertAdjacentHTML("afterbegin", "<p>" + elment.AtomicNumber + ", " + elment.Element + "</p>");
}