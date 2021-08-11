var like = document.querySelector('#like');
var dislike = document.querySelector('#dislike');

like.addEventListener('click', function() {
  
    if (dislike.classList.contains('red')) {
      dislike.classList.remove('red');
    } 
  this.classList.toggle('green');
  
});

dislike.addEventListener('click', function() {
  
    if (like.classList.contains('green')) {
      like.classList.remove('green');
    } 
  this.classList.toggle('red');
  
});

