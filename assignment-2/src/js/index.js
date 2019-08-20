import { Ball } from './Ball';
import * as Util from './util';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const ballRadius = 10;
const W = canvas.width;
const H = canvas.height;

const ballThreshold = 10;
const ballOnScreen = [];

function addListener() {
    canvas.addEventListener('click', () => {
        if(ballOnScreen.length < ballThreshold) {
            const xPos = Util.getRandomNumber(2 * ballRadius, W - 2 * ballRadius);
            const yPos = Util.getRandomNumber(2 * ballRadius, H - 2 * ballRadius);
            const velocityY = Util.getRandomNumber(1, 5);
            const velocityX = Util.getRandomNumber(1, 5);
            const color = Util.getRandomColors()
        
            const ball = new Ball(ballRadius,  xPos, yPos, velocityX, velocityY, color);
            ballOnScreen.push(ball);
        }       
    });
}

function clearContext() {
    ctx.clearRect(0, 0, W, H);
}

(function draw() {
    clearContext();

    for(let i=0; i<ballOnScreen.length; i++) {
        const ball = ballOnScreen[i];

        ball.draw(ctx);
        ball.updatePosition(W, H);
    }

    requestAnimationFrame(draw);
})()

addListener();