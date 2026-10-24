# Omar Takrouri — Portfolio

One-page portfolio split into **Data Analysis Projects** and **AI Projects**, each with a case-study popup. Live at https://portfolio-sigma-umber-60.vercel.app.

Built with Next.js 14 (static export), Tailwind CSS and lucide-react. All dashboards and screens use mock data.

## Run locally

```bash
npm install
npm run dev
```

`npm run build` writes the static site to `out/` (not committed; Vercel builds it on every push to `main`).

## Edit content

- **Case studies:** [data/cases.ts](data/cases.ts). Each case has `category: "data" | "ai"`, which decides its section.
- **Coded previews** in the popups: [components/LiveDashboardPreview.tsx](components/LiveDashboardPreview.tsx) (Office Display), [components/ComplaintsBoardPreview.tsx](components/ComplaintsBoardPreview.tsx), [components/AlJabiPreview.tsx](components/AlJabiPreview.tsx).
- **Images:** `public/images/`.

## CV

The CV exists as [public/omar-takrouri-cv.html](public/omar-takrouri-cv.html) and a PDF generated from [scripts/create_cv_pdf.py](scripts/create_cv_pdf.py). Keep both in sync, then regenerate the PDF:

```bash
pip install reportlab
python scripts/create_cv_pdf.py
```
