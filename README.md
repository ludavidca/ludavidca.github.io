# davidlu.tech

Personal site built with [Astro](https://astro.build), hosted on GitHub Pages at [davidlu.tech](https://davidlu.tech). Home page and photo gallery.

```sh
npm install
npm run dev      # local preview
```

Pushing to `main` deploys the site via GitHub Actions.

- **Content:** `src/data/site.ts` (jobs, links, location) and `src/pages/index.astro` (intro)
- **Gallery:** photos in `src/assets/gallery/`, order in `src/data/gallery.ts`. `npm run photos` imports new ones from `~/Desktop/Personal Website Photos`.
- **Resume:** `public/David-Lu-Resume.pdf`
- **Favicon:** the mountain emoji, snow-capped 🏔️ in winter and ⛰️ the rest of the year (`public/favicon`; PNG fallbacks from [Noto Emoji](https://github.com/googlefonts/noto-emoji), Apache-2.0).
- **Banner:** `src/components/SceneBanner.astro`, photos in `public/banner/`, season dates and colours in `src/data/scene.ts`
- **Styles:** `src/styles/global.css`

## License

Code is [MIT](LICENSE). Photos, banner images and the resume are © David Lu, all rights reserved.
