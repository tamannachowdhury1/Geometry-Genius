function RhombusBtn() {
    const d1base = getInputValueByid('16d1');
    const d2base = getInputValueByid('8d2');
    const area = 0.5 * d1base * d2base;
    area.innerText = '';
    setAreaValue('rhombus-area', area);

}
function getInputValueByid(inputFeild) {
    const getinnertext = document.getElementById(inputFeild);
    const d1AndD2getValue = getinnertext.innerText;
    const d1AndD2Farsefloat = parseFloat(d1AndD2getValue);
    return d1AndD2Farsefloat;

}
function setAreaValue(elementId, area) {
    const rhombusArea = document.getElementById(elementId, area);
    rhombusArea.innerText = area;
}

document.getElementById('bg-blue').addEventListener('mouseenter', function () {
    this.style.backgroundColor = 'skyblue';
})
document.getElementById('bg-blue').addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white';
})