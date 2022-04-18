let x = [];
let y = [];

window.addEventListener("load", function(eo) {
    eo = eo || window.event;
let img = document.getElementsByTagName('IMG');

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

    console.log("All resources finished loading!");
  });



function dragStart(eo) {
    eo = eo || window.event;
    let self = this;
    let shiftX = eo.clientX - self.getBoundingClientRect().left; //eo.clientX - х курс. img.getBoundingClientRect().left - позиция элем. shiftX - от курс. до края 
    let shiftY = eo.clientY - self.getBoundingClientRect().top;
    document.body.appendChild(self);


    function dragDrop(pageX, pageY) {
        self.style.left = `${pageX - shiftX}px`;
        self.style.top = `${pageY - shiftY}px`;

    }
    function dragMove(eo) {
        dragDrop(eo.pageX, eo.pageY);
    }
    document.addEventListener('mousemove', dragMove);
    self.addEventListener('mouseup', dragEnd);
    function dragEnd() {
        document.removeEventListener('mousemove', dragMove);
    };
    self.ondragstart = function () {
        return false;
    };

}

