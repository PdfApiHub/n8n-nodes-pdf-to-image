# n8n-nodes-pdf-to-image

[![NPM Version](https://img.shields.io/npm/v/n8n-nodes-pdf-to-image.svg)](https://www.npmjs.com/package/n8n-nodes-pdf-to-image)
[![License](https://img.shields.io/npm/l/n8n-nodes-pdf-to-image.svg)](LICENSE.md)

> Render PDF pages as high-quality PNG, JPG, or WebP images — with DPI, resize, and background color control.

This is an [n8n](https://n8n.io/) community node powered by **[PDF API Hub](https://pdfapihub.com)**.

---

## 🚀 Install

1. Go to **Settings → Community Nodes** in n8n
2. Enter `n8n-nodes-pdf-to-image`
3. Click **Install**

## 🔑 Setup

Sign up at [pdfapihub.com](https://pdfapihub.com) → copy your API key → add to n8n credentials.

---

## ✨ Operations

- **PDF to PNG** — lossless, transparent background support
- **PDF to JPG** — compressed, smaller file sizes
- **PDF to WebP** — modern format, best compression

### Features

| Parameter | Description |
|-----------|-------------|
| **Input Type** | URL or Binary file |
| **Pages** | Single page, range (`1-3`), or comma-separated (`1,3,5`) |
| **DPI** | Resolution 72–300 (higher = sharper but larger) |
| **Quality** | Compression quality 1–100 (JPG/WebP only) |
| **Output Format** | URL, Base64, Both, or Binary File |

### Advanced Options

| Option | Description |
|--------|-------------|
| **Width / Height** | Resize output to specific pixel dimensions |
| **Background Color** | Hex color for transparent PNG backgrounds |
| **Output Filename** | Custom filename |

---

## 💡 Use Cases

- **Thumbnails** — generate preview images for PDF documents
- **Social sharing** — convert PDF pages to images for social media
- **Image extraction** — render specific pages as images for presentations
- **OCR preprocessing** — convert PDF to image before custom OCR

## License

[MIT](LICENSE.md)
