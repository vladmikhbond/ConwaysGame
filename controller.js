function Cont(model, view, interval ) 
{
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
         startBtn.innerHTML = '►';
      } else {
         timer = setInterval(function() {
            model.nextGen();
            view.draw(); 
         }, interval);
         startBtn.innerHTML = '■';
      }
   });


}


