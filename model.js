class Model {

   constructor(size) {
      this.size = size;
      this.fied = new Array(size);
      for (let r in this.fied)
         this.fied[r] = new Array(size).fill(0);
      this.back = new Array(size);
         for (let r in this.fied)
            this.back[r] = new Array(size);
   
   }

   nextGen() {
      for (let r = 0; r < this.fied.length; r++) {
         for (let c = 0; c < this.fied.length; c++) {
            let count = liveNeitborsCount(r, c);
            if (this.fied [r][c]) 
               this.back[r][c] = count == 2 || count == 3 ? 1 : 0; 
            else 
               this.back[r][c] = count == 3 ? 1 : 0;
         }
      }
      let t = this.fied; this.fied = this.back; this.back = t;


      function liveNeitborsCount(r, c) {
         let count = 0;
         for (let dr of [-1, 0, 1]) {
            let r1 = (r + dr) % this.size;
            for (let dc of [-1, 0, 1]) {
               let c1 = (c + dc) % this.size;
               count += this.fied[r1][c1];
            }
         }
         return count -this.fied[r][c];     
      }
   }

   toggle(row, col) {
      this.fied[row][col] = (this.fied[row][col] + 1) % 2;
   }

}

//////////////////////////////////
let m = new Model(10);