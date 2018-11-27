'use strict';

describe('Thermostat', function(){
	var thermostat;
	beforeEach(function(){
		thermostat = new Thermostat;
	});
	it('Starts at 20 degree', function(){
		expect(thermostat.getCurrentTemperature()).toEqual(20);
	});
});