"use strict";
const list = [];
const titleInput = document.querySelector("#titleInput");
const plansInput = document.querySelector("#plansInput");
const titleOfList = document.querySelector("#titleOfList");
const plansOfDay = document.querySelector("#plansOfDay");
const listDrawer = document.querySelector("#listDrawer");
const listInput = document.querySelector("#listInput");
const saveButton = document.querySelector("#saveButton");
const showListButton = document.querySelector("#showListButton");
const closeDrawerButton = document.querySelector("#closeDrawerButton");
saveButton?.addEventListener("click", (e) => {
    e.preventDefault();
    const newListPlans = {
        title: titleInput?.value ?? " ",
        plans: plansInput?.value ?? " "
    };
    list.push(newListPlans);
    console.log(newListPlans);
    const listInput = document.createElement("li");
    listInput.className = "flex list-none bg-blue-100 rounded-lg columns-auto";
    const titleOfList = document.createElement("h5");
    titleOfList.className = "inline-flex items-center p-2 m-4 text-base font-semibold text-gray-500 dark:text-gray-400";
    titleOfList.innerText = newListPlans.title;
    const plansOfDay = document.createElement("p");
    plansOfDay.className = "m-2 p-4 text-sm text-gray-500 dark:text-gray-400";
    plansOfDay.innerText = newListPlans.plans;
    listInput.appendChild(titleOfList);
    listInput.appendChild(plansOfDay);
    listDrawer?.appendChild(listInput);
});
showListButton?.addEventListener("click", () => {
    listDrawer?.classList.remove("hidden");
});
closeDrawerButton?.addEventListener("click", () => {
    listDrawer?.classList.add("hidden");
});
//# sourceMappingURL=index.js.map