import gameEngine from "./modules/logic.js"
import domManipulation from "./modules/interface.js"

function onStarted() {
    gameEngine.onStartedActions()
}

function onTryed() {
    gameEngine.onTryedActions()
}

function onAnswered() {
    gameEngine.onAnsweredActions()
}

window.addEventListener("load", onStarted)
domManipulation.tryBtn.addEventListener("click", onTryed)
domManipulation.answerBtn.addEventListener("click", onAnswered)