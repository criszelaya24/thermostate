'use strict';

function Thermostat() {
	this.powerSavingMode = true;
	this.temperature = 20;
	this.MINIMUM_TEMPERATURE = 10;
	this.MAX_LIMIT_PSM_ON = 25;
  	this.MAX_LIMIT_PSM_OFF = 32;
}

Thermostat.prototype.getCurrentTemperature = function() {
	return this.temperature;
};

Thermostat.prototype.up = function() {
	if (this.isMaximumTemperature()) {
		return;
	}
	this.temperature += 1;
};

Thermostat.prototype.down = function() {
	if (this.isMinimumTemperature()) {
		return;
	}
	this.temperature -= 1;
};

Thermostat.prototype.resetTemperature = function() {
	this.DEFAULT_TEMPERATURE = 20;
	this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
	if (this.isPowerSavingModeOn() === false) {
		return this.temperature === this.MAX_LIMIT_PSM_OFF;
	}
	return this.temperature === this.MAX_LIMIT_PSM_ON;
};

Thermostat.prototype.isMinimumTemperature = function() {
	return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
	return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
	return this.powerSavingMode = false;
};
Thermostat.prototype.switchPowerSavingModeOn = function() {
	return this.powerSavingMode = true;
};