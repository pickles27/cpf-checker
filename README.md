# cpf-checker
checks all your cpfs

**how to use:**

require the package:
var cpfChecker = require("cpf-checker")

the function is called with a single parameter, the cpf you would like to validate
the cpf can be in the form:
- String with "." and "-": e.g. '123.456.789-12'
- String with number chars only: '12345678901'
- Integer: 12345678901


the function returns a boolean, true for valid cpf, and false for invalid
for example:

cpfChecker('469.352.008-06') => returns true
cpfChecker('46935200806') => returns true
cpfChecker(46935200806) => returns true
