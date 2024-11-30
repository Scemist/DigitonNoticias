---
layout: 'base.njk'
title: 'Operadores de Comparação Avançados no PHP'
prelude: 'Ester artigo apresentará os operadores do PHP e como se comportam, incluindo os ? :, ?:, ??, ??=, <=> e ?->'
photo: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
date: '2024-11-30'
by: 'Lucas Scemist'
byPhoto: 'https://avatars.githubusercontent.com/u/68157089?s=150&u=abcbbc919c91cf2cd6f4bc5cb11c6db02c5f8a48&v=4'
byLink: 'https://www.linkedin.com/in/scemist'
tags:
  - Programação
  - PHP
topics:
  - "(? :) Ternary Operator"
  - (?:) Elvis Operator / Short Ternary Operator
  - (??) Null Coalesce Operator
  - (??=) Null Coalesce Assignment Operator
  - (<=>) Spaceship Operator
  - (?->) Nullsafe Operator
  - Conclusão
icon: sparkles
---

Os operadores condicionais no PHP, como o ternário, Elvis, null coalesce e spaceship, são ferramentas poderosas que permitem escrever código de forma mais concisa e legível. Eles ajudam a evitar estruturas complexas como if-else, tornando o código mais enxuto e direto. Além disso, esses operadores são ideais para atribuições rápidas, validação de valores padrão e comparações eficientes, contribuindo para a manutenção e clareza do código.

# Ternary Operator

```php
$estaChovendo = true;

echo ($estaChovendo === true)
	? 'Está Chovendo'
	: 'Não Está Chovendo';

# Está Chovendo
```

O Ternary Operator (operador ternário) é extremamente versátil. Ele permite avaliar uma condição e retornar valores diferentes dependendo do resultado da comparação. Apesar de sua flexibilidade, em alguns casos há alternativas mais concisas. Disponível desde o php 4.0.

A lógica é a seguinte: `(condicao) ? valor_se_true : valor_se_false`

> Dica: Os parênteses em torno da condição são opcionais, mas podem ajudar na legibilidade do código.

# Elvis Operator / Short Ternary Operator

```php
$clima = 'Está Chovendo';

echo $dia['clima'] ?: $clima ?: 'Não Sabemos o Clima';

# Está Chovendo
```

O Elvis Operator ou Short Ternary Operator é uma versão simplificada do operador ternário. Ele avalia se o valor da esquerda é "truthy" (verdadeiro) e o retorna. Caso contrário, retorna o valor da direita. É útil para verificar valores e definir padrões com menos código. Disponível desde o php 5.3.

> Dica: Esse operador resultará em **erro** se a variavel ou chave for indefinida, se houver essa possibilodidade, o operador Null Coalesce é uma melhor escolha.

# Null Coalesce Operator

```php
$clima = [];

echo $clima['descricao'] ?? 'Não há descrição de clima';

# Não há descrição de clima
```

O Null Coalesce Operator (operador de coalescência nula) verifica se um valor existe e não é nulo. Caso contrário, retorna um valor padrão. É útil para acessar valores em arrays ou objetos sem causar erros ao acessar índices ou propriedades inexistentes.  Disponível desde o php 7.0.

> Este operador é seguro para chaves não definidas, sendo ideal para verificar valores em arrays sem se preocupar.

# Null Coalesce Assignment Operator

```php
$clima = [];

$clima['descricao'] ??= 'O clima está ameno';

echo $clima['descricao'];

# O clima está ameno
```

O Null Coalesce Assignment Operator combina a funcionalidade de coalescência nula com uma atribuição. Se a chave ou variável não existir ou for nula, ela será inicializada com o valor fornecido. Disponível desde o php 7.4.

> Nota: Este operador é ideal para atribuições padrão, economizando linhas de código.

# Spaceship Operator

```php
$valor1 = 'chuva';
$valor2 = 'sol';

echo $valor1 <=> $valor2;

# -1
```

O Spaceship Operator (<=>) realiza uma comparação tripla e é muito útil para ordenar arrays ou realizar comparações complexas de forma compacta, em funções de callback. Disponível desde o php 7.0.

- Retorna **-1** se o valor da esquerda for menor que o da direita.
- Retorna **0** se os valores forem iguais.
- Retorna **1** se o valor da esquerda for maior que o da direita.


# Nullsafe Operator

```php
$cidade = null;

echo $cidade?->clima?->temperatura;

# null
```

O Nullsafe Operator (?->) permite acessar propriedades ou métodos de um objeto de forma segura, sem gerar erros caso o objeto seja null. Em vez de verificar manualmente se a variável é nula antes de acessar suas propriedades ou métodos, você pode usar o ?-> para retornar null automaticamente se o objeto for nulo, evitando exceções. Disponível desde o php 8.0.

> **Nota:** Embora não seja um operador de comparação, o ?-> é útil para simplificar o código ao acessar propriedades e métodos de objetos, evitando verificações explícitas de nulidade, como **if ($objeto !== null)**.

# Conclusão

Esses operadores fornecem formas concisas e poderosas de escrever código, reduzindo a necessidade de **if** e outras estruturas condicionais. Escolher o operador correto depende do contexto, mas entender suas diferenças é essencial para usá-los de forma eficaz.