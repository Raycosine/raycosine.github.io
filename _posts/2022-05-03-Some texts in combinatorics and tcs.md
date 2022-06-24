---
layout: post
title:  "Some texts in combinatorics and TCS"
categories: quantum
tags: note textbook-reading tcs combinatorics
author: wyj
date:   2022-05-03 3:30:00 -0700
---

I randomly found two texts in my `Study\Math\TCS` folder. I have no idea why I downloaded them last summer. The most possible reason is perhaps STOC2021. I never started reading. After a quick look, I now feel the need to read at least several chapters.

This post aims to keep a record of the "highlights" from my perspective and solutions to *a few* exercises. (I use the word *a few* because I'm pretty sure I won't do many :)

 It should be claimed at the beginning that I am neither expert at math nor tcs, so don't take my opinions serious. It's also very unformatted!

The texts are: 
- LINEAR ALGEBRA METHODS IN COMBINATORICS, L´aszl´o Babai and P´eter Frankl
- Extremal Combinatorics (with Applications in Computer Science), Stasys Jukna

## Table of contents
to be generated

## 1 Counting (aka very basic knowledge)

read on May 3, 2022

\\(A\oplus B\\)denotes symmetric difference \\((A\backslash B)\cup (B\backslash A)\\)

Permutation: reorder the items / 1-to-1 mapping

Prop 1.6, the formula of the number of all partitions of \\(n\\)objects with \\(k_i\\)\\(i\\)-element blocks, is shown in a different way (group theory) in Prop 1.1.1 of *The Symmetric Group* [Sagan2001]: 

> If \\(\lambda=(1^{m_1}, 2^{m_2}, ..., n^{m_n})\\)and \\(g\in S_n\\) has type \\(\lambda\\), then \\(\|Z_g\|\\) depends only on \\(\lambda\\) and
\\(z_\lambda \overset{def}{=}|Z_g|=1^{m_1} m_1! 2^{m_2} m_2! ... n^{m_n} m_n!\\)

Here \\(Z_g=\{h\in G: hgh^{-1} = g\}\\)is the centralizer of group \\(G\\). Counting the number of cosets of \\(Z_g\\)or \\(K_g\\), \\(\frac{\|G\|}{\|Z_g\|}\\)is what we want.

(1.12) first `=` : counted in a different way, second `=`: implied by (1.11).

Turán number looks unfamiliar

## 2 Advanced Counting

forbidden subgraph & circuit mapping??
2.3