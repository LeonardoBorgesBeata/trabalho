let n = 0
input.onButtonPressed(Button.A, function () {
    n = randint(0, 10)
    basic.showNumber(n)
})
input.onButtonPressed(Button.B, function () {
    if (n == 0) {
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                led.plot(x, y)
                basic.pause(200)
                basic.clearScreen()
            }
        }
    } else if (n == 2) {
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                led.plot(x, y)
                basic.pause(200)
                basic.clearScreen()
            }
        }
    } else if (n == 4) {
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                led.plot(x, y)
                basic.pause(200)
                basic.clearScreen()
            }
        }
    } else if (n == 6) {
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                led.plot(x, y)
                basic.pause(200)
                basic.clearScreen()
            }
        }
    } else if (n == 8) {
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                led.plot(x, y)
                basic.pause(200)
                basic.clearScreen()
            }
        }
    } else if (n == 10) {
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                led.plot(x, y)
                basic.pause(200)
                basic.clearScreen()
            }
        }
    } else {
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                led.plot(y, x)
                basic.pause(200)
                basic.clearScreen()
            }
        }
    }
})
