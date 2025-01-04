---
layout: 'base.njk'
title: 'Tipos de Herança no PHP (extends, implements, trait, abstract...)'
prelude: 'No PHP, a herança pode ser alcançada de diversas maneiras usando extends, traits, interfaces, e classes abstratas.'
photo: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
date: '2024-11-30'
by: 'Lucas Scemist'
byPhoto: 'https://avatars.githubusercontent.com/u/68157089?s=150&u=abcbbc919c91cf2cd6f4bc5cb11c6db02c5f8a48&v=4'
byLink: 'https://www.linkedin.com/in/scemist'
tags:
  - PHP
  - Programação
topics:
  - 1. Herança Simples (extends)
  - 2. Traits (use)
  - 3. Interfaces (implements)
  - 4. Classes Abstratas (extends)
  - 5. Prevenindo Herança ou Sobrescrita com Final
  - Conclusão
icon: sparkle
---

A herança é um dos pilares da programação orientada a objetos, permitindo que classes compartilhem atributos e métodos de outras classes. No PHP, a herança pode ser alcançada de diversas maneiras usando `extends`, `traits`, `interfaces`, e classes abstratas. Este artigo explora os diferentes tipos de herança no PHP e como utilizá-los de forma eficaz.

## 1. Herança Simples (extends)

A palavra-chave `extends` é usada para criar uma classe que herda atributos e métodos de outra classe. Essa abordagem é útil quando há uma relação natural de "é um" entre a classe base e a classe derivada. Por exemplo, um "UsuarioPremium" pode ser uma extensão de "Usuario".

```php
class Usuario
{
    public function __construct(protected string $nome) {}

    public function obterNome(): string
    {
        return $this->nome;
    }
}

class UsuarioPremium extends Usuario {}

$usuario = new UsuarioPremium('Einstein');
echo $usuario->obterNome();
```

Ao usar `extends`, a classe filha pode sobrescrever métodos da classe pai para fornecer comportamentos específicos.

> Nota: O PHP não suporta herança múltipla diretamente, então uma classe só pode estender uma única classe.

## 2. Traits (use)

Traits permitem que você reutilize código em várias classes, resolvendo o problema da falta de herança múltipla no PHP. Eles são especialmente úteis para encapsular funcionalidades que não se encaixam bem em uma hierarquia de classes tradicional.

```php
trait Autenticacao
{
    public function autenticar(string $usuario, string $senha): bool
    {
        return $usuario === 'admin' && $senha === '123';
    }
}

class Usuario
{
    use Autenticacao;
}

class Admin
{
    use Autenticacao;
}

$admin = new Admin();
$admin->autenticar('admin', '123');
```

Com `traits`, é possível adicionar métodos compartilhados em diferentes classes sem duplicação de código. Além disso, é possível resolver conflitos entre métodos de diferentes traits usando as palavras-chave `insteadof` e `as`.

> Nota: Traits podem conter métodos abstratos que devem ser implementados pelas classes que os utilizam.

## 3. Interfaces (implements)

Interfaces definem contratos claros que uma classe deve seguir. Elas especificam os métodos que uma classe deve implementar, mas não fornecem nenhuma implementação concreta.

```php
interface Notificacao
{
    public function enviar(string $mensagem): void;
}

class EmailNotificacao implements Notificacao
{
    public function enviar(string $mensagem): void
    {
        echo "Enviando email: $mensagem";
    }
}

class SmsNotificacao implements Notificacao
{
    public function enviar(string $mensagem): void
    {
        echo "Enviando SMS: $mensagem";
    }
}
```

Ao implementar uma interface, você garante que sua classe fornecerá as funcionalidades esperadas. Isso é particularmente útil em cenários onde múltiplas classes precisam compartilhar a mesma interface para interoperabilidade.

> Nota: Uma classe pode implementar várias interfaces ao mesmo tempo, o que promove flexibilidade no design do código.

## 4. Classes Abstratas (extends)

Classes abstratas são uma combinação entre interfaces e classes concretas. Elas podem definir métodos e atributos comuns para as classes que as herdam, mas também podem forçar a implementação de métodos específicos nas classes filhas.

```php
abstract class Usuario
{
    public function __construct(protected string $nome) {}

    abstract public function obterTipo(): string;

    public function obterNome(): string
    {
        return $this->nome;
    }
}

class UsuarioComum extends Usuario
{
    public function obterTipo(): string
    {
        return 'Comum';
    }
}

class UsuarioPremium extends Usuario
{
    public function obterTipo(): string
    {
        return 'Premium';
    }
}
```

Ao usar classes abstratas, você pode fornecer uma implementação parcial e exigir que as subclasses forneçam os detalhes restantes. Classes abstratas são ideais para cenários onde há um comportamento geral compartilhado entre classes, mas cada classe derivada precisa de uma implementação personalizada para certos aspectos.

> Nota: Classes abstratas não podem ser instanciadas diretamente. Elas servem apenas como base para outras classes.

## 5. Prevenindo Herança ou Sobrescrita com Final

A palavra-chave `final` é usada para prevenir que uma classe seja herdada ou que um método específico seja sobrescrito. Isso é útil quando você deseja proteger a integridade de uma funcionalidade ou garantir que certos aspectos do código permaneçam inalterados.

```php
final class Configuracao
{
    public function obterConfiguracao(): array
    {
        return ['tema' => 'escuro', 'idioma' => 'pt-BR'];
    }
}

# Isso causará um erro:
# class NovaConfiguracao extends Configuracao {}
```

```php
class Usuario
{
    final public function obterSaudacao(): string
    {
        return 'Bem-vindo!';
    }
}

class UsuarioAvancado extends Usuario
{
    # Isso causará um erro
    # public function obterSaudacao(): string
    # {
    #     return 'Olá!';
    # }
}
```

Por exemplo, você pode usar `final` em uma classe que implementa regras críticas de negócio, garantindo que essas regras não sejam modificadas em subclasses.

## Conclusão

O PHP oferece diversas maneiras de implementar herança, desde a simples extensão de classes até o uso de traits, interfaces e classes abstratas. Escolher a abordagem correta depende das necessidades do seu projeto e do design do seu código. Use herança com cuidado para evitar códigos excessivamente acoplados e para promover a reutilização e manutenção do código.
