import express from "express"
import { volumeTabung, luasPermukaanTabung, volumeKubus, luasPermukaanKubus, volumeBalok, luasPermukaanBalok  } from "../controller/bangunRuang"
const app = express()

// allow read a body 
app.use(express.json())
// fungsi use() digunakan untuk menerapkan sebuah fungsi pada object express. 
// fungsi tersebut akan otomatis dijalankan

app.post(`/lingkaran/volume`, volumeTabung)
app.post(`/lingkaran/luasPermukaan`, luasPermukaanTabung)
app.post(`/lingkaran/volume`, volumeKubus)
app.post(`/lingkaran/luasPermukaan`, luasPermukaanKubus)
app.post(`/lingkaran/volume`, volumeBalok)
app.post(`/lingkaran/luasPermukaan`, luasPermukaanBalok)

export default app