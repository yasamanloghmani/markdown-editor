function editMarkdown() {
    var text = document.getElementById('markdownDiv').value,
        target = document.getElementById('resultDiv'),
        converter = new showdown.Converter();
        html = converter.makeHtml(text);
      
      target.innerHTML = html;
  }