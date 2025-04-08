// Menambahkan entri jurnal
function addEntry() {
  const date = document.getElementById('entry-date').value;
  const content = document.getElementById('entry-content').value;
  if (!date || !content) return alert('Lengkapi tanggal dan isi jurnal!');

  const entry = { date, content };
  let entries = JSON.parse(localStorage.getItem('jurnalEntries') || '[]');
  entries.push(entry);
  localStorage.setItem('jurnalEntries', JSON.stringify(entries));
  displayEntries();
  document.getElementById('entry-content').value = '';
}

// Menampilkan semua entri jurnal
function displayEntries(filtered = null) {
  let entries = JSON.parse(localStorage.getItem('jurnalEntries') || '[]');
  const container = document.getElementById('journal-entries');
  container.innerHTML = '';
  entries
    .filter(e => !filtered || e.date === filtered)
    .forEach((entry, i) => {
      const div = document.createElement('div');
      div.className = 'entry';
      div.innerHTML = `
        <strong>${entry.date}</strong>
        <p>${entry.content}</p>
        <div class="entry-controls">
          <button onclick="editEntry(${i})">Edit</button>
          <button onclick="deleteEntry(${i})">Hapus</button>
