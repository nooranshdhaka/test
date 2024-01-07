// Photoshop script to apply an action to each layer

var doc = app.activeDocument;

for(var i = 0; i < doc.layers.length; i++){
    doc.activeLayer = doc.layers[i]; // Select each layer
    app.doAction('YourActionName','YourActionSet'); // Replace with your action's name and set
}