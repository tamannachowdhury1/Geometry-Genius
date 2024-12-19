function getEllipse() {
    const a = getInputValueByid('10a');
    const b = getInputValueByid('10b');
    const area = 3.14 * a * b;
    getAreaByID('ellipse-area', area);
}