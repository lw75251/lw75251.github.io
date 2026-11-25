---
title: "A lot of our users didn't want an app"
description: "What we learned by reading the first thing new users typed, and why the plain classification pipeline beat every dashboard we had."
date: 2026-12-01
draft: true
---

<!--
DRAFT written by Claude as a starting point. Replace anything that isn't true,
and check with Replit before publishing internal numbers. Remove every
<span class="todo"> marker before setting draft: false.
-->

Every product team has a story about who its users are. Ours was simple: people come to Replit to build an app. The funnel, the onboarding, and the metrics all assumed it.

The easiest way to check a story like that is also the most boring one. You read what people actually say.

## The first message

A new user's first message is the most honest data point you'll get. They haven't learned your product's vocabulary yet, and they aren't trying to please the onboarding flow. They just say what they want.

So we took <span class="todo">TODO: rough sample size, or "a large sample"</span> first messages and asked a simple question of each one: *does this person want something built, or do they want an answer?*

## Why not just use a dashboard

We had plenty of dashboards. They told us what people *did*: created a project, ran it, came back the next day. None of them could tell us what people *meant*, because intent doesn't show up in event logs. It lives in the text.

## Building a classifier I could trust

The model was the easy part. The hard part was knowing whether to believe it.

1. **Label by hand first.** <span class="todo">TODO: how many examples, who labeled them, how you settled disagreements</span>. Writing the rubric forced us to define "conversation" precisely, and that alone changed the question.
2. **Tune against the labels, not against vibes.** Every prompt change got scored against the labeled set before it touched the full dataset.
3. **Read the errors.** The misclassified examples were the most useful part. They showed us where our categories were wrong, not just where the model was.

## What we found

Roughly a quarter of new users weren't trying to build an app at all. They wanted to talk something through. <span class="todo">TODO: one or two anonymized examples of what those messages looked like</span>.

That isn't a rounding error, and it doesn't fit inside an app-building funnel. The product changed to meet those people where they were.

## What I'd tell another data team

- The biggest wins I've had came from **questioning the denominator**, not from building a better model.
- **An LLM is a measurement instrument.** Calibrate it like one, with labeled data, error analysis, and a reason to trust the number.
- **Read raw data before you aggregate it.** It's slow and unglamorous, and it works.
