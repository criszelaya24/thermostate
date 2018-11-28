'use strict';

describe('Thermostat', function(){
	var thermostat;
	beforeEach(function(){
		thermostat = new Thermostat;
	});
	it('Starts at 20 degree', function(){
		expect(thermostat.getCurrentTemperature()).toEqual(20);
	});
	it('increases in temperature with up()',function(){
		thermostat.up();
		expect(thermostat.getCurrentTemperature()).toEqual(21);
	});

	it('decreases in temperature with down()',function(){
		thermostat.down();
		expect(thermostat.getCurrentTemperature()).toEqual(19);
	});

	it('Has minimun of 10 degrees', function(){
		for (var i = 0; i < 11; i++) {
			thermostat.down();
		}
		expect(thermostat.getCurrentTemperature()).toEqual(10);
	});

	it('Has power saving on by default', function(){
		expect(thermostat.isPowerSavingModeOn()).toBe(true);
	});

	it('Can switch off the PSM', function(){
		thermostat.switchPowerSavingModeOff();
		expect(thermostat.isPowerSavingModeOn()).toBe(false);
	});

	it('Can switch on PSM back', function(){
		thermostat.switchPowerSavingModeOff();
		expect(thermostat.isPowerSavingModeOn()).toBe(false);
  		thermostat.switchPowerSavingModeOn();
  		expect(thermostat.isPowerSavingModeOn()).toBe(true);
	});

});