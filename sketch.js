let pointSize = 4, firstNum = 1, angle = 90, i = 0, speed = 100, nextRotation = 0, rotationSum = 1;

function setup() {
  createCanvas(800, 800);
  background(0);
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  noStroke();
  fill(255);
  push();
}

function draw() {
  pop();
  for (let j = 0; j < speed; j++) {
    if (isPrime(i + 1)) {
      rect(-pointSize / 2, -pointSize / 2, pointSize, pointSize);
    }
    translate(pointSize, 0);
    if (nextRotation == i) {
      rotate(-angle);
      nextRotation += floor(rotationSum);
      rotationSum += (i == 0) ? 1 : 0.5;
    }
    i++;
    if (i > (width / pointSize) * (height / pointSize)) {
      console.log('Done.');
      noLoop();
      break;
    }
  }
  push();
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}