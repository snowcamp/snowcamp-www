# Snowcamp web site

This project is the source project of the Snowcamp web site. The web site is written with the Astro technology.
It is a static web site. The web site is available under two languages : english and french.

## Getting started

You need NodeJS 18+.

On the first install, download dependencies

```sh
npm install
```

It is highly advised to use VSCode editor because it includes Astro plugin.
In dev mode, simply run the server by the following command:

```sh
npm run dev
```

Then open the web page [ http://localhost:4321/](http://localhost:4321/)

## Project Structure

| Directory      | Description                                       |
| -------------- | ------------------------------------------------- |
| dist           | Output directory                                  |
| public         | Static content of the web site. Copied strictly.  |
| src            | Dynamic sources of the web site                   |
| src/pages      | The web pages of the web site                     |
| src/layouts    | The layouts of the web pages                      |
| src/components | The components used in the web pages              |
| src/data       | The data of the web site                          |
| src/i18n       | The text translation in 'en' and 'fr' of the text |
| src/styles     | The style of the web site based on LESS           |

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more about Astro?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

# Voxxrin update

To update Voxxrin schedule

```sh
VOXXRIN_TOKEN='url encoded voxxrin token' voxxrin/voxxrin.sh update
```
