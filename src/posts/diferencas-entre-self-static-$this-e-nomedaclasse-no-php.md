---
layout: 'base.njk'
title: 'Diferenças entre self, static, $this e NomeDaClasse no PHP'
prelude: 'Estas palavras especificam meios de referenciar e chamar métodos quando utilizando o conceito de classes no php, e pode nos deixar em dúvida sobre quando utilizá-los. Caso não conhecia todos, acompanhe este artigo.'
photo: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
date: '2024-12-01'
by: 'Lucas Scemist'
byPhoto: 'https://avatars.githubusercontent.com/u/68157089?s=150&u=abcbbc919c91cf2cd6f4bc5cb11c6db02c5f8a48&v=4'
byLink: 'https://www.linkedin.com/in/scemist'
tags:
  - PHP
  - Programação
topics:
  - Uso do $this
  - Uso do NomeDaClasse
  - Uso do self
  - Uso do static
  - Comparação
  - Quando Usar Cada Um?
icon: sparkles
---

No PHP, as palavras `self`, `static`, `$this` e `NomeDaClasse` desempenham papéis importantes no contexto de orientação a objetos. Cada uma delas tem seu uso e comportamento específicos, dependendo do contexto. Vamos explorar as diferenças e entender como utilizá-las.

# Uso do **$this**

O **$this** é uma variável especial que faz referência **à instância atual de um objeto**. Ele é usado dentro de métodos não estáticos para acessar as propriedades e métodos da instância.

- Só está disponível dentro de métodos **não estáticos**.
- Refere-se ao objeto que invocou o método.

```php
class Pessoa
{
    private string $nome;

    public function __construct(string $nome)
	{
        $this->nome = $nome; # Acessa a propriedade do objeto atual
    }

    public function dizerOla(): string
	{
        return "Olá, meu nome é {$this->nome}";
    }
}

$pessoa = new Pessoa('João');
echo $pessoa->dizerOla(); # Olá, meu nome é João
```

# Uso do **Nome da Classe**

O próprio **nome da classe** pode ser usado para acessar métodos ou propriedades estáticos, bem como instanciar objetos.

- Pode ser usado diretamente com `::` para acessar membros estáticos.
- Ajuda a criar instâncias ou acessar constantes de uma classe específica.

```php
class Mamifero
{
    public static string $tipo = 'mamíferos';

    public static function descricao(): string
    {
        return 'Os ' . self::$tipo . ' são incríveis.';
    }
}

echo Mamifero::$tipo; # Saída: mamíferos
echo Mamifero::descricao(); # Saída: Os mamíferos são incríveis.

```

# Uso do **self**

A palavra-chave **self** é usada para acessar métodos ou propriedades estáticos **dentro da própria classe onde foi declarada**.

- Faz referência **à classe atual onde está sendo usada**.
- Não respeita herança (o método ou propriedade é resolvido na classe onde está escrito).
- É usada para acessar elementos estáticos.

```php
class Exemplo
{
    public static string $atributo = 'Olá, mundo!';

    public static function mostrarAtributo(): string
	{
        return self::$atributo; # Acessa diretamente o atributo estático
    }
}

echo Exemplo::mostrarAtributo(); # Saída: Olá, mundo!
```

# Uso do **static**

Assim como o **self**, a palavra-chave **static** também é usada para acessar métodos ou propriedades estáticos, mas **respeita o contexto de herança**. Ou seja, quando chamada em uma classe filha, resolve os métodos ou propriedades no contexto dessa classe.

- Permite comportamento dinâmico em classes herdadas.
- Ideal para cenários onde queremos que métodos ou propriedades sejam resolvidos com base na classe que está chamando.

```php
class Base
{
    public static function mostrarClasse(): string
    {
        return static::class; # Respeita o contexto dinâmico
    }
}

class Filha extends Base {}

echo Base::mostrarClasse(); # Saída: Base
echo Filha::mostrarClasse(); # Saída: Filha
```


# Comparação Entre as Palavras

| Palavra           | Contexto                | Respeita Herança? | Usada para?                                  |
|-------------------|-------------------------|-------------------|----------------------------------------------|
| `$this`           | Instância atual         | N/A               | Propriedades e métodos da instância.         |
| `NomeDaClasse`    | Classe específica       | Não               | Acessar métodos/atributos ou instanciar.     |
| `self`            | Classe atual            | Não               | Métodos e propriedades estáticos da classe.  |
| `static`          | Classe chamada          | Sim               | Métodos e propriedades estáticos dinâmicos.  |

# Quando Usar Cada Um?

- **`$this`**: Sempre que você está trabalhando com uma instância e precisa acessar suas propriedades ou métodos.
- **`ClassName`**: Quando quer acessar diretamente um método ou atributo de uma classe específica.
- **`self`**: Quando você quer se referir estritamente à classe onde o método ou propriedade foi declarado, sem considerar herança.
- **`static`**: Quando você deseja que a resolução seja feita de forma dinâmica, respeitando a classe que está sendo usada.

Compreender essas palavras é fundamental para tirar proveito total dos recursos de orientação a objetos no PHP. Usá-las de forma correta ajuda a escrever códigos mais organizados, reutilizáveis e de fácil manutenção.