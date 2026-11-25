---
title: "Model upgrades didn't fix our Text-to-SQL agent. Definitions did."
description: "Two Text-to-SQL systems three years apart, an eval set, and a failure taxonomy. Why the semantic layer moved accuracy more than the model did."
date: 2026-11-20
draft: true
---

I prototyped my first Text-to-SQL assistant in January 2023, wiring a language model to Indeed's warehouse so people could ask questions in plain English. It grew into a 10-person team and thousands of weekly users. Three years later I built the next one at Replit, from the opposite direction.

The lesson that carried over isn't about models. **When the agent was wrong, the SQL was usually fine. The definitions were the problem.**

## How you grade a data agent

You can't grade Text-to-SQL by comparing query strings. Two different queries can both be correct, and one plausible query can be quietly wrong. We graded on **result equivalence**: run the agent's query and a reference query, then compare the result sets after normalizing column order, rounding and row order.

The eval set came from real questions people had asked analysts, not from questions we invented. <span class="todo">TODO: how many questions, where they came from, how you refresh the set, and who wrote the reference queries</span>

## Where the errors came from

Once we read every failure, they sorted into a few buckets <span class="todo">TODO: replace with your real proportions or a ranked order</span>:

1. **Wrong metric.** "Active users" has three definitions in the company, and the agent picked a reasonable one that wasn't the right one.
2. **Wrong grain.** The agent counted events where the question meant users, or used a daily table to answer a monthly question.
3. **Wrong filter.** It missed the exclusion everyone "just knows" about: test accounts, internal users, refunds.
4. **Join fan-out.** A one-to-many join silently doubles revenue. The answer looks confident, and it's wrong by 2x.
5. **Time-window mistakes.** Calendar vs. fiscal quarters, time zones, the partial current month.

Only the last bucket and part of the fourth were really SQL skill. The rest were knowledge the model didn't have and couldn't infer.

## What moved the number

We tracked accuracy on the eval set across two kinds of change: **model swaps** and **semantic-layer changes** (adding governed metric definitions, declaring grains, encoding standard filters).

<span class="todo">TODO: chart of eval accuracy over time, with model swaps and semantic-layer releases marked. Even an unlabeled y-axis makes the point.</span>

Model upgrades helped at the margin. Each governed definition removed a whole category of failure for every question that touched it. <span class="todo">TODO: a concrete before/after example</span>

## A counterintuitive case

<span class="todo">TODO: a case where restricting the agent to the semantic layer made it worse, for example an exploratory question no metric covered, and what you did about it (an escape hatch to raw SQL with a warning? a confidence flag?)</span>

## What I'd build again

- **Definitions first, model second.** An agent can only be as right as the metrics it's allowed to use.
- **Grade on results, and keep a living eval set** that grows from real failures.
- **Show your work.** Return the query and the metric definition with every number, so people can audit an answer instead of just trusting it.
- **Measure success by the questions you stop getting.**
