function calculatepentagon() {
    const p = getInputValueByid('6pen');
    const b = getInputValueByid('10base');
    const area = 0.5 * p * b;

    getAreaByID('Pentagon-area', area);

}
function getInputValueByid(inputFeild) {
    const pentagon = document.getElementById(inputFeild);
    const pentagonInnerText = pentagon.innerText;
    const pentagonText = parseFloat(pentagonInnerText);
    return pentagonText;

}
function getAreaByID(elementId, area) {
    const areamath = document.getElementById(elementId, area);
    areamath.innerText = area;
}