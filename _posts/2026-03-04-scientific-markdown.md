---
layout: post
title: "Writing Scientific LaTeX from Markdown"
date: 2026-03-03
description: "Turn Markdown into publication-ready LaTeX/PDF without sacrificing citation handling, figure numbering, or layout control."
tags: [research, "scientific-writing", LaTeX, markdown]
categories: "research"
---

## LaTeX: Boon and Bane

Ever since I first encountered LaTeX during my bachelor's, I loved the clean documents LaTeX produces. The algorithmic, global paragraphing that produces even spacing feels unmatched to this day. Additionally, if you ever tried writing math notation in an text-editor like Word, LaTeX's math notation is far superior. Its integration with better bibLaTeX and Zotero greatly eases scientific writing.

On the other hand, writing LaTeX -- especially in living documents -- can feel very cumbersome. The syntactic commands and control sequences like `\textbf{}`, `\begin{enumerate}` and especially figure and table blocks like the one below pollute the plain-text and sometimes feel unnecessarily long:

```LaTeX
\begin{figure}[h]

\begin{subfigure}{0.5\textwidth}
\includegraphics[width=0.9\linewidth, height=6cm]{overleaf-logo}
\caption{Caption1}
\label{fig:subim1}
\end{subfigure}
\begin{subfigure}{0.5\textwidth}
\includegraphics[width=0.9\linewidth, height=6cm]{mesh}
\caption{Caption 2}
\label{fig:subim2}
\end{subfigure}

\caption{Caption for this figure with two images}
\label{fig:image2}
\end{figure}
```

This is where markdown shines: it is easy to write and in plain-text is recognizable as an actual document structure.

I have known about `pandoc` and its capabilities to generate LaTeX-PDF documents from markdown for a while and loved it for smaller, less formal documents. But I was not aware that it actually works very well for actual scientific writing as well. Obviously, it offers native math-notation from LaTeX. However, using additional packages, table-, figure and listings-labelling, sections, references and even includes work.

## Prerequisites

