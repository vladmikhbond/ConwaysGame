const model = new Model(10);
model.toggle(0, 0);
model.toggle(9, 9);
const view = new View(model, canvas1);
view.draw();
