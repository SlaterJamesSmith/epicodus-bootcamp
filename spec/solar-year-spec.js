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

});
