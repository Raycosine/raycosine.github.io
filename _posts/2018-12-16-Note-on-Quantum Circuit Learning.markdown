---
layout: post
title:  "A Brief Note on Quantum Circuit Learning"
categories: quantum
tags: note paper quantum-circuit-learning
author: wyj
date:   2018-12-16 18:50:00 +0800
---

This is a brief note on quantum circuit learning and following papers:
- [Quantum Circuit Learning](https://arxiv.org/abs/1803.00745).
	- [Algorithm](#QCLalgo)
	- [Approximate function](#approfunc)
	- [Optimization procedure](#optipro)
- Optimal Quantum Learning of a Unitary Transformation
- Optimal processing of reversible quantum channels

Besides, I also put some basic concepts in this post, such as swap test

Quantum Circuit Learning
===

The framework of quantum circuit learning (QCL) is similar to the classical optimization process: apply a parameterized operation to get an output, use the output to calculate cost function, iteratively lower the cost function and finally evaluate the performance on a test set.

On N qubit circuit, the steps of QCL algorithm are
<a name='QCLalgo'></a>
- Encode input data \\(\\{x_i\\}\\) into some quantum state \\(\|\psi_{in} (x_i)\rangle\\) by applying a unitary input gate \\(U(x_i)\\) to initialized qubits \\(\|0\rangle)\\).
- Apply a \\(\theta\\)-parameterized unitary \\(U(\theta)\\) to the input state and generate an output state \\(\|\psi_{out}(x_i,\theta)\rangle=U(\theta)\|\psi_{in}(x_i)\rangle\\)
- Measure the expectation values of some chosen observables. Specifically, we use a subset of Pauli operators \\(\\{B_j\\}\subset \\{I,X,Y,Z\\}^{\otimes N}\\). Using some output function F, output \\(y_i=y(x_i,\theta)\\) is defined to be \\(y(x_i,\theta)\equiv F(\\{\langle B_j(x_i,\theta)\rangle\\})\\).
- Minimize the cost function \\(L(f(x_i),y(x_i,\theta))\\) of the teacher \\(f(x_i)\\) and the output \\(y_i\\), by tuning the circuit parameters \\(\theta\\) iteratively.
- Evaluate the performance by checking the cost function with respect to a data set that is taken independently from the training one.

In the first step, encoding classical data into quantum state is still a bottleneck in quantum computing, especially when the algorithm needs huge input data. So QCL may be of better use where the input is quantum, i.e. quantum learning. And in this algorithm, it tunes \\(\theta\\) using the measurement results \\(y(x_i,\theta)\\) to minimize the cost function \\(L\\), where lies the similarity to the classical learning tasks.

The differences between QCL and other frameworks are omitted here.

The remaining contents of this QCL paper can be divided into two parts: ability of quantum circuit to approximate functions, and details about optimization procedure.

<a name='approfunc'></a>Approximate function
---

1. one-dimension input

One-dimension means the quantum state are N qubits.

Let \\(x\\) and \\(\rho_{in}=\|\psi_{in}(x)\rangle\langle\psi_{in}(x)\|\\) be an input data and a corresponding density operator of input state. \\(\rho_{in}(x)\\) can be expanded by a set of Puali operators \\(\\{P_k\\}=\\{I,X,Y,Z\\}^{\otimes N}\\) with \\(a_k(x)\\) as coeeficients, 

$$\rho_{in}(x)=\sum_k a_k (x) P_k$$


<a name='optipro'></a>Optimization procedure
---


Swap Test
===

As shown in [this lecture](https://staff.fnwi.uva.nl/m.walter/physics491/lecture10.pdf), the swap(fredkin) operator \\(F:\|xy\rangle\mapsto\|yx\rangle\\) is firstly proved to be completely equivalent to performing the projective measurement \\(\\{P_0, P_1\\}\\).

![SWAP](https://github.com/Raycosine/raycosine.github.io/blob/master/_images/Controlled-swap-gate.PNG?raw=true)

The quantum state right after the first dashed line is equal to
\\(\frac{1}{\sqrt{2}}(\|0\rangle_B \otimes \|\Psi\rangle_A + \|1\rangle_B\otimes F\|\Psi\rangle_A)\\).

And after the second Hadamard gate, we obtain \\(\|0\rangle_B \otimes \Pi_2 \|\Psi\rangle_A+\|1\rangle_B\otimes(\mathbb{I}- \Pi_2)\|\Psi\rangle_A \\), where \\(\Pi_2\\) is the projector onto symmetric subspace and for \\(n=2\\) qubits, \\(\Pi_2=P_1\\), \\(\mathbb{I}-\Pi_2=P_0\\).

>\\(P_0=\|0\rangle\langle 0\|+\|+\rangle\langle +\|+\|-\rangle\langle -\|\\), \\(P_1=\|1\rangle\langle 1\|+\|+\rangle\langle +\|+\|-\rangle\langle -\|\\) (standard spin-1 basis)

The last NOT gate simply relabels \\(\|0\rangle_B \leftrightarrow \|1\rangle_B\\) and leads to the state

$$|1\rangle_B\otimes P_1|\Psi\rangle_A + |0\rangle_B\otimes P_0|\Psi\rangle_A$$

Thus, the probability of getting outcome \\(j\\) is equal to \\(\langle \Psi_A\| P_j \|\Psi_A\rangle\\).

