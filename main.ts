controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    checkAnswer(0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    checkAnswer(1)
})
// let optionPositions: number[][] = [[80, 80], [80, 100]]
function newQuiz () {
    for (let j = 0; j <= CountOptions - 1; j++) {
        sprOptions[j].setText(Math.pickRandom(wordlist)[0])
        sprOptions[j].setPosition(optionPositions[j][0], optionPositions[j][1])
        sprOptions[j].setStayInScreen(true)
    }
    console.log("newQuiz0")
    let wordData= Math.pickRandom(wordlist)
    console.log("newQuiz1")
sprMeaning.setText(wordData[1])
    console.log("newQuiz2")
    sprMeaning.x = 80
    answerIndex = Math.randomRange(0, CountOptions - 1)
    sprOptions[answerIndex].setText(wordData[0])
    sprOptions[answerIndex].setPosition(optionPositions[answerIndex][0], optionPositions[answerIndex][1])
    // info.startCountdown(10)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    checkAnswer(2)
})
function checkAnswer (index: number) {
    console.log("checkAnswer")
    if (answerIndex == index) {
        info.changeScoreBy(1)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    newQuiz()
    console.log("checkAnswer2")
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    checkAnswer(3)
})
let answerIndex = 0
let optionPositions: number[][] = []
let sprOptions: TextSprite[] = []
let sprOption: TextSprite = null
let sprMeaning: TextSprite = null
let CountOptions = 0
CountOptions = 4
let wordlist = wordlists.getWords(WordlistName.RA6_08)
sprMeaning = textsprite.create(Math.pickRandom(wordlist)[0])
sprMeaning.setOutline(1, 3)
sprMeaning.y = 22
sprMeaning.setMaxFontHeight(12)
sprMeaning.setCharsPerLine(10)
// sprOptions[i].y=i*20+40
// sprOptions[i].x = 80
let imgArrow = img`
    . 1 1 3 1 1 . . .
    1 1 3 3 3 1 1 . .
    1 3 3 3 3 3 1 . .
    3 1 1 3 1 1 3 . .
    1 1 1 3 1 1 1 . .
    1 1 1 3 1 1 1 . .
    . 1 1 3 1 1 . . .
    . . . . . . . . .
    . . . . . . . . .
`
for (let i = 0; i <= CountOptions - 1; i++) {
    sprOption = textsprite.create("",0,1)
    sprOption.setScale(1, ScaleAnchor.Middle)
    // sprOption.setOutline(1, 9)
    // sprOption.setBorder(1,11)
    sprOption.setCharsPerLine(12)
    sprOptions[i] = sprOption
}
// let wordSprs = [sprWord,sprIntPron,sprUsaPron,sprMeaning]
optionPositions = [
[80, 60],
[40, 80],
[120, 80],
[80, 100]
]
info.setLife(5)
newQuiz()
forever(function () {
	
})
