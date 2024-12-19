function triangleCalculateArea() {
    const inputb = document.getElementById('getbase');
    const inputbaseText = inputb.value;
    const base = parseFloat(inputbaseText);
    inputb.value = '';
    console.log(base);

    const inputh = document.getElementById('getwidth');
    const inputheightText = inputh.value;
    const height = parseFloat(inputheightText);
    inputh.value = '';
    console.log(height);
    if (isNaN(base) || isNaN(height)) {
        return alert('provide a number');
    }
    const area = 0.5 * base * height;
    console.log(area);

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;

}

document.getElementById('bg-pink').addEventListener('mouseenter', function () {
    this.style.backgroundColor = 'pink';
})
document.getElementById('bg-pink').addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white';
})


