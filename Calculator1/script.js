let firstValue;

for (let i of document.querySelectorAll('.figures')) {
    i.addEventListener('click', function screenWrite() {
        document.getElementById("screen").textContent += i.textContent;
    });
}
document.getElementById('plus').onclick = function () {
    firstValue = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    document.getElementById('equals').onclick = function () {
        document.getElementById("screen").textContent = parseFloat(firstValue) + parseFloat(document.getElementById("screen").textContent);
        if (document.getElementById("screen").textContent == 'NaN') {
            document.getElementById("screen").textContent = 'Error!'
        }
    }
}
