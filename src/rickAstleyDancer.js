var makeRickAstleyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer3"></span>');
  makePopDancer.call(this,top, left,timeBetweenSteps);

}

makeRickAstleyDancer.prototype=Object.create (makePopDancer.prototype)
makeRickAstleyDancer.prototype.constructor=makeRickAstleyDancer

makeRickAstleyDancer.prototype.step = function() {
  makePopDancer.prototype.step.call(this)
  this.$node.toggle();
};
