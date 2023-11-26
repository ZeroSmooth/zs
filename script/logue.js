$(document).ready (function(){
    $('#logue').click (function(){
      $('#logue').animate({
          transition: '0.5s',
          right: '-400',
          opacity: '0'
      });
    });
    $('#logue').click (function(){
      $('.logua').animate({
          transition: '0.3s',
          opacity: '1'
      });
    });
  });
      $(document).ready (function(){
    $('.logua').click (function(){
      $('#logue').animate({
          transition: '0.5s',
          opacity: '0.5',
          right: '100'
      });
    });
    $('.logua').click (function(){
      $('.logua').animate({
          transition: '0.3s',
          opacity: '0'
      });
    });
  });