---
layout: post
title:  "Notes on quantum walk and quantum simulated annealing"
categories: quantum
tags: note textbook-reading quantum-walk
author: wyj
date:   2019-02-09 17:30:00 +0800
---

These are notes on quantum walk and quantum simulated annealing, mainly based on:

- Sec III of [Lecture Notes on Quantum Algorithms by Andrew Childs](https://www.cs.umd.edu/~amchilds/qa/)
  - Chapter 16: Continuous-time quantum walk
  - Chapter 17: Discrete-time quantum walk
- Quantum algorithms for simulated annealing (arXiv: 1512.03806)
- Quantum simulations of classical annealing processes (arXiv: 0804.1571)
- Spectral gap amplification (arXiv: 1110.2494)
- Quantum walk algorithm for element distinctness (arXiv: 0311001)
- Quantum speed-up of Markov chain based Algorithms
- Search via quantum walk (arXiv: 0608026)
- Quantum search by measurement (arXiv: 0204013)
- Exponential algorithmic speedup by quantum walk (arXiv: 0209131)

[toc]

## Continuous-time quantum walk


### 16.1 Continuous-time quantum walk

> It is easiest to define a quantum analog of a continuous-time random walk

#### Classical continuous-time random walk
Adjacency matrix \\(A\\) & Laplacian \\(L\\): as you know

> The continuous-time random walk on G is defined as the solution of the differential equation
\\(\frac{d}{dt} p_j (t) = \sum_{k\in V} L_{jk} p_k (t)\\)

The evolution for any time \\(t\\) is a *stochastic processes* (normalization preserved) since the columns of L sum to \\(0\\).

#### The quantum analog

Compared to the Schrodinger equation:
\\(i\frac{d}{dt}\|\psi\rangle=H\|\psi\rangle\\)

Let \\(q_j(t)=\langle j\|\psi(t)\rangle\\) be quantum amplitudes. The equation is

\\(i\frac{d}{dt}q_j(t)=\sum_{k\in V} L_{jk} q_k(t)\\).

Normalization preserved since Laplacian is Hermitian.

Solution: \\(\|\psi(t)\rangle=e^{-iLt} \|\psi(0)\rangle\\)

Note: Any Hermitian Hamiltonian that represents the structure of \\(G\\) can be used.

### 16.2 Random and quantum walks on the hypercube
