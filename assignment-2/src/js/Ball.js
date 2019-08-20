/**
 * @description Ball Class
 * 
 * @param {*} radius            Radius of ball
 * @param {*} xPos              Position of ball in X axis
 * @param {*} yPos              Position of ball in Y axis
 * @param {*} velocityX         Velocity of ball in X axis
 * @param {*} velocityY         Velocity of ball in Y axis
 * @param {*} color             Color of the ball
 */

export const Ball = function (radius, xPos, yPos, velocityX, velocityY, color) {
    this.radius = radius;
    this.xPos = xPos;
    this.yPos = yPos;
    this.vx = velocityX;
    this.vy = velocityY;
    this.color = color;
}


/**
 * @description Draws the ball on the canvas
 */
Ball.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
}


/**
 * @description Update the ball x and y coordinates
 */
Ball.prototype.updatePosition = function(canvasWidth, canvasHeight) {

    if(this.xPos + this.vx > canvasWidth - this.radius|| this.xPos + this.vx < this.radius) {
        this.vx = -this.vx
    }

    if(this.yPos + this.vy > canvasHeight - this.radius || this.yPos + this.vy < this.radius) {
        this.vy = -this.vy;
    }
    
    this.xPos += this.vx;
    this.yPos += this.vy;
}