function genPDF1(){
    let resume1 = document.getElementById("resume1");
    var opt = {
        filename:     'resumaker.pdf',
        margin:       0,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { dpi: 192, letterRendering: true },
        jsPDF:        { format: 'a4', orientation: 'p' }
      };
    html2pdf().set(opt).from(resume1).save();
}

function genPDF2(){
    let resume2 = document.getElementById("resume2");
    var opt = {
        filename:     'resumaker.pdf',
        margin:       0,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { dpi: 192, letterRendering: true },
        jsPDF:        { format: 'a4', orientation: 'p' }
      };
    html2pdf().set(opt).from(resume2).save();
}