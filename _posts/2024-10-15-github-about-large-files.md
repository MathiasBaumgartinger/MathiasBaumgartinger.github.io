---
layout: post
title: "A simpler solution to [many] GitHub large file issues"
date: 2024-10-15
description: "`remote: error: File [filename] is 200.00 MB; this exceeds GitHub's file size limit of 100.00 MB` -- how to fix it without Git LFS."
tags: ["software-engineering", git, github, "git large files"]
categories: "software-engineering"
---

_Update: In commit [`15fdef2`](https://github.com/github/docs/commit/15fdef26a6f817ed51b451173c1d05191a8dc5c2) the GitHub Docs team has added context of the provided solution to the relevant documentation._

As discussed in my proposal for updating the github [docs on large files](https://github.com/github/docs/issues/34950), GitHub has a hard limit of 100 MB per file for repositories. As someone who has worked on a project with large resources files, the error message `remote: error: File [filename] is 200.00 MB; this exceeds GitHub's file size limit of 100.00 MB` has occured to me more than once or twice. This is especially frustrating when the commit with the large file is not the most recent commit, and you have to rewrite history to remove it.

Github recommends using [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) to remove large files from history. Altough powerful, these tools can be complex and may not be suitable for all users -- especially if for many cases there is a much more straightforward solution. Or to quote myself from the linked issue:

> As a clumsy git(hub) user I would have appreciated the suggestion for such a solution a lot.

Alternatively to BFG, git rebase can be used to alter the commit in an earlier state. First, you need to identify the hash of the commit where the change happened. For instance, to modify 35da8436, you may use

```bash
    $ git rebase --interactive 35da8436~
```

The tilde (`~`) is strictly necessary to reapply the subsequent commits. git rebase will now open your default git editor of structure:

```bash
    pick 35da8436 style: add new resources for roofs and clean up some old ones
    pick 09f6df0d feat/WIP!: major restructure and rewrite of components
```

Change `pick` to `edit` in the line of the commit to be modified. Once the file is saved, the HEAD of the repository will be at the named commit. The commit may now be modified. Repeat the steps mentioned previously:

```bash
  $ git rm --cached GIANT_FILE
  # Stage our giant file for removal, but leave it on disk
  $ git commit --amend -CHEAD
  # Amend the previous commit with your change
  # Simply making a new commit won't work, as you need
  # to remove the file from the unpushed history as well
```

Consequently, you may return to the original `HEAD` using `git rebase --continue` and push the smaller commits using `git push`.
