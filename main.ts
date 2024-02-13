namespace SpriteKind {
    export const hook = SpriteKind.create()
    export const backpack = SpriteKind.create()
    export const obstacle = SpriteKind.create()
    export const splash = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -1000
})
function startGame () {
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
}
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
function splashScreen1 () {
    splash1.setPosition(-2, 6)
    animation.runImageAnimation(
    splash1,
    [img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbdddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbccccccbbdddddddddddddddddddbcfffffcccccffffbddddddddddbcfffffffccbdddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbccccccbbdddddddddddddddddddbcfffffcccccffffbddddddddddbcfffffffccbdddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddbccfffffffccccccccccffbbdddddddddddddddccfcbdddddddddbfffcdddddddcfffbbbdddbbbbcfbccfccddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddcffbbbddddddddddddddbfffbdddddddddddddbffbdbbbdddddddbffffbdddddcfbbddddddddbbbdbfffbcfbdddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddcffbbbddddddddddddddbfffbdddddddddddddbffbdbbbdddddddbffffbdddddcfbbddddddddbbbdbfffbcfbdddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddfccddddddddcffbddddddcfffbddddddddddddfccdcfffdddddddcffffcddddcfbddddddddbfffffbbbbdcfcdddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddffffbddddddfffcddddddcfffcdddddddddddcfbbbffccdddddddffffffbdbbfbdddddddbbffffffcdddbfffbbdddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddbfffddddddbfffbdddddbfffffdddddddddddccddcffbbddddddbffffffbdcccddddddddccfffffffbddcfffffdddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddbfffddddddbfffbdddddbfffffdddddddddddccddcffbbddddddbffffffbdcccddddddddccfffffffbddcfffffdddddddddddddddddddddddddddddddddddd
        bbbeeeeeeebddddddddddddddddddddddddddddddddddcccddddddbfbbddbbbcffffffddddddddddbfbddbbbddddddddcffffffdbffbdddddddbfffffffffbbbffffccdddddddddddddddddddddddddddddddddddd
        ebbee4eeeebddddddddddddddddddddddddddddddddddcccddddddddddddbbbcfffffcddddbdddddccddddddddddddddffffffcdbffddddddddcffbcccccffffffffbbdddddddddddddddddddddddddddddddddddd
        ebbee4eeeeeddddddddddddddddddddddddddddbbbebdffbddddddcfbbddddddbffffbdcffffcdddfbdccffbddddddbbffffffbdbffdddddddbfccbddddddddddbffbbdddddddddddddddddddddddddddddddddddd
        ebbee4eeeeeddddddddddddddddddddddddddddbbbebdffbddddddcfbbddddddbffffbdcffffcdddfbdccffbddddddbbffffffbdbffdddddddbfccbddddddddddbffbbdddddddddddddddddddddddddddddddddddd
        ebbee4eeeeedddddddddddddddddddddddeeeeebbbeccffbdddddbffbbdddddddcfffccfbbbbfccccdbffffdddddddccffffffddbffdddddddcffffbddddddbbbcffbbdddddddddddddddddddddddddddddddddddd
        ebbee444eeebddddddddddddddddddddddeecbbeeb3efffddddddbffbbdddddddcfffffbddddcfffbdcfffcdddddddccfffffcddbffbddddddcffffdddddddccffffccdddddddddddddddddddddddddddddddddddd
        ebbee444eeebddddddddddddddddddddddeecbbeeb3efffddddddbffbbdddddddcfffffbddddcfffbdcfffcdddddddccfffffcddbffbddddddcffffdddddddccffffccdddddddddddddddddddddddddddddddddddd
        ebbee444eeeedddbbbbdddddddddddddddeeccbbbbbbfffbdddddbffddddddddbffffffbddddcffbdcfbbbddddddddbbbcfffbdddfffddddddcfffcddddddbffffffffbddddddddddddddddddddddddddddddddddd
        e33ee444eeeeddbbbeeeddddddddddddddeecccbbbfffeeceddddbcddddddddbfffffffbddddddddbffbbbbbbbbbbbbbbffffcdddccfcdddddbfccdddddddcffffffccdddddddddddddddddddddddddddddddddddd
        e33be444eeeeddbb3eeeddddddddddddddeecccccef3333bcedddddbbbbccffffffffffcdddddddbffffffffffffffffffffffbddbbfffccddddddbccbbddfffffffbbdddddddddddddddddddddddddddddddddddd
        e33be444eeeeddbb3eeeddddddddddddddeecccccef3333bcedddddbbbbccffffffffffcdddddddbffffffffffffffffffffffbddbbfffccddddddbccbbddfffffffbbdddddddddddddddddddddddddddddddddddd
        e33be4444eeebbbb3eeebdddddddbbeeebcccccccffbbeeecfffffffffffffffffffffffffcccfffffffffffffffffffffffffcddddcffffffccfffffffcbffffffddddddddddddddddddddddddddddddddddddddd
        b33bee4444eebbeb3bbbbdddddddbbceeecccccccfffffffffffffffffffffffffffffbcffffffffffffffffffffffffffffffcdddddcfffffffffffffffffffffcddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeeee3bb3bdddddddbbfeeeccccccccfffffffffffffffffffffffffffbddccffffffffffffffffffffffffffffbddddddcffffffffffffffffffffbddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeeee3bb3bdddddddbbfeeeccccccccfffffffffffffffffffffffffffbddccffffffffffffffffffffffffffffbddddddcffffffffffffffffffffbddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeece3bbbedddddddeefceeeeccccccfffffffffffffffffffffffcbbbdddddcffffffcbbbcccccccccccccccccddddddddccffffffffffffffffffdddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeece333beeebbbbbeeffceeeeccccccfffffffffffffffcccbbbdddddddddddccffcbddddddddddddddddddddddddddddddddccffffffccbbcfffcdddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeece333beeebbbbbeeffceeeeccccccfffffffffffffffcccbbbdddddddddddccffcbddddddddddddddddddddddddddddddddccffffffccbbcfffcdddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeece333bbeeee3ebeefffeeeeecccccccccceebbbeebcccbddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbddddddbbbbdddddddddddddddddddddddddddddddddddddddd
        eeeeeeeeeeeeeece333b3ebee3be33cffceeeecccccccccceeeebbbebbccbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444ee333b3ebeeb3bbbefffcceeeccccccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444ee333b3ebeeb3bbbefffcceeeccccccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444ec3bbb3bebbe33bbbcffffeeeeeccccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444ec3bbe3bbbbe3333beffffceeeeecccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444cceeeeeebeebb3333ecffffceeeecccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444cceeeeeebeebb3333ecffffceeeecccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        eeec4444444444ccfffffcbbbbb333bbefffffeeeeeccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffc4444444444ccfffffcbbb3b3333ebcffffceeeeecccccccccccccccccbbddddddddddd11111111111ddddddddddd111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffc4444444444ccfffffcbbb3b3333ebcffffceeeeecccccccccccccccccbbddddddddddd11111111111ddddddddddd111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffe4444444444ccfffffcbee33b333beefffffcceeeeccccccccccccccccbbddddddd11dddddddddd1111dddddddd11ddddddddd1111d111dddddddd11111dddddddddddddddddddddddddddddddddddddddddddd
        eeee4444444444ccfffffcbee33bbb3dbbeeeebbbdd11dd11dbbcccccccccbbdddddd1dddddddddddd1111ddddddd1ddddddd111dddddd111ddddddd111ddd11111111111ddddddddddddddddddddddddddddddddd
        444eee44444eeeccffffffbbbb3bddd111dddbbeebbbbcccb111d44444444bbddddd1ddd11dddddddd11111dddddd1ddddddd1111ddddd1111dddddd1ddddddddddddd1dddd111111111dddddddddddddddddddddd
        444eee44444eeeccffffffbbbb3bddd111dddbbeebbbbcccb111d44444444bbddddd1ddd11dddddddd11111dddddd1ddddddd1111ddddd1111dddddd1ddddddddddddd1dddd111111111dddddddddddddddddddddd
        444e4444444444ccfffffcebbe33bb1ddebbeffccbbbeccced111d4444444bbddd111dd111dddddddd11111ddddd1ddddddddd11111ddd11111ddddd1111dddddddd111dddddddddddd1dddddddddddddddddddddd
        444e4444444444ccfffffce33e33bbd3dbeebcfbb113eccced11114444444bbddd11dd1111ddddddd1111111dddd1dddddddddddd11dd111111ddddd111dddddddd1111ddddddddddd1111dddddddddddddddddddd
        444444eece4444ccccccceebbbb3dd11d3bbeefdd113eccced1111d444444bbddd11dd11ddddddddd111111ddddd11ddddddddddddd1111111ddddddd11ddddddd11111ddddddd11111111dddddddddddddddddddd
        444444eece4444ccccccceebbbb3dd11d3bbeefdd113eccced1111d444444bbddd11dd11ddddddddd111111ddddd11ddddddddddddd1111111ddddddd11ddddddd11111ddddddd11111111dddddddddddddddddddd
        44444cffffc444ccccccceeeeee3ddd1d3bbeecdd1dbecccb11111d444444bbdd1ddddddddddddddd111111dddd1dd11dddddddddddd111111dddddd1ddddddddd1111dddddddd111111111ddddddddddddddddddd
        4ee4effffffeeeccccccceeee4eeeee1eeeeeecbbb3bebbd111111beeeeecbbdd1dddddddddddddd1111111dddd1dd1111dddddddddd111111dddddd1dddddddddddddddddddd1111111111ddddddddddddddddddd
        4ee4effffffeeeccccccceeee4eeeee1eeeeeecbbb3bebbd111111beeeeecbbdd1dddddddddddddd1111111dddd1dd1111dddddddddd111111dddddd1dddddddddddddddddddd1111111111ddddddddddddddddddd
        4ee4effffffeeeccccccceeee44444b144444eceeb3beccccd111dcbdd11dddd11ddd111dddddddd111111dddd1ddd1111111dddddddd1111dddddd1ddddddddd11dddddddddd1111111111ddddddddddddddddddd
        4ee4effffffeeecccccccee444eeeebdeeeeeee111dbeccccb1111bdddcbd11d1ddd111ddddddddd111111dddd1ddddd11111ddddddd11111dddddd1ddddddddd111dddddddd11111111111ddddddddddddddddddd
        4ee4effffffeeecccccccee44e4444dd4444eeb111deeccccb11111dcccccdd1dddd111ddddddddddd1111dddd1dddddd1111ddddddd11111dd11111dddddddd111ddddddddd111111dddddddddddddddddddddddd
        4ee4effffffeeecccccccee44e4444dd4444eeb111deeccccb11111dcccccdd1dddd111ddddddddddd1111dddd1dddddd1111ddddddd11111dd11111dddddddd111ddddddddd111111dddddddddddddddddddddddd
        4ee4effffffeeecccccccee44e44441d4444eeb111deeccccb11111dcccccdd1dd111ddddddddddddd1111dd11ddd1dddddddddddddd11111dd1dddddddddddd111dddddddd1111111dddddddddddddddddddddddd
        4ee4effffffeeecccccccee44e4ddd1d44eeeed11b3eccccbd11111dcccccdddd1111ddd111111111111111d111111111dddddddd11111111d11dddddddddddd1dddddddddd111111ddddddddddddddddddddddddd
        4ee4effffffeeecccccccee44ed1ddd444ee4eeeeb3ecccb11111111bbcccddd11111111111111111111111d1111111111111111111111111d111111111ddddd1dddddddddddd1111ddddddddddddddddddddddddd
        4ee4effffffeeecccccccee44ed1ddd444ee4eeeeb3ecccb11111111bbcccddd11111111111111111111111d1111111111111111111111111d111111111ddddd1dddddddddddd1111ddddddddddddddddddddddddd
        4ee4cffffffeeecccccccee44edd444444ee4eeddd1dd1111111111111ddd11111111111111111111111111ddd11111111111111111111111dd11111111111111111111dddddd1111ddddddddddddddddddddddddd
        4ee4cffffffeeecccccccee44eddddddd1111111111111111111111bdd11111111111111111111111111111ddd11111111111111111111111dd111111111111111111111111111111ddddddddddddddddddddddddd
        4ee4cffffffeeecccccccee44eddddddd1111111111111111111111bdd11111111111111111111111111111ddd11111111111111111111111dd111111111111111111111111111111ddddddddddddddddddddddddd
        4ee4fffffffeeecccccccee44e1111111111111111111111111111bcbb11111111111111111111111111111dddd11111d111111111111111dddd111111111111111111111111111111dddddddddddddddddddddddd
        4ee4fffffffeeecccccccee44ed1111111111111111111111111dbccccbd111111ddddddddddddddddddddddddddddddddd1111111111ddddddd111111111111111111111111111111dddddddddddddddddddddddd
        4ee4fffffff4cccccccccee44e4d11111111111111111dddbbbbcccccccbb111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111dddddddddddddddddddddddd
        4ee4fffffff4cccccccccee44e4d11111111111111111dddbbbbcccccccbb111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111dddddddddddddddddddddddd
        4ee4fffffff4cccccccccee44e4edd1111ddddddddbeccccccccccccccccedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111ddddddddddddddddddddddddd
        4ee4fffffff4cccccccccee4444444ddd4eeeceee3becccccccccccccccceddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4ee4fffffff4ccccccccceeee444444444eeefeee3becccccccccccccccceddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4ee4fffffff4ccccccccceeee444444444eeefeee3becccccccccccccccceddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4ee4fffffff4ccccccccee4ee444444444eeefebb3bcccccccccccccccccbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4ee4fffffff4ccccccccee4ee444444444eeefebb3bcccccccccccccccccbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4ee4fffffff4ccccccccee4ee444444444eeefebb3bcccccccccccccccccbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4eeeffffffc4ccccccccee4ee444444444eeefebb3bcccccccccccccccccbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4eeeffffffe4ccccccccee4ee4e4444444eeefe333bcccccccccccccccccbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4eeeffffffe4ccccccccee4ee44444444444cfe333ecccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4eeeffffffe4ccccccccee4ee44444444444cfe333ecccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        eeeeffffffe4ccccccccee4ee44444444e44ffe333ecccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e444efffffe4ccccccccee4ee44444444eeeffb333ecccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444eeeee44ccccccccee4ee44444444eeeffb333eccee4eeeeeecceeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444eeeee44ccccccccee4ee44444444eeeffb333eccee4eeeeeecceeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccccccccee4ee44444444eeeffb33beccee444444444444edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccccccccee4ee44444444eeeffb33beccee444444444444bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccccccccee4ee44444444eeeffb33beccee444444444444bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        c4444444444eccccccccee4ee44444444eeefcb33beccee444444444444bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        f4444444444eccfffffcee4ee44444444eeefeb33eeccee444444444444bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        f4444444444eccfffffcee4ee44444444eeefeb33eecccccceeeeeeeeeebdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        f4444444444eccfffffcee4ee44444444eeefeb33eecccccceeeeeeeeeebdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccfffffce4eee44444444eeefeb33eeccccccccccccccccbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccfffffce4e4444444444eeefeb33ecccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccfffffcc44eee444444eeeefeb33ecccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        e4444444444eccfffffcc44eee444444eeeefeb33ecccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        e4444444444eccfffffee444444eeeee44eefbebbbbecccccccccccccceb33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        eee444444eebeeeeceeebeeeeeeeeeeeeebbbbbbbb33eeeccccccccccce333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        eee444444eebeeeeceeebeeeeeeeeeeeeebbbbbbbb33eeeccccccccccce333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333bbbb33333333333333333bbbbbbbb3333bbbbb333333bbbbbbbbbb3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `,img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbdddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbccccccbbdddddddddddddddddddbcfffffcccccffffbddddddddddbcfffffffccbdddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbccccccbbdddddddddddddddddddbcfffffcccccffffbddddddddddbcfffffffccbdddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddbccfffffffccccccccccffbbdddddddddddddddccfcbdddddddddbfffcdddddddcfffbbbdddbbbbcfbccfccddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddcffbbbddddddddddddddbfffbdddddddddddddbffbdbbbdddddddbffffbdddddcfbbddddddddbbbdbfffbcfbdddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddcffbbbddddddddddddddbfffbdddddddddddddbffbdbbbdddddddbffffbdddddcfbbddddddddbbbdbfffbcfbdddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddfccddddddddcffbddddddcfffbddddddddddddfccdcfffdddddddcffffcddddcfbddddddddbfffffbbbbdcfcdddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddffffbddddddfffcddddddcfffcdddddddddddcfbbbffccdddddddffffffbdbbfbdddddddbbffffffcdddbfffbbdddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddbfffddddddbfffbdddddbfffffdddddddddddccddcffbbddddddbffffffbdcccddddddddccfffffffbddcfffffdddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddbfffddddddbfffbdddddbfffffdddddddddddccddcffbbddddddbffffffbdcccddddddddccfffffffbddcfffffdddddddddddddddddddddddddddddddddddd
        bbbeeeeeeebddddddddddddddddddddddddddddddddddcccddddddbfbbddbbbcffffffddddddddddbfbddbbbddddddddcffffffdbffbdddddddbfffffffffbbbffffccdddddddddddddddddddddddddddddddddddd
        ebbee4eeeebddddddddddddddddddddddddddddddddddcccddddddddddddbbbcfffffcddddbdddddccddddddddddddddffffffcdbffddddddddcffbcccccffffffffbbdddddddddddddddddddddddddddddddddddd
        ebbee4eeeeeddddddddddddddddddddddddddddbbbebdffbddddddcfbbddddddbffffbdcffffcdddfbdccffbddddddbbffffffbdbffdddddddbfccbddddddddddbffbbdddddddddddddddddddddddddddddddddddd
        ebbee4eeeeeddddddddddddddddddddddddddddbbbebdffbddddddcfbbddddddbffffbdcffffcdddfbdccffbddddddbbffffffbdbffdddddddbfccbddddddddddbffbbdddddddddddddddddddddddddddddddddddd
        ebbee4eeeeedddddddddddddddddddddddeeeeebbbeccffbdddddbffbbdddddddcfffccfbbbbfccccdbffffdddddddccffffffddbffdddddddcffffbddddddbbbcffbbdddddddddddddddddddddddddddddddddddd
        ebbee444eeebddddddddddddddddddddddeecbbeeb3efffddddddbffbbdddddddcfffffbddddcfffbdcfffcdddddddccfffffcddbffbddddddcffffdddddddccffffccdddddddddddddddddddddddddddddddddddd
        ebbee444eeebddddddddddddddddddddddeecbbeeb3efffddddddbffbbdddddddcfffffbddddcfffbdcfffcdddddddccfffffcddbffbddddddcffffdddddddccffffccdddddddddddddddddddddddddddddddddddd
        ebbee444eeeedddbbbbdddddddddddddddeeccbbbbbbfffbdddddbffddddddddbffffffbddddcffbdcfbbbddddddddbbbcfffbdddfffddddddcfffcddddddbffffffffbddddddddddddddddddddddddddddddddddd
        e33ee444eeeeddbbbeeeddddddddddddddeecccbbbfffeeceddddbcddddddddbfffffffbddddddddbffbbbbbbbbbbbbbbffffcdddccfcdddddbfccdddddddcffffffccdddddddddddddddddddddddddddddddddddd
        e33be444eeeeddbb3eeeddddddddddddddeecccccef3333bcedddddbbbbccffffffffffcdddddddbffffffffffffffffffffffbddbbfffccddddddbccbbddfffffffbbdddddddddddddddddddddddddddddddddddd
        e33be444eeeeddbb3eeeddddddddddddddeecccccef3333bcedddddbbbbccffffffffffcdddddddbffffffffffffffffffffffbddbbfffccddddddbccbbddfffffffbbdddddddddddddddddddddddddddddddddddd
        e33be4444eeebbbb3eeebdddddddbbeeebcccccccffbbeeecfffffffffffffffffffffffffcccfffffffffffffffffffffffffcddddcffffffccfffffffcbffffffddddddddddddddddddddddddddddddddddddddd
        b33bee4444eebbeb3bbbbdddddddbbceeecccccccfffffffffffffffffffffffffffffbcffffffffffffffffffffffffffffffcdddddcfffffffffffffffffffffcddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeeee3bb3bdddddddbbfeeeccccccccfffffffffffffffffffffffffffbddccffffffffffffffffffffffffffffbddddddcffffffffffffffffffffbddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeeee3bb3bdddddddbbfeeeccccccccfffffffffffffffffffffffffffbddccffffffffffffffffffffffffffffbddddddcffffffffffffffffffffbddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeece3bbbedddddddeefceeeeccccccfffffffffffffffffffffffcbbbdddddcffffffcbbbcccccccccccccccccddddddddccffffffffffffffffffdddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeece333beeebbbbbeeffceeeeccccccfffffffffffffffcccbbbdddddddddddccffcbddddddddddddddddddddddddddddddddccffffffccbbcfffcdddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeece333beeebbbbbeeffceeeeccccccfffffffffffffffcccbbbdddddddddddccffcbddddddddddddddddddddddddddddddddccffffffccbbcfffcdddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeece333bbeeee3ebeefffeeeeecccccccccceebbbeebcccbddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbddddddbbbbdddddddddddddddddddddddddddddddddddddddd
        eeeeeeeeeeeeeece333b3ebee3be33cffceeeecccccccccceeeebbbebbccbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444ee333b3ebeeb3bbbefffcceeeccccccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444ee333b3ebeeb3bbbefffcceeeccccccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444ec3bbb3bebbe33bbbcffffeeeeeccccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444ec3bbe3bbbbe3333beffffceeeeecccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444cceeeeeebeebb3333ecffffceeeecccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444cceeeeeebeebb3333ecffffceeeecccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        eeec4444444444ccfffffcbbbbb333bbefffffeeeeeccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffc4444444444ccfffffcbbb3b3333ebcffffceeeeecccccccccccccccccbbddddddddddd11111111111ddddddddddd111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffc4444444444ccfffffcbbb3b3333ebcffffceeeeecccccccccccccccccbbddddddddddd11111111111ddddddddddd111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffe4444444444ccfffffcbee33b333beefffffcceeeeccccccccccccccccbbddddddd11dddddddddd1111dddddddd11ddddddddd1111d111dddddddd11111dddddddddddddddddddddddddddddddddddddddddddd
        eeee4444444444ccfffffcbee33bbb3dbbeeeebbbdd11dd11dbbcccccccccbbdddddd1dddddddddddd1111ddddddd1ddddddd111dddddd111ddddddd111ddd11111111111ddddddddddddddddddddddddddddddddd
        444eee44444eeeccffffffbbbb3bddd111dddbbeebbbbcccb111d44444444bbddddd1ddd11dddddddd11111dddddd1ddddddd1111ddddd1111dddddd1ddddddddddddd1dddd111111111dddddddddddddddddddddd
        444eee44444eeeccffffffbbbb3bddd111dddbbeebbbbcccb111d44444444bbddddd1ddd11dddddddd11111dddddd1ddddddd1111ddddd1111dddddd1ddddddddddddd1dddd111111111dddddddddddddddddddddd
        444e4444444444ccfffffcebbe33bb1ddebbeffccbbbeccced111d4444444bbddd111dd111dddddddd11111ddddd1ddddddddd11111ddd11111ddddd1111dddddddd111dddddddddddd1dddddddddddddddddddddd
        444e4444444444ccfffffce33e33bbd3dbeebcfbb113eccced11114444444bbddd11dd1111ddddddd1111111dddd1dddddddddddd11dd111111ddddd111dddddddd1111ddddddddddd1111dddddddddddddddddddd
        444444eece4444ccccccceebbbb3dd11d3bbeefdd113eccced1111d444444bbddd11dd11ddddddddd111111ddddd11ddddddddddddd1111111ddddddd11ddddddd11111ddddddd11111111dddddddddddddddddddd
        444444eece4444ccccccceebbbb3dd11d3bbeefdd113eccced1111d444444bbddd11dd11ddddddddd111111ddddd11ddddddddddddd1111111ddddddd11ddddddd11111ddddddd11111111dddddddddddddddddddd
        44444cffffc444ccccccceeeeee3ddd1d3bbeecdd1dbecccb11111d444444bbdd1ddddddddddddddd111111dddd1dd11dddddddddddd111111dddddd1ddddddddd1111dddddddd111111111ddddddddddddddddddd
        4ee4effffffeeeccccccceeee4eeeee1eeeeeecbbb3bebbd111111beeeeecbbdd1dddddddddddddd1111111dddd1dd1111dddddddddd111111dddddd1dddddddddddddddddddd1111111111ddddddddddddddddddd
        4ee4effffffeeeccccccceeee4eeeee1eeeeeecbbb3bebbd111111beeeeecbbdd1dddddddddddddd1111111dddd1dd1111dddddddddd111111dddddd1dddddddddddddddddddd1111111111ddddddddddddddddddd
        4ee4effffffeeeccccccceeee44444b144444eceeb3beccccd111dcbdd11dddd11ddd111dddddddd111111dddd1ddd1111111dddddddd1111dddddd1ddddddddd11dddddddddd1111111111ddddddddddddddddddd
        4ee4effffffeeecccccccee444eeeebdeeeeeee111dbeccccb1111bdddcbd11d1ddd111ddddddddd111111dddd1ddddd11111ddddddd11111dddddd1ddddddddd111dddddddd11111111111ddddddddddddddddddd
        4ee4effffffeeecccccccee44e4444dd4444eeb111deeccccb11111dcccccdd1dddd111ddddddddddd1111dddd1dddddd1111ddddddd11111dd11111dddddddd111ddddddddd111111dddddddddddddddddddddddd
        4ee4effffffeeecccccccee44e4444dd4444eeb111deeccccb11111dcccccdd1dddd111ddddddddddd1111dddd1dddddd1111ddddddd11111dd11111dddddddd111ddddddddd111111dddddddddddddddddddddddd
        4ee4effffffeeecccccccee44e44441d4444eeb111deeccccb11111dcccccdd1dd111ddddddddddddd1111dd11ddd1dddddddddddddd11111dd1dddddddddddd111dddddddd1111111dddddddddddddddddddddddd
        4ee4effffffeeecccccccee44e4ddd1d44eeeed11b3eccccbd11111dcccccdddd1111ddd111111111111111d111111111dddddddd11111111d11dddddddddddd1dddddddddd111111ddddddddddddddddddddddddd
        4ee4effffffeeecccccccee44ed1ddd444ee4eeeeb3ecccb11111111bbcccddd11111111111111111111111d1111111111111111111111111d111111111ddddd1dddddddddddd1111ddddddddddddddddddddddddd
        4ee4effffffeeecccccccee44ed1ddd444ee4eeeeb3ecccb11111111bbcccddd11111111111111111111111d1111111111111111111111111d111111111ddddd1dddddddddddd1111ddddddddddddddddddddddddd
        4ee4cffffffeeecccccccee44edd444444ee4eeddd1dd1111111111111ddd11111111111111111111111111ddd11111111111111111111111dd11111111111111111111dddddd1111ddddddddddddddddddddddddd
        4ee4cffffffeeecccccccee44eddddddd1111111111111111111111bdd11111111111111111111111111111ddd11111111111111111111111dd111111111111111111111111111111ddddddddddddddddddddddddd
        4ee4cffffffeeecccccccee44eddddddd1111111111111111111111bdd11111111111111111111111111111ddd11111111111111111111111dd111111111111111111111111111111ddddddddddddddddddddddddd
        4ee4fffffffeeecccccccee44e1111111111111111111111111111bcbb11111111111111111111111111111dddd11111d111111111111111dddd111111111111111111111111111111dddddddddddddddddddddddd
        4ee4fffffffeeecccccccee44ed1111111111111111111111111dbccccbd111111ddddddddddddddddddddddddddddddddd1111111111ddddddd111111111111111111111111111111dddddddddddddddddddddddd
        4ee4fffffff4cccccccccee44e4d11111111111111111dddbbbbcccccccbb111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111dddddddddddddddddddddddd
        4ee4fffffff4cccccccccee44e4d11111111111111111dddbbbbcccccccbb111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111dddddddddddddddddddddddd
        4ee4fffffff4cccccccccee44e4edd1111ddddddddbeccccccccccccccccedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111ddddddddddddddddddddddddd
        4ee4fffffff4cccccccccee4444444ddd4eeeceee3becccccccccccccccceddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4ee4fffffff4ccccccccceeee444444444eeefeee3becccccccccccccccceddddddddddddfddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4ee4fffffff4ccccccccceeee444444444eeefeee3becccccccccccccccceddddddddddddfddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4ee4fffffff4ccccccccee4ee444444444eeefebb3bcccccccccccccccccbddddddddddddfddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4ee4fffffff4ccccccccee4ee444444444eeefebb3bcccccccccccccccccbddddddddddddfddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4ee4fffffff4ccccccccee4ee444444444eeefebb3bcccccccccccccccccbddddddddddddfffdddffdddffddfdfddffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4eeeffffffc4ccccccccee4ee444444444eeefebb3bcccccccccccccccccbddddddddddddfddfdfddfdfddfdfdfdfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4eeeffffffe4ccccccccee4ee4e4444444eeefe333bcccccccccccccccccbddddddddddddfddfdfddfdfddfdffdddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4eeeffffffe4ccccccccee4ee44444444444cfe333ecccccccccccccccccdddddddddddddfddfdfddfdfddfdfdfdddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4eeeffffffe4ccccccccee4ee44444444444cfe333ecccccccccccccccccddddddddddddffffdddffdddffddfdfdffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        eeeeffffffe4ccccccccee4ee44444444e44ffe333ecccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e444efffffe4ccccccccee4ee44444444eeeffb333ecccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444eeeee44ccccccccee4ee44444444eeeffb333eccee4eeeeeecceeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444eeeee44ccccccccee4ee44444444eeeffb333eccee4eeeeeecceeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccccccccee4ee44444444eeeffb33beccee444444444444edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccccccccee4ee44444444eeeffb33beccee444444444444bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccccccccee4ee44444444eeeffb33beccee444444444444bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        c4444444444eccccccccee4ee44444444eeefcb33beccee444444444444bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        f4444444444eccfffffcee4ee44444444eeefeb33eeccee444444444444bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        f4444444444eccfffffcee4ee44444444eeefeb33eecccccceeeeeeeeeebdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        f4444444444eccfffffcee4ee44444444eeefeb33eecccccceeeeeeeeeebdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccfffffce4eee44444444eeefeb33eeccccccccccccccccbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccfffffce4e4444444444eeefeb33ecccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccfffffcc44eee444444eeeefeb33ecccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        e4444444444eccfffffcc44eee444444eeeefeb33ecccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        e4444444444eccfffffee444444eeeee44eefbebbbbecccccccccccccceb33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        eee444444eebeeeeceeebeeeeeeeeeeeeebbbbbbbb33eeeccccccccccce333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        eee444444eebeeeeceeebeeeeeeeeeeeeebbbbbbbb33eeeccccccccccce333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333bbbb33333333333333333bbbbbbbb3333bbbbb333333bbbbbbbbbb3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `,img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbdddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbccccccbbdddddddddddddddddddbcfffffcccccffffbddddddddddbcfffffffccbdddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbccccccbbdddddddddddddddddddbcfffffcccccffffbddddddddddbcfffffffccbdddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddbccfffffffccccccccccffbbdddddddddddddddccfcbdddddddddbfffcdddddddcfffbbbdddbbbbcfbccfccddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddcffbbbddddddddddddddbfffbdddddddddddddbffbdbbbdddddddbffffbdddddcfbbddddddddbbbdbfffbcfbdddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddcffbbbddddddddddddddbfffbdddddddddddddbffbdbbbdddddddbffffbdddddcfbbddddddddbbbdbfffbcfbdddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddfccddddddddcffbddddddcfffbddddddddddddfccdcfffdddddddcffffcddddcfbddddddddbfffffbbbbdcfcdddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddffffbddddddfffcddddddcfffcdddddddddddcfbbbffccdddddddffffffbdbbfbdddddddbbffffffcdddbfffbbdddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddbfffddddddbfffbdddddbfffffdddddddddddccddcffbbddddddbffffffbdcccddddddddccfffffffbddcfffffdddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddbfffddddddbfffbdddddbfffffdddddddddddccddcffbbddddddbffffffbdcccddddddddccfffffffbddcfffffdddddddddddddddddddddddddddddddddddd
        bbbeeeeeeebddddddddddddddddddddddddddddddddddcccddddddbfbbddbbbcffffffddddddddddbfbddbbbddddddddcffffffdbffbdddddddbfffffffffbbbffffccdddddddddddddddddddddddddddddddddddd
        ebbee4eeeebddddddddddddddddddddddddddddddddddcccddddddddddddbbbcfffffcddddbdddddccddddddddddddddffffffcdbffddddddddcffbcccccffffffffbbdddddddddddddddddddddddddddddddddddd
        ebbee4eeeeeddddddddddddddddddddddddddddbbbebdffbddddddcfbbddddddbffffbdcffffcdddfbdccffbddddddbbffffffbdbffdddddddbfccbddddddddddbffbbdddddddddddddddddddddddddddddddddddd
        ebbee4eeeeeddddddddddddddddddddddddddddbbbebdffbddddddcfbbddddddbffffbdcffffcdddfbdccffbddddddbbffffffbdbffdddddddbfccbddddddddddbffbbdddddddddddddddddddddddddddddddddddd
        ebbee4eeeeedddddddddddddddddddddddeeeeebbbeccffbdddddbffbbdddddddcfffccfbbbbfccccdbffffdddddddccffffffddbffdddddddcffffbddddddbbbcffbbdddddddddddddddddddddddddddddddddddd
        ebbee444eeebddddddddddddddddddddddeecbbeeb3efffddddddbffbbdddddddcfffffbddddcfffbdcfffcdddddddccfffffcddbffbddddddcffffdddddddccffffccdddddddddddddddddddddddddddddddddddd
        ebbee444eeebddddddddddddddddddddddeecbbeeb3efffddddddbffbbdddddddcfffffbddddcfffbdcfffcdddddddccfffffcddbffbddddddcffffdddddddccffffccdddddddddddddddddddddddddddddddddddd
        ebbee444eeeedddbbbbdddddddddddddddeeccbbbbbbfffbdddddbffddddddddbffffffbddddcffbdcfbbbddddddddbbbcfffbdddfffddddddcfffcddddddbffffffffbddddddddddddddddddddddddddddddddddd
        e33ee444eeeeddbbbeeeddddddddddddddeecccbbbfffeeceddddbcddddddddbfffffffbddddddddbffbbbbbbbbbbbbbbffffcdddccfcdddddbfccdddddddcffffffccdddddddddddddddddddddddddddddddddddd
        e33be444eeeeddbb3eeeddddddddddddddeecccccef3333bcedddddbbbbccffffffffffcdddddddbffffffffffffffffffffffbddbbfffccddddddbccbbddfffffffbbdddddddddddddddddddddddddddddddddddd
        e33be444eeeeddbb3eeeddddddddddddddeecccccef3333bcedddddbbbbccffffffffffcdddddddbffffffffffffffffffffffbddbbfffccddddddbccbbddfffffffbbdddddddddddddddddddddddddddddddddddd
        e33be4444eeebbbb3eeebdddddddbbeeebcccccccffbbeeecfffffffffffffffffffffffffcccfffffffffffffffffffffffffcddddcffffffccfffffffcbffffffddddddddddddddddddddddddddddddddddddddd
        b33bee4444eebbeb3bbbbdddddddbbceeecccccccfffffffffffffffffffffffffffffbcffffffffffffffffffffffffffffffcdddddcfffffffffffffffffffffcddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeeee3bb3bdddddddbbfeeeccccccccfffffffffffffffffffffffffffbddccffffffffffffffffffffffffffffbddddddcffffffffffffffffffffbddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeeee3bb3bdddddddbbfeeeccccccccfffffffffffffffffffffffffffbddccffffffffffffffffffffffffffffbddddddcffffffffffffffffffffbddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeece3bbbedddddddeefceeeeccccccfffffffffffffffffffffffcbbbdddddcffffffcbbbcccccccccccccccccddddddddccffffffffffffffffffdddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeece333beeebbbbbeeffceeeeccccccfffffffffffffffcccbbbdddddddddddccffcbddddddddddddddddddddddddddddddddccffffffccbbcfffcdddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeece333beeebbbbbeeffceeeeccccccfffffffffffffffcccbbbdddddddddddccffcbddddddddddddddddddddddddddddddddccffffffccbbcfffcdddddddddddddddddddddddddddddddddddddddd
        333bee4444eeeece333bbeeee3ebeefffeeeeecccccccccceebbbeebcccbddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbddddddbbbbdddddddddddddddddddddddddddddddddddddddd
        eeeeeeeeeeeeeece333b3ebee3be33cffceeeecccccccccceeeebbbebbccbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444ee333b3ebeeb3bbbefffcceeeccccccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444ee333b3ebeeb3bbbefffcceeeccccccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444ec3bbb3bebbe33bbbcffffeeeeeccccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444ec3bbe3bbbbe3333beffffceeeeecccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444cceeeeeebeebb3333ecffffceeeecccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        444e4444444444cceeeeeebeebb3333ecffffceeeecccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        eeec4444444444ccfffffcbbbbb333bbefffffeeeeeccccccccccccccccccbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffc4444444444ccfffffcbbb3b3333ebcffffceeeeecccccccccccccccccbbddddddddddd11111111111ddddddddddd111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffc4444444444ccfffffcbbb3b3333ebcffffceeeeecccccccccccccccccbbddddddddddd11111111111ddddddddddd111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffe4444444444ccfffffcbee33b333beefffffcceeeeccccccccccccccccbbddddddd11dddddddddd1111dddddddd11ddddddddd1111d111dddddddd11111dddddddddddddddddddddddddddddddddddddddddddd
        eeee4444444444ccfffffcbee33bbb3dbbeeeebbbdd11dd11dbbcccccccccbbdddddd1dddddddddddd1111ddddddd1ddddddd111dddddd111ddddddd111ddd11111111111ddddddddddddddddddddddddddddddddd
        444eee44444eeeccffffffbbbb3bddd111dddbbeebbbbcccb111d44444444bbddddd1ddd11dddddddd11111dddddd1ddddddd1111ddddd1111dddddd1ddddddddddddd1dddd111111111dddddddddddddddddddddd
        444eee44444eeeccffffffbbbb3bddd111dddbbeebbbbcccb111d44444444bbddddd1ddd11dddddddd11111dddddd1ddddddd1111ddddd1111dddddd1ddddddddddddd1dddd111111111dddddddddddddddddddddd
        444e4444444444ccfffffcebbe33bb1ddebbeffccbbbeccced111d4444444bbddd111dd111dddddddd11111ddddd1ddddddddd11111ddd11111ddddd1111dddddddd111dddddddddddd1dddddddddddddddddddddd
        444e4444444444ccfffffce33e33bbd3dbeebcfbb113eccced11114444444bbddd11dd1111ddddddd1111111dddd1dddddddddddd11dd111111ddddd111dddddddd1111ddddddddddd1111dddddddddddddddddddd
        444444eece4444ccccccceebbbb3dd11d3bbeefdd113eccced1111d444444bbddd11dd11ddddddddd111111ddddd11ddddddddddddd1111111ddddddd11ddddddd11111ddddddd11111111dddddddddddddddddddd
        444444eece4444ccccccceebbbb3dd11d3bbeefdd113eccced1111d444444bbddd11dd11ddddddddd111111ddddd11ddddddddddddd1111111ddddddd11ddddddd11111ddddddd11111111dddddddddddddddddddd
        44444cffffc444ccccccceeeeee3ddd1d3bbeecdd1dbecccb11111d444444bbdd1ddddddddddddddd111111dddd1dd11dddddddddddd111111dddddd1ddddddddd1111dddddddd111111111ddddddddddddddddddd
        4ee4effffffeeeccccccceeee4eeeee1eeeeeecbbb3bebbd111111beeeeecbbdd1dddddddddddddd1111111dddd1dd1111dddddddddd111111dddddd1dddddddddddddddddddd1111111111ddddddddddddddddddd
        4ee4effffffeeeccccccceeee4eeeee1eeeeeecbbb3bebbd111111beeeeecbbdd1dddddddddddddd1111111dddd1dd1111dddddddddd111111dddddd1dddddddddddddddddddd1111111111ddddddddddddddddddd
        4ee4effffffeeeccccccceeee44444b144444eceeb3beccccd111dcbdd11dddd11ddd111dddddddd111111dddd1ddd1111111dddddddd1111dddddd1ddddddddd11dddddddddd1111111111ddddddddddddddddddd
        4ee4effffffeeecccccccee444eeeebdeeeeeee111dbeccccb1111bdddcbd11d1ddd111ddddddddd111111dddd1ddddd11111ddddddd11111dddddd1ddddddddd111dddddddd11111111111ddddddddddddddddddd
        4ee4effffffeeecccccccee44e4444dd4444eeb111deeccccb11111dcccccdd1dddd111ddddddddddd1111dddd1dddddd1111ddddddd11111dd11111dddddddd111ddddddddd111111dddddddddddddddddddddddd
        4ee4effffffeeecccccccee44e4444dd4444eeb111deeccccb11111dcccccdd1dddd111ddddddddddd1111dddd1dddddd1111ddddddd11111dd11111dddddddd111ddddddddd111111dddddddddddddddddddddddd
        4ee4effffffeeecccccccee44e44441d4444eeb111deeccccb11111dcccccdd1dd111ddddddddddddd1111dd11ddd1dddddddddddddd11111dd1dddddddddddd111dddddddd1111111dddddddddddddddddddddddd
        4ee4effffffeeecccccccee44e4ddd1d44eeeed11b3eccccbd11111dcccccdddd1111ddd111111111111111d111111111dddddddd11111111d11dddddddddddd1dddddddddd111111ddddddddddddddddddddddddd
        4ee4effffffeeecccccccee44ed1ddd444ee4eeeeb3ecccb11111111bbcccddd11111111111111111111111d1111111111111111111111111d111111111ddddd1dddddddddddd1111ddddddddddddddddddddddddd
        4ee4effffffeeecccccccee44ed1ddd444ee4eeeeb3ecccb11111111bbcccddd11111111111111111111111d1111111111111111111111111d111111111ddddd1dddddddddddd1111ddddddddddddddddddddddddd
        4ee4cffffffeeecccccccee44edd444444ee4eeddd1dd1111111111111ddd11111111111111111111111111ddd11111111111111111111111dd11111111111111111111dddddd1111ddddddddddddddddddddddddd
        4ee4cffffffeeecccccccee44eddddddd1111111111111111111111bdd11111111111111111111111111111ddd11111111111111111111111dd111111111111111111111111111111ddddddddddddddddddddddddd
        4ee4cffffffeeecccccccee44eddddddd1111111111111111111111bdd11111111111111111111111111111ddd11111111111111111111111dd111111111111111111111111111111ddddddddddddddddddddddddd
        4ee4fffffffeeecccccccee44e1111111111111111111111111111bcbb11111111111111111111111111111dddd11111d111111111111111dddd111111111111111111111111111111dddddddddddddddddddddddd
        4ee4fffffffeeecccccccee44ed1111111111111111111111111dbccccbd111111ddddddddddddddddddddddddddddddddd1111111111ddddddd111111111111111111111111111111dddddddddddddddddddddddd
        4ee4fffffff4cccccccccee44e4d11111111111111111dddbbbbcccccccbb111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111dddddddddddddddddddddddd
        4ee4fffffff4cccccccccee44e4d11111111111111111dddbbbbcccccccbb111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111dddddddddddddddddddddddd
        4ee4fffffff4cccccccccee44e4edd1111ddddddddbeccccccccccccccccedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111ddddddddddddddddddddddddd
        4ee4fffffff4cccccccccee4444444ddd4eeeceee3becccccccccccccccceddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        4ee4fffffff4ccccccccceeee444444444eeefeee3becccccccccccccccceddddddddddddfddddddddddddddfdddddddddddddddddddddddddfdddddddddddddfddddddddddddddddddddddddddddddddddddddddd
        4ee4fffffff4ccccccccceeee444444444eeefeee3becccccccccccccccceddddddddddddfddddddddddddddfdddddddddddddddddddddddddfdddddddddddddfddddddddddddddddddddddddddddddddddddddddd
        4ee4fffffff4ccccccccee4ee444444444eeefebb3bcccccccccccccccccbddddddddddddfddddddddddddddfdddddddddddddddddddddddddfdddddddddddddfddddddddddddddddddddddddddddddddddddddddd
        4ee4fffffff4ccccccccee4ee444444444eeefebb3bcccccccccccccccccbddddddddddddfddddddddddddddfdddddddddddddddddddddddddfdddddddddddddfddddddddddddddddddddddddddddddddddddddddd
        4ee4fffffff4ccccccccee4ee444444444eeefebb3bcccccccccccccccccbddddddddddddfffdddffdddffddfdfddffddddddffddfdfddddddffdddffdddffddfdfddffddddddddddddddddddddddddddddddddddd
        4eeeffffffc4ccccccccee4ee444444444eeefebb3bcccccccccccccccccbddddddddddddfddfdfddfdfddfdfdfdfdddddddfddfdffdfdddddfdfdfddfdfddfdfdfdfddddddddddddddddddddddddddddddddddddd
        4eeeffffffe4ccccccccee4ee4e4444444eeefe333bcccccccccccccccccbddddddddddddfddfdfddfdfddfdffdddfddddddfddfdfddfdddddfdfdfddfdfddfdffdddfdddddddddddddddddddddddddddddddddddd
        4eeeffffffe4ccccccccee4ee44444444444cfe333ecccccccccccccccccdddddddddddddfddfdfddfdfddfdfdfdddfdddddfddfdfddfdddddfdfdfddfdfddfdfdfdddfddddddddddddddddddddddddddddddddddd
        4eeeffffffe4ccccccccee4ee44444444444cfe333ecccccccccccccccccddddddddddddffffdddffdddffddfdfdffdddddddffddfddfdddddfdfddffdddffddfdfdffdddddddddddddddddddddddddddddddddddd
        eeeeffffffe4ccccccccee4ee44444444e44ffe333ecccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e444efffffe4ccccccccee4ee44444444eeeffb333ecccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444eeeee44ccccccccee4ee44444444eeeffb333eccee4eeeeeecceeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444eeeee44ccccccccee4ee44444444eeeffb333eccee4eeeeeecceeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccccccccee4ee44444444eeeffb33beccee444444444444edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccccccccee4ee44444444eeeffb33beccee444444444444bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccccccccee4ee44444444eeeffb33beccee444444444444bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        c4444444444eccccccccee4ee44444444eeefcb33beccee444444444444bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        f4444444444eccfffffcee4ee44444444eeefeb33eeccee444444444444bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        f4444444444eccfffffcee4ee44444444eeefeb33eecccccceeeeeeeeeebdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        f4444444444eccfffffcee4ee44444444eeefeb33eecccccceeeeeeeeeebdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccfffffce4eee44444444eeefeb33eeccccccccccccccccbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccfffffce4e4444444444eeefeb33ecccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        e4444444444eccfffffcc44eee444444eeeefeb33ecccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        e4444444444eccfffffcc44eee444444eeeefeb33ecccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        e4444444444eccfffffee444444eeeee44eefbebbbbecccccccccccccceb33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        eee444444eebeeeeceeebeeeeeeeeeeeeebbbbbbbb33eeeccccccccccce333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        eee444444eebeeeeceeebeeeeeeeeeeeeebbbbbbbb33eeeccccccccccce333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333bbbb33333333333333333bbbbbbbb3333bbbbb333333bbbbbbbbbb3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `],
    500,
    false
    )
    pause(5000)
    sprites.destroy(splash1)
    game.splash("GET THE BOOK BAGS ON THE HOOKS")
    game.splash("AVOID WATER BOTTLES")
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
let splash1: Sprite = null
splash1 = sprites.create(img`
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
    `, SpriteKind.splash)
splashScreen1()
startGame()
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
