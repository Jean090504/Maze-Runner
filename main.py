@namespace
class SpriteKind:
    Livro = SpriteKind.create()
    estrala = SpriteKind.create()
    inimigo = SpriteKind.create()
    dino = SpriteKind.create()
    inimigo2 = SpriteKind.create()
    patinho = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    tiles.place_on_tile(mySprite, tiles.get_tile_location(17, 28))
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.inimigo2, on_on_overlap)

def on_a_pressed():
    controller.move_sprite(mySprite, 120, 120)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap2(sprite2, otherSprite2):
    music.ba_ding.play()
    info.change_score_by(1)
    sprites.destroy_all_sprites_of_kind(SpriteKind.estrala, effects.spray, 500)
sprites.on_overlap(SpriteKind.player, SpriteKind.estrala, on_on_overlap2)

def on_countdown_end():
    game.over(False, effects.melt)
info.on_countdown_end(on_countdown_end)

def on_overlap_tile(sprite3, location):
    if info.score() == 2:
        game.over(True, effects.confetti)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile)

def on_life_zero():
    game.over(False, effects.melt)
info.on_life_zero(on_life_zero)

def on_on_overlap3(sprite4, otherSprite3):
    music.ba_ding.play()
    info.change_score_by(1)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Livro, effects.spray, 500)
sprites.on_overlap(SpriteKind.player, SpriteKind.Livro, on_on_overlap3)

def on_on_overlap4(sprite5, otherSprite4):
    tiles.place_on_tile(mySprite, tiles.get_tile_location(17, 28))
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.dino, on_on_overlap4)

def on_on_overlap5(sprite6, otherSprite5):
    tiles.place_on_tile(mySprite, tiles.get_tile_location(17, 28))
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.inimigo, on_on_overlap5)

mySprite: Sprite = None
info.set_score(0)
info.set_life(3)
mySprite = sprites.create(assets.image("""
    Harry
"""), SpriteKind.player)
livro1 = sprites.create(img("""
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
    """),
    SpriteKind.Livro)
mySprite2 = sprites.create(img("""
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
    """),
    SpriteKind.estrala)
controller.move_sprite(mySprite, 60, 60)
fantasma = sprites.create(img("""
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
    """),
    SpriteKind.inimigo)
fantasma2 = sprites.create(img("""
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
    """),
    SpriteKind.inimigo2)
dino1 = sprites.create(img("""
        . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 b c 5 5 d 4 c . . 
            . b b b b 5 5 5 b f d d 4 4 4 b 
            . b d 5 b 5 5 b c b 4 4 4 4 b . 
            . . b 5 5 b 5 5 5 4 4 4 4 b . . 
            . . b d 5 5 b 5 5 5 5 5 5 b . . 
            . b d b 5 5 5 d 5 5 5 5 5 5 b . 
            b d d c d 5 5 b 5 5 5 5 5 5 b . 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . .
    """),
    SpriteKind.dino)
patinho2 = sprites.create(img("""
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
    """),
    SpriteKind.patinho)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
tiles.place_on_tile(mySprite, tiles.get_tile_location(17, 28))
tiles.place_on_tile(livro1, tiles.get_tile_location(17, 1))
tiles.place_on_tile(mySprite2, tiles.get_tile_location(15, 13))
tiles.place_on_tile(fantasma, tiles.get_tile_location(9, 6))
tiles.place_on_tile(fantasma2, tiles.get_tile_location(10, 8))
tiles.place_on_tile(dino1, tiles.get_tile_location(3, 14))
tiles.place_on_tile(patinho2, tiles.get_tile_location(6, 13))
scene.camera_follow_sprite(mySprite)
info.start_countdown(50)