import { User } from './../src/solar-year.js'

describe('SolarYearAge', function() {
  let userData;

  beforeEach(function() {
    userData = new User();
    userData.birthDate = new Date(2017, 3, 20, 0, 0, 0);
    userData.currentDate = new Date(2018, 3, 20, 0, 0, 0);
  });

  it('should calculate user Earth-age in seconds based on birth date and current date', function() {
    userData.calcEarthAge();
    expect(userData.earthAgeSeconds).toEqual(31536000);
  });

  it('should calculate user Earth-age in years based on birth date and current date', function() {
    userData.calcEarthAge();
    expect(userData.earthAgeYears).toEqual(1);
  });

  it('should calculate user age in Mercury years based on birth date and current date', function() {
    userData.calcEarthAge();
    userData.calcSolarYearAge();
    expect(userData.mercuryAgeYears).toEqual(4.1667);
  });

  it('should calculate user age in Venus years based on birth date and current date', function() {
    userData.calcEarthAge();
    userData.calcSolarYearAge();
    expect(userData.venusAgeYears).toEqual(1.6129);
  });

  it('should calculate user age in Mars years based on birth date and current date', function() {
    userData.calcEarthAge();
    userData.calcSolarYearAge();
    expect(userData.marsAgeYears).toEqual(0.5319);
  });

  it('should calculate user age in Jupiter years based on birth date and current date', function() {
    userData.calcEarthAge();
    userData.calcSolarYearAge();
    expect(userData.jupiterAgeYears).toEqual(0.0843);
  });

  it('should determine user life expectancy based on male biological sex origin', function() {
    userData.birthSexOrigin = 'male';
    userData.calcLifeExpectancy();
    expect(userData.lifeExpectancy).toEqual(77);
  });

  it('should determine user life expectancy based on average life expectancy', function() {
    userData.birthSexOrigin = 'not reported or intersex';
    userData.calcLifeExpectancy();
    expect(userData.lifeExpectancy).toEqual(80);
  });

  it('should determine user life expectancy based on female biological sex origin', function() {
    userData.birthSexOrigin = 'female';
    userData.calcLifeExpectancy();
    expect(userData.lifeExpectancy).toEqual(83);
  });

  it('should calculate user\'s remaining life time on Earth before expected expiry age', function() {
    let userMale76 = new User();
    userMale76.earthAgeYears = 76;
    userMale76.lifeExpectancy = 77;
    userMale76.calcYearsBeforeLifeExpect();
    expect(userMale76.earthYearsBeforeLifeExpect).toEqual(1);
  });
});
