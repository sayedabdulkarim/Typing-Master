 window.addEventListener('load', inIt);

 var time = 5;
 var score = 0;
 var isPlaying;

 var wordInput = document.querySelector('#wordInput');
 var currentWord = document.querySelector('#currentWord');
 var scoreDisplay = document.querySelector('#score');
 var timeDisplay = document.querySelector('#time');
 var message = document.querySelector('#message');
 var seconds = document.querySelector('#seconds');

 var words = ['siblings', 'filter', 'javascript', 'jquery', 'react', 'hypertext', 'markup', 'language', 'cascade', 'stylesheets', 'developing', 'programming', 'gaming', 'bootstrap',
   'mechanical', 'company', 'framework', 'database', 'angular', 'python', 'mongodb', 'nodejs', 'swift', 'underscore', 'design', 'align', 'bubbling', 'filter', 'split', 'slice'
 ];


 function inIt() {
   showWord(words);
   wordInput.addEventListener('input', startMatch);
   setInterval(countDown, 1000)
   setInterval(checkStatus, 50)
 }

 function startMatch(argument) {
   if (matchWords()) {
     isPlaying = true;
     time = 6;
     showWord(words);
     wordInput.value = '';
     score++;
   }
   if (score == -1) {
     score = 0;
   }
   scoreDisplay.innerHTML = score;
 }

 function matchWords(argument) {
   if (wordInput.value == currentWord.innerHTML) {
     message.innerHTML = 'Correct';
     return true;
   } else {
     message.innerHTML = '';
     return false;
   }
 }


 function showWord(arr) {
   var pickWords = Math.floor(Math.random() * arr.length);
   currentWord.innerHTML = arr[pickWords];
 }

 function countDown(argument) {
   if (time > 0) {
     time--;
   } else if (time == 0) {
     isPlaying = false;
   }
   timeDisplay.innerHTML = time;
 }

 function checkStatus(argument) {
   if (time == 0 && !isPlaying) {
     message.innerHTML = 'Game Over !!!';
     score = -1;
   }
 }