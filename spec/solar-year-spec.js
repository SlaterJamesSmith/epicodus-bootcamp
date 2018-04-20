import { User } from './../src/solar-year.js'

describe('SolarYearAge', function() {
  let userData;
  let userMale76;
  let userMale78;

  beforeEach(function() {
    userData = new User();
    userData.birthDate = new Date(2017, 3, 20, 0, 0, 0);
    userData.currentDate = new Date(2018, 3, 20, 0, 0, 0);

    userMale76 = new User();
    userMale76.earthAgeYears = 76;
    userMale76.lifeExpectancy = 77;

    userMale78 = new User();
    userMale78.earthAgeYears = 78;
    userMale78.lifeExpectancy = 77;
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
    userMale76.calcYearsBeforeLifeExpect();
    expect(userMale76.earthYearsBeforeLifeExpect).toEqual(1);
  });

  it('should calculate user\'s remaining life time on Mercury before expected expiry age', function() {
    userMale76.calcYearsBeforeLifeExpect();
    expect(userMale76.mercuryYearsBeforeLifeExpect).toEqual(4.1667);
  });

  it('should calculate user\'s remaining life time on Venus before expected expiry age', function() {
    userMale76.calcYearsBeforeLifeExpect();
    expect(userMale76.venusYearsBeforeLifeExpect).toEqual(1.6129);
  });

  it('should calculate user\'s remaining life time on Mars before expected expiry age', function() {
    userMale76.calcYearsBeforeLifeExpect();
    expect(userMale76.marsYearsBeforeLifeExpect).toEqual(0.5319);
  });

  it('should calculate user\'s remaining life time on Jupiter before expected expiry age', function() {
    userMale76.calcYearsBeforeLifeExpect();
    expect(userMale76.jupiterYearsBeforeLifeExpect).toEqual(0.0843);
  });

  it('should set remaining life time before expiry age to 0 if user age is greater than life expectancy', function() {
    userMale78.calcYearsBeforeLifeExpect();
    expect(userMale78.earthYearsBeforeLifeExpect).toEqual(0);
    expect(userMale78.mercuryYearsBeforeLifeExpect).toEqual(0);
    expect(userMale78.venusYearsBeforeLifeExpect).toEqual(0);
    expect(userMale78.marsYearsBeforeLifeExpect).toEqual(0);
    expect(userMale78.jupiterYearsBeforeLifeExpect).toEqual(0);
  });

  it('should calculate user\'s life time past expiry age for each planet', function() {
    userMale78.calcYearsBeforeLifeExpect();
    expect(userMale78.earthYearsPastLifeExpect).toEqual(1);
    expect(userMale78.mercuryYearsPastLifeExpect).toEqual(4.1667);
    expect(userMale78.venusYearsPastLifeExpect).toEqual(1.6129);
    expect(userMale78.marsYearsPastLifeExpect).toEqual(0.5319);
    expect(userMale78.jupiterYearsPastLifeExpect).toEqual(0.0843);
  });
});
