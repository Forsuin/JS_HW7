window.onload = function () {
    let input = document.getElementById("input");
    input.addEventListener("keydown", function (e) {
        if(e.code === "Enter") {
            console.log(input.value);
            document.getElementById("output").value = factorial(input.value);
        }
    })
}

function factorial(num){
    if(num === 0) return 1;
    return num * factorial(num - 1);
}