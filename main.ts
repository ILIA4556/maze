scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . 7 . . . . 7 . . . . . . 
    . . . . 7 . . . . 7 . . . . . . 
    . . . . 7 . . . . 7 . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . 7 . 7 7 . 7 . . . . . 
    . . . . 7 . . 7 7 . . 7 . . . . 
    . . . 7 . . . 7 7 . . . 7 . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . 7 7 . . 7 7 . . . . . 
    . . . . 7 7 . . . . 7 7 . . . . 
    . . . 7 7 . . . . . . 7 7 . . . 
    . . 7 7 . . . . . . . . 7 7 . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairEast)
scene.cameraFollowSprite(mySprite)
info.startCountdown(50)
