---
layout: post
title:  "A Note on Quantum Mechanics"
categories: quantum
tags: note textbook-reading quantum-mechanics
author: wyj
date:   2018-11-13 10:30:00 +0800
---

Here's a list of useful reference(s) wyj is using:
- J. J. Sakurai's Modern Quantum Mechanics

In this article:
- [Fundamental Concepts](#fundamentalConcepts)
  - [The Stern-Gerlach Experiment](#Stern-GerlachExperiment)
  - [Kets, Bras, and Operations](#KetsBrasOperations)
  - [Base kets and Matrix representations](#BaseKetsAndMatrix)

<a name="fundamentalConcepts"></a>Fundamental Concepts
===

<a name="Stern-GerlachExperiment"></a>The Stern-Gerlach Experiment
---
>A two-state system of the SG type is the least classical, most quantum-mechanical system.

- **Quantization**: electron spin angular momentum has two possible values \\( \hbar/2\\).
- Sequential SG experiment shows **Heisenberg Uncertainty**: can't determine two measures simultaneously.
- Analogy with polarization of light, we can write it in the bra and ket form, and **complex vector space** needed because of \\(S_y±\\).

<a name="KetsBrasOperations"></a>Kets, Bras, and Operations
---
Vector space in infinite dimensions is **Hilbert space**.

State vector is known as **ket**.

- Kets
  - two ket can be added.
  - multiplying a ket by a complex number gets another ket. The number can stand on the left or the right of the ket.
  - An **observable** can be represented by an operator such as A. An operator acts on a ket from the left and a bra from the right. **Eigenkets** of operator A:\\(A\|a\rangle=a\|a\rangle\\), \\(a\\) is the eigenvalue of \\(A\\) and \\(\|a\rangle\\) is the eigenstate.

>N-dimensional vector space spanned by the N eigenkets of observable A. Any arbitrary ket \\(\|a\rangle\\) can be written as \\(\|a\rangle=\sum_{a^\prime} c_{a^\prime} \|a^\prime\rangle\\)

- Bra space and Inner Products
  - Bra space is **'dual to'**  the ket space and has one-to-one correspondence between a ket space and a bra space
  \\[\|\alpha\rangle\overset{DC}{\leftrightarrow}\langle \alpha\|\\]
  (DC=dual correspondence)
  \\[c\|\alpha\rangle\overset{DC}{\leftrightarrow}c^*\langle\alpha\|\\]

  Inner product \\(\langle\beta\|\alpha\rangle\\) satisfy two fundamental properties:
  - complex conjugates: \\(\langle\beta\|\alpha\rangle=\langle\alpha\|\beta\rangle^*\\)
  - \\(\langle\alpha\|\alpha\rangle\leq 0\\), where the equality sign holds only if \\(\|\alpha\rangle\\) is a *null ket*.

  Orthogonal: \\(\langle\alpha\|\beta\rangle=0\\)

  Normalized ket \\(\|\tilde{\alpha}\rangle=(\frac{1}{\sqrt{\langle\alpha\|\alpha\rangle}})\|\alpha\rangle\\)

- Operators
> In this book, X, Y is used to denote a more general class of operators that act on kets, while A, B and so on will be used for a restrictive class of operators that correspond to observables

  - \\(X=Y\\): if for any arbitrary ket in the ket space \\(\|\alpha\rangle\\), \\(X\|\alpha\rangle=Y\|\alpha\rangle)\\), \\( X=Y\\).
  - \\(X\\) is the null operator if for any arbitrary ket in the ket space \\(\|\alpha\rangle\\), \\(X\|\alpha\rangle=0\\).
  - Addition: Operators can be added and satisfy commutative and associative law.
  \\[X+Y=Y+X; X+(Y+Z)=(X+Y)+Z\\]

  > Single exception: the time-reversal operators is not linear, but other operators in the book is linear.

  \\[X\|\alpha\rangle\overset{DC}{\leftrightarrow}\langle\alpha\|X^\dagger\\]
  \\(X^\dagger\\) is the **Hermitian adjoint** of \\(X\\).
  - **Multiplication**

	Multiplication operations are noncommutative: \\(XY\neq YX\\).

	But associative: \\(X\(YZ\)=\(XY\)Z=XYZ\\). Also, \\(X\(Y\|\alpha\rangle\)=\(XY\)\|\alpha\rangle\\), \\(\(\langle\beta\|X\)Y=\langle\beta\|\(XY\)=\langle\beta\|XY\\).

	Using the above equations, we can obtain **\\(\(XY)^\dagger=Y^\dagger X^\dagger\\)**.

	Out product:\\(\|\beta\rangle\langle\alpha\|\\).

	Illegal product like \\(\|\alpha\rangle X\\), \\(\|\alpha\rangle\|\beta\rangle\\), nonsensical.

  - **The Associative Axiom (of multiplication)**

    \\(\(\|\beta\rangle\langle\alpha\|\)\cdot\|\gamma\rangle\\) can be regarded equally as \\(\|\beta\rangle\cdot\(\langle\alpha\|\gamma\rangle\)\\). So the out product acting on a ket is just another ket.

	And \\(\|\beta\rangle\langle\alpha\|\\) can be regarded as an operator.

	\\[(\langle\beta\|)\cdot(X\|\alpha\rangle)=(\langle\beta\|X)\cdot(\|\alpha\rangle)\\]

    \\[\langle\beta\|X\|\alpha\rangle=\langle\beta\|\cdot(X\|\alpha\rangle)=\lbrace(\langle\alpha\|X^\dagger)\cdot\|\beta\rangle\rbrace^* =\langle\alpha\|X^\dagger\|\beta\rangle^*\\]

	And for a Hermitian X, \\(\langle\beta\|X\|\alpha\rangle=\langle\alpha\|X\|\beta\rangle^*\\).

<a name="BaseKetsAndMatrix"></a>Base kets and Matrix representations
---
> Eigenvalues of Hermitian operator A are real, the eigenkets of A corresponding to different eigenvalues are orthogonal. It can be proved by using \\(\(a^\prime-a^{\prime\prime *}\)\langle a^{\prime\prime}\|a^\prime\rangle=0\\).

  Normalize \\(\|a^\prime\rangle\\) and \\(\lbrace\|a^\prime\rangle\rbrace\\) form a **orthonormal** set, \\(\langle a^{\prime\prime}\|a^\prime\rangle=\delta_{a^{\prime\prime}a^\prime}\\).

  - Eigenkets as Base Kets

   The completeness relation or closure: \\(\sum_{a^\prime} \|a^\prime\rangle\langle a^\prime\|=1\\).

   It can be proved by using
   \\[\|a\rangle=\sum_{a^\prime}|a^\prime\rangle\langle a^\prime\|\alpha\rangle .\\]

(TBD)
