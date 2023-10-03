---
next: Integers
number: 1
title: Introduction
---

These notes discuss the key ideas in calculus: limits, sequences, continuity, the derivative, and the integral. On one hand, some of the things that we will uncover might appear to be fairly routine. For example, by the end, you will be able to give a full proof that the derivative of the function $f:\R \to \R$ defined by $f(x) = x^2$ is $2x$, and you will have a rigorous notion of what the word “derivative” means to go alongside the ideas that you learned in your initial exposure to calculus.

On the other hand, there are some subtle issues that require a large amount of development. A key example lies in the study of the real numbers $\R$. In your initial exposure to calculus, you probably never thought to take the derivative of a function whose domain is $\Z$ (the integers) or $\mathbb Q$ (the rationals). You only worked with functions on $\R$ is the “right setting” for calculus? What is a real number, anyway? You might have an intuitive definition in mind, but we will need a very comprehensive definition in order to develop calculus properly. To do this, we need to develop the theory of sequences and limits. Only after we are equipped with the comprehensive properties of $\R$ and the theory of sequences and limits, we will be able to handily develop the notions of continuity, differentiaion, and integration.

What does $\R$ have that number systems like $\mathbb Q$ and $\Z$ don't have? To help motivate this, consider the problem of describing the number $x \geq 0$ such that $x^2 = 2$. Hopefully, it is clear that $x$ is not an integer, but perhaps $x$ might be rational.

:::stmt[Theorem 1.1]
There is no rational number $x$ such that $x^2 = 2$.
:::

:::soln[Proof]
We begin by supposing that there does in fact exist a rational number $x$ such that $x^2=2$. We will show that this supposition leads to a conclusion that we know is false, which means that our initial hypothesis (there is a rational number $x$ such that $x^2=2$) is false. This is a classical example of **proof by contradiction**.

Suppose (to the contrary) that $x$ is a rational number such that $x^2=2$. We may write $x$ as a quotient of integers $a/b$ with $a,b\neq 0$ and $a$ and $b$ having no common factor. Then $a^2 = 2b^2$, which implies that $a^2$ is even. We may now write $a$ as $2c$, where $c$ is a nonzero integer. Now, $2b^2=a^2=(2c)^2 = 4c^2$. Hence, $b^2$ is even, and for the same reason as before, $b$ is even. Thus $a$ and $b$ are nonzero integers which share $2$ as a factor. This contradicts our hypothesis that $a$ and $b$ have no common factor, and therefore the hypothesis that $x$ is rational must be false.
:::

This proof indicates something about the layout of these notes. We reduce the proof of a statement about the rationals to the proof of a statement about the integers. Moving forward, we will build the rationals from the integers, and then we will build the real numbers from the rationals. Once we have rigorously developed properties about the reals, we will be able to properly address the usual topics in calculus.

Let us take the time to discuss one property of the **natural numbers** $\N = \{1,2,3,\ldots\}$. We make special mention of $\N$ because it's the setting for mathematical induction. This is a tool which is ubiquitous throughout mathematics and is incredibly powerful.

:::stmt[Principle of mathematical induction]
Let $P_1$, $P_2$, $P_3$, $\ldots$ be a list of statements of propositions (which may or may not be true) indexed by the natural numbers. Suppose that **I1:** $P_1$ is true, and **I2:** whenver $P_n$ is true, $p_{n+1}$ is also true. Then, all of the statements $P_1,$ $P_2,$ $P_3, \ldots$ are true.
:::

Here is an example of how useful mathematical induction can be.

:::stmt[Example 1.2]
For every natural number $n$, we have that $1 + 2 + \cdots + n = \frac{n(n+1)}{2}$.
:::

::::soln[Proof]
For each natural number $n$, the statement we want to prove is $P_n$: “$1 + 2 + \cdots + n = \frac{n(n+1)}{2}$.” We proceed by induction on $n$. First we will prove that the base case $P_1$ is true. The statement $P_1$ reads $1 = \frac{1(1+1)}{2}$, which is true. Now, suppose that $P_n$ is true; in other words, suppose that $1 + 2 + \cdots + n = \frac{n(n+1)}{2}.$ Using this hypothesis, we want to prove the statement $P_{n+1}$. To achieve this, we add $n+1$ to both sides to obtain

:::math
\begin{aligned}1 + 2 + \cdots + n + (n+1) &= \frac{n(n+1)}{2} + n + 1 \\\\\frac{n(n+1) + 2(n+1)}{2} &= \frac{(n+1)((n+1)+1)}{2}.\end{aligned}
:::

<!-- $$
\begin{aligned}
1 + 2 + \cdots + n + (n+1) &= \frac{n(n+1)}{2} + n + 1 \\\\
\frac{n(n+1) + 2(n+1)}{2} &= \frac{(n+1)((n+1)+1)}{2}.
\end{aligned}
$$ -->

Thus $P_{n+1}$ is true if $P_n$ is true. By the principle of mathematical induction, $P_n$ holds for all natural numbers $n$.
::::

Note that we did not prove $P_n$ directly for any $n$ except for $n=1$. We just proved $P_1$, and we proved that if $P_1$ is true, so is $P_2$ (thus $P_2$ is true), and we proved that if $P_2$ is true, so is $P_3$ (thus $P_3$ is true), etc.

:::stmt[Example 1.3]
Fix $x > 0$. For every natural number $n$, we have that $(1+x)^{n+1} > 1 + (n+1) x$.
:::

:::soln[Proof]
We proceed by induction on $n$. We first prove the base case $n=1$. We have $(1+x)^{1+1} = (1+x)^2 = 1+2x+x^2.$ If $x > 0$, then $1+2x+x^2 > 1 +2x = 1 + (1+1)x$, as desired. Now, suppose that the inequality
:::

Here is a template for all future proofs using mathematical induction.

:::stmt[Proposition]
A property $P_n$ is true for all natural numbers $n.$
:::

:::soln[Proof]
We proceed by induction on $n$ (it's good to specify the variable if there are several variables in the statement you want to prove). We first verify the base case $n=1$; in other words, we prove that $P_1$ is true. [Insert the proof of $P_1$ here]. Now, suppose that $P_n$ has already been proven. We will show that $P_{n+1}$ is true. [Insert the proof of $p_{n+1}$ here, assuming that $P_n$ is true]. It follows that $P_n$ is true for all natural numbers.
:::
