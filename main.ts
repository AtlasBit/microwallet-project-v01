input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("YOU HAVE")
    basic.showNumber(game.score())
    basic.showString("POINTS")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("YOU HAVE")
    basic.showNumber(coins)
    basic.showString("COINS")
})
input.onButtonPressed(Button.AB, function () {
    if (coins > 10) {
        game.addScore(1)
    } else {
        basic.showString("I CANT")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("YOU HAVE")
    basic.showNumber(blocks)
    basic.showString("BLOCKS")
})
input.onGesture(Gesture.Shake, function () {
    if (randint(0, 2) == 0) {
        blocks += 1
        basic.showIcon(IconNames.Square)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.No)
        music.play(music.tonePlayable(139, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (blocks > 1) {
        blocks += -1
        basic.pause(500)
        coins += 1
        basic.showString("1 COIN +")
    } else {
        basic.pause(500)
        basic.showString("MINE!")
    }
})
let blocks = 0
let coins = 0
basic.showString("NO TUTORIAL!")
