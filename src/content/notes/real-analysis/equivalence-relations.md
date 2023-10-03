---
number: 3
title: Equivalence relations
---

Now that we have integers, we can construct rationals. What should the rationals look like?

- Integers should be rationals.
- The rationals should handle division.
- The addition, multiplication and distribution axioms should hold.
- The rationals should be ordered.

:::stmt[Notation 3.1]
Let $A$ be any set. We write $x \in A$ to indicate that "$x$ is in $A$". If $x$ is not in $A$, then we write $x \notin A$.
:::

:::stmt[Notation 3.2]
The statement "$x := y$" is shorthand for "$x$ is defined to equal $y$".
:::

:::stmt[Definition 3.4]
A binary relation on a set $X$ is a subset of $X \times X$. If ${\sim}$ is a binary relation on $X$ and $x,y\in X$, we say that $x\sim y$ ("$x$ is related to $y$") if $(x, y) \in {\sim}$.
:::

For example, let $X$ be the set of all people in Indonesia. Then $X \times X$ is the set of all ordered pairs of people in the Indonesia. The set ${\sim} = \\{ (x,y): x,y \in X \text{ and } x,y \text{ are on the same island}\\}$ is a binary relation. If $a, b \in {\sim}$, we say that $a \sim b$, or person $a$ is related to person $b$, here meaning that they're both on the same island.

:::stmt[Definition 3.6]
A binary relation ${\sim}$ on a set $X$ is an equivalence relation if:

1. Reflexivity: For all $x\in X$, $x\sim x$.
2. Symmetry: For all $x,y\in X$ such that $x\sim y$, $y\sim x$.
3. Transitivity: For all $x,y,z \in X$ such that $x\sim y$ and $y\sim z$, we have $x\sim z$.

:::

Suppose that $x$, $y$, and $z$ are people in Indonesia. We have that $x \sim y$ precisely when $x$ is on the same island as $y$. If $x$ is on a given island, then $x$ is on the same island as $x$. Thus $(x,x)$ is in ${\sim}$, so ${\sim}$ is reflexive.

If $x$ and $y$ are on the same island, then $(x, y)$ is in ${\sim}$. But since $y$ is on the same island as $x$, $(y,x)$ is in ${\sim}$ as well. Thus ${\sim}$ is symmetric.

Thus being on the same island of Indonesia is an equivalence on the people in Indonesia.

:::stmt[Definition 3.8]
Let ${\sim}$ be an equivalence relation on a set $X$. We define the equivalence class of $x\in X$ (relative to ${\sim}$) to be the set $[x] := \{y \in X: y\sim x\}$.
:::

For any person $x$ on the island of Sumatra, the set $\\{\text{people on Sumatra}\\}$ is the equivalence class $[x]$ of $x$.

::::stmt[Lemma 3.10]
Let $X$ be the set of all ordered pairs of integers with the second entry being nonzero, i.e. $X=\{(a,b): a,b \in \Z \text{ and } b \neq 0 \}$. The relation ${\sim}$ on $X$ is defined so that $(a,b)\sim(c,d)$ if $ad=cb$ is an equivalence relation. If $a,b \in \Z$ and $b\neq 0$, the equivalence class of $(a,b)$ (relative to ${\sim}$) is


:::math
\\{ (c,d): c,d \in \Z, d \neq 0, (a,b) \sim (c,d) \\} = \\{ (c,d): (c,d) \in \Z, d\neq 0, ad = cb \\}
:::

::::

:::stmt[Definition 3.12]
Let $X$ be a set. A partition of $X$ is a grouping of the members of $X$ into nonempty subsets in such a way that each element of $X$ is in exactly one of the subsets.
:::

Everyone in Indonesia must be on one of its islands (assuming one cannot be on multiple islands at once). Thus if we group the people in Indonesia by which island they're on, we establish a partition of the people of Indonesia.

Equivalence classes have the following useful and import property:

:::stmt[Lemma 3.14]
Suppose that ${\sim}$ is an equivalence relation on a set $X$. Then, the set of equivalence classes in $X$ (relative to ${\sim}$) form a partition of $X$.
:::

In other words, the union of all the equivalence classes in $X$ (relative to ${\sim}$) is $X$, and the equivalence classes are pairwise disjoint. Now we can define the quotient space:

:::stmt[Definition 3.15]
Let ${\sim}$ be an equivalence relation on a set $X$. The quotient space $X/{\sim}$ is the set $\tilde{X} := \{[x]: x\in X\}$, the set of all equivalence classes of $X$ (relative to ${\sim}$).
:::
