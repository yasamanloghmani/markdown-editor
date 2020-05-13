function editMarkdown() {
    var text = document.getElementById('markdownDiv').value,
        target = document.getElementById('resultDiv'),
        converter = new showdown.Converter();
        html = converter.makeHtml(text);
      
      target.innerHTML = html;
  }
 var doc = new jsPDF();
 var specialElementHandlers = {
    "#editor": function (element, renderer) {
      return true;
    }
  };
  
  $("#cmd").click(function () {
    doc.fromHTML($("#resultDiv").html(), 15, 15, {
      width: 170,
      elementHandlers: specialElementHandlers
    });
    doc.save("markdown.pdf");
  });
