const form = document.getElementById('journal-form');
const list = document.getElementById('journal-list');

let journals = JSON.parse(localStorage.getItem('journals')) || [];

function saveJournals() {
  localStorage.setItem('journals', JSON.stringify(journals));
}

function renderJournals() {
  list.innerHTML = '';
  journals.forEach((j, index) => {
    const div = document.createElement('div');
    div.className = 'journal';
    div.innerHTML = `
      <h3>${j.hari}, ${j.tanggal}</h3>
      <div>${j.materi.replace(/\n/g, '<br>')}</div>
    `;
    list.prepend(div);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const tanggal = document.getElementById('tanggal').value;
  const hari = document.getElementById('hari').value;
  const materi = document.getElementById('materi').value;

  journals.push({ tanggal, hari, materi });
  saveJournals();
  renderJournals();
  form.reset();
});

renderJournals();
