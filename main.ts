let x = 0
let y = 0
basic.forever(function () {
    x = 0
    y = 0
    for (let index = 0; index < 4; index++) {
        led.plot(x, y)
        x += 1
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        led.plot(x, y)
        y += 1
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        led.plot(x, y)
        x += -1
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        led.plot(x, y)
        y += -1
        basic.pause(100)
    }
    basic.pause(100)
    basic.clearScreen()
})
