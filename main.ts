scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile22`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . 4 5 5 4 . . . . . . 
    . . . . . . 2 5 5 2 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleBlueCrystal)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
