# Learning Engine: publishing a blog post

This site uses GitHub Pages and Jekyll. You do not need WordPress or a paid hosting plan.

## Add a new article using GitHub in your browser

1. Open the repository: https://github.com/samk218-bit/learning-engine-website
2. Open the `_posts` folder.
3. Click **Add file → Create new file**.
4. Name the file using this pattern: `YYYY-MM-DD-your-article-title.md` (use today's date and English letters in the filename).
5. Copy the template below, replace the example fields and write your article below the second `---`.
6. Click **Commit changes**. GitHub Pages will publish the article automatically after the build finishes.

## Copy-and-edit template

```markdown
---
layout: post
title: "Your article title"
description: "A short one-sentence summary for search results and article cards."
date: 2026-10-29
categories: [science-explained]
lang: en
read_time: 4
cover_emoji: "🔬"
permalink: /blog/science-explained/your-article-title/
---

Write your introduction here.

## First heading

Explain the first idea in simple language.

## Second heading

Continue the explanation with accurate facts and examples.

**Key takeaway:** End with the main thing readers should remember.
```

## Supported values

- `lang`: use `en` for English or `hi` for Hindi.
- `categories`: use one of `mega-machines`, `space-universe`, `science-explained`, or `how-things-work`.
- `read_time`: estimated minutes to read.
- `cover_emoji`: a simple emoji used as the article's visual placeholder.
- `permalink`: use a unique URL ending in `/`, for example `/blog/space-universe/why-mars-is-red/`.

## Before publishing

- Check facts and spelling.
- Use your own or properly licensed images; do not upload copyrighted images without permission.
- Never put passwords, API keys, or private data in a post.
- Preview the article after GitHub Pages finishes building.

## Note about the publishing dashboard

This is the first blog version. Articles can be added through GitHub's browser editor by copying the template above; it does not require installing software. A separate visual CMS dashboard would need an additional authentication/provider setup and is a later optional improvement.
