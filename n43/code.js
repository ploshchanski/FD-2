class Area {
    constructor(wid) {
        this.width = wid;
        this.height = wid * 0.65;
        this.fontSize = wid * 0.1;
        this.color = 'rgb(228, 230, 146)';
    }
}

class ButtonStart {
    constructor(wid) {
        this.width = wid * 0.2;
        this.height = wid * 0.036;
        this.fontSize = wid * 0.025;
    }
}

class Ball {
    constructor(wid) {
        this.width = wid * 0.06;
        this.height = wid * 0.06;
        this.color = '#fff';
    }
}

class Racket {
    constructor(wid) {
        this.width = wid * 0.02;
        this.height = wid * 0.13;
        this.color = { left: 'rgb(235, 44, 44)', right: 'rgb(80, 172, 53)' }
    }
}


class Tennis {
    constructor(wid) {

        let self = this;
        self.area = new Area(wid);
        self.button = new ButtonStart(wid);

        self.ball = new Ball(wid);
        self.ball.posX = self.area.width / 2 - self.ball.width / 2;
        self.ball.posY = self.area.height / 2 - self.ball.height / 2;
        self.ball.speedX = 0;
        self.ball.speedY = 0;
        self.ball.updateBall = function (elem) {
            elem.style.left = self.ball.posX + 'px';
            elem.style.top = self.ball.posY + 'px';
        }


        self.racket = new Racket(wid);
        self.racket.left = { posX: 0, posY: this.area.height / 2 - this.racket.height / 2 };
        self.racket.right = {
            posX: this.area.width - this.racket.width,
            posY: this.area.height / 2 - this.racket.height / 2
        };
        self.racket.updateLeftRacet = function (elem) {
            elem.style.top = self.racket.left.posY + 'px';
        }
        self.racket.updateRightRacet = function (elem) {
            elem.style.top = self.racket.right.posY + 'px';
        }
        self.racket.speed = { left: 4, right: 0 }
        self.racket.moveUP = function (elem) {
            if (self.racket.left.posY - self.racket.speed.left > 0) {
               self.racket.left.posY += self.racket.speed.left;
                self.racket.updateLeftRacet(elem);
            } else {
                self.racket.speed.left = 0;
                self.racket.left.posY = 0;
                self.racket.updateLeftRacet(elem);
            }

            
        }






    }
    create() {

        let wrap = document.createElement('div');
        wrap.style.display = 'inline-block';
        wrap.style.textAlign = 'center';
        wrap.style.position = 'relative';
        document.body.appendChild(wrap)

        let button = document.createElement('button');
        button.id = 'buttonStart'
        button.style.width = this.button.width + 'px';
        button.style.height = this.button.height + 'px';
        button.style.fontSize = this.button.fontSize + 'px';
        button.style.position = 'absolute';
        button.style.left = '0px';
        button.style.top = this.area.fontSize / 2 + 'px';
        button.innerHTML = 'Старт!'
        wrap.appendChild(button);

        let source = document.createElement('div');
        source.id = 'source';
        source.style.fontSize = this.area.fontSize + 'px';
        source.style.width = '100%';
        source.innerHTML = '0:0';
        wrap.appendChild(source);

        let area = document.createElement('div');

        area.style.width = this.area.width + 'px';
        area.style.height = this.area.height + 'px';
        area.style.fontSize = this.area.fontSize + 'px';
        area.style.background = this.area.color;
        area.style.position = 'relative';
        wrap.appendChild(area);

        let ball = document.createElement('div');
        ball.style.position = 'absolute';
        ball.style.width = this.ball.width + 'px';
        ball.style.height = this.ball.height + 'px';
        ball.style.borderRadius = '50%';
        ball.style.background = this.ball.color;
        ball.id = 'ball';
        this.ball.updateBall(ball);
        area.appendChild(ball);

        let leftRacket = document.createElement('div');
        leftRacket.style.width = this.racket.width + 'px';
        leftRacket.style.height = this.racket.height + 'px';
        leftRacket.style.background = this.racket.color.left;
        leftRacket.style.position = 'absolute';
        leftRacket.style.left = this.racket.left.posX + 'px';
        this.racket.updateLeftRacet(leftRacket);
        leftRacket.id = 'leftRacket';
        area.appendChild(leftRacket);




        let rightRacket = document.createElement('div');
        rightRacket.style.width = this.racket.width + 'px';
        rightRacket.style.height = this.racket.height + 'px';
        rightRacket.style.background = this.racket.color.right;
        rightRacket.style.position = 'absolute';
        rightRacket.style.left = this.racket.right.posX + 'px';
        this.racket.updateRightRacet(rightRacket);
        rightRacket.id = 'rightRacket';
        area.appendChild(rightRacket);


    }
}


let tenis = new Tennis(600);
tenis.create();
setInterval(tenis.racket.moveUP(leftRacket),4)
console.log(tenis.racket.left.posY)
console.log(tenis)