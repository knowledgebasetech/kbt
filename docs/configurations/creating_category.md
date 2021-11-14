---
title: "Creating a category or section in Knowledge Base?"
date: "2021-10-11"
draft: false
authors: ["gigincg"]
order: 1
summary: "The app refers to the `docs` folder in the root directory of the project for your content. You can make folders inside the `docs` folder that represent the different sections of your knowledge base. For example, you can have a `docs/about` folder that contains the content for the `about` section of your knowledge base."
---

# Creating a Category or Section

The app refers to the `docs` folder in the root directory of the project for your content. You can make folders inside the `docs` folder that represent the different sections of your knowledge base. For example, you can have a `docs/about` folder that contains the content for the `about` section of your knowledge base.

Inside each section folder, you can create a `README.md` file that contains the title and description of the section, using the following format:

```md
---
title: "How to configure Knowledge Base app?"
authors: ["bodhi"]
draft: false
order: 1
icon: "cog"
summary: "The knowledge base app is a fully configurable modern open source knowledge base management system. You can checkout the articles in the section to get a better clarity on customising the default settings. "
---
```

| Title     | Description                               |
| --------- | ----------------------------------------- |
| `title`   | The title of the section.                 |
| `authors` | The authors of the section.               |
| `draft`   | Whether the section is a draft or not.    |
| `order`   | The order of the section.                 |
| `icon`    | The icon for the section from fontawsome. |
| `summary` | The summary of the section.               |

Once you have your section folder and it's README.md file, you can start adding your content to the section. You can simply create a `.md` file inside the section folder and add your content to it.
