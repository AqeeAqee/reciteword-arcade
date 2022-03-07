controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    checkAnswer(0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    checkAnswer(1)
})
// let optionPositions: number[][] = [[80, 80], [80, 100]]
function newQuiz () {
    for (let j = 0; j <= CountOptions - 1; j++) {
        sprOptions[j].setText(wordlist._pickRandom()[0])
        sprOptions[j].setPosition(optionPositions[j][0], optionPositions[j][1])
        sprOptions[j].setStayInScreen(true)
    }
    answerIndex = Math.randomRange(0, CountOptions - 1)
    wordData = wordlist._pickRandom()
    while (sprOptions.find((ts, index) => index!=answerIndex&& ts.text==wordData[0])) {
        wordData = wordlist._pickRandom()
    }
    sprOptions[answerIndex].setText(wordData[0])
    sprMeaning.setText(wordData[1])
    sprMeaning.x = 80
    sprOptions[answerIndex].setPosition(optionPositions[answerIndex][0], optionPositions[answerIndex][1])
    sprOptions[1].left = 0
    sprOptions[2].right = screen.width
    sprOptions[2].right = scene.screenWidth()
    info.startCountdown(10)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    checkAnswer(2)
})
// console.log("checkAnswer2")
function checkAnswer (index: number) {
    // console.log("checkAnswer")
    if (answerIndex == index) {
        info.changeScoreBy(1)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    newQuiz()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    checkAnswer(3)
})
let wordData: string[] = []
let answerIndex = 0
let optionPositions: number[][] = []
let sprOptions: TextSprite[] = []
let sprOption: TextSprite = null
let sprMeaning: TextSprite = null
let wordlist: string[][] = []
let CountOptions = 0
CountOptions = 4
wordlist = wordlists.getWords(WordlistName.PrimaryAll)
sprMeaning = textsprite.create(wordlist._pickRandom()[0])
sprMeaning.setOutline(1, 3)
sprMeaning.y = 22
sprMeaning.setMaxFontHeight(12)
sprMeaning.setCharsPerLine(10)
for (let i = 0; i <= CountOptions - 1; i++) {
    sprOption = textsprite.create("", 0, 1)
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
