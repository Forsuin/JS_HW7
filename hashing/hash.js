// window.onload = function () {
//     let input = document.getElementById("input");
//     input.addEventListener("keydown", function (e) {
//         if(e.code === "Enter") {
//             output(...calculateHash(input.innerHTML));
//         }
//     })
// }

function generate(){
    let input = document.getElementById("input")
    calculateHash(input.value);
}

function calculateHash(inputString){
    let aesHash = CryptoJS.AES.encrypt(inputString).toString();
    let sha1Hash = CryptoJS.SHA1.encrypt(inputString).toString();
    let sha224Hash = CryptoJS.SHA224.encrypt(inputString).toString();
    let sha256Hash = CryptoJS.SHA256.encrypt(inputString).toString();

    document.getElementById("AES-Output").innerText = aesHash;
    document.getElementById("SHA1-Output").innerText = sha1Hash;
    document.getElementById("SHA224-Output-Output").innerText = sha224Hash;
    document.getElementById("SHA256-Output-Output").innerText = sha256Hash;
}

