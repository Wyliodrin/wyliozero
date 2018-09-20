Blockly.Blocks['analogread'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck(["String", "pinNumber"])
        .appendField("analogRead");
    this.setOutput(true, "Number");
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['digitalread'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck(["String", "pinNumber"])
        .appendField("digitalRead");
    this.setOutput(true, "Number");
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['analogwrite'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck(["String", "pinNumber"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("analogWrite");
    this.appendValueInput("value")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['digitalwrite'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck(["String", "pinNumber"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("digitalWrite");
    this.appendValueInput("value")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pinmode'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(["String", "pinNumber"])
        .appendField("pinMode");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["INPUT","INPUT"], ["OUTPUT","OUTPUT"]]), "mode");
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["R4","R4"],
          ["R17","R17"], 
          ["R27","R27"], 
          ["R22","R22"],
          ["R10","R10"],
          ["R9","R9"],
          ["R11","R11"],
          ["R18","R18"],
          ["R23","R23"],
          ["R8","R8"],
          ["R7","R7"],
          ["D2","D2"],
          ["D3","D3"],
          ["D4","D4"],
          ["D5","D5"],
          ["D6","D6"],
          ["D7","D7"],
          ["D8","D8"],
          ["D9","D9"],
          ["D10","D10"],
          ["D11","D11"],
          ["D12","D12"],
          ["D13","D13"],
          ["A0","A0"],
          ["A1","A1"],
          ["A2","A2"],
          ["A3","A3"],
          ["A4","A4"],
          ["A5","A5"],
        ]), "pin");
    this.setOutput(true, "pinNumber");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['start_wyliolab'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start Wyliolab");
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['led'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck(["String", "pinNumber"])
        .appendField("LED");
    this.setOutput(true, "LED");
    this.setColour(0);
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
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['button'] = {
  init: function() {
    this.appendValueInput("pin_number")
        .setCheck(["String", "pinNumber"])
        .appendField("Button");
    this.setOutput(true, "button");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['button_is_pressed'] = {
  init: function() {
    this.appendValueInput("button")
        .setCheck("button")
        .appendField("button");
    this.appendDummyInput()
        .appendField("is pressed");
    this.setOutput(true, "Boolean");
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['led_blink'] = {
  init: function() {
    this.appendValueInput("led")
        .setCheck(["PWM_LED", "LED", "traffic"])
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Blink");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pwm_on'] = {
  init: function() {
    this.appendValueInput("pwm_led")
        .setCheck("PWM_LED")
        .appendField("Turn on PWM LED");
    this.appendValueInput("value")
        .setCheck("Number")
        .appendField("with value");
    this.appendDummyInput()
        .appendField("(between 0 and 1)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['button_wait_for_press'] = {
  init: function() {
    this.appendValueInput("button")
        .setCheck("button")
        .appendField("Wait until button");
    this.appendDummyInput()
        .appendField("is pressed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pause'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pause");
    this.setPreviousStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['trafficlight'] = {
  init: function() {
    this.appendValueInput("red")
        .setCheck(["String", "pinNumber"])
        .appendField("Traffic Lights");
    this.appendValueInput("yellow")
        .setCheck(["String", "pinNumber"]);
    this.appendValueInput("green")
        .setCheck(["String", "pinNumber"]);
    this.setOutput(true, "traffic");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turn_on'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(["PWM_LED", "LED", "traffic"])
        .appendField("Turn on");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turn_off'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(["PWM_LED", "LED", "traffic"])
        .appendField("Turn off");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['traffic_light_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn on")
        .appendField(new Blockly.FieldDropdown([["red","red"], ["yellow","yellow"], ["green","green"]]), "light");
    this.appendValueInput("NAME")
        .setCheck("traffic")
        .appendField("for Traffic Light");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pwm_pulse'] = {
  init: function() {
    this.appendValueInput("pwm_led")
        .setCheck("PWM_LED")
        .appendField("Pulse PWM LED");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['traffic_light_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn off")
        .appendField(new Blockly.FieldDropdown([["red","red"], ["yellow","yellow"], ["green","green"]]), "light");
    this.appendValueInput("NAME")
        .setCheck("traffic")
        .appendField("for Traffic Light");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['start_labnetwork'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start LabNetwork");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