First of all make sure to have the necessary packages installed, `fignos` for figure numbering, `secnos` for sections, `xnos` for cross-referencing. Since `pandoc==3.0` there is [a bug with a regex](https://github.com/tomduck/pandoc-xnos/issues/28) so it has to be installed from a fork. Also make sure to have [`m4`](https://www.gnu.org/software/m4/) installed:

```sh
sudo pacman -S pandoc texlive m4               # or:
sudo apt-get install -y pandoc texlive-full m4 # adapt to your distro

pip install pandoc-fignos && \
pip install pandoc-secnos && \
pip install git+https://github.com/TimothyElder/pandoc-xnos
```

---

## Project layout

```
my_paper/
├─ chapters/
│   ├─ 01_introduction.md
│   └─ …
├─ bib.yaml          # bibliography database (BibTeX/YAML)
├─ ieee.csl          # citation style
└─ main.md           # master Markdown file (see below)
```

### `main.md`

```yaml
---
title: Title
subtitle: Subtitle
author: "Mathias Baumgartinger-Seiringer"
date: 04/03/2026
keywords: [research, "scientific-writing", LaTeX, markdown]
abstract: |
  LaTeX is beautiful but sometimes -- especially when drafting -- I find it cumbersome to work with. 
  Syntax is messy, the plain text is hardly readable and unstructured. I found a convenient way to use markdown.

# Pandoc Options

## table of contents
toc: true # same as --toc
toc-depth: 2
number-sections: true # same as -N / --number-sections
links-as-notes: false

## links
colorlinks: true # LaTeX/PDF via default template
linkcolor: blue
urlcolor: blue
citecolor: teal

## geometry-formatting: passed to LaTeX's geometry package
geometry:
  - margin=2.5cm
  - heightrounded

## document class
documentclass: article
classoption:
  - oneside
  - dvipsnames

## font
mainfont: "TeX Gyre Pagella"
sansfont: "TeX Gyre Heros"
monofont: "Inconsolata"
linestretch: 1.1

# bibliography
citeproc: true
csl:
  - "ieee.csl"
bibliography:
  - "bib.yaml"
link-citations: true

# LaTeX header includes
header-includes:
  - \usepackage{newtxmath}
---
```

#### Including Chapters

Consequently, the actual `md`-content begins. To keep it structured, we used `m4` to include the different chapters -- m4 lets us preprocess includes before Pandoc parses the Markdown, preserving literal backticks and avoiding accidental macro expansion. References are automatically appended at the end.

<div class="alert alert-info" role="alert">
Pandoc's native include syntax (!include) collides with fenced code blocks and backticks, thus we redefine using `changequote`
</div>

```md
{% raw %}changequote(`{{', `}}')

include({{01-introduction.md}})
include({{...}})
include({{10-results.md}})
{% endraw %}

# References
```

## Bibliography

Create a bibliography yaml or export it from Zotero (see next section). This file should look like:

```yaml
- id: doe2020
  type: article-journal
  author:
    - family: Doe
      given: Jane
  title: "A Groundbreaking Study"
  container-title: Journal of Important Results
  issued:
    year: 2020
  DOI: 10.1234/jir.2020.001
```

### Better CSL yaml

From Zotero, export a collection as "Better CSL YAML". This keeps the file updated just like bibLaTeX.

{% include figure.liquid loading="eager" path="assets/img/blog/markdown-scientific/export_zot.png" title="Zotero CSL yaml export" class="img-fluid rounded z-depth-1" width="30%" %}

### Get a Citation Style

A `.csl` citation style is required. In the example we use `ieee` from [github](https://github.com/citation-style-language/styles/blob/master/ieee.csl).

---

## Using `@`-Commands

### _Citations_

| Goal               | Markdown syntax                                                                     | What `pandoc` does                                                                                      |
| :----------------- | :---------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| Inline citation    | Some claim ... `@doe2020`.                                                          | Inserts a parenthetical reference formatted by the CSL style you supplied (`ieee.csl`, `apa.csl`, ...). |
| Narrative citation | `@doe2020` argues that ...                                                          | Places the author name in the text, the year in parentheses (style-dependent).                          |
| Multiple refs      | `@doe2020; @smith2019; @lee2021`                                                    | Joins them with the delimiter defined by the CSL style (comma, semicolon, etc.).                        |
| Suppress author    | `[-@doe2020]`                                                                       | Shows only the year (or number) - handy for "see Table 2".                                              |
| Page-specific      | `@doe2020[p. 23]`                                                                   | Adds a locator (page, chapter, figure) after the citation.                                              |
| Bibliography file  | `bibliography: thesis.yaml` (YAML) or `references.bib` (BibTeX) in the front-matter | `pandoc` pulls the entries from that file. Make sure the `id` field matches the key you use after `@`.  |

<br>

### _Labels, Captions and Cross-References_

| Element                           | Caption (what goes in the document)                                                               | Label (Markdown syntax)                                                        | Reference (how you call it later)                  |
| --------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------- |
| Chapter / Section                 | Optional plain heading text (no special markup)                                                   | `{#sec:<id>}` after the heading, e.g. `# Methods {#sec:methods}`               | `Section @sec:<id>` &rarr; `Section @sec:methods`  |
| Figure                            | Alt text in `![...](...)` becomes the caption                                                     | `{#fig:<id>}` right after the image, e.g. `![Study area.](img.png){#fig:area}` | `Figure @fig:<id>` &rarr; `Figure @fig:area`       |
| Table                             | `Table:` line (with colon) is the caption, e.g. `Table: Sample stats. {: #tbl:stats}`             | `{: #tbl:<id>}` directly after caption line (or after the table if no caption) | `Table @tbl:<id>` &rarr; `Table @tbl:stats`        |
| Listing / Code Block              | `Listing:` line (with colon) is the caption, e.g. `Listing: Data-cleaning script. {: #lst:clean}` | Attach label to fenced block, e.g. `{#lst:clean .numberLines}`                 | `Listing @lst:<id>` &rarr; `Listing @lst:clean`    |
| Equation (with `pandoc-crossref`) | No caption needed; number is auto-generated                                                       | Place label on the display math line, e.g. `$$ E = mc^2 $$ {#eq:einstein}`     | `Equation @eq:<id>` &rarr; `Equation @eq:einstein` |

---

## Building

Lastly, a build script includes the chapters into a temporary file which we build with the corresponding `pandoc` flags:

```bash
{
    m4 -I./chapters/ main.md > _tmp.md && \
    pandoc _tmp.md -o main.pdf \
    --pdf-engine=pdflatex \
    --filter pandoc-crossref \
    --filter pandoc-fignos \
    -V geometry:margin=1.0in \
    --citeproc --bibliography="bib.yaml" && \
    rm _tmp.md
} || {
    rm _tmp.md
}
```

### Why this order?

`m4` runs first to resolve all include directives.
Pandoc reads the flattened markdown, applies the filters, and finally hands the resulting `.tex` to pdflatex.
The `--filter pandoc-crossref` call enables seamless equation referencing (`@eq:mylabel`), while `pandoc-fignos`, `pandoc-secnos`, and `pandoc-xnos` take care of figures, sections, and generic counters respectively.
