---
title: "Finding the usage threshold that predicts who should upgrade"
description: "How to find an activation threshold without fooling yourself: selection effects, why the answer isn't the median, and testing it as an intervention."
date: 2026-12-15
draft: true
---

<span class="todo">OUTLINE. Write this in your own words, and keep it free of Replit's actual numbers.</span>

## The question

Which free users are a good fit for a paid plan, and when should you tell them? "Users who do X convert more" is the easy, wrong version of this analysis.

## Why the naive analysis lies

- **Selection.** Heavy users convert more because they were already committed. Usage is a symptom, not a cause.
- **Survivorship.** Users who churned early never reach any threshold, so every threshold looks predictive.
- **The median trap.** The "typical paying user" level is a description, not a decision boundary.

<span class="todo">TODO: which of these bit you, and how you noticed</span>

## How I found the threshold

<span class="todo">TODO: your method. Options to describe: conversion hazard as a function of cumulative usage, a changepoint in the curve, survival curves above and below candidate cutoffs, or matching users at equal tenure.</span>

## Testing it as an intervention, not a correlation

The real test was putting an upgrade prompt in front of users at the threshold and comparing them with a holdout.
<span class="todo">TODO: experiment design, and the result described qualitatively (for example, "a multiple, not a percentage")</span>

## What generalizes

- A threshold is only useful if you can act at the moment someone crosses it.
- Validate it with an intervention, not just a better-fitting model.
- <span class="todo">TODO: your own takeaway</span>
