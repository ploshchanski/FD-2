class tennis{
    constructor(wid) {
        self = this;
        self.areaDescription = {};
        self.areaDescription.width = wid;
        self.areaDescription.height = wid*0.65 ;
        self.areaDescription.fontSize = wid*0.1 ;
        self.areaDescription.color = 'rgb(228, 230, 146)' ;

        self.button={};
        self.button.width= wid*0.2;
        self.button.height = self.areaDescription.height*0.06;
        self.button.fontSize = self.areaDescription.height*0.04;


        self.racketDescription = {};
        self.racketDescription.width = wid * 0.02;
        self.racketDescription.height = self.areaDescription.height * 0.2;
        self.racketDescription.color= {left:'rgb(235, 44, 44)',right:'rgb(80, 172, 53)'}
       

        self.ballDescription = {};
        self.ballDescription.width = wid * 0.06;
        self.ballDescription.height = wid * 0.06;
        self.ballDescription.color = '#fff';
        self.ballDescription.speed = -2;
        self.ballDescription.PosX = self.areaDescription.width / 2 - self.ballDescription.width / 2;
        self.ballDescription.PosY = self.areaDescription.height / 2 - self.ballDescription.height / 2;
                
    }
}


let ten = new tennis(500);
creatArea(ten)
function creatArea(ten) {
    let wrap = document.createElement('div');
    wrap.id ='wrap';
    wrap.style.display ='inline-block';
    wrap.style.textAlign ='center';
    wrap.style.position ='relative';
    document.body.appendChild(wrap);
    let button = document.createElement('button');
    button.id = 'buttonStart'

    button.style.width = ten.button.width+'px';
    button.style.height = ten.button.height+'px';
    button.style.fontSize = ten.button.fontSize+'px';
    button.style.position = 'absolute';
    button.style.left = '0px';
    button.style.top = ten.areaDescription.fontSize/2+ 'px';


    button.innerHTML = 'Старт!'
    wrap.appendChild(button);

    let source =document.createElement('div');
    source.id ='source';
    source.style.fontSize =ten.areaDescription.fontSize +'px';
    source.style.width ='100%';
    source.innerHTML = '0:0';
    wrap.appendChild(source);

    let area = document.createElement('div');
    area.setAttribute('class', 'area');
    area.style.width = ten.areaDescription.width+'px';
    area.style.height = ten.areaDescription.height +'px';
    area.style.position = 'relative';
    area.style.background = ten.areaDescription.color;
    wrap.appendChild(area);

    let ball = document.createElement('div');
    ball.style.position = 'absolute';
    ball.style.width = ten.ballDescription.width+'px';
    ball.style.height = ten.ballDescription.height +'px';    
    ball.style.borderRadius = '50%';
    ball.style.background = ten.ballDescription.color;
    ball.id = 'ball';
    area.appendChild(ball);

    let leftRacket = document.createElement('div');
    leftRacket.style.width = ten.racketDescription.width+'px';
    leftRacket.style.height = ten.racketDescription.height+'px';
    leftRacket.style.background = ten.racketDescription.color.left;
    leftRacket.style.position = 'absolute';
    leftRacket.style.left = '0 px';
    leftRacket.style.top =ten.areaDescription.height / 2 - ten.racketDescription.height / 2+ 'px';
    leftRacket.id = 'leftRacket';
    area.appendChild(leftRacket);

    let rightRacket = document.createElement('div');
    rightRacket.style.width = ten.racketDescription.width+'px';
    rightRacket.style.height = ten.racketDescription.height+'px';
    rightRacket.style.background = ten.racketDescription.color.right;
    rightRacket.style.position = 'absolute';
    rightRacket.style.left = ten.areaDescription.width - ten.racketDescription.width+'px';
    rightRacket.style.top =ten.areaDescription.height / 2 - ten.racketDescription.height / 2+ 60+ 'px';
    rightRacket.id = 'rightRacket';
    area.appendChild(rightRacket);

    function ballUpdate () {
        ball.style.left=ten.ballDescription.PosX+"px";
        ball.style.top=ten.ballDescription.PosY+"px";
    }


    function tick(){
        ten.ballDescription.PosX += ten.ballDescription.speed;
        if ( ten.ballDescription.PosX + ten.ballDescription.width>ten.areaDescription.width ) {
            ten.ballDescription.speed = 0;
            ten.ballDescription.PosX = ten.areaDescription.width - ten.ballDescription.width;
        }
        if ( ten.ballDescription.PosX<0 ) {
            ten.ballDescription.speed=-ten.ballDescription.speed;
            ten.ballDescription.PosX=0;}


        console.log(ten.ballDescription.PosX)
        console.log(ten.areaDescription.width)
        console.log(ten.ballDescription.speed)
        ballUpdate();
    }

    function start (){
        setInterval(tick,20);
    }

    ballUpdate();
    start()
}

