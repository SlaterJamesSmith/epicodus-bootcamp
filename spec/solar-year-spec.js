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
    userMale76.birthSexOrigin = 'male';
    userMale76.earthAgeYears = 76;

    userMale78 = new User();
    userMale78.birthSexOrigin = 'male';
    userMale78.earthAgeYears = 78;
  });

  it('should calculate user Earth-age in seconds based on birth date and current date', function() {
    userData.calcEarthAge();
    expect(userData.earthAgeSeconds).toEqual(31536000);
  });

  it('should convert user Earth-age from seconds into days', function() {
    userData.calcEarthAge();
    expect(userData.earthAgeDays).toEqual(365);
  });

  it('should correctly convert user Earth-age from days into years for a non-leap-year', function() {
    userData.calcEarthAge();
    expect(userData.earthAgeYears).toEqual(0.9993);
  });

  it('should correctly convert user Earth-age from days into years for a leap-year', function() {
    let leapYearUserData = new User();
    leapYearUserData.birthDate = new Date(2012, 0, 1, 0, 0, 0);
    leapYearUserData.currentDate = new Date(2013, 0, 1, 0, 0, 0);
    leapYearUserData.calcEarthAge();
    expect(leapYearUserData.earthAgeYears).toEqual(1.0021);
  });

  it('should convert Earth years into Mercury years', function() {
    userData.calcEarthAge();
    userData.calcSolarYearAge();
    expect(userData.planetConversions[2].ageYears).toEqual(4.1638);
  });

  it('should convert Earth years into Venus years', function() {
    userData.calcEarthAge();
    userData.calcSolarYearAge();
    expect(userData.planetConversions[3].ageYears).toEqual(1.6118);
  });

  it('should convert Earth years into Mars years', function() {
    userData.calcEarthAge();
    userData.calcSolarYearAge();
    expect(userData.planetConversions[1].ageYears).toEqual(0.5315);
  });

  it('should convert Earth years into Jupiter years', function() {
    userData.calcEarthAge();
    userData.calcSolarYearAge();
    expect(userData.planetConversions[0].ageYears).toEqual(0.0843);
  });

  it('should determine user life expectancy based on male biological sex origin', function() {
    userData.birthSexOrigin = 'male';
    userData.calcLifeExpectancy();
    expect(userData.lifeExpectancy).toEqual(77);
  });

  it('should determine user life expectancy based on average life expectancy', function() {
    userData.birthSexOrigin = 'average';
    userData.calcLifeExpectancy();
    expect(userData.lifeExpectancy).toEqual(80);
  });

  it('should determine user life expectancy based on female biological sex origin', function() {
    userData.birthSexOrigin = 'female';
    userData.calcLifeExpectancy();
    expect(userData.lifeExpectancy).toEqual(83);
  });

  it('should calculate user\'s expected remaining life time on Earth before expected expiry age', function() {
    userMale76.calcLifeExpectancy();
    expect(userMale76.earthYearsBeforeLifeExpect).toEqual(1);
  });

  it('should convert expected years of life left on Earth into Mercury years', function() {
    userMale76.calcLifeExpectancy();
    userMale76.calcSolarYearAge();
    expect(userMale76.planetConversions[2].expectedYearsLeft).toEqual(4.1667);
  });

  it('should convert expected years of life left on Earth into Venus years', function() {
    userMale76.calcLifeExpectancy();
    userMale76.calcSolarYearAge();
    expect(userMale76.planetConversions[3].expectedYearsLeft).toEqual(1.6129);
  });

  it('should convert expected years of life left on Earth into Mars years', function() {
    userMale76.calcLifeExpectancy();
    userMale76.calcSolarYearAge();
    expect(userMale76.planetConversions[1].expectedYearsLeft).toEqual(0.5319);
  });

  it('should convert expected years of life left on Earth into Jupiter years', function() {
    userMale76.calcLifeExpectancy();
    userMale76.calcSolarYearAge();
    expect(userMale76.planetConversions[0].expectedYearsLeft).toEqual(0.0843);
  });

  it('should set expected remaining life time before expiry age to 0 if user age is past life expectancy', function() {
    userMale78.calcLifeExpectancy();
    userMale78.calcSolarYearAge();
    expect(userMale78.earthYearsBeforeLifeExpect).toEqual(0);
    expect(userMale78.planetConversions[2].expectedYearsLeft).toEqual(0);
    expect(userMale78.planetConversions[3].expectedYearsLeft).toEqual(0);
    expect(userMale78.planetConversions[1].expectedYearsLeft).toEqual(0);
    expect(userMale78.planetConversions[0].expectedYearsLeft).toEqual(0);
  });

  it('should calculate user\'s life time past expiry age for each planet', function() {
    userMale78.calcLifeExpectancy();
    userMale78.calcSolarYearAge();
    expect(userMale78.earthYearsPastLifeExpect).toEqual(1);
    expect(userMale78.planetConversions[2].yearsPastExpectancy).toEqual(4.1667);
    expect(userMale78.planetConversions[3].yearsPastExpectancy).toEqual(1.6129);
    expect(userMale78.planetConversions[1].yearsPastExpectancy).toEqual(0.5319);
    expect(userMale78.planetConversions[0].yearsPastExpectancy).toEqual(0.0843);
  });
});
