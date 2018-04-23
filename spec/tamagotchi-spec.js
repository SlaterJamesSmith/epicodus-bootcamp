import { Tamagotchi } from './../src/tamagotchi.js'

describe('Tamagotchi', function() {
  let tamagotchi;

  beforeEach(function() {
    tamagotchi = new Tamagotchi('Peepers');
    console.log(tamagotchi);
    jasmine.clock().install();
    tamagotchi.setFoodLevel();
    tamagotchi.setAttentionLevel();
    tamagotchi.setSleepLevel();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('should create tamagotchi with name and 10 points in food, attention, and sleep', function() {
    expect(tamagotchi.name).toEqual('Peepers');
    expect(tamagotchi.foodLevel).toEqual(10);
    expect(tamagotchi.attentionLevel).toEqual(10);
    expect(tamagotchi.sleepLevel).toEqual(10);
  });

  it('should have a foodLevel of 5 after 5001 milliseconds', function() {
    jasmine.clock().tick(5001);
    expect(tamagotchi.foodLevel).toEqual(5);
  });

  it('should have an attentionLevel of 9 after 5001 milliseconds', function() {
    jasmine.clock().tick(5001);
    expect(tamagotchi.attentionLevel).toEqual(9);
  });

  it('should have a sleepLevel of 9 after 10001 milliseconds', function() {
    jasmine.clock().tick(10001);
    expect(tamagotchi.sleepLevel).toEqual(9);
  });

  it('should kill tamagotchi if foodLevel equals 0', function() {
    jasmine.clock().tick(10001);
    expect(tamagotchi.status).toEqual("Dead");
  });

  it('should kill tamagotchi if attentionLevel equals 0', function() {
    tamagotchi.foodLevel = 60
    jasmine.clock().tick(50001);
    expect(tamagotchi.status).toEqual("Dead");
  });

  it('should kill tamagotchi if sleepLevel equals 0', function() {
    tamagotchi.foodLevel = 110
    tamagotchi.attentionLevel = 60
    jasmine.clock().tick(100001);
    expect(tamagotchi.status).toEqual("Dead");
  });

  it('should gain 10 foodLevel after being fed', function() {
    tamagotchi.feed();
    expect(tamagotchi.foodLevel).toEqual(20);
  });

  it('should gain 10 attentionLevel after being played with', function() {
    tamagotchi.playTime();
    expect(tamagotchi.attentionLevel).toEqual(20);
  });

  it('should gain 10 sleepLevel after being put to bed', function() {
    tamagotchi.sleep();
    expect(tamagotchi.sleepLevel).toEqual(20);
  });

  it('should sleep for 10 seconds and be un-interactable when put to bed', function() {
    tamagotchi.sleep();
    jasmine.clock().tick(5001);
    tamagotchi.sleep();
    tamagotchi.feed();
    tamagotchi.playTime();
    expect(tamagotchi.status).toEqual("Sleeping");
    expect(tamagotchi.foodLevel).toEqual(5);
    expect(tamagotchi.attentionLevel).toEqual(9);
    expect(tamagotchi.sleepLevel).toEqual(20);
  });

  it('should wake up after 10 seconds of sleeping and be interactable', function() {
    tamagotchi.feed();
    tamagotchi.sleep();
    jasmine.clock().tick(10001);
    tamagotchi.feed();
    tamagotchi.playTime();
    expect(tamagotchi.status).toEqual("Alive");
    expect(tamagotchi.foodLevel).toEqual(20);
    expect(tamagotchi.attentionLevel).toEqual(18);
    expect(tamagotchi.sleepLevel).toEqual(19);
  });

  it('should age by 1 point every minute', function() {
    jasmine.clock().tick(60001);
    expect(tamagotchi.age).toEqual(1);
    expect(tamagotchi.evolution).toEqual("infant");
  });

  it('should transform into an adult at age 10', function() {
    jasmine.clock().tick(600001);
    expect(tamagotchi.age).toEqual(10);
    expect(tamagotchi.evolution).toEqual("adult");
  });
});
