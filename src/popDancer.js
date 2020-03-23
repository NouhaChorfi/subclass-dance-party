var makePopDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer2"></span>');
 makeDancer.call(this,top, left,timeBetweenSteps);

}

makePopDancer.prototype=Object.create (makeDancer.prototype)
makePopDancer.prototype.constructor=makePopDancer

makePopDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this)
  this.$node.toggle();
};
