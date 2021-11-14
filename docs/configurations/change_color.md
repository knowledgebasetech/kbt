---
title: "How to change theme for Kbt?"
date: "2021-11-14"
draft: false
authors: ["bodhi"]
order: 4
summary: "How can we change the color theme for knowledge base app. How easy is it to configure the app."
---

# How to change theme for Kbt?

The root folder will have a `kbt.settings.json` file. You can change the color scheme for the app by setting the `colors` key in the file. The app currently supports customization for primary, secondary and gray.

```
  colors: {
    primary: "primary_color_key",
    secondary: "secondary_color_key",
    gray: "gray_color_key",
  }
```

example

```
  colors: {
    primary: "teal",
    secondary: "blue",
    gray: "coolGray",
  }
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
