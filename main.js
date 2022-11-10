const N = 201;
const T = 10;

const model = new Model(N);

for (let i = 0; i < N; i++)
   model.toggle(i, i);
model.toggle(0, N-1);
  // model.toggle(N-1, 0);

const view = new View(model, canvas1);
view.draw();

canvas1.addEventListener('mousedown', function(e) {
   let scale = canvas1.width / model.size;
   let col = e.offsetX / scale | 0;
   let row = e.offsetY / scale | 0;
   
   model.toggle(row, col);
   view.draw();
})

let timer = null;

startBtn.addEventListener('mousedown', function(e) {
   if (timer) {
      clearInterval(timer);
      timer = null;
   } else {
      timer = setInterval(function() {
         model.nextGen();
         view.draw(); 
      }, T);
   }
});
