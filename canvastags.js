/*
  _____                       _______              
 / ____|                     |__   __|             
| |     __ _ _ ____   ____ _ ___| | __ _  __ _ ___ 
| |    / _` | '_ \ \ / / _` / __| |/ _` |/ _` / __|
| |___| (_| | | | \ V / (_| \__ \ | (_| | (_| \__ \
 \_____\__,_|_| |_|\_/ \__,_|___/_|\__,_|\__, |___/
                                          __/ |    
                                         |___/     
v1.0 Uncompressed Documented 
*/
var ctInstance = function() {
  this.ctlocal = {
  
  } // Make local variables
  this.ctlocal.crc2d = CanvasRenderingContext2D // Set a local variable for CanvasRenderingContext
  this.ctlocal.crc2d.canvastag = ctlocal.canvastag = {
  
  } // Initalize API
  this.ctlocal.crc2d.canvastag.load = function(url) {
    if(url.split(".")[url.split(".").length - 1] != "js") throw new TypeError("File must be a javscript file(Loading "+url+")"); // Test if the file is a javascript file. If not throw a new error 
    var scr = document.createElement("SCRIPT");
    scr.src = url // Set script source to the url
    document.head.appendChild(scr)
  } // Start up load function
 
}
var CanvasTag = ct = Ct = {
  "_":function(sel) {
    return document.querySelector(sel)
  },
  "new": ctInstance // Open OOP into main API
} // Initalize CanvasTag procedural API
