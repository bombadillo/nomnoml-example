var nomnoml = require('nomnoml');

var canvas = document.getElementById('target-canvas');
var source = `
#.grey: fill=#eee bold
[<grey> Wash dishes]-:>[do pots]
[<grey> Wash dishes]-:>[do pans]
[<grey> Learn Python]-:>[Watch pluralsight video]
[<grey> Watch pluralsight video]-:>[take course]
`;
nomnoml.draw(canvas, source);