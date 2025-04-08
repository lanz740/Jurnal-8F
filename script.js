<body>
  <h1>Jurnal 8F</h1>
  <form id="jurnalForm">
    <label for="tanggal">Tanggal:</label><br>
    <input type="date" id="tanggal" required><br><br>

    <label for="mataPelajaran">Mata Pelajaran:</label><br>
    <input type="text" id="mataPelajaran" required><br><br>

    <label for="catatan">Catatan:</label><br>
    <textarea id="catatan" rows="4" required></textarea><br><br>

    <button type="submit">Tambah Jurnal</button>
  </form>

  <hr>

  <div id="daftarJurnal"></div>

  <script>
    const form = document.getElementById('jurnalForm');
    const daftarJurnal = document.getElementById('daftarJurnal');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const tanggal = document.getElementById('tanggal').value;
      const mapel = document.getElementById('mataPelajaran').value;
      const catatan = document.getElementById('catatan').value;

      const jurnalItem = document.createElement('div');
      jurnalItem.style.border = '1px solid #ccc';
      jurnalItem.style.padding = '10px';
      jurnalItem.style.marginTop = '10px';
      jurnalItem.style.backgroundColor = '#fff';

      jurnalItem.innerHTML = `
        <strong>${tanggal}</strong> - <em>${mapel}</em><br>
        ${catatan}
      `;

      daftarJurnal.appendChild(jurnalItem);

      form.reset(); // Kosongkan form setelah submit
    });
  </script>
</body>
