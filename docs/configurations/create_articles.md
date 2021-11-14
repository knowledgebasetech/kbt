---
title: "How to create articles?"
date: "2021-11-14"
draft: false
authors: ["bodhi"]
order: 2
summary: "We can dig a bit in detail on how you can write an article about a topic using knowledgebase. Once you create a category or a section folder you can create markdown files inside it which holds the contents for the article."
---

# How to create articles?

Once you create a category or a section folder you can create markdown files inside it which holds the contents for the article.

You care write the article using markdown syntax. (Supports GFM syntax). The file name will be used as `slug` for the path while you can configure the title and summary using the following format.

| Title     | Description                            |
| --------- | -------------------------------------- |
| `title`   | The title of the article.              |
| `authors` | The authors of the article.            |
| `draft`   | Whether the article is a draft or not. |
| `order`   | The order of the article.              |
| `date`    | The when the article is published      |
| `summary` | The summary of the article.            |

checkout the following example for a better clarity.

```md
---
title: "How to create articles?"
date: "2021-11-14"
draft: false
authors: ["bodhi"]
summary: "We can dig a bit in detail on how you can write an article about a topic using knowledgebase."
---
```
