scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.changeScoreBy(1)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("https://youtu.be/34Ig3X59_qA?si=lvuLM_vS3z38-GCh")
})
let albert_finger_noodle = sprites.create(assets.image`Albert-Finger-Noodle`, SpriteKind.Player)
controller.moveSprite(albert_finger_noodle, -100, -100)
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(albert_finger_noodle)
