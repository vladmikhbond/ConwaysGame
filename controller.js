function controller(model, view, interval) 
{
   fieldCanvas.addEventListener('mousedown', function(e) {
      let scale = fieldCanvas.width / model.size;
      let col = e.offsetX / scale | 0;
      let row = e.offsetY / scale | 0;
      
      model.toggle(row, col);
      view.draw();
   });

   let timer = null;

   startButton.addEventListener('click', function(e) {
      if (timer) {
         clearInterval(timer);
         timer = null;
         startButton.innerHTML = '►';
      } else {
         timer = setInterval(function() {
            model.nextGen();
            view.draw(); 
         }, interval);
         startButton.innerHTML = '■';
      }
   });


}


