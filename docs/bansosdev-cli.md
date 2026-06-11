# bansosdev CLI

`bansosdev` adalah CLI untuk submit atau menambahkan item ke `bansos.dev`.

## Public submit

Mode default aman untuk contributor umum. CLI akan membuat URL GitHub Issue siap-submit.

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

## Trusted direct add

Maintainer bisa trigger GitHub Actions agar data langsung ditambahkan ke repo.

```bash
BANSOSDEV_GITHUB_TOKEN=ghp_xxx npx bansosdev add \
  --mode direct \
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

Token GitHub perlu permission untuk menjalankan workflow pada repo `wauputr4/bansos`.

## Maintainer setup

1. Pastikan workflow `.github/workflows/add-bansos.yml` sudah ada di default branch.
2. Buka GitHub repo `Settings` -> `Actions` -> `General`.
3. Pada `Workflow permissions`, pilih `Read and write permissions`.
4. Simpan pengaturan.
5. Untuk publish npm, buat package `bansosdev` di npm atau pastikan nama package tersedia.
6. Di npm package settings, buka `Trusted Publisher`.
7. Pilih `GitHub Actions`.
8. Isi repository `wauputr4/bansos`.
9. Isi workflow filename `.github/workflows/publish-cli.yml`.
10. Publish manual pertama bisa lewat workflow `Publish CLI` di tab Actions.

Rujukan:

- npm `bin`: https://docs.npmjs.com/cli/v10/configuring-npm/package-json
- npm trusted publishing: https://docs.npmjs.com/trusted-publishers/
- GitHub `workflow_dispatch`: https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions
- GitHub workflow token permissions: https://docs.github.com/actions/reference/authentication-in-a-workflow
