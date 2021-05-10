

//  Worked with House Cass and my House Hayden 
  


var check = document.getElementsByClassName("fa-check-square");

Array.from(check).forEach(function(element) {
      element.addEventListener('click', function(){
        const listItem = this.closest('.notFullFilled>.message')
        const name = listItem.querySelector('.name').innerText
        const order = listItem.querySelector('.order').innerText
        const size = listItem.querySelector('.size').innerText
        // const size = this.parentNode.parentNode.childNodes[4].innerText

        fetch('profile', {
          method: 'put',
         headers: {
            'Content-Type': 'application/json'
         },
          body: JSON.stringify({
            'name': name,
            'order': order,
            'size' : size
            // 'size':size,
        


          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
