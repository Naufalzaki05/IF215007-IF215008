const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors({
    origin: '*'
}));

// Lihat list manga
app.get('/manga', (req, res) => {
  res.json([
    {
      nama: "Haikyuu",
      halaman: 144,
    },
    {
      nama: "Fire Punch",
      halaman: 97,
    }    
  ])
})

// Lihat detail Manga
app.get('/manga/:id', (req, res) => {
  res.json(
    {
      nama: "8 Kaijuu",
      halaman: 90,
    }
  )
})

// Tambah manga
app.post('/manga', (req, res) => {
  res.json(
    {
      id: 32432,
      nama: "8 Kaijuu",
      halaman: 90,
    }
  )
})

// Hapus Manga
app.delete('/manga/:id', (req, res) => {
  res.json(
    {
      id: 32432,
      nama: "8 Kiajuu",
      halaman: 90,
    }
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
