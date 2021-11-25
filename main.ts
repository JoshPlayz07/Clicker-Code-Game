// Upgrade 1
input.onPinPressed(TouchPin.P0, function () {
    if (game.score() >= upgrade_1_cost) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        points_per_click += 1
        game.addScore(upgrade_1_remove_cost)
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
    }
})
// Add Points Per Click
input.onButtonPressed(Button.A, function () {
    game.addScore(points_per_click)
})
// Level Up
input.onPinPressed(TouchPin.P2, function () {
    if (game.score() >= level_cost) {
        level += 1
        basic.showString("Level")
        basic.pause(10)
        basic.showNumber(level)
        basic.clearScreen()
        level_cost = level_cost + 1000
        game.setScore(0)
        points_per_click = 1
        upgrade_1_cost = 50
        upgrade_1_remove_cost = -50
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
    basic.showNumber(game.score())
})
// Upgrade 2
input.onPinPressed(TouchPin.P1, function () {
    if (game.score() >= upgrade_2_cost) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        game.addScore(upgrade_2_remove_cost)
        times_2nd_upgrade_used += 1
        points_per_second = 0 + times_2nd_upgrade_used
        upgrade_1_cost = upgrade_1_cost + 200
        upgrade_1_remove_cost = upgrade_1_remove_cost - 200
        basic.forever(function () {
            basic.pause(1000)
            game.addScore(points_per_second)
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
let points_per_second2 = 0
let points_per_second = 0
upgrade_2_remove_cost = -200
upgrade_2_cost = 200
level_cost = 1000
upgrade_1_cost = 50
upgrade_1_remove_cost = -50
points_per_click = 1
game.setScore(0)
level = 1
