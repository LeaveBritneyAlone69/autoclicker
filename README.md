## What does autoclicker do? 
### Autoclicker randomly picks an answer in IClicker for you, allowing you to do other things in class like study. You will need to have a browser with Iclicker open to the class you are attending in order for this to work. 

## Steps to Install
### 1) Get [ViolentMonkey](https://violentmonkey.github.io/) Extension for Chrome, Edge, or Firefox 
### 2) Following the guide in the violentmonkey website, create a new extension and copy the code below in. Be sure to save it. 

```javascript
// ==UserScript==
// @name        iclicker script
// @namespace   iclicker script
// @match       https://student.iclicker.com/*
// @grant       none
// @version     1.0
// @author      hunterbidenslaptop
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
```

### 3) Open Iclicker for the class you're in. You will know it's working if it selects an answer within 5 seconds of "seeing" a question. 


 
