---
number: 11
title: The least upper bound property
---

:::stmt[Proposition 11.1]
Suppose $(a_n)$ converges. If $a_n \leq M$ for all $n \geq 1$, then $\lim a_n \leq M$. If $a_n \geq m$ for all $n \geq 1$, then $\lim a_n \geq m.$
:::

:::stmt[Definition 11.2]
Let $E$ be a subset of $\R$. Let $M$, $m \in \R$. We say that $M$ is an upper bound for $E$ if $x\leq M$ for all $x\in E$. We say that $m$ is a lower bound for $E$ if $x\geq m$ for all $x\in E$.
:::

:::stmt[Definition 11.4]
Let $E$ be a subset of $\R$. Let $M,m\in \R$. We say that $M$ is a least upper bound for $E$ if 1. $M$ is an upper bound for $R$, and 2. if $M'$ is another upper bound for $E$, then $M \leq M'$. We say that $m$ is a greatest lower bound for $E$ if 1. $m$ is a lower bound for $E$, and 2. if $m'$ is another lower bound for $E$, then $m \geq m'.$
:::

:::stmt[Notation 11.6]
Let $E$ be a subset of $\R$. If $E$ has a least upper bound, it is unique, so we write the least upper bound of $E$ as $\sup E$ (the supremum of $E$). If $E$ has a greatest lower bound, it is unique, so we write the greatest lower bound of $E$ as $\inf E$ (the infimum of $E$).
:::

:::stmt[Theorem 11.7]
Any nonempty subset $E$ of $\R$ satisfies the least upper bound property: If $E$ has an upper bound, then $\sup E$ exists and is in $\R.$
