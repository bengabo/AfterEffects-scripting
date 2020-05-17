function createComp (compName, layerName, title, valueX, valueY) {
  const newComp = app.project.items.addComp(compName, 1920, 1080, 1, 5, 25);
  const newLayer = newComp.layers.addText(title);
  newLayer.name = layerName;
  newLayer.position.setValue([valueX, valueY]);
  newLayer.position.expression = "wiggle(2, 25)";
  newLayer.opacity.addKey(0);
  newLayer.opacity.setValueAtKey(1, 0);
  newLayer.opacity.addKey(1);
  newLayer.opacity.setValueAtKey(2, 100);
}

app.beginUndoGroup("code");
const compNames = ["Comp1", "Comp2", "Comp3"];
const layerNames = ["text1", "text2", "text3"];
const titles = ["Bengabo", "Wamwam", "Chateau"];

for (i=0; i<compNames.length; i++) {
  createComp(compNames[i], layerNames[i], titles[i], 200, 1000);
}
app.endUndoGroup;

// var newComp = app.project.items.addComp("Wamwam", 1920, 1080, 1, 25, 200);
// var newLayer = newComp.layers.addText("Bengabo");
// newLayer.position.setValue([100, 800]);
// newLayer.position.expression = "wiggle(2, 50)";