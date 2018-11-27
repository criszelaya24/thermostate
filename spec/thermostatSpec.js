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

	it('decreases in temperature with up()',function(){
		thermostat.down();
		expect(thermostat.getCurrentTemperature()).toEqual(19);
	});
});