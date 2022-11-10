const model = new Model(10);
for (let i = 0; i < 10; i++)
model.toggle(i, i);
const view = new View(model, canvas1);
view.draw();
