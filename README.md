# rasm-ai: professional AI portraits, in Uzbek

**rasm-ai** is an open-source web app that turns an ordinary photo into a clean, professional studio portrait for CVs, documents and LinkedIn. The whole interface is in Uzbek.

> 🇺🇿 **O'zbekcha:** rasm-ai oddiy suratni rezyume, hujjatlar va ijtimoiy tarmoqlar uchun professional studiya portretiga aylantiradigan ochiq kodli ilova. Interfeys to'liq o'zbek tilida.

## Why this project exists

About 35 million people speak Uzbek, but almost none of the open-source AI tools they could use are in their language. Most image and AI apps are English- or Russian-only. That leaves out students, job seekers and small businesses in Uzbekistan who just need a decent profile or CV photo.

rasm-ai is intentionally small and readable. Local developers can study it, fork it and use it as a starting point for their own Uzbek-language AI apps.

## Features

- **Keeps your face.** The prompt asks the model to preserve facial structure, expression and skin tone.
- **Formal clothing.** A classic business outfit is chosen automatically.
- **Studio look.** You get a neutral background, soft lighting and a 3:4 portrait ratio.
- **Uzbek-first UI.** All text and error messages are in Uzbek.
- **Simple stack.** React 19, TypeScript, Vite and the Google Gen AI SDK.

## Tech stack

| Layer | Tool |
|---|---|
| UI | React 19 + TypeScript, Tailwind CSS |
| Build | Vite 6 |
| AI | Google Gemini (`gemini-2.5-flash-image`) via `@google/genai` |

## Project structure

```
├── App.tsx                 # main page state: upload → generate → result
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx            # landing section + uploader
│   ├── ImageUploader.tsx
│   ├── ResultPreview.tsx
│   └── Footer.tsx
└── services/
    └── geminiService.ts    # prompt + Gemini API call
```

## Run locally

**Requirements:** Node.js 18+ and a [Gemini API key](https://aistudio.google.com/apikey).

```bash
git clone https://github.com/karimovIslom01/rasm-ai.git
cd rasm-ai
npm install
echo "GEMINI_API_KEY=your_key_here" > .env.local
npm run dev
```

Then open http://localhost:3000/rasm-ai/

> ⚠️ **Security note:** in this version the API key is bundled into the frontend. That is fine for local use, but **do not deploy a public build with your personal key**. Moving the API call to a small backend proxy is on the roadmap.

## Roadmap

- [ ] Backend proxy so the API key is never exposed in the browser
- [ ] Uzbek Cyrillic and English UI
- [ ] Clothing and background style options
- [ ] Support for more AI model providers
- [ ] Tests and CI

## Contributing

Issues and pull requests are welcome, especially Uzbek localization, UI improvements and new portrait styles. Open an issue first to discuss larger changes.

## License

[MIT](LICENSE) © Islom Karimov
