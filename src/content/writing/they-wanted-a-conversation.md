---
title: "Calibrating an LLM classifier to measure what users meant"
description: "We used an LLM to label new users' first messages. Building it was easy; trusting the number it produced was the real work."
date: 2026-12-01
draft: true
---

Every product team has a story about who its users are. Ours was simple: people come to Replit to build an app. The funnel, the onboarding and the metrics all assumed it.

The cheapest way to test a story like that is also the most boring one. You read what people actually say. A new user's first message is the most honest data point you'll get. They haven't learned your vocabulary yet, and they aren't trying to please the onboarding flow.

So we asked one question of every first message: *does this person want something built, or do they want a conversation?* The answer turned out to be "a conversation" for a large share of them <span class="todo">TODO: decide whether you can publish the real share. If not, keep "a large share"</span>, large enough that the product changed.

This post isn't about that finding, though. It's about the part that took most of the time: getting to a number I was willing to defend.

## An LLM is a measuring instrument

The tempting move is to write a prompt, run it over every message, count the labels and ship the chart. Every step of that is easy, and the result is unfalsifiable.

A classifier is a measuring instrument, and instruments have bias. If yours overcalls one class by ten points, your headline number is off by about ten points, and no amount of sample size fixes that. So the questions are the ones you'd ask of any instrument: what exactly is it measuring, how well does it agree with a careful human, and how do you correct for the error that's left?

## 1. Define the population before the label

"First messages" sounds well defined until you try to pull them. Do you mean first sessions or first signups? Do you include users who arrived from a template? What about people whose first message was "hi"? <span class="todo">TODO: your actual sampling frame, time window and exclusions</span>

Write the frame down before looking at any labels. Most arguments about the final number turn out to be arguments about the denominator.

## 2. Write a rubric that survives edge cases

The first rubric was one sentence long. It died on contact with messages like these:

- *"build me a budget"*: is that an app, or a spreadsheet-shaped answer?
- *"explain this error"* with a stack trace pasted in: is that a conversation, or a request to fix their project?
- *"make a website for my bakery"*: obviously an app, until the follow-ups show they wanted copywriting.

<span class="todo">TODO: your real edge cases and how the rubric resolved each one</span>

Every rule we added came from a disagreement. That's the point of labeling by hand. It forces you to define the construct, and the definition changes the question.

## 3. Measure agreement between humans first

Before comparing the model to humans, compare humans to each other. If two careful people only agree 75% of the time, a model that "only" agrees 80% of the time with one of them is doing fine. And no prompt will get you to 95%.

<span class="todo">TODO: number of hand-labeled examples, number of labelers, Cohen's kappa before and after rubric revisions</span>

## 4. Tune against the labels, then read the errors

We held out part of the labeled set and scored every prompt change against it before it touched the full dataset. The confusion matrix mattered more than accuracy:

| | Labeled *app* | Labeled *conversation* |
|---|---|---|
| **Predicted *app*** | <span class="todo">TODO</span> | <span class="todo">TODO</span> |
| **Predicted *conversation*** | <span class="todo">TODO</span> | <span class="todo">TODO</span> |

Reading the misclassified messages was the most useful hour of the project. Roughly half the errors weren't model mistakes. They were rubric gaps. <span class="todo">TODO: confirm, and give one example</span>

## 5. Correct the prevalence, and put an interval on it

Even a good classifier biases the count. If the raw share labeled *conversation* is *q*, and on the held-out set the classifier has sensitivity *Se* and specificity *Sp*, then the corrected prevalence is the Rogan–Gladen estimate:

> *p̂* = (*q* + *Sp* − 1) / (*Se* + *Sp* − 1)

Bootstrapping both the labeled set and the full sample gives an interval that reflects classifier error, not just sampling error. With a few hundred labels, the classifier error usually dominates. <span class="todo">TODO: raw vs corrected share and the 95% interval, or describe them qualitatively if they can't be published</span>

## 6. Check that the label means something

A label is only worth acting on if it predicts behavior. We checked whether conversation-first users retained or converted differently from app-first users. <span class="todo">TODO: what you found, qualitatively if needed</span>

## What I'd tell another data team

- **Argue about the denominator first.** Most of the disagreement lives there.
- **Report the corrected number with an interval**, not the raw count from the model.
- **Budget most of your time for the rubric and the error reading.** The prompt is the cheap part.
