---
layout: post
title:  "A Note on Quantum Mechanics"
categories: quantum
tags: note quantum-mechanics
author: wyj
date:   2018-11-13 10:30:00 +0800
---

Here's a list of useful reference(s) wyj is using:
- J. J. Sakurai's Modern Quantum Mechanics 

In this article:
- [Fundamental Concepts](#fundamentalConcepts)
  - [The Stern-Gerlach Experiment](#Stern-GerlachExperiment)
  - [Kets, Bras, and Operations](#KetsBrasOperations)

<a name="fundamentalConcepts"></a>Fundamental Concepts
===

<a name="Stern-GerlachExperiment"></a>The Stern-Gerlach Experiment
---
>A two-state system of the SG type is the least classical, most quantum-mechanical system.

- **Quantization**: electron spin angular momentum has two possible values \\( \hbar/2\\)
- Sequential SG experiment shows **Heisenberg Uncertainty**: can't determine two measures simultaneously
- Analogy with polarization of light, we can write it in the bra and ket form, and **complex vector space** needed because of \\(S_y±\\)

<a name="KetsBrasOperations"></a>Kets, Bras, and Operations
---
Vector space in infinite dimensions is **Hilbert space**.

State vector is known as **ket**.

- **ket**:
  - two ket can be added.
  - multiplying a ket by a complex number gets another ket. The number can stand on the left or the right of the ket.
  - An **observable** can be represented by an operator such as A. An operator acts on a ket from the left and a bra from the right. **Eigenkets** of operator A:\\(A\|a\rangle=a\|a\rangle\\), \\(a\\) is the eigenvalue of \\(A\\) and \\(\|a\rangle\\) is the eigenstate.
  
>N-dimensional vector space spanned by the N eigenkets of observable A. Any arbitrary ket \\(\|a\rangle\\) can be written as \\(\|a\rangle=\sum_{a^\prime} c_{a^\prime} \|a^\prime\rangle\\)

- **Bra space and Inner Products**
  - Bra space is **'dual to'**  the ket space and has one-to-one correspondence between a ket space and a bra space


(TBD)