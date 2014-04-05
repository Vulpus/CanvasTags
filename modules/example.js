CanvasTags.objects.Button = function(x, y, w, h, style) {
  this.style = style
  this.x = x || 0;
  this.y = y || 0;
  this.w = w || 1;
  this.h = h || 1;
  this.fill = style.defualt.fill ;
  this.text =  undefined;
  this.font = this.style.defualt.font
  this.removed = false
  this.mousedown = function() {}
  this.mouseup = function() {}
  this.addListener = function() {
  	var buttonX = this.x;
  	var buttonY = this.y;
  	var buttonWidth = this.w;
  	var buttonHeight = this.h;
  	var mousedown = this.mousedown
  	var mouseup = this.mouseup
  	var styles = this.style
  	var draw = this.draw
  	var ctx = this.ctx
    var mousedown = function(e){

      var click_x = e.clientX;
      var click_y = e.clientY;
      if ( click_x >= buttonY && click_x <= buttonX + buttonWidth && click_y >= buttonY && click_y <= buttonY + buttonHeight) {  
        
        ctx.fillStyle = style.active.fill
        ctx.font = style.active.font
        ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
        mousedown()
      }
    }
  	
    var mouseup = function(e) {
       
      var click_x = e.clientX;
      var click_y = e.clientY;
      if ( click_x >= buttonY && click_x <= buttonX + buttonWidth && click_y >= buttonY && click_y <= buttonY + buttonHeight) {  
        
        ctx.fillStyle = style.defualt.fill
        ctx.font = style.defualt.font
        ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
        mouseup()
        
      }
    }
      var mousemove = function(e) {
      
      var click_x = e.clientX;
      var click_y = e.clientY;
      if ( click_x >= buttonY && click_x <= buttonX + buttonWidth && click_y >= buttonY && click_y <= buttonY + buttonHeight ) {
        this.ctx.canvas.style.cursor = 'pointer'
      } else {
        this.ctx.canvas.style.cursor = 'default'
      }
    }
    
  	this.ctx.canvas.addEventListener('mouseup',mouseup)
    this.ctx.canvas.addEventListener('mousemove',mousemove)
    this.ctx.canvas.addEventListener('mousedown',mousedown)
    
  }
  
  }

// Draws this shape to a given context
canvasButton.prototype.draw = function(ctx) {
  this.ctx = ctx
  ctx.fillStyle = this.fill;
  ctx.fillRect(this.x, this.y, this.w, this.h);
  ctx.fillStyle=this.style.defualt.color
  this.addListener();
}
