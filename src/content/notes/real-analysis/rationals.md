---
number: 4
title: Rationals
---

:::stmt[Definition 4.1]
Let $X = \{ (a,b): a,b \in \Z, b \neq 0 \}$. Let ${\sim}$ be the equivalence relation from Lemma 3.10. A rational number is an equivalence class in $X/{\sim}$. We denote the set of rational numbers by $\mathbb Q$.
:::

We've defined the rationals, but we have no idea how the arithmetic of $\mathbb Q$ works yet. We have to prove everything! The notation $a//b$ is meant to be suggestive of the fact that we'll eventually get to the usual $a/b$. We can take advantage of our pre-existing knowledge about the arithmetic of fractions to guide us. A simular intuition guided our definitions for adding/multiplying/negating rationals.

We already proved that if $b$ and $d$ are nonzero, then $bd$ is also nonzero. Thus the sum and product of two rational numbers remains a rational number.

:::aside
Does the way we represent a rational number affect the arithmetic of $\mathbb Q$?
:::

:::stmt[Lemma 4.2]
The sum, product, and negation operations on rational numbers are well-defined.
:::

:::stmt[Definition 4.3]
If $x = a//b$ is a nonzero rational number, then the reciprocal of $x$ is the rational number $x^{-1} := b//a$.
:::

:::stmt[Proposition 4.4]
The set of numbers $\mathbb{Q}$ satisfies the addition, the multiplication, and distributive axioms. Additionally, if $x$ is a nonzero rational number, then $x \cdot x^{-1} $ = x^{-1} \cdot x = 1$.
:::

:::stmt[Definition 4.5]
If $x,y$ are rational numbers and $y\neq0$, we define the quotient of $x$ and $y$ by the formula $x/y := x \cdot y^{-1}$.
:::

:::stmt[Definition 4.7]
A rational number $a/b$ is defined to be positive when $x=a/b$ for some positive integers $a$ and $b$ and negative if $x = (-a)/b$ for some positive integers $a$ and $b$.
:::

:::stmt[Definition 4.8]
Let $a/b$ and $c/d$ be rational numbers. We say that $x > y$ precisely when $x-y$ is a positive rational. We say that $x<y$ precisely when $x-y$ is a negative rational. We say that $x\geq y$ when either $x>y$ or $x=y$, and we similarly define $x\leq y$.
:::

:::stmt[Proposition 4.9]
The relation $<$ in Definition 4.8 on $\mathbb Q$ makes $\mathbb Q$ an ordered set.
:::

:::soln[Proof]

Exercise.
:::
