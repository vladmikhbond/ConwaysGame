class Model {

   constructor(size) {
      this.size = size;
      this.field = new Array(size);
      for (let r = 0; r < this.field.length; r++) {
         this.field[r] = new Array(size).fill(0);
      }

      this.back = new Array(size);
      for (let r = 0; r < this.back.length; r++) {
            this.back[r] = new Array(size);
      }
   }

   nextGen() 
   {
      for (let r = 0; r < this.field.length; r++) {
         for (let c = 0; c < this.field.length; c++) {
            let count = this.#liveNeitborsCount(r, c);
            if (this.field [r][c]) 
               this.back[r][c] = count == 2 || count == 3 ? 1 : 0; 
            else 
               this.back[r][c] = count == 3 ? 1 : 0;
         }
      }
      let t = this.field; this.field = this.back; this.back = t;
   }

   #liveNeitborsCount(r, c) {
      let count = 0;
      for (let dr of [-1, 0, 1]) {
         let r1 = (r + dr + this.size) % this.size;
         for (let dc of [-1, 0, 1]) {
            let c1 = (c + dc + this.size) % this.size;
            count += this.field[r1][c1];
         }
      }
      return count -this.field[r][c];     
   }

   toggle(row, col) {
      this.field[row][col] = (this.field[row][col] + 1) % 2;
   }

}


