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
        </div>
      `;
      container.appendChild(div);
    });
}

function deleteEntry(index) {
  let entries = JSON.parse(localStorage.getItem('jurnalEntries') || '[]');
  if (confirm('Yakin mau hapus entri ini?')) {
    entries.splice(index, 1);
    localStorage.setItem('jurnalEntries', JSON.stringify(entries));
    displayEntries();
  }
}

function editEntry(index) {
  let entries = JSON.parse(localStorage.getItem('jurnalEntries') || '[]');
  const content = prompt('Edit isi jurnal:', entries[index].content);
  if (content !== null) {
    entries[index].content = content;
    localStorage.setItem('jurnalEntries', JSON.stringify(entries));
    displayEntries();
  }
}

function searchByDate() {
  const searchDate = document.getElementById('search-date').value;
  displayEntries(searchDate);
}

window.onload = displayEntries;
