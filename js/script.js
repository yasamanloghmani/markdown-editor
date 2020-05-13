const bodyFont = getComputedStyle(document.body).getPropertyValue('--font');
const bgColor = getComputedStyle(document.body).getPropertyValue('--bg-color');
const textColor = getComputedStyle(document.body).getPropertyValue('--text-c olor');

const fontSelect = document.querySelector('.font-selector');
const textColorPicker = document.querySelector('.text-color-pricker');
const bgtColorPicker = document.querySelector('.bg-color-pricker');

const theme= [fontSelect, textColorPicker, bgtColorPicker ];
theme.forEach(function(option){
    option.addEventListener('change', (evt) => {

        document.body.style.setProperty(option.dataset.themeValue, evt.target.value)
    });
});


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
