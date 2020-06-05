---
layout: post
title:  "Evaluating analytic gradients on quantum hardware"
categories: quantum
tags: note paper-reading evaluating-analytic-gradients
author: wyj
date:   2019-02-09 17:30:00 +0800
---

This is a note about [Evaluating analytic gradients on quantum hardware](https://arxiv.org/abs/1811.11184).

- compute exact gradients of parameterized quantum circuit on quantum hardware
	- HOW? run the original quantum circuit twice while shifting a single gate parameter.

Summary:

- for any gate of the form $$\mathscr{G}=e^{-i\mu G}$$, where the Hermitian generator $G$ has **at most two distinct eigenvalues**, the parameter shift rule holds.
- **any other gate** can be handled by a method that involves a coherent *linear combination of unitaries* routine. Require a single ancilla qubit.
- for CVQC: parameter shift rules for Gaussian gates.
-




#Basic concepts - density matrix, expectation value

any qubit can be expressed as a \\(2\times 2\\) density matrix

$$\hat{\rho}=\frac{1}{2}(\mathbb{I}+x\hat{\sigma}_x+y\hat{\sigma}_y+z\hat{\sigma}_z)=\frac{1}{2}(\mathbb{I}+r\cdot \hat{\sigma})$$

and vector \\(r=(x,y,z)\in \mathbb{R}^3\\) and \\(\hat{\sigma}=(\hat{\sigma}_x, \hat{\sigma}_y, \hat{\sigma}_z)\\).

Following Stern-Gerlach type measuremnts on a single qubit, performing a projective measurement along an axis \\(n\\) with \\(\|\|n\|\|=1\\) is represented by the observable \\(\hat{\sigma}_n=n\cdot\hat{\sigma}\\) and has an expectation value

$$\langle\hat{\sigma}_n\rangle=Tr(\hat{\sigma}_n\hat{\rho})=n\cdot r$$


For example, \\(n=(1,0,0)\\) means \\(x+\\) axis.

And \\(\hat{\sigma}_n=n\cdot\hat{\sigma}\\),\\(=\sum{n_i\cdot\hat{\sigma}_i}(i=x,y,z)\\),
which can derive \\(\langle\hat{\sigma}_n\rangle=n\cdot r\\). The probability for detecting the qubit in the 'up'\/'down' state are \\(p_{\uparrow}(n)=\frac{1+n\cdot r}{2}, p_{downarrow}(n)=\frac{1-n\cdot r}{2}\\).


Method 1: Direct inversion tomography
===

Pros:
direct the global maximum of Eq. (9).

Cons:
sometimes can be invalid (||r||>1); Though the probability of finding invalid r is very small in most cases, it can still be very large in some cases(z\up for example).
High-dimensional quantum system, the problem becomes even more severe.

Nevertheless, \\(r_d\\) is an important starting point for many other tomographic techniques.

Method 2: Distance minimization to \\(r_d\\)
===

In order to find a valid tomographic density matrix even if \\(\|\|r_d\|\|>1\\), we search for a modified Bloch vector \\(r_{tomo}\\) that

- is physically valid, \\(\|\|r_{tomo}\|\|\leq 1\\);
- lies \\(closest\\) to \\(r_d\\) in terms of a distance to be defined;

Minimum p-distance of the Bloch vectors
---

Simplest family of distances between two \\(Bloch\ vectors\\) are the \\(p\\)-distances \\(\|\|r-r^\prime\|\|_p=(\|x-x^\prime\|^p+\|y-y^\prime\|^\prime+\|z-z^\prime\|^p)^{1/p}\\) for \\(p\geq 1\\).

p=2, Euclidean distance
