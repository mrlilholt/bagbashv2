namespace SpriteKind {
    export const hook = SpriteKind.create()
    export const backpack = SpriteKind.create()
    export const obstacle = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -1000
})
function background () {
    scene.setBackgroundColor(1)
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    scene.setTileMap(img`
        ..................................................
        ..................................................
        23333333333333333333333333333333333333333333333333
        ..................................................
        .........7........................................
        ..................................................
        ..................................................
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    scene.setTile(2, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(7, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(3, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        d d d d d d d d d d d d d d d d 
        b b b b b b b b b b b b b b b b 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        d d d d d d d d d d d d d d d d 
        c c c c c c c c c c c c c c c c 
        `, true)
    scene.setTile(11, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        d d d d d d d d d d d d d d d d 
        c c c c c c c c c c c c c c c c 
        `, true)
    scene.placeOnRandomTile(mySprite, 7)
    scene.cameraFollowSprite(mySprite)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.obstacle, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    mySprite.x += 1
    scene.cameraShake(4, 500)
    sprites.destroy(otherSprite, effects.fountain, 500)
})
info.onCountdownEnd(function () {
    game.splash(info.score(), info.highScore())
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vy += 1000
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.backpack, function (sprite, otherSprite) {
    if (otherSprite.y < 90) {
        otherSprite.y += -30
    }
    if (otherSprite.y >= 90) {
        otherSprite.y += -50
    }
    otherSprite.changeScale(-0.5, ScaleAnchor.TopLeft)
    pause(500)
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.confetti, 100)
})
let backpack2: Sprite = null
let bench: Sprite = null
let backgroundWall1: Sprite = null
let waterbottle: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ......bccccc..........
    .......ccccbbab.......
    .......bcb5bccccc.....
    .........bcccccccc....
    ...dddd..cccccccccc...
    .bd.....bccccccccccb..
    .d...dd.bcccccccdd....
    ...ddd555ccddddddb....
    ...dd444cccbdd33dd....
    ..d45555eedcdd33dd....
    .d455555fe33ddddd.....
    .4555554b3333.........
    d4555554333d4d........
    d555554e33dddd........
    d4b455533333d3........
    d4bbd4efdd3333........
    d5ddd4ebd43333........
    d55554bf433333........
    d45554ff433333........
    .54cc4ff555555........
    ..dd4dbddddddd........
    .......ddd..3d........
    .......5be..54........
    ..ddddd555dd551d......
    .dddddd5ddd455d5ddddd.
    .ddddddd111ddddddddddd
    ......ddddddddddddddd.
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    ......bccccc..........
    .......ccccbbab.......
    .......bcb5bccccc.....
    .........bcccccccc....
    ...dddd..cccccccccc...
    .bd.....bccccccccccb..
    .d...dd.bcccccccdd....
    ...ddd555ccddddddb....
    ...dd444cccbdd33dd....
    ..d45555eedcdd33dd....
    .d455555fe33ddddd.....
    .4555554b3333.........
    d4555554333d4d........
    d555554e33dddd........
    d4b455533333d3........
    d4bbd4efdd3333........
    d5ddd4ebd43333........
    d55554bf433333........
    d45554ff433333........
    .54cc4ff555555........
    ..dd4dbddddddd........
    .......ddd..3d........
    .......5be..54........
    ..ddddd555dd551d......
    .dddddd5ddd455d5ddddd.
    .ddddddd111ddddddddddd
    ......ddddddddddddddd.
    `,img`
    ......bccccc..........
    .......ccccbbab.......
    .......bcb5bccccc.....
    .........bcccccccc....
    .........cccccccccc...
    ...dddd.bccccccccccb..
    .cd..dd.bcccccccdd....
    .d.ddd555ccddddddb....
    ...dd444cccbdd33dd....
    ..d45555eedcdd33dd....
    .d455555fe33ddddd.....
    .4555554b3333.........
    d4555554333d4d........
    d555554e33dddd........
    d4b455533333d3........
    d4bbd4ef3dd333........
    d5ddd4eb3d4333........
    d55554bf343333........
    d45554ff433333........
    .54cc4ff555555........
    ..dd4dbddddddd........
    ....555ddd..3d........
    .....5bedd..54........
    ..ddd5dddddd551d......
    .dddddddddd455d5ddddd.
    .ddddddd111ddddddddddd
    ......ddddddddddddddd.
    `,img`
    ......bccccc..........
    .......ccccbbab.......
    .......bcb5bccccc.....
    .........bcccccccc....
    ...dddd..cccccccccc...
    .bd.....bccccccccccb..
    .d...dd.bcccccccdd....
    ...ddd555ccddddddb....
    ...dd444cccbdd33dd....
    ..d45555eedcdd33dd....
    .d455555fe33ddddd.....
    .4555554b3333.........
    d455555433333.........
    d555554e333d4d........
    d4b4555333dddd........
    d4bbd4efdd33d3........
    d5ddd4ebd43333........
    d55554bf433333........
    d45554ff433333........
    .54cc4ff555555........
    ..dd4dbddddddd........
    .......ddd..dd........
    .......5bed551........
    ..ddddd555d554dd......
    .dddddd5ddd55dddddddd.
    .ddddddd11dddddddddddd
    ......ddddddddddddddd.
    `],
100,
true
)
controller.moveSprite(mySprite, 0, 100)
background()
info.setScore(0)
info.startCountdown(10)
game.onUpdateInterval(randint(300, 6000), function () {
    waterbottle = sprites.create(img`
        ......ccccccc.
        .....c.......c
        .....c........
        .....fffcfcbff
        .....cffcfcbff
        ......cbdb11bb
        ......88866966
        .....b66699996
        .....888666996
        .....888666996
        .....8886d9966
        .....8886b1966
        .....88866d966
        .....888666966
        .....888666966
        .....888666966
        .....888666966
        .....888666966
        .....886666996
        .....686666966
        .....686666966
        .....666666996
        .....666666966
        .....66699dd66
        .....666666666
        ..dbb866666669
        `, SpriteKind.obstacle)
    waterbottle.setPosition(randint(300, 400), randint(70, 110))
    waterbottle.setVelocity(-50, 0)
})
forever(function () {
    backgroundWall1 = sprites.create(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        dddddddddddddddddddddddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ...f......f......f......f......f......f......f....
        ...f......f......f......f......f......f......f....
        ...f......f......f......f......f......f......f....
        .f.f....f.f....f.f....f.f....f.f....f.f....f.f....
        ..f......f......f......f......f......f......f.....
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, SpriteKind.hook)
    backgroundWall1.setVelocity(-50, 0)
    backgroundWall1.setPosition(300, 42)
    pause(randint(1000, 1200))
})
forever(function () {
    bench = sprites.create(img`
        .............................................
        ..bb.......................................bd
        .bbb.......................................bb
        bbbb.......................................eb
        dbbbdddddddddddddddddbdddddddddddddddddbdddbb
        ddcddddddddddddddddddbdddddddddddddbdddddddde
        dbedddddddddddddddddddddddbddddddddddddddddde
        ddcddddddddbddddbddddbddddcddddddddbdddddddde
        ddfdddcfdddfbdddfddddfddddfdddbcdddfddddcddde
        ddbbbbbbbbbbbdbbbbbbbbbbbbbbbbbddddbbbbbbbbbe
        ddbbbbbbbdddbbbbbbbbbbbbbbbbbbbdbdbbbddddbbdb
        dbbb......................................dbb
        dbbb......................................dbb
        dbbb......................................deb
        dbbb......................................dbb
        dbbb......................................deb
        dbbb.......................................eb
        db..........................................e
        bb..........................................e
        bb..........................................b
        `, SpriteKind.Player)
    bench.setVelocity(-50, 0)
    bench.setPosition(300, 108)
    pause(randint(4000, 6000))
})
game.onUpdateInterval(randint(1000, 3000), function () {
    backpack2 = sprites.create(img`
        . . . . 3 3 . . . 
        . 6 6 b 6 9 6 . . 
        . 9 9 9 9 9 3 3 . 
        . 9 9 1 9 9 3 . 3 
        9 9 1 2 1 9 3 . 3 
        9 9 9 1 9 9 3 . 3 
        9 9 9 9 9 9 3 . 3 
        9 9 9 9 9 9 3 . 3 
        9 9 9 9 9 9 3 . 3 
        . 9 9 9 9 9 9 . 3 
        . d 9 9 9 9 3 3 . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . d d . d . 
        . d d d d d d d . 
        d d d d d d . . . 
        . . . . . . . . . 
        `, SpriteKind.backpack)
    backpack2.setPosition(randint(300, 400), randint(70, 110))
    backpack2.setVelocity(-50, 0)
    animation.runImageAnimation(
    backpack2,
    [img`
        . . . . 3 3 . . . 
        . 6 6 b 6 9 6 . . 
        . 9 9 9 9 9 3 3 . 
        . 9 9 1 9 9 3 . 3 
        9 9 1 2 1 9 3 . 3 
        9 9 9 1 9 9 3 . 3 
        9 9 9 9 9 9 3 . 3 
        9 9 9 9 9 9 3 . 3 
        9 9 9 9 9 9 3 . 3 
        . 9 9 9 9 9 9 . 3 
        . d 9 9 9 9 3 3 . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . d d . d . 
        . d d d d d d d . 
        d d d d d d . . . 
        . . . . . . . . . 
        `,img`
        . . . . . . . . . 
        . . . . 3 3 . . . 
        . 6 6 b 6 9 6 . . 
        . 9 9 9 9 9 3 3 . 
        . 9 9 1 9 9 3 . 3 
        9 9 1 2 1 9 3 . 3 
        9 9 9 1 9 9 3 . 3 
        9 9 9 9 9 9 3 . 3 
        9 9 9 9 9 9 3 . 3 
        9 9 9 9 9 9 3 . 3 
        . 9 9 9 9 9 9 . 3 
        . d 9 9 9 9 3 3 . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . d d . d . 
        . d d d d d d d . 
        d d d d d d d d . 
        . . . . . . . . . 
        `,img`
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . 3 3 . . . 
        . 6 6 b 6 9 6 . . 
        . 9 9 9 9 9 3 3 . 
        . 9 9 1 9 9 3 . 3 
        9 9 1 2 1 9 3 . 3 
        9 9 9 1 9 9 3 . 3 
        9 9 9 9 9 9 3 . 3 
        9 9 9 9 9 9 3 . 3 
        9 9 9 9 9 9 3 . 3 
        . 9 9 9 9 9 9 . 3 
        . d 9 9 9 9 3 3 . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . d d . d . 
        . d d d d d d d d 
        d d d d d d d d d 
        . . . . . . . . . 
        `,img`
        . . . . . . . . . 
        . . . . 3 3 . . . 
        . 6 6 b 6 9 6 . . 
        . 9 9 9 9 9 3 3 . 
        . 9 9 1 9 9 3 . 3 
        9 9 1 2 1 9 3 . 3 
        9 9 9 1 9 9 3 . 3 
        9 9 9 9 9 9 3 . 3 
        9 9 9 9 9 9 3 . 3 
        9 9 9 9 9 9 3 . 3 
        . 9 9 9 9 9 9 . 3 
        . d 9 9 9 9 3 3 . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . d d . d . 
        . d d d d d d d . 
        d d d d d d d d . 
        . . . . . . . . . 
        `],
    100,
    true
    )
})
