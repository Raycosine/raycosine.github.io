---
layout: post
title:  "A Brief Note on Quantum Circuit Learning"
categories: quantum
tags: note paper-reading quantum-circuit-learning
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

### One-dimensional Input

One-dimension means the quantum state are N qubits.

Let \\(x\\) and \\(\rho_{in}=\|\psi_{in}(x)\rangle\langle\psi_{in}(x)\|\\) be an input data and a corresponding density operator of input state. \\(\rho_{in}(x)\\) can be expanded by a set of Pauli operators \\(\\{P_k\\}=\\{I,X,Y,Z\\}^{\otimes N}\\) with \\(a_k(x)\\) as coefficients,

$$\rho_{in}(x)=\sum_k a_k (x) P_k$$

A parameterized unitary transformation \\(U(\theta)\\) acting on \\(\rho_{in}(x)\\) creates the output state, \\(b_m(x,\theta)=\sum_k u_{mk}(\theta) a_k(x)\\). Thus the output can be considered as a linear combination of the input coefficient functions \\(a_k\\) under unitarity constraints imposed on \\(\\{u_{ij}\\}\\).

### Approximate Analytical Function
If f(x) is an analytical function, QCL can approximate it by single-qubit rotations with input state as

$$\rho_{in}(x)=\frac{1}{2^N} \otimes_{i=1}^N [I+xX_i+\sqrt{1-x^2} Z_i]$$

This state can be generated for any \\(x\in [-1,1]\\) with single-qubit rotations, namely, \\(\Pi_{i=1}^N R_i^Y (sin^{-1} x)\\). And \\(I+xX_i+\sqrt{1-x^2} Z_i=R_y(sin^{-1}x)\|0\rangle\langle 0\|R_y^\dagger(sin^{-1}x)\\).

An arbitrary $N$th order polynomial is corresponding to an expectation value of an observable applied on such a state, which is generated to an arbitrary unitary transformation.

Since \\(U(\theta)\\) is unitary, the parameter \\(u_i\\) can prevents overfitting if we use the L2 regularization in cost function.

For me, two questions are left open:
- Why terms like \\(x\sqrt{1-x^2}\\) can enhance its ability to approximate a function?
- Details about extracting \\(x^N\\) from \\(\rho_{in}(x)\\) by entangling gate?

### Multi-dimensional Input

Assume that the input data is d-dimensional, \\(x=\\{x_1,x_2,...,x_d\\}\\). And we want higher terms up to the \\(n_k\\)th (k=1,2,...,d) for each data. The polynomial being approximated is multi-variable \\((x_1, x_2, ..., x_d)\\) and each variable \\(x_k\\) has higher terms up to \\(n_k\\).

### Approximate complex function

Since we can use unlimited resource in the learning process of QCL. For learning the relation between inputs and outputs of a quantum circuit, QCL has the potential power to represent more complex functions than the classical counterpart. But further investigations are needed including the learning costs and which actual learning problem enjoys such an advantage.

<a name='optipro'></a>Optimization procedure
---

In quantum variational eigensolver (QVE) algorithm, it has been suggested to use gradient-free methods. But gradient-based methods are generally more preferred when the parameter space becomes large.

### Calculate a gradient of an expectation value


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
