var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
 makeDancer.call(this,top, left,timeBetweenSteps);

 this.$node = $('<span class="dancer"></span>');
  this.oldStep = this.step;
}
  makeBlinkyDancer.prototype.step = function() {
    this.top +=100
    this.left +=100
    oldStep();
    this.$node.toggle();
  };
makeBlinkyDancer.prototype=Object.create (makeDancer.prototype)
makeBlinkyDancer.prototype.constructor=makeBlinkyDancer
