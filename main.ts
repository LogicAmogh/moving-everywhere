input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    X += -1
    led.plot(X, Y)
})
input.onSound(DetectedSound.Loud, function () {
    basic.clearScreen()
    Y += 1
    led.plot(X, Y)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    X += 1
    led.plot(X, Y)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    Y += -1
    led.plot(X, Y)
})
let X = 0
let Y = 0
Y = 2
X = 2
led.plot(X, Y)
