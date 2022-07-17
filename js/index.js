window.addEventListener('load' , function(){
    new Glider(document.querySelector('.artistas__cards'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
          prev: '.prev',
          next: '.next'
        }
      })
  })