function calculate() {
  var nama = document.getElementById('nama').value;
  var totalBerlian = parseFloat(document.getElementById('totalBerlian').value);
  var hargaBerlian = parseFloat(document.getElementById('hargaBerlian').value); // Mengambil harga berlian dari input

  if (isNaN(totalBerlian)) {
    alert("Masukkan total berlian yang valid.");
    return;
  }

  var hasil = 0; // Set nilai awal hasil

  if (totalBerlian >= 50000) { // Jika total berlian lebih dari atau sama dengan 50.000, maka hitung perkaliannya
    hasil = totalBerlian * hargaBerlian; // Menghitung hasil berdasarkan jumlah berlian dan harga per berlian
  }

  var table = document.getElementById('result');
  var newRow = table.insertRow(-1);
  var cellNama = newRow.insertCell(0);
  var cellHasil = newRow.insertCell(1);
  cellNama.innerHTML = nama;
  cellHasil.innerHTML = formatCurrency(hasil);
}

function formatCurrency(amount) {
  return "Rp " + amount.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
