# bansosdev

CLI untuk submit daftar bansos ke `bansos.dev`.

```bash
npx bansosdev add \
  --id contoh-bansos \
  --title "Contoh Bansos Developer" \
  --provider "Provider" \
  --description "Deskripsi singkat" \
  --benefits "Benefit 1|Benefit 2" \
  --validity "Berlaku sampai 30 Juni 2026" \
  --requirements "Daftar akun|Klaim program" \
  --cta-link "https://example.com" \
  --tags "Cloud,Gratisan"
```

Mode default adalah `issue`, yang mencetak URL issue GitHub siap-submit.

Maintainer bisa memakai direct mode:

```bash
BANSOSDEV_GITHUB_TOKEN=ghp_xxx npx bansosdev add ... --mode direct
```
