

window.addEventListener("load",(eo)=> {
    eo = eo || window.event;
    let img = document.getElementsByTagName('IMG');
    const x = [];
    const y = [];
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
    document.body.appendChild(self);//помещаю последним 
    document.addEventListener('mousemove', dragMove);//устанавливаю слушателя на боди 
    self.addEventListener('mouseup', dragEnd);
    eo.preventDefault();//отменяю стандартное поведение 


    function dragDrop(pageX, pageY) {// роняю в координаты с учетом отклонения 
        self.style.left = `${pageX - shiftX}px`;
        self.style.top = `${pageY - shiftY}px`;
    }

    function dragMove(eo) {//при перемещении вызываю дроп 
        dragDrop(eo.pageX, eo.pageY);
    }

    function dragEnd() {//снимаю слушателей
        document.removeEventListener('mousemove', dragMove);
        self.removeEventListener('mouseup', dragEnd);
    };
}

