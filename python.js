Blockly.Python['led_pulse_infinite'] = function(block) {
    var value_led = Blockly.Python.valueToCode(block, 'led', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code =
        ` 
while True:
${value_led}.on();
sleep(1);
${value_led}.off();
sleep(1);
  `;
    return code;
};

Blockly.Python['pwm_led'] = function(block) {
    var value_led = Blockly.Python.valueToCode(block, 'led', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `led = PWMLED( ${value_led.toString()})\nreturn led;\n`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pwm_led_light'] = function(block) {
    var value_pwm_led = Blockly.Python.valueToCode(block, 'pwm_led', Blockly.Python.ORDER_ATOMIC);
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code =
        `${value_pwm_led}.value =  ${value.value};\n`;
    return code;
};

Blockly.Python['button'] = function(block) {
    var value_pin_number = Blockly.Python.valueToCode(block, 'pin_number', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code =
        `return Button( ${value_pin_number} );\n`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['button_is_pressed'] = function(block) {
    var value_button = Blockly.Python.valueToCode(block, 'button', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code =
        `return ${value_button}.is_pressed();\n`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};