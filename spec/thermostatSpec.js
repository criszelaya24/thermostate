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
});