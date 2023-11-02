scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.changeScoreBy(1)
})
let albert_finger_noodle = sprites.create(assets.image`Albert-Finger-Noodle`, SpriteKind.Player)
controller.moveSprite(albert_finger_noodle)
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(albert_finger_noodle)
