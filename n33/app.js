window.addEventListener('load', createForm)
function createForm() {
    let input = document.createElement('input');
    let label = document.createElement('label');
    let br = document.createElement('br');
    let button = document.createElement('button');
    let wrong = document.createElement('span');
    wrong.style.color = 'red'
    input.type = 'text';
    input.id = 'sizeValue';
    input.onfocus = () => {
        wrong.innerHTML = '';
    }
    label.setAttribute('for', input.id);
    label.innerHTML = 'введите размер часов от 200 до 800 px'
    button.innerHTML = 'создать';
    button.onclick = () => {
        if (+input.value >= 200 && +input.value <= 800) {
            button.onclick = null;
            input.onfocus = null;
            document.body.removeChild(label);
            document.body.removeChild(br);
            document.body.removeChild(input);
            document.body.removeChild(wrong);
            document.body.removeChild(button);
            creatClock(input.value);
        } else {

            wrong.innerHTML = 'некорректное значение!'
        }
    }
    document.body.appendChild(label);
    document.body.appendChild(br);
    document.body.appendChild(input);
    document.body.appendChild(button);
    document.body.appendChild(wrong);
}


function creatClock(size) {
    const clockLabelСoefficient = 0.15;
    const biasСoefficient = 0.35;
    const fontСoefficient = 0.08;
    const digTimefontСoefficient = 0.13;
    const arrowSecWidСoefficient = 0.01;
    const arrowSecHeightСoefficient = 0.4;
    const arrowMinWidСoefficient = 0.02;
    const arrowMinHeightСoefficient = 0.35;
    const arrowHourWidСoefficient = 0.03;
    const arrowHourHeightСoefficient = 0.3;
    const tail = 20;
    const digTimeWidСoefficient = 2;
    const digTimeHeightСoefficient = 10;

    
    let clock = document.createElement('div');
    clock.style.width = size + 'px';
    clock.style.height = size + 'px';
    clock.style.position = 'relative';
    clock.setAttribute('class', 'clock');
    document.body.appendChild(clock);
    let clockCenterX = size / 2;
    let clockCenterY = size / 2;
    for (i = 12; i > 0; i--) {
        let ang = 2 * Math.PI / 12 * i;
        let clockLabel = document.createElement('div');
        clockLabel.setAttribute('class', 'clockLabel');
        clockLabel.style.width = size * clockLabelСoefficient + 'px';
        clockLabel.style.height = size * clockLabelСoefficient + 'px';
        let clockLabelCenterX = clockCenterX + (size / 2 - (size * clockLabelСoefficient) + (size * clockLabelСoefficient * biasСoefficient)) * Math.sin(ang);
        let clockLabelCenterY = clockCenterY - (size / 2 - (size * clockLabelСoefficient) + (size * clockLabelСoefficient * biasСoefficient)) * Math.cos(ang);
        clockLabel.style.position = 'absolute';
        clockLabel.style.left = Math.round(clockLabelCenterX - size * clockLabelСoefficient / 2) + 'px';
        clockLabel.style.top = Math.round(clockLabelCenterY - size * clockLabelСoefficient / 2) + 'px';
        let LabelNum = document.createElement('div');
        LabelNum.setAttribute('class', 'LabelNum');
        LabelNum.style.fontSize = size * fontСoefficient + 'px';
        LabelNum.innerHTML = i;
        clock.appendChild(clockLabel);
        clockLabel.appendChild(LabelNum);
    }


    let arrowSec = document.createElement('div');
    arrowSec.setAttribute('class', 'arrow');
    arrowSec.style.width = size * arrowSecWidСoefficient + 'px';
    arrowSec.style.height = size * arrowSecHeightСoefficient + 'px';
    arrowSec.style.borderRadius = size * arrowSecWidСoefficient / 2 + 'px';
    arrowSec.style.position = 'absolute';
    arrowSec.style.left = clockCenterX - (size * arrowSecWidСoefficient / 2) + 'px';
    arrowSec.style.top = clockCenterY - (size * arrowSecHeightСoefficient) + tail + 'px';
    arrowSec.style.transformOrigin = `center ${size * arrowSecHeightСoefficient - tail}px `;

    let arrowMin = document.createElement('div');
    arrowMin.setAttribute('class', 'arrow');
    arrowMin.style.width = size * arrowMinWidСoefficient + 'px';
    arrowMin.style.height = size * arrowMinHeightСoefficient + 'px';
    arrowMin.style.borderRadius = size * arrowMinWidСoefficient / 2 + 'px';
    arrowMin.style.position = 'absolute';
    arrowMin.style.left = clockCenterX - (size * arrowMinWidСoefficient / 2) + 'px';
    arrowMin.style.top = clockCenterY - (size * arrowMinHeightСoefficient) + tail + 'px';
    arrowMin.style.transformOrigin = `center ${size * arrowMinHeightСoefficient - tail}px `;

    let arrowHour = document.createElement('div');
    arrowHour.setAttribute('class', 'arrow');
    arrowHour.style.width = size * arrowHourWidСoefficient + 'px';
    arrowHour.style.height = size * arrowHourHeightСoefficient + 'px';
    arrowHour.style.borderRadius = size * arrowHourWidСoefficient / 2 + 'px';
    arrowHour.style.position = 'absolute';
    arrowHour.style.left = clockCenterX - (size * arrowHourWidСoefficient / 2) + 'px';
    arrowHour.style.top = clockCenterY - (size * arrowHourHeightСoefficient) + tail + 'px';
    arrowHour.style.transformOrigin = `center ${size * arrowHourHeightСoefficient - tail}px `;

    let digTime = document.createElement('div');
    digTime.setAttribute('class', 'digTime');
    digTime.style.width = size / digTimeWidСoefficient + 'px';
    digTime.style.height = size / digTimeHeightСoefficient + 'px';
    digTime.style.position = 'absolute';
    digTime.style.left = clockCenterX - size / digTimeWidСoefficient / 2 + 'px';
    digTime.style.top = clockCenterY - size / digTimeHeightСoefficient * 2.5 + 'px';
    digTime.style.fontSize = size * digTimefontСoefficient + 'px';

    let c = document.createElement('div')
    c.style.width = 1 + 'px';
    c.style.height = 1 + 'px';
    c.style.background = 'red';
    c.style.position = 'absolute';
    c.style.left = clockCenterX+'px';
    c.style.top = clockCenterY+'px';

    clock.appendChild(digTime);
    clock.appendChild(arrowHour);
    
    clock.appendChild(arrowMin);
    clock.appendChild(arrowSec);
    clock.appendChild(c);



    function getTime() {
        const time = new Date;
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();
        let angleSec = 2 * Math.PI / 60 * second;
        arrowSec.style.transform = `rotate(${angleSec}rad)`;
        let angleMin = 2 * Math.PI / 60 * minute;
        arrowMin.style.transform = `rotate(${angleMin}rad)`;
        let angleHour = 2 * Math.PI / 12 * hour + (2 * Math.PI / 12 / 60 * minute);
        arrowHour.style.transform = `rotate(${angleHour}rad)`;
        function digtime(value) {
            let newValue;
            if (value < 10) {
                newValue = '0' + value;
                return newValue;
            } else {
                return value;
            }
        }

        digTime.innerHTML = `${digtime(hour)}:${digtime(minute)}:${digtime(second)}`
        setTimeout(getTime, 1000 - time.getMilliseconds());
    }

    getTime();

}

