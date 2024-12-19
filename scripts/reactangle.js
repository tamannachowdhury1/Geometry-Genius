function rectangleBtnClick() {
    const inputwidth = document.getElementById('inputRewidth');
    const widthText = inputwidth.value;
    const width = parseFloat(widthText);
    inputwidth.value = '';

    const inputlength = document.getElementById('inputRelength');

    const lenText = inputlength.value;
    const length = parseFloat(lenText);
    inputlength.value = '';
    if (isNaN(width) || isNaN(length)) {
        return alert('provide a number');
    };
    const reArea = width * length;
    const reAreaget = document.getElementById('Rectangle-area');
    reAreaget.innerText = reArea;
}