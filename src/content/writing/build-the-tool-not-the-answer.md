---
title: "Build the tool, not the answer"
description: "Two Text-to-SQL systems three years apart, and why the semantic layer matters more than the model."
date: 2026-11-20
draft: true
---

<!--
DRAFT written by Claude as a starting point, built from Leon's arc:
Indeed Text-to-SQL prototype (Jan 2023) -> agent-first analytics at Replit.
Replace anything that isn't true and fill in every <span class="todo"> marker.
-->

For most of my career, the work came in as a question: *What was revenue last quarter? Why did signups dip? Can you pull this for the board deck?* You answer it, and a week later the same question comes back with a different date range.

At some point you notice that the most useful thing you can build isn't the answer. It's the thing that answers.

## Attempt one: early 2023

In January 2023 I wired a large language model to our warehouse at Indeed and let people ask questions in plain English. It was rough. <span class="todo">TODO: the first demo, what broke, the moment leadership got interested</span>.

Its first real lesson had nothing to do with AI: **most "wrong answers" were definitional, not technical.** Two orgs meant different things by "active customer." The SQL was fine. The business rules were the problem.

## Attempt two: agents on a semantic layer

At Replit we built the next version from the other direction. We started with the definitions (a semantic layer of metrics, joins and rules the whole company agrees on) and put an agent harness on top of it.

<span class="todo">TODO: what the harness does — tools, retries, how it shows its work, how you evaluate it</span>

The agent got better as the layer underneath it got better, far more than it did with model upgrades.

## What carries over

- **Definitions first, model second.** An agent can only be as right as the metrics it's allowed to use.
- **Show the work.** People trust an answer they can audit. Return the query and the metric definition with every number.
- **Evaluate like a statistician.** A demo that works on ten questions tells you nothing about question eleven.
- **Measure success by questions you stop getting.** The best sign the tool works is a quieter inbox.
