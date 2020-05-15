# The battle of CSS in JS solutions

This research was conducted by Peter ten Hoor at may 15th 2020.

## History

CSS -> CSS preprocessors -> CSS modules / PostCSS -> CSS in JS / Atomic CSS

## Benefits of CSS In JS

- Styling is scoped (every class will be unique).
- Only the styling that is used by the rendered components will be loaded.
- It is no longer CSS. Your entire front-end codebase can be written in Javascript, which (for example) allows you to share variables between client, node server and styling.
- Offerts the possibility to implement theming without the need of CSS variables.
- Some packages have caching which means that CSS that was used on the previous pages in your SPA will not be rerendered on the next page (client side performance improvement).

## Disadvantages of CSS in JS

- No BEM.
- Some developers do not like to mix their styles and JS. They feel like it makes your code messy.
- No built in util functions like lighten, darken, rgba etc (you can use packages like [polished](https://www.npmjs.com/package/polished) for this).
- No linting tools.
- Existing SCSS / LESS mixins, placeholders and functions etc can not be used.

## Solutions

The following packages are the most popular CSS in JS solutions:

| Package | Weekly downloads | Github issues | Github stars | Last commit |
| :------ | :------ | :------ | :------ | :------ |
| [Styled components](https://github.com/styled-components/styled-components) | 1.875.705 | 117 / 1978 | 29.3K | 21 days ago |
| [JSS](https://github.com/cssinjs/jss) | 1.421.249 | 154 / 680 | 5.7K | 22 mar 2020 |
| [Emotion](https://github.com/emotion-js/emotion/tree/master/packages/emotion) | 723.034 | 45 / 940 | 10.7K | Yesterday |
| [Aprodite](https://github.com/Khan/aphrodite) | 296.813 | 80 / 146 | 5K | 28 Aug 2019 |
| [Glamor](https://github.com/threepointone/glamor) | 143.650 | 65 / 210 | 3.6K | 11 sept 2017 |
| [Radium](https://github.com/FormidableLabs/radium) | 107.485 | 66 / 516 | 7.3K | 30 dec 2019 |
| [Fela](https://github.com/robinweser/fela) | 13.688 | 17 / 384 | 1.7K | 24 days ago |
| [Styletron](https://github.com/styletron/styletron) | 11.236 | 18 / 143 | 3K | 11 days ago |

I will not be looking further into **Aprodite**, **Glamor** and **Radium** since these packages seem to be abandoned.

Because of a lack of time I will only benchmark Emotion and Styled components.

## Benchmarks

## Benchmarks

### Before styling

**Bundle sizes**

```
Page                            Size     First Load JS
┌   /_app                       9.62 kB        67.6 kB
├ ○ /404                        2.6 kB         70.2 kB
├ λ /archive-blog               513 B          73.1 kB
└ λ /single-blog                7.32 kB        79.9 kB
+ First Load JS shared by all   67.6 kB
  ├ static/pages/_app.js        9.62 kB
  ├ chunks/commons.93f217.js    10.7 kB
  ├ chunks/framework.96c24f.js  40.3 kB
  ├ runtime/main.837877.js      6.29 kB
  └ runtime/webpack.c21266.js   746 B
```

**Stats in Chrome (incognito)**

- Archive blog
	- TTFB: 3ms
	- 15 requests
	- 215kb transferred
	- 355kb resources
	- finish: 88ms
	- DOMContentLoaded: 25ms
	- Load: 84ms
- Single blog (/emotion)
	- TTFB: 3ms
	- 15 requests
	- 341kb transferred
	- 502kb resources
	- finish: 113ms
	- DOMContentLoaded: 26ms
	- Load: 94ms

**Lighthouse performance (mobile 3G)**

- Archive blog
	- First contentful paint: 2.2s
 	- First meaningful paint: 2.2s
	- Speed index: 2.2s
	- First CPU idle: 2.2s
	- Time to interactive: 2.2s
	- Max potential first input delay: 80ms
- Single blog
	- First contentful paint: 2.0s
 	- First meaningful paint: 2.0s
	- Speed index: 2.0s
	- First CPU idle: 2.1s
	- Time to interactive: 2.1s
	- Max potential first input delay: 70ms

### Emotion

**Bundle sizes**

```
Page                                                           Size     First Load JS
┌   /_app                                                      13.8 kB        82.5 kB
├ ○ /404                                                       2.6 kB         85.1 kB
├ λ /archive-blog                                              668 B          87.2 kB
└ λ /single-blog                                               7.59 kB        94.1 kB
+ First Load JS shared by all                                  82.5 kB
  ├ static/pages/_app.js                                       13.8 kB
  ├ chunks/commons.93f217.js                                   10.7 kB
  ├ chunks/d65d597cd3666401e623cabc91680e4367b5f208.4490fa.js  10.7 kB
  ├ chunks/framework.96c24f.js                                 40.3 kB
  ├ runtime/main.2e0b09.js                                     6.29 kB
  └ runtime/webpack.c21266.js                                  746 B
```

**Stats in Chrome (incognito)**

- Archive blog
	- TTFB: 3ms
	- 18 requests
	- 271 transferred
	- 440kb resources
	- finish: 104ms
	- DOMContentLoaded: 26ms
	- Load: 101ms
- Single blog (/emotion)
	- TTFB: 3ms
	- 18 requests
	- 396kb transferred
	- 587kb resources
	- finish: 120ms
	- DOMContentLoaded: 28ms
	- Load: 114ms

**Lighthouse performance (mobile 3G)**

- Archive blog
	- First contentful paint: 2.7s
 	- First meaningful paint: 2.7s
	- Speed index: 2.7s
	- First CPU idle: 2.7s
	- Time to interactive: 2.8s
	- Max potential first input delay: 40ms
- Single blog
	- First contentful paint: 2.8s
 	- First meaningful paint: 2.8s
	- Speed index: 2.8s
	- First CPU idle: 2.8s
	- Time to interactive: 2.8s
	- Max potential first input delay: 20ms

### Styled components

**Bundle sizes**

```
Page                                                           Size     First Load JS
┌   /_app                                                      11.5 kB        84.1 kB
├ ○ /404                                                       2.6 kB         86.7 kB
├ λ /archive-blog                                              688 B          88.8 kB
└ λ /single-blog                                               7.6 kB         95.7 kB
+ First Load JS shared by all                                  84.1 kB
  ├ static/pages/_app.js                                       11.5 kB
  ├ chunks/cacd2cf700197219f0316c514326954fe8dec5ea.f7d0f2.js  14.6 kB
  ├ chunks/commons.93f217.js                                   10.7 kB
  ├ chunks/framework.96c24f.js                                 40.3 kB
  ├ runtime/main.2e0b09.js                                     6.29 kB
  └ runtime/webpack.c21266.js                                  746 B
```

**Stats in Chrome (incognito)**

- Archive blog
	- TTFB: 3ms
	- 18 requests
	- 272 transferred
	- 444kb resources
	- finish: 108ms
	- DOMContentLoaded: 27ms
	- Load: 104ms
- Single blog (/emotion)
	- TTFB: 3ms
	- 18 requests
	- 398kb transferred
	- 592kb resources
	- finish: 135ms
	- DOMContentLoaded: 25ms
	- Load: 125ms

**Lighthouse performance (mobile 3G)**

- Archive blog
	- First contentful paint: 2.8s
 	- First meaningful paint: 2.8s
	- Speed index: 2.8s
	- First CPU idle: 2.8s
	- Time to interactive: 2.8s
	- Max potential first input delay: 30ms
- Single blog
	- First contentful paint: 2.7s
 	- First meaningful paint: 2.7s
	- Speed index: 2.7s
	- First CPU idle: 2.7s
	- Time to interactive: 2.7s
	- Max potential first input delay: 50ms

## Concluding

Emotion has a smaller footprint than styled-components and the performance is pretty much identical. If I had more time I would also benchmark JSS, Fela and Styletron, but for now Emotion is my favorite.

## Sources

> **Choosing a CSS in JS library**</br>
https://gist.github.com/troch/c27c6a8cc47b76755d848c6d1204fdaf#file-choosing-a-css-in-js-library-md

> **List of all CSS in JS solutions (outdated)** </br>
https://github.com/MicheleBertoli/css-in-js/blob/master/README.md