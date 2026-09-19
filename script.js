let label = "Read";
console.log(label);

document.querySelector("button").addEventListener("click", () => {
    document.querySelector("#status").textContent = label;
});