import winclude as w
from gpiozero import *
from wmqtt import AwayInfo

Device.pin_factory = w.wfactory.WFactory()



for eachPin in w.pinsAll:
    globals()[eachPin] = eachPin



def pinMode(pin, value):
    if w.isR(pin):
        pass

    elif w.isDPWM(pin):
        if w.isOutput(value):
            w.ard.set_pin_mode(w.p(pin), w.ard.PWM, w.ard.DIGITAL)
        elif w.isInput(value):
            w.ard.set_pin_mode(w.p(pin), w.ard.INPUT, w.ard.DIGITAL)
        elif w.isPullupInput(value):
            w.ard.set_pin_mode(w.p(pin), w.ard.PULLUP, w.ard.DIGITAL)
        else:
            w.log.error(value, 'arg')

    elif w.isD(pin):
        if w.isOutput(value):
            w.ard.set_pin_mode(w.p(pin), w.ard.OUTPUT, w.ard.DIGITAL)
        elif w.isInput(value):
            w.ard.set_pin_mode(w.p(pin), w.ard.INPUT, w.ard.DIGITAL)
        elif w.isPullupInput(value):
            w.ard.set_pin_mode(w.p(pin), w.ard.PULLUP, w.ard.DIGITAL)
        else:
            w.log.error(value, 'arg')

    elif w.isA(pin):
        if w.isOutput(value):
            w.log.error('Analog pin {0} cannot be set as OUTPUT'.format(pin))
        elif w.isInput(value):
            w.ard.set_pin_mode(w.p(pin), w.ard.INPUT, w.ard.ANALOG)
        elif w.isPullupInput(value):
            w.ard.set_pin_mode(w.p(pin), w.ard.PULLUP, w.ard.ANALOG)
        else:
            w.log.error(value, 'arg')

    elif w.isAdig(pin):
        if w.isOutput(value):
            w.ard.set_pin_mode(w.p(pin), w.ard.OUTPUT, w.ard.DIGITAL)
        elif w.isInput(value):
            w.ard.set_pin_mode(w.p(pin), w.ard.INPUT, w.ard.DIGITAL)
        elif w.isPullupInput(value):
            w.ard.set_pin_mode(w.p(pin), w.ard.PULLUP, w.ard.DIGITAL)
        else:
            w.log.error(value, 'arg')

    else:
        w.log.error(pin, 'arg')

    m = w.transformMode(value)
    if m != None:
        w.pinState[pin] = m



def digitalWrite(pin, value):
    if w.isR(pin):
        if w.isPinOutput(pin):
            if w.isLow(value):
                x = w.rpi.OutputDevice(w.p(pin), factory=w.defaultFactory)
                x.off()
                x.close()
            elif w.isHigh(value):
                x = w.rpi.OutputDevice(w.p(pin), factory=w.defaultFactory)
                x.on()
                x.close()
            else:
                w.log.error(value, 'arg')
        else:
            w.log.error('Pin {0} must be set as OUTPUT for digitalWrite'.format(pin))

    elif w.isDPWM(pin):
        if w.isPinOutput(pin):
            if w.isLow(value):
               w.ard.analog_write(w.p(pin), 0)
            elif w.isHigh(value):
                w.ard.analog_write(w.p(pin), 255)
            else:
                w.log.error(value, 'arg')
        else:
            w.log.error('Pin {0} must be set as OUTPUT for digitalWrite'.format(pin))

    elif w.isD(pin) or w.isAdig(pin):
        if w.isPinOutput(pin):
            if w.isLow(value):
               w.ard.digital_write(w.p(pin), 0)
            elif w.isHigh(value):
                w.ard.digital_write(w.p(pin), 1)
            else:
                w.log.error(value, 'arg')
        else:
            w.log.error('Pin {0} must be set as OUTPUT for digitalWrite'.format(pin))

    elif w.isA(pin):
        w.log.error('Analog pin {0} cannot be set used for digitalWrite'.format(pin))

    else:
        w.log.error(pin, 'arg')



def digitalRead(pin):
    if w.isR(pin):
        if w.isPinInput(pin):
            x = w.rpi.InputDevice(w.p(pin), False, factory=w.defaultFactory)
            v = x.value
            x.close()
            if v: return 1
            else: return 0
        elif w.isPinPullupInput(pin):
            x = w.rpi.InputDevice(w.p(pin), True, factory=w.defaultFactory)
            v = x.value
            x.close()
            if v: return 1
            else: return 0
        else:
            w.log.error('Raspberry pin {0} must be set as INPUT for digitalRead'.format(pin))
    
    elif w.isD(pin) or w.isAdig(pin):
        v = w.ard.digital_read(w.p(pin))
        if (v): return 1
        else: return 0

    elif w.isA(pin):
        w.log.error('Analog pin {0} cannot be used for analogRead'.format(pin))

    else:
        w.log.error(pin, 'arg')


def analogRead(pin):
    if w.isR(pin):
        w.log.error('Raspberry pin {0} cannot be used for analogRead'.format(pin))
    
    elif w.isD(pin) or w.isAdig(pin):
        w.log.error('Digital pin {0} cannot be used for analogRead'.format(pin))

    elif w.isA(pin):
        if w.isPinInput(pin) or w.isPinPullupInput(pin):
            return w.ard.analog_read(w.p(pin))
        else:
            w.log.error('Pin {0} must be set as INPUT for analogRead'.format(pin))

    else:
        w.log.error(pin, 'arg')


def analogWrite(pin, value):
    if w.isDPWM(pin):
        if w.isPinOutput(pin):
            value = int(value)
            if 0 <= value <= 255:
                w.ard.analog_write(w.p(pin), value)
            else:
                w.log.error('Argument value "{0}" must be a number between 0 and 255'.format(value))
            
        else:
            w.log.error('Pin {0} must be set as OUTPUT for analogRead'.format(pin))

    elif w.isD(pin) or w.isAdig(pin) or w.isR(pin) or w.isA(pin):
        w.log.error('Pin {0} cannot be used for analogWrite'.format(pin))

    else:
        w.log.error(w.p(pin), 'arg')

