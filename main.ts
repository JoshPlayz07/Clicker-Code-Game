// Upgrade 1
input.onPinPressed(TouchPin.P0, function () {
    if (points >= upgrade_1_cost) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(100)
        points_per_click += 1
        points += upgrade_1_remove_cost
        upgrade_1_cost = upgrade_1_cost + 50
        upgrade_1_remove_cost = upgrade_1_remove_cost - 50
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(100)
    }
})
// Add Points Per Click
input.onButtonPressed(Button.A, function () {
    points += points_per_click
    led.plot(2, 2)
    basic.pause(50)
    led.unplot(2, 2)
    led.plot(2, 3)
    led.plot(1, 3)
    led.plot(1, 2)
    led.plot(1, 1)
    led.plot(2, 1)
    led.plot(3, 1)
    led.plot(3, 2)
    led.plot(3, 3)
    basic.pause(50)
    led.unplot(2, 3)
    led.unplot(1, 3)
    led.unplot(1, 2)
    led.unplot(1, 1)
    led.unplot(2, 1)
    led.unplot(3, 1)
    led.unplot(3, 1)
    led.unplot(3, 2)
    led.unplot(3, 3)
    led.plot(0, 4)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    led.plot(4, 4)
    led.plot(4, 3)
    led.plot(4, 2)
    led.plot(4, 1)
    led.plot(4, 0)
    led.plot(3, 0)
    led.plot(2, 0)
    led.plot(1, 0)
    led.plot(0, 0)
    led.plot(0, 1)
    led.plot(0, 2)
    led.plot(0, 3)
    basic.pause(50)
    basic.clearScreen()
    basic.pause(50)
})
// Level Up
input.onPinPressed(TouchPin.P2, function () {
    if (points >= level_cost) {
        level += 1
        basic.showString("Level")
        basic.pause(10)
        basic.showNumber(level)
        basic.clearScreen()
        level_cost = level_cost + 1000
        points = 0
        points_per_click = 1
        upgrade_1_cost = 50
        upgrade_1_remove_cost = -50
        upgrade_2_complication = 0
    } else {
        basic.showString("Need")
        basic.pause(100)
        basic.showNumber(level_cost)
        basic.pause(100)
        basic.showString("Points")
    }
})
// View Score
input.onButtonPressed(Button.B, function () {
    if (points <= 9) {
        basic.showNumber(points)
        basic.pause(200)
        basic.clearScreen()
    } else {
        basic.showNumber(points)
    }
})
// Upgrade 2
input.onPinPressed(TouchPin.P1, function () {
    if (points >= upgrade_2_cost) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        points += upgrade_2_remove_cost
        times_2nd_upgrade_used += 1
        points_per_second = 0 + times_2nd_upgrade_used
        upgrade_2_cost = upgrade_2_cost + 200
        upgrade_2_remove_cost = upgrade_2_remove_cost - 200
        upgrade_2_complication = 1
        basic.forever(function () {
        if (upgrade_2_complication = 1) {
            basic.pause(1000)
            points += points_per_second
        }
        })
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
let times_2nd_upgrade_used = 0
let level = 0
let points_per_click = 0
let upgrade_1_remove_cost = 0
let upgrade_1_cost = 0
let level_cost = 0
let upgrade_2_cost = 0
let upgrade_2_remove_cost = 0
let upgrade_2_complication = 0
let points = 0
let points_per_second = 0
let points_per_second2 = 0
points = 0
upgrade_2_remove_cost = -200
upgrade_2_cost = 200
level_cost = 1000
upgrade_1_cost = 50
upgrade_1_remove_cost = -50
points_per_click = 1
level = 1
