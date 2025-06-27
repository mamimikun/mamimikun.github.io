const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw_text(txt) {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "bold 48px monospace";
  ctx.fillStyle = "white";
  const text = ctx.measureText(txt);
  ctx.fillText(txt, canvas.width/2-text.width/2, canvas.height/2);
}

const pplt = new Image();
pplt.src = 'powerpuff_lightest.svg';
const ppl = new Image();
ppl.src = 'powerpuff_lighter.svg';
const pp = new Image();
pp.src = 'powerpuff.svg';
const base_height = 1500;
const base_width = 1500;

let carr = [pp, ppl, pplt]

function animate () {
  let id = null;   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 200);
  function frame() {
    paux = carr.shift();
    carr.push(paux);
    
    ctx.clearRect(0,0,500,500);
    let winc = 0;
    let hinc = 0;
    for (let i=0; i<10; i++) {
      let img = null;
      winc += 150;
      hinc += 150;
      if (i%3 == 0) 
	img = carr[0];
      else if(i%3 == 1)
	img = carr[1];
      else if(i%3 == 2)
	img = carr[2];

      ctx.drawImage(img,
		    canvas.width/2-(base_width-winc)/2,
		    canvas.height/2-(base_height-hinc)/2,
		    (base_width-winc),
		    (base_height-hinc));
    }
    draw_text(document.getElementById("txt").value);
  }
}


window.addEventListener("DOMContentLoaded", (event) => {
  animate();
  
});
