// ==UserScript==
// @name        iclicker script
// @namespace   iclicker script
// @match       https://student.iclicker.com/*
// @grant       none
// @version     1.0
// @author      joe
// @description A userscript that allows for the following things for an iClicker Session: spoof geolocation to instructor's, auto joins class, auto answer poll q's with random answers.
// ==/UserScript==
const MCQ_CHOICES = ["a", "b", "c", "d", "e"]

const waitForAngular = () => {
  isSelected = document.getElementsByClassName('btn-selected').length
  if (document.getElementById('multiple-choice-b') && !isSelected) {
      console.log('im clicking')
      randChoice = MCQ_CHOICES[Math.floor(Math.random() * MCQ_CHOICES.length)]
      document.getElementById(`multiple-choice-${randChoice}`).click()
  }
  setTimeout(waitForAngular, 5000)
}
waitForAngular()
