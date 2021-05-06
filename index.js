function testLintErrors(code) {
    if (code.charAt(code.length - 1) !== ';') {
        return code.concat(';');
    }
    return code;
}

module.exports.testLintErrors = testLintErrors;