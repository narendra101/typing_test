let container = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let displayQuote = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submit = document.getElementById("submitBtn");
let reset = document.getElementById("resetBtn");
let bg = document.getElementById("bg");
let spinner = document.getElementById("spinner");
let quote = async () => {
    let result = await fetch("https://apis.ccbp.in/random-quote");
    let response = await result.json();
    return response;
};
let key = 0;
let response;

let display = async () => {
    response = await quote();
    bg.classList.toggle("d-none");
    container.classList.toggle("d-none");
    spinner.classList.add("d-none");
    displayQuote.textContent = response.content;
    timer.textContent = 0;
    key = setInterval(() => {
        timer.textContent = parseInt(timer.textContent) + 1;
    }, 1000);
};

display();

submit.addEventListener("click", () => {
    content = quoteInput.value;
    if (content === displayQuote.textContent) {
        clearInterval(key);
        result.textContent = "You typed in " + timer.textContent + " seconds";
    } else {
        result.textContent = "You typed incorrect sentence";
    }
});

reset.addEventListener("click", () => {
    clearInterval(key);
    bg.classList.toggle("d-none");
    container.classList.toggle("d-none");
    spinner.classList.remove("d-none");
    quoteInput.value = "";
    timer.textContent = 0;
    displayQuote.textContent = "";
    result.textContent = "";
    display();
});