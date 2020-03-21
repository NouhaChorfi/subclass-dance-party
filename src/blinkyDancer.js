var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
 makeDancer.call(this,top, left, timeBetweenSteps);
 this.$node = $('<span class="dancer"></span>');
  this.oldStep = this.step;
}

  makeBlinkyDancer.prototype.step = function() {
    oldStep();
    this.$node.toggle();
  };

