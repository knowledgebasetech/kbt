---
title: "How to change site title and meta details?"
date: "2021-11-14"
draft: false
authors: ["bodhish"]
order: 5
summary: "How can we change the site title and meta details for knowledge base app. How easy is it to configure the app."
---

# How to change site title and meta details for Kbt?

The root folder will have a `kbt.settings.json` file. The following keys are supported in the file.

| key            | description                                     | optional |
| -------------- | ----------------------------------------------- | -------- |
| title          | Title of the site.                              | false    |
| tagline        | Tagline of the site.                            | false    |
| description    | Description of the site.                        | false    |
| headerNavLinks | Array of objects with title, link and icon.     | false    |
| copyRightText  | Text to be displayed in the footer.             | false    |
| colors         | Object with primary, secondary and gray colors. | false    |

```
module.exports = {
  title: "Knowledgebase",
  tagline: "Help Center",
  description: "A simple tool to build knowledge base",
  headerNavLinks: [
    {
      title: "Github",
      link: "https://github.com/knowledgebasetech/kbt",
      icon: "code-branch",
    },
  ],
  copyRightText: "© 2021 knowledgebase.tech | All rights reserved.",
  colors: {
    primary: "indigo",
    secondary: "blue",
    gray: "coolGray",
  },
};

```

The app currently supports all color schemes listed in [Tailwindcss](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

| Color     | key      |
| --------- | -------- |
| Blue Gray | blueGray |
| Cool Gray | coolGray |
| Gray      | gray     |
| True Gray | trueGray |
| Warm Gray | warmGray |
| Red       | red      |
| Orange    | orange   |
| Amber     | amber    |
| Yellow    | yellow   |
| Lime      | lime     |
| Green     | green    |
| Emerald   | emerald  |
| Teal      | teal     |
| Cyan      | cyan     |
| Sky       | sky      |
| Blue      | blue     |
| Indigo    | indigo   |
| Violet    | violet   |
| Purple    | purple   |
| Fuchsia   | fuchsia  |
| Pink      | pink     |
| Rose      | rose     |
