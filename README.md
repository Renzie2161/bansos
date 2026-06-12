# Bansos.dev

`Bantuan sosial untuk developer jelata`

Website statis berisi daftar program bantuan dan promo untuk developer, dirancang SEO-friendly.

## Fitur

- Landing page + daftar bansos yang mudah dinavigasi.
- Konten SEO: meta tag, OG/Twitter card, dan JSON-LD.
- Data terstruktur di [`src/lib/data/bansos.json`](src/lib/data/bansos.json).
- UI modular, filter tag, dan highlight terbaru.
- Workflow otomatis untuk menambah data lewat CLI.

## Menjalankan proyek

```bash
npm install
npm run build
```

## Cara menambah bansos

Contributor cukup pakai CLI, nanti akan muncul URL issue GitHub siap-submisi:

Jalankan command berikut, nanti CLI akan membalikin URL issue GitHub siap-submisi:

```bash
npx bansosdev add \
  --id contoh-bansos \
  --title "Contoh Bansos Developer" \
  --provider "Provider" \
  --description "Deskripsi singkat bansos." \
  --benefits "Benefit satu|Benefit dua" \
  --validity "Berlaku sampai 30 Juni 2026" \
  --requirements "Buat akun|Klaim program" \
  --cta-link "https://example.com" \
  --tags "Cloud,Gratisan" \
  --contributor-name "Nama Kamu" \
  --contributor-url "https://example.com"
```

### Cek payload

```bash
npx bansosdev add ... --mode json
```

### Lokal

```bash
npm run add:bansos -- \
  --id contoh-bansos \
  --title "Contoh Bansos Developer" \
  --provider "Provider" \
  --description "Deskripsi singkat bansos." \
  --benefits "Benefit satu|Benefit dua" \
  --validity "Berlaku sampai 30 Juni 2026" \
  --requirements "Buat akun|Klaim program" \
  --cta-link "https://example.com" \
  --tags "Cloud,Gratisan"
```

Argumen `--benefits` dan `--requirements` dipisahkan dengan `|`.
Argumen `--tags` dipisahkan dengan koma.

Detail lengkap CLI lihat [docs/bansosdev-cli.md](docs/bansosdev-cli.md).

## Kontribusi

- Fork repo ini.
- Buat branch: `git checkout -b feat/nama-fitur`.
- Tambahkan data lewat method di atas.
- Buat PR.

Lihat panduan kontribusi di [CONTRIBUTING](.github/CONTRIBUTING.md).

## Lisensi

MIT. Lihat [LICENSE](LICENSE).

## Contributors

<a href="https://github.com/wauputr4" target="_blank" rel="noopener noreferrer">
  <img src="https://github.com/wauputr4.png?size=80" width="64" height="64" alt="@wauputr4" />
</a>
