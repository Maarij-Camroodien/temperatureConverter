
function tempconcel(){
    let result = document.querySelector('#displaycel');
    let cel = +document.querySelector('#converterdisplaycel').value;
    result.innerHTML = (cel * 1.8) + 32;
}

function tempconfah(){
    let result = document.querySelector('#displayfah');
    let fahi = +document.querySelector('#converterdisplayfah').value;
    result.innerHTML = ((fahi -32) / 1.8).toFixed(2);
}

// function clearcel(){
//     let result = document.querySelector('#displaycel');
//     let cel = +document.querySelector('#converterdisplaycel').value;
//     cel = ""
//     result.innerHTML = ""
// }

// function clearfah(){
//     let result = document.querySelector('#displayfah');
//     let fahi = +document.querySelector('#converterdisplayfah').value;
//     fahi = ""
//     result.innerHTML = ""
// }