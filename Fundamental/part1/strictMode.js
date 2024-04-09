'use strict'//helps you write cleaner code and catch errors and bugs that might otherwise go unnoticed

// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriversLicenses = true; if using strict mode this will be an error because different variable

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

