function updatePreview(){
  document.getElementById("p_type").innerText = document.getElementById("type").value + " Report";
  document.getElementById("p_no").innerText = document.getElementById("no").value;
  document.getElementById("p_topic").innerText = document.getElementById("topic").value;
  document.getElementById("p_ctitle").innerText = document.getElementById("ctitle").value;
  document.getElementById("p_ccode").innerText = document.getElementById("ccode").value;
  document.getElementById("p_date").innerText = document.getElementById("date").value;

  document.getElementById("p_stname").innerText = document.getElementById("stname").value;
  document.getElementById("p_stdes").innerText = document.getElementById("stdes").value;
  document.getElementById("p_stdept").innerText = document.getElementById("stdept").value;

  document.getElementById("p_sbname").innerText = document.getElementById("sbname").value;
  document.getElementById("p_sbid").innerText = document.getElementById("sbid").value;
  document.getElementById("p_sbsec").innerText = document.getElementById("sbsec").value;
  document.getElementById("p_sbprog").innerText = document.getElementById("sbprog").value;
  document.getElementById("p_sbdept").innerText = document.getElementById("sbdept").value;
}

function exportPDF(){
  const element = document.getElementById('preview');
  html2pdf().from(element).save('CoverPage.pdf');
}
