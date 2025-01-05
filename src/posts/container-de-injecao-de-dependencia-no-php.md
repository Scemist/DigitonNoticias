---
layout: 'base.njk'
title: 'Container de Injeção de Depedências no PHP'
prelude: 'Este artigo descreve como criar um container DI básico em PHP para resolver automaticamente dependências.'
photo: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
date: '2025-01-04'
by: 'Lucas Scemist'
byPhoto: 'https://avatars.githubusercontent.com/u/68157089?s=150&u=abcbbc919c91cf2cd6f4bc5cb11c6db02c5f8a48&v=4'
byLink: 'https://www.linkedin.com/in/scemist'
tags:
  - PHP
  - Programação
topics:
  - O que é Reflection no PHP?
  - Criando um Container DI
  - Utilização Prática
  - Conclusão
icon: sparkle
---

A injeção de dependências (Dependency Injection, DI) é uma técnica amplamente utilizada para promover baixo acoplamento e aumentar a flexibilidade e testabilidade do código. Um container de injeção de dependências ajuda a gerenciar e resolver dependências automaticamente, simplificando a construção de objetos complexos.

# O que é Reflection no PHP?

Reflection é uma funcionalidade nativa do PHP que permite inspecionar classes, métodos, propriedades e parâmetros em tempo de execução. Este conceito não faz parte da Injeção de Dependências, mas é a ferramenta do PHP que nos possíbilita essa implantação. Com ela, podemos inspecionar classes, objetos e parâmetros e determinar quais objetos precisam ser instanciados com base nos tipos definidos nos parâmetros dos métodos ou construtores.

Por exemplo, o `ReflectionClass` pode ser usado para analisar uma classe, enquanto `ReflectionMethod` e `ReflectionParameter` permitem inspecionar métodos e seus argumentos.

# Criando um Container DI

Criamos uma interface que especificará que qualquer resolver precisará ter um método chamado resolve.

```php
<?php

class Container
{
    public function resolve(string $class)
    {
        $reflectionClass = new ReflectionClass($class);
        $this->ensureClassIsInstantiable($reflectionClass);
        $constructor = $reflectionClass->getConstructor();

        if (!$constructor)
            return $this->instantiateClassWithoutConstructor($reflectionClass);

        return $this->instantiateClassWithConstructor($reflectionClass, $constructor);
    }

    private function ensureClassIsInstantiable(ReflectionClass $reflectionClass)
    {
        if (!$reflectionClass->isInstantiable())
            throw new Exception("Class {$reflectionClass->getName()} is not instantiable.");
    }

    private function instantiateClassWithoutConstructor(ReflectionClass $reflectionClass)
    {
        return $reflectionClass->newInstance();
    }

    private function instantiateClassWithConstructor(
        ReflectionClass $reflectionClass,
        ReflectionMethod $constructor
    ) {
        $parameters = $constructor->getParameters();
        $dependencies = $this->resolveDependencies($parameters);

        return $reflectionClass->newInstanceArgs($dependencies);
    }

    private function resolveDependencies(array $parameters): array
    {
        return array_map(
            fn($parameter) => $this->resolveDependency($parameter),
            $parameters
        );
    }

    private function resolveDependency(ReflectionParameter $parameter)
    {
        $this->ensureParameterIsInstantiable($parameter);

        return $this->resolve($parameter->getType()->getName());
    }

    private function ensureParameterIsInstantiable(ReflectionParameter $parameter)
    {
        $type = $parameter->getType();

        if (!$type || $type->isBuiltin())
            throw new Exception("Cannot resolve param {$parameter->getName()} of type {$type}.");
    }
}
```

# Utilização Prática

Aqui nós queremos instanciar um usuário, que tem como dependencia o banco de dados, que por sua vez, tem uma dependencia de um driver.

```php
class MySQLDriver {}

class Database
{
    public function __construct(private MySQLDriver $mySqlDriver) {}
}

class Usuario
{
    public function __construct(private Database $database)
    {
        echo 'Usuário instanciado com dependência de Database.';
    }
}
```
Que com o container, podemos utilizar o container para resolver a dependência do banco de dados sem nunca ter que ter instanciado manualmente

```php
$container = new Container();
$usuario = $container->resolve(Usuario::class);
var_dump($usuario);

# Usuário instanciado com dependência de Database.
#
# object(Usuario)#5 (1) {
#     ["database":"Usuario":private]=>
#         object(Database)#9 (1) {
#             ["mySqlDriver":"Database":private]=>
#                 object(MySQLDriver)#11 (0) {
#                 }
#         }
# }
```

### Conclusão

Este é um exemplo básico que serve para ilustrar o conceito e funcionamento de um container de injeção de dependências. Antes de ser utilizado em produção, ele precisará de muitas melhorias, como suporte a interfaces, ciclos de dependência e resolução de tipos nativos. É importante que os parâmetros dos construtores estejam estritamente tipados com classes ou interfaces para que o container consiga encontrar as dependências automaticamente. Vale lembrar que tipos nativos, como int ou string, não são resolvidos automaticamente e exigiriam mais algumas implantações.