---
num: 2
prev: Introduction
next: Equivalence relations
title: Integers
---

:::note{.warning}
container directive note with class warning.
:::

:::stmt
xxx
:::

From this point on, $\mathbb Q$ and $\R$ do not exist until we construct them. To begin, we will assume some familiarity with the basic properties of the positive integers (the natural numbers) as well as the set of all integers. One can build these properties from the Peano axioms of arithmetic, but we will not do this.

We will denote the set of integers $\{\ldots,-2,-1,0,1,2,\ldots\}$ by $\Z$. The basic properties of $\Z$ follow from the following axioms.

:::stmt
Axiom 2.1 (Addition axioms, A1-A6)
A set of numbers $S$ is said to satisfy the addition axioms if the following hold for all members $x$, $y$, and $z$ of $S$.

1. Closure: If $x$ and $y$ are in $S$, then their sum $x + y$ is in $S.$
2. Associativity: $(x + y) + z = x + (y + z).$
3. Commutativity: $x + y = y + x.$
4. Identity: There is a number $0$ in $S$ such that $0 + x = x.$
5. Inverse: To every $x$ in $S$ there corresponds a number $(-x)$ in $S$ such that $x + (-x) = 0.$
6. Well-definedness: If $x$ and $y$ are in $S$ and $x = x'$, then $x+y=x'+y$ and $(-x) = (-(x')).$
   :::

::: aside \*_Notation 2.2_.\* We write $x-y$ as a shorthand for $x + (-y)$.
:::

::: stmt Axiom 2.3 (Multiplication axioms, M1-M6)
A set of numbers $S$ is said to satisfy the addition axioms if the following hold for all members $x,$ $y,$ and $z$ of $S$.

1. Closure: If $x$ and $y$ are in $S$, then their product $xy$ is in $S.$
2. Associativity: $(xy)z = x(yz).$
3. Commutativity: $xy = yx.$
4. Identity: There is a number $1$ in $S$ such that $1 \neq 0$ and $1x = x.$
5. Inverse: To every $x$ in $S$ there corresponds a number $(-x)$ in $S$ such that $x + (-x) = 0$.
6. Well-definedness: If $x$ and $y$ are in $S$ and $x = x'$, then $xy = x'y.$
   :::

::: stmt Axiom 2.4 (Distributive axiom, DL)
A set of numbers $S$ is said to satisfy the distribution axiom if the following holds for all members $x$, $y$, and $z$ of $S.$

$$ x(y + z) = xy + xz. $$
:::

The set $\Z$ is also equipped with an ordering which arises from the usual notion of inequality $<$. Let's take some time to spell out the pertinent definitions.

::: stmt Definition 2.5
Let $S$ be a set of numbers. An order on $S$ is a relation, denoted by $<$, with the following two properties:

1. Trichotomy: If $x$ and $y$ are numbers in $S$, then exactly one of these statements is true:

   $$ x < y, \qquad x + y, \qquad x > y. $$

2. Transitivity: If $x$, $y$, and $z$ are numbers of $S$ such that $x < y$ and $y < z$, then $x < z$.
   :::

::: stmt Theorem 2.6

1. The set $\Z$ is an ordered set of numbers that satisfies the addition axioms, the multiplication axioms, and the distributive axiom.
2. The set $\N$ is an ordered set of numbers that satisfies the addition axioms except for (4) and (5), the multiplication axioms, and the distributive axiom.
   :::

The order on $\Z$ is given as follows: for any integers $x$ and $y$, we define the statement $x < y$ to mean that $y-x$ is a positive integer. Using Theorem 2.6, we can rigorously prove a wide variety of results that you may have seen before and didn't prove.

::: stmt Lemma 2.7
If $S$ is a set of numbers satisfying the addition axioms, and $x,y$ and $z$ are members of $S$, then:

1. Cancellation: If $x + y = x + z$, then $y = z.$
2. Uniqueness of zero: If $x + y = x,$ then $y=0.$
3. Uniqueness of additive inverse: If $x+y=0$, then $y=-x.$
4. Cancellation of $-$: $-(-x) = x$
   :::

::: solna Proof 1
Suppose that $x+y = x+z.$ By A5, there exists $(-x)$ in $S$ such that $x + (-x) = 0.$ Then, applying the addition axioms:

$$
(x + y) + (-x) &= (x+z) + (-x) & &\text{Well-definedness} \\
(-x) + (x+y) &= (-x) + (x+z) & &\text{Commutativity} \\
((-x) + x)+y &= ((-x) + x)+z & &\text{Associativity} \\
(x + (-x))+y &= (x + (-x))+z & &\text{Commutativity} \\
0+y &= 0+z & &\text{Inverse} \\
y &= z & &\text{Identity} \\
\end{aligned}
$$

:::
::: solna 2
Suppose that $x+y=x.$ By A4, there exists a number 0 in $S$ such that $0 + x = x.$

$$

x + y &= 0 + x & &\text{Identity} \\
x + y &= x + 0 & &\text{Commutativity} \\
y &= 0 & &\text{Cancellation (1)}
\end{aligned}\
$$

:::
::: solna 3
Suppose that $x+y=0.$ By A5, there exists $(-x)$ in $S$ such that $x + (-x) = 0.\$ Then, applying the addition axioms:

$$
(x + y) + (-x) &= 0 + (-x) & &\text{Well-definedness} \\
(-x) + (x+y) &= 0 + (-x) & &\text{Commutativity} \\
((-x) + x)+y &= 0 + (-x) & &\text{Associativity} \\
(x + (-x))+y &= 0 + (-x) & &\text{Commutativity} \\
0+y &= 0 + (-x) & &\text{Inverse} \\
y &= -x & &\text{Identity} \\
\end{aligned}
$$

:::
::: solna 4
By A5, there exists $(-x)$ in $S$ such that $x + (-x) = 0,$ and there exists $(-(-x))$ in $S$ such that $(-x) + (-(-x)) = 0.$

$$

(-x) + (-(-x)) &= x + (-x) & &\text{Inverse} \\
(-x) + (-(-x)) &= (-x) + x & &\text{Commutativity} \\
-(-x) &= x & &\text{Cancellation}
\end{aligned}\$\$
:::

::: stmt Proposition 2.8
If $x$, $y$ and $z$ are integers, then:

1. $0 \cdot x = 0$
2. $(-x) \cdot y = -(x \cdot y)$
3. $(-x) \ cdot (-y) = x \cdot y$
4. If $x \cdot y = 0$
5.

:::

::: solna Proof

1. By **A3**, **A4**, and **DL**, $0 + 0 \cdot x = 0 \cdot x = (0 + 0) \cdot x = 0 \cdot x + 0 \cdot x$. Then the cancellation proved in Lemma 2.7.1

2. Observe that $ $ by **DL**. This equals $0y$ by **A4**, which equals $0$ by part (1). The result now follows by Lemma 2.7.3. The other equality is proved similarly.

3.

4) We will prove that if $x \neq 0$ and $y\neq 0$, then $xy \neq 0$. (This is the contrapositive of a statement we want to prove.) First, suppose that $x > 0$ and $y > 0$. Then $x$ and $y$ are natural numbers, which are closed under multiplication. Thus $xy$ is a natural number, and zero is not.

5)

:::

::: solna Proof

1. By **A3**. **A4**, and **DL**. Then the cancellation proven in Lemma 2.7(i) now tells us that $x \cdot 0 = 0$.
   :::
$$
