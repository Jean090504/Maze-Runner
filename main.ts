namespace SpriteKind {
    export const Livro = SpriteKind.create()
    export const estrala = SpriteKind.create()
    export const inimigo = SpriteKind.create()
    export const dino = SpriteKind.create()
    export const inimigo2 = SpriteKind.create()
    export const patinho = SpriteKind.create()
    export const morcegao = SpriteKind.create()
    export const EG = SpriteKind.create()
    export const EG2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.inimigo2, function (sprite, otherSprite) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 28))
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.patinho, function (sprite, otherSprite) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 28))
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 120, 120)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.estrala, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    sprites.destroyAllSpritesOfKind(SpriteKind.estrala, effects.spray, 500)
})
info.onCountdownEnd(function () {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (info.score() == 2) {
        game.over(true, effects.confetti)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.EG2, function (sprite, otherSprite) {
    music.bigCrash.play()
    game.splash("Me siga no instagram e me incentive: JeanCosta04")
    sprites.destroyAllSpritesOfKind(SpriteKind.EG2, effects.rings, 500)
})
info.onLifeZero(function () {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.EG, function (sprite, otherSprite) {
    music.bigCrash.play()
    game.splash("Meus parabéns achou meu amigo secreto,", " você literalmente é um profissional!!")
    sprites.destroyAllSpritesOfKind(SpriteKind.EG, effects.rings, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Livro, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Livro, effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.morcegao, function (sprite, otherSprite) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 28))
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dino, function (sprite, otherSprite) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 28))
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.inimigo, function (sprite, otherSprite) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 28))
    info.changeLifeBy(-1)
})
let mySprite: Sprite = null
info.setScore(0)
info.setLife(3)
mySprite = sprites.create(assets.image`Harry`, SpriteKind.Player)
let livro1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . b 5 5 b . . . . . . 
    . . . b b b 5 5 1 1 b b b . . . 
    . . . b 5 5 5 5 1 1 5 5 b . . . 
    . . . . b d 5 5 5 5 d b . . . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . c 5 d d d d 5 c . . . . 
    . . . . c 5 d c c d 5 c . . . . 
    . . . . c c c . . c c c . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Livro)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . b 5 5 b . . . . . . 
    . . . b b b 5 5 1 1 b b b . . . 
    . . . b 5 5 5 5 1 1 5 5 b . . . 
    . . . . b d 5 5 5 5 d b . . . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . c 5 d d d d 5 c . . . . 
    . . . . c 5 d c c d 5 c . . . . 
    . . . . c c c . . c c c . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.estrala)
let ESTER_EG = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 2 f f 2 f f . . . . 
    . . . f f 2 2 2 2 2 2 f f . . . 
    . . . f 2 f f 2 2 f f 2 f . . . 
    . . f f 2 f d 2 2 f d 2 f f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f f 2 2 f 2 2 f 2 2 f f . . 
    . . f f f 2 2 f f 2 2 f f f . . 
    . . f 7 7 7 2 2 2 2 7 7 7 f . . 
    . . f f 7 7 7 7 7 7 7 7 f f . . 
    . . . f 7 7 7 7 7 7 7 f f . . . 
    . . . . f 7 7 7 7 7 7 f . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.EG)
let ESTER_EGG_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 2 f f 2 f f . . . . 
    . . . f f 2 2 2 2 2 2 f f . . . 
    . . . f 2 f f 2 2 f f 2 f . . . 
    . . f f 2 f 7 2 2 f 7 2 f f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f f 2 2 f 2 2 f 2 2 f f . . 
    . . f f f 2 f f f f 2 f f f . . 
    . . f 8 8 8 2 2 2 2 8 8 8 f . . 
    . . f f 8 8 8 8 8 8 8 8 f f . . 
    . . . f 8 8 8 8 8 8 8 f f . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.EG2)
controller.moveSprite(mySprite, 60, 60)
let fantasma = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdb2dd2bdbf......
    ......fcdc2112cdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.inimigo)
let fantasma2 = sprites.create(img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c c . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f c 3 b c 3 b c f b b c c c . 
    f c b b b b b b c f b c b c c . 
    c c f b b b f b c b b c b b c . 
    c b b b b b b b b b c c c b c . 
    c b 1 f f 1 c b b c c c c c . . 
    c f 1 f f 1 f b b b b f c . . . 
    f f f f f f f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 2 b b b c f . . . . 
    . . f 2 2 2 b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.inimigo2)
let dino1 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........fffff.........
    ........ff1111bff.......
    .......fb1111111bf......
    .......f111111111f......
    ......fd1111111ffff.....
    ......fd111dd1c111bf....
    ......fb1122df1b1bff....
    ......f11111bfbfbff.....
    ......f1b1bdfcffff......
    ......fbfbfcfcccf.......
    ......ffffffffff........
    .........ffffff.........
    .........ffffff.........
    .........fffffff..f.....
    ..........fffffffff.....
    ...........fffffff......
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.dino)
let patinho = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .....fffc1111111f.......
    ...fc111cd1111111f......
    ...f1b1b1b1111dddf......
    ...fbfbff221122ddf......
    ......fcf111111bbf......
    .......ccbdb1b1fcf......
    .......fffbfbfdff.......
    ........ffffffff........
    ........fffffffffff.....
    .........fffffc111cf....
    .........fffff1b1b1f....
    ..........ffffbfbfbf....
    ...........ffff.........
    ........................
    ........................
    ........................
    `, SpriteKind.patinho)
let morcegao = sprites.create(img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c . . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f b 3 b c 3 b c f b b c c c . 
    . c b b b b b b c f b c b c c . 
    . c b b b b b b c b b c b b c . 
    c 2 1 b b 2 1 b b b c c c b c . 
    c b b b b b b b b c c c c c . . 
    f b c b b b c b b b b f c . . . 
    f b 1 f f 2 1 b b b b f c c . . 
    . f b b b 2 2 b b b c f . . . . 
    . . f b b b 2 b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.morcegao)
tiles.setCurrentTilemap(tilemap`Maze`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 28))
tiles.placeOnTile(livro1, tiles.getTileLocation(17, 1))
tiles.placeOnTile(ESTER_EG, tiles.getTileLocation(2, 39))
tiles.placeOnTile(ESTER_EGG_2, tiles.getTileLocation(16, 39))
tiles.placeOnTile(mySprite2, tiles.getTileLocation(15, 13))
tiles.placeOnTile(fantasma, tiles.getTileLocation(9, 6))
tiles.placeOnTile(fantasma2, tiles.getTileLocation(10, 8))
tiles.placeOnTile(dino1, tiles.getTileLocation(3, 14))
tiles.placeOnTile(patinho, tiles.getTileLocation(6, 13))
tiles.placeOnTile(morcegao, tiles.getTileLocation(2, 9))
scene.cameraFollowSprite(mySprite)
info.startCountdown(50)
