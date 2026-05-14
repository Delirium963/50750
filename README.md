# Analizador Sintáctico ANTLR4

Este proyecto implementa un analizador sintáctico para una gramática usando ANTLR4 y Node.js.

## Instalar desde GitHub

```bash
git clone https://github.com/Delirium963/50750.git
cd 50750
npm install
```

## Requisitos

- Node.js 12.x o superior
- NPM 6.x o superior

## Ejecución

### Analizar archivos de ejmplo

```bash
node src/index.js ejemplos/ejemplo1-correcto.txt
```

```bash
node src/index.js ejemplos/ejemplo2-correcto.txt
```

```bash
node src/index.js ejemplos/ejemplo3-error-lexico.txt
```

```bash
node src/index.js ejemplos/ejemplo4-error-sintactico.txt
```
