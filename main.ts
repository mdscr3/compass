let graden = 0
basic.forever(function () {
    graden = input.compassHeading()
})
basic.forever(function () {
    if (graden < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (graden < 135) {
        basic.showArrow(ArrowNames.West)
    } else if (graden < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (graden < 315) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
