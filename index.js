// the input box
let input = document.querySelector("input");
input.addEventListener("keyup", e => {
    let inputVal = input.value.toLowerCase();

    let listItems = document.querySelectorAll("li");
    Array.from(listItems).forEach(item => {
        let chars = item.textContent.toLowerCase();

        if (chars.indexOf(inputVal) != -1) {
            console.log(`the input is ${inputVal} and the innerHTML is ${item.innerHTML}`);
            item.style.display = "block";
        }
        else {
            item.style.display = "none";
        }
    })
});