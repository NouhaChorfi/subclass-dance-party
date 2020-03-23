describe('dancer2', function() {

  var dancer2, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer2 = new makeNewDancer(40, 50, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer2.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(dancer2.$node, 'toggle');
    dancer2.step();
    expect(dancer2.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(dancer2, 'step');
      expect(dancer2.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(dancer2.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(dancer2.step.callCount).to.be.equal(2);
    });
  });
});
