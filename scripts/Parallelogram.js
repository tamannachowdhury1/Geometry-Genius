function ParallelogramBtn() {
    const paraSpanbase = document.getElementById('10base');
    const paraBaseText = paraSpanbase.innerText;
    const base = parseFloat(paraBaseText);
    const paraSpanheight = document.getElementById('12length');
    const paraheightText = paraSpanheight.innerText;
    const height = parseFloat(paraheightText);

    const area = base * height;

    const ParallelogramAreaValue = document.getElementById('Parallelogram-area');
    ParallelogramAreaValue.innerText = area;
}