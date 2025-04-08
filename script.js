function tambahJurnal() {
  const tanggal = document.getElementById('tanggal').value;
  const hari = document.getElementById('hari').value;
  const materi = document.getElementById('materi').value;

  const entryHTML = `
    <div class="entry" data-date="${tanggal}" data-subject="${hari}">
      <h3>${hari}, ${tanggal}</h3>
      <p>${materi.replace(/\n/g, '<br>')}</p>
    </div>
  `;

  const entries = document.getElementById('entries');
  entries.innerHTML = entryHTML + entries.innerHTML;

  // Bersihkan input
  document.getElementById('tanggal').value = '';
  document.getElementById('hari').value = '';
  document.getElementById('materi').value = '';
}
