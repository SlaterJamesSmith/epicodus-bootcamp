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
});
