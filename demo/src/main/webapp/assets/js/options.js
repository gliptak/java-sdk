var commonOptions = {};
commonOptions.apiKey = ""; // FILL IN
commonOptions.appName = ""; // FILL IN
commonOptions.sott = ""; // FILL IN
commonOptions.hashTemplate = true;
commonOptions.formValidationMessage = true;
commonOptions.verificationUrl = "http://localhost:8080/loginscreen";
commonOptions.resetPasswordUrl = "http://localhost:8080/loginscreen";
var LRObject = new LoginRadiusV2(commonOptions);