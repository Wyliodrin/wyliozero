Blockly.Blocks['led_pulse_infinite'] = {
  init: function() {
    this.appendValueInput("led")
        .setCheck("LED")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Pulse LED");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pwm_led'] = {
  init: function() {
    this.appendValueInput("led")
        .setCheck(["String", "pinNumber"])
        .appendField("PWM LED");
    this.setOutput(true, "PWM_LED");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pwm_led_light'] = {
  init: function() {
    this.appendValueInput("pwm_led")
        .setCheck("PWM_LED")
        .appendField("Turn on PWM LED");
    this.appendValueInput("value")
        .setCheck("Number")
        .appendField("with value");
    this.appendDummyInput()
        .appendField("(0 to 1).");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['button'] = {
  init: function() {
    this.appendValueInput("pin_number")
        .setCheck(["String", "pinNumber"])
        .appendField("button");
    this.setOutput(true, "button");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['button_is_pressed'] = {
  init: function() {
    this.appendValueInput("button")
        .setCheck("button")
        .appendField("Button");
    this.appendDummyInput()
        .appendField("is pressed.");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};