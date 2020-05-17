function createComp (compName, layerName, valueX, valueY) {
  const newComp = app.project.items.addComp(compName, 1920, 1080, 1, 5, 25);
  const newLayer = newComp.layers.addText(layerName);
  newLayer.position.setValue([valueX, valueY]);
  newLayer.position.expression = "wiggle(2, 25)";
  newLayer.opacity.addKey(0);
  newLayer.opacity.setValueAtKey(1, 0);
  newLayer.opacity.addKey(1);
  newLayer.opacity.setValueAtKey(2, 100);
}

createComp("Bengabo", "Text1", 200, 1000);


// var newComp = app.project.items.addComp("Wamwam", 1920, 1080, 1, 25, 200);
// var newLayer = newComp.layers.addText("Bengabo");
// newLayer.position.setValue([100, 800]);
// newLayer.position.expression = "wiggle(2, 50)";