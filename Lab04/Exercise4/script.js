function checkLength() {
    let elem = document.getElementById("word-count");
    let input = document.getElementById("textarea");
    
    let preparedText = `${input.value.length}/250`;

    if (input.value.length >= 250) {
        document.getElementById("content").classList.add("max");
        elem.innerHTML = `<span style="color: red;">${preparedText}</span>`;
    } else {
        document.getElementById("content").classList.remove("max");
        elem.innerText = preparedText;
    }
}