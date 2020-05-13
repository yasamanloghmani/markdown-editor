function editMarkdown() {
    var text = document.getElementById('markdownDiv').value,
        target = document.getElementById('resultDiv'),
        converter = new showdown.Converter();
        html = converter.makeHtml(text);
      
      target.innerHTML = html;
  }

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     document.getElementById("header").style.fontSize = "30px";
//     document.getElementById("img").style.width = "200px";
//   } else {
//     document.getElementById("header").style.fontSize = "60px";
//     document.getElementById("img").style.width = "400px";
//   }
// }