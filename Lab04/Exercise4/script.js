function checkLength() {
    let elem = document.getElementById("word-count");
    let input = document.getElementById("textarea");
    
    let preparedText = `${input.value.length}/250`;

    if (input.value.length >= 250) {
        document.getElementById("content").id = "content-max";
        elem.innerHTML = `<span style="color: red;">${preparedText}</span>`;
    } else {
        try {
            document.getElementById("content-max").id = "content";
        } catch {
            // silent it.
        }

        elem.innerText = preparedText;
    }
}