import express from "express"
import { kelilingLingkaran, luasLingkaran, kelilingPersegi, luasPersegi, kelilingPersegiPanjang, luasPersegiPanjang, luasSegitiga } from "../controller/bangunDatar"
const app = express()

// allow read a body 
app.use(express.json())
// fungsi use() digunakan untuk menerapkan sebuah fungsi pada object express. 
// fungsi tersebut akan otomatis dijalankan

app.post(`/lingkaran/keliling`, kelilingLingkaran)
app.post(`/lingkaran/luas`, luasLingkaran)
app.post(`/lingkaran/keliling`, kelilingPersegi)
app.post(`/lingkaran/luas`, luasPersegi)
app.post(`/lingkaran/keliling`, kelilingPersegiPanjang)
app.post(`/lingkaran/luas`, luasPersegiPanjang)
app.post(`/lingkaran/luas`, luasSegitiga)

export default app