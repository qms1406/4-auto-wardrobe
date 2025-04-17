pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
let door = false
let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        door = !(door)
        if (door == true) {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
            pins.servoWritePin(AnalogPin.P7, 0)
        } else {
            pins.servoWritePin(AnalogPin.P7, 180)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
})
