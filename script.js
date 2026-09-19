let label = "Read";
console.log(label);

document.querySelector("#status");

document.querySelector("button").addEventListener("click", () => {
    document.querySelector("#status").textContent = label;
});