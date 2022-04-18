let img = document.getElementsByTagName('IMG');
let x = [];
let y = [];
for (let i = 0; i < img.length; i++) {
    x.push(img[i].offsetLeft);
    y.push(img[i].offsetTop);
}
for (let i = 0; i < img.length; i++) {
    let imgItem = img[i];
    imgItem.style.position = 'absolute';
    imgItem.style.left = `${x[i]}px`;
    imgItem.style.top = `${y[i]}px`;
    imgItem.addEventListener('mousedown', dragStart);

}
function dragStart(eo) {
    eo = eo || window.event;
    let img = eo.target;
    let shiftX = eo.clientX - img.getBoundingClientRect().left; //eo.clientX - х курс. img.getBoundingClientRect().left - позиция элем. shiftX - от курс. до края 
    let shiftY = eo.clientY - img.getBoundingClientRect().top;
    console.log(img.getBoundingClientRect().left)
    document.body.appendChild(img);
    function dragDrop(pageX, pageY) {
        img.style.left = `${pageX - shiftX}px`;
        img.style.top = `${pageY - shiftY}px`;

    }
    function dragMove(eo) {
        dragDrop(eo.pageX, eo.pageY);
    }
    document.addEventListener('mousemove', dragMove);
    img.addEventListener('mouseup', dragEnd);
    function dragEnd() {
        document.removeEventListener('mousemove', dragMove);
    };
    img.ondragstart = function () {
        return false;
    };

}

