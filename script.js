// Menambahkan entri jurnal function addEntry() { const date = document.getElementById('entry-date').value; const content = document.getElementById('entry-content').value; if (!date || !content) return alert('Lengkapi tanggal dan isi jurnal!');

const entry = { date, content }; let entries = JSON.parse(localStorage.getItem('jurnalEntries') || '[]'); entries.push(entry); localStorage.setItem('jurnalEntries', JSON.stringify(entries)); displayEntries(); document.getElementById('entry-content').value = ''; }

// Menampilkan semua entri jurnal function displayEntries(filtered = null) { let entries = JSON.parse(localStorage.getItem('jurnalEntries') || '[]'); const container = document.getElementById('journal-entries'); container.innerHTML = ''; entries .filter(e => !filtered || e.date === filtered) .forEach((entry, i) => { const div = document.createElement('div'); div.className = 'entry'; div.innerHTML = <strong>${entry.date}</strong> <p>${entry.content}</p> <div class="entry-controls"> <button onclick="editEntry(${i})">Edit</button> <button onclick="deleteEntry(${i})">Hapus</button> </div>; container.appendChild(div); }); }

// Menghapus entri function deleteEntry(index) { let entries = JSON.parse(localStorage.getItem('jurnalEntries') || '[]'); if (confirm('Yakin mau hapus entri ini?')) { entries.splice(index, 1); localStorage.setItem('jurnalEntries', JSON.stringify(entries)); displayEntries(); } }

// Mengedit entri function editEntry(index) { let entries = JSON.parse(localStorage.getItem('jurnalEntries') || '[]'); const content = prompt('Edit isi jurnal:', entries[index].content); if (content !== null) { entries[index].content = content; localStorage.setItem('jurnalEntries', JSON.stringify(entries)); displayEntries(); } }

// Mencari entri berdasarkan tanggal function searchByDate() { const searchDate = document.getElementById('search-date').value; displayEntries(searchDate); }

// Highlight hari ini function highlightToday() { const today = new Date().toISOString().split('T')[0]; const entries = document.querySelectorAll('.entry'); entries.forEach(entry => { if (entry.querySelector('strong').textContent === today) { entry.classList.add('highlight'); } }); }

// Menandai sebagai sudah dikerjakan function toggleDone(index) { let entries = JSON.parse(localStorage.getItem('jurnalEntries') || '[]'); entries[index].done = !entries[index].done; localStorage.setItem('jurnalEntries', JSON.stringify(entries)); displayEntries(); }

// Export ke PDF function exportToPDF() { const container = document.getElementById('journal-entries'); const opt = { margin: 1, filename: 'Jurnal_8F.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' } }; html2pdf().from(container).set(opt).save(); }

window.onload = () => { displayEntries(); highlightToday(); };

