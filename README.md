# Ember Worst AI Advice

[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/competitions/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![Rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/pranatakripto95/ember-worst-ai-advice/rank.svg)](https://make.fun/competitions/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![Reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/pranatakripto95/ember-worst-ai-advice/reward.svg)](https://make.fun/competitions/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

One line of the worst advice an AI assistant could give:

> Deploy straight to production — your users will find the bugs faster than your tests.

Skip staging, skip tests, ship it live and let real users do the QA.
It is specific enough to follow step by step, it names a real situation
(a deploy) and a real victim (your users), and the punchline lands in one
read with no explanation attached — deadpan, confident, tidy, exactly how
an AI assistant would phrase it.

Three candidates were weighed before this one: the production deploy
(the pick — worst advice, funniest on first read, concrete), "Skip the
backup. If the deploy works, you never needed it." (tightest at 60
characters, but the badness is generic and the second sentence softens
the wince), and "Just chmod 777 everything — permissions are only
slowing you down." (insider-specific, but it needs the reader to know
what chmod 777 means, so the joke lands a beat late).

## How it works

`main.ts` writes exactly that one line — 85 characters, no newline, no
extra words — to `/output/entry.txt`. It refuses to write anything that
is not one line of 1–140 characters, then reads the file back and proves
it holds exactly that. No network, no secrets, no dependencies — just Node.

```sh
node main.ts
```

## Entry

Built for the make.fun bounty **Worst AI Advice: The 48-Hour Tight Line Open**
(`u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580`) as `@pranata`.
