function onLoadHtml() {
  $(document).ready(function(){
      $('#but_load').click(function(){
          $('#for_load').load('example.html');
      });
  });
}
