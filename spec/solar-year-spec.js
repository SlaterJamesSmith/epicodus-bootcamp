import { User } from './../src/solar-year.js'

describe('SolarYearAge', function() {
  let userData;

  beforeEach(function() {
    userData = new User();
    userData.currentDate = new Date(2018, 3, 20);
  });

  it('should calculate user Earth age based on birth year and current year', function() {
    userData.birthDate = new Date(2017, 3, 20);
    userData.calcEarthAge();
    expect(userData.earthAgeYears).toEqual(1);
  });

});
