let Y = 0
let X = 0
OLED12864_I2C.init(60)
OLED12864_I2C.zoom(true)
radio.setGroup(90)
let szorzo = 3
music.setVolume(255)
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P0)
    X = Math.map(X, 1023, 0, -100, 100) * -1
    radio.sendValue("x", X)
    OLED12864_I2C.showString(
    0,
    0,
    "X=" + convertToText(Math.round(X)),
    1
    )
    Y = pins.analogReadPin(AnalogPin.P1)
    Y = Math.map(Y, 1023, 0, -100, 100)
    radio.sendValue("y", Y)
    OLED12864_I2C.showString(
    0,
    1,
    "Y=" + convertToText(Math.round(Y)),
    1
    )
    basic.pause(10)
})
