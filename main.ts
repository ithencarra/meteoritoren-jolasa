input.onButtonPressed(Button.A, function () {
    sprite.set(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.AB, function () {
    sprite.set(LedSpriteProperty.Y, 4)
})
input.onButtonPressed(Button.B, function () {
    sprite.set(LedSpriteProperty.Y, -1)
})
let sprite: game.LedSprite = null
sprite.set(LedSpriteProperty.X, 2)
sprite.set(LedSpriteProperty.Y, 4)
basic.forever(function () {
    let jokalari: game.LedSprite = null
    if (input.buttonIsPressed(Button.A)) {
        jokalari.change(LedSpriteProperty.X, 1)
    }
    if (input.buttonIsPressed(Button.B)) {
        jokalari.change(LedSpriteProperty.X, 1)
    }
    if (input.buttonIsPressed(Button.AB)) {
    	
    }
})
