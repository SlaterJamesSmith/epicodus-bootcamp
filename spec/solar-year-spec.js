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
    userData.calcEarthAgeData();
    expect(userData.earthAgeSeconds).toEqual(31536000);
  });

  it('should convert user Earth-age from seconds into days', function() {
    userData.calcEarthAgeData();
    expect(userData.earthAgeDays).toEqual(365);
  });

  it('should correctly convert user Earth-age from days into years for a non-leap-year', function() {
    userData.calcEarthAgeData();
    expect(userData.earthAgeYears).toEqual(1);
  });

  it('should correctly convert user Earth-age from seconds into days for a leap-year', function() {
    let leapYearUserData = new User();
    leapYearUserData.birthDate = new Date(2012, 0, 1, 0, 0, 0);
    leapYearUserData.currentDate = new Date(2013, 0, 1, 0, 0, 0);
    leapYearUserData.calcEarthAgeData();
    expect(leapYearUserData.earthAgeDays).toEqual(366);
  });

  it('should convert Earth years into Mercury years', function() {
    userData.calcEarthAgeData();
    userData.calcPlanetData();
    expect(userData.planets[2].ageYears).toEqual(4.17);
  });

  it('should convert Earth years into Venus years', function() {
    userData.calcEarthAgeData();
    userData.calcPlanetData();
    expect(userData.planets[3].ageYears).toEqual(1.61);
  });

  it('should convert Earth years into Mars years', function() {
    userData.calcEarthAgeData();
    userData.calcPlanetData();
    expect(userData.planets[1].ageYears).toEqual(0.53);
  });

  it('should convert Earth years into Jupiter years', function() {
    userData.calcEarthAgeData();
    userData.calcPlanetData();
    expect(userData.planets[0].ageYears).toEqual(0.08);
  });

  it('should determine user life expectancy based on male biological sex origin', function() {
    userData.birthSexOrigin = 'male';
    userData.calcEarthLifeExpectancy();
    expect(userData.lifeExpectancy).toEqual(77);
  });

  it('should determine user life expectancy based on average life expectancy', function() {
    userData.birthSexOrigin = 'average';
    userData.calcEarthLifeExpectancy();
    expect(userData.lifeExpectancy).toEqual(80);
  });

  it('should determine user life expectancy based on female biological sex origin', function() {
    userData.birthSexOrigin = 'female';
    userData.calcEarthLifeExpectancy();
    expect(userData.lifeExpectancy).toEqual(83);
  });

  it('should calculate user\'s expected remaining life time on Earth before expected expiry age', function() {
    userMale76.calcEarthLifeExpectancy();
    expect(userMale76.earthExpectedYearsLeft).toEqual(1);
  });

  it('should convert expected years of life left on Earth into Mercury years', function() {
    userMale76.calcEarthLifeExpectancy();
    userMale76.calcPlanetData();
    expect(userMale76.planets[2].expectedYearsLeft).toEqual(4.17);
  });

  it('should convert expected years of life left on Earth into Venus years', function() {
    userMale76.calcEarthLifeExpectancy();
    userMale76.calcPlanetData();
    expect(userMale76.planets[3].expectedYearsLeft).toEqual(1.61);
  });

  it('should convert expected years of life left on Earth into Mars years', function() {
    userMale76.calcEarthLifeExpectancy();
    userMale76.calcPlanetData();
    expect(userMale76.planets[1].expectedYearsLeft).toEqual(0.53);
  });

  it('should convert expected years of life left on Earth into Jupiter years', function() {
    userMale76.calcEarthLifeExpectancy();
    userMale76.calcPlanetData();
    expect(userMale76.planets[0].expectedYearsLeft).toEqual(0.08);
  });

  it('should set expected remaining life time before expiry age to 0 if user age is past life expectancy', function() {
    userMale78.calcEarthLifeExpectancy();
    userMale78.calcPlanetData();
    expect(userMale78.earthExpectedYearsLeft).toEqual(0);
    expect(userMale78.planets[2].expectedYearsLeft).toEqual(0);
    expect(userMale78.planets[3].expectedYearsLeft).toEqual(0);
    expect(userMale78.planets[1].expectedYearsLeft).toEqual(0);
    expect(userMale78.planets[0].expectedYearsLeft).toEqual(0);
  });

  it('should calculate user\'s life time past expiry age for each planet', function() {
    userMale78.calcEarthLifeExpectancy();
    userMale78.calcPlanetData();
    expect(userMale78.earthYearsPastExpectancy).toEqual(1);
    expect(userMale78.planets[2].yearsPastExpectancy).toEqual(4.17);
    expect(userMale78.planets[3].yearsPastExpectancy).toEqual(1.61);
    expect(userMale78.planets[1].yearsPastExpectancy).toEqual(0.53);
    expect(userMale78.planets[0].yearsPastExpectancy).toEqual(0.08);
  });
});
