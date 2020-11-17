// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if (i % 2 == 0 ) {
        fill(0);
      }
      else {
        fill(255)
      }
rect(size * i, size * j, size, size);
    }
  }
}
