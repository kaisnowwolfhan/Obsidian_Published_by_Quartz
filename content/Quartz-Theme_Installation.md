### GitHub Actions (Recommended)
Add the following lines to your `deploy.yml` before the `permissions` section:
```yaml
env:
  THEME_NAME: <THEME-NAME>
```
And add the following lines to your `deploy.yml` before the `build` step:
```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```
> [!important] 
> Replace `<THEME-NAME>` with your desired theme name. See [Compatibility List](https://github.com/saberzero1/quartz-themes#supported-themes)
- - -
> [!tip]
> Example for Tokyo Night:
```yaml
env:
  THEME_NAME: tokyo-night
```

> [!tip]
> To use an older iteration of Quartz Themes, please use the `action_v*.sh` script instead. For example, to use version 1, use:
```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action_v1.sh | bash -s -- $THEME_NAME
```

The full script would look like this:
```yaml
name: Deploy Quartz site to GitHub Pages

on:
  push:
    branches:
      - v4

env:
  THEME_NAME: <THEME-NAME>

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-22.04
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Fetch all history for git info
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Install Dependencies
        run: npm ci
      - name: Fetch Quartz Theme
        run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
      - name: Build Quartz
        run: npx quartz build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: public

  deploy:
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Themes詳情
https://github.com/saberzero1/quartz-themes#supported-themes
#### Full supported
- [80s-neon](https://quartz-themes.github.io/80s-neon)
- [abecedarium](https://quartz-themes.github.io/abecedarium)
- [adrenaline](https://quartz-themes.github.io/adrenaline)
- [aura](https://quartz-themes.github.io/aura)
- [hackthebox](https://quartz-themes.github.io/hackthebox)

