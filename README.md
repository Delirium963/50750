# Analizador Sintáctico ANTLR4

Este proyecto implementa un analizador sintáctico para una gramática usando ANTLR4 y Node.js.

## Instalar desde GitHub

git clone https://github.com/Delirium963/50750.git
cd 50750
npm install

## Requisitos

- Node.js 12.x o superior
- NPM 6.x o superior

## Ejecución

### Analizar un archivo

```bash
node src/index.js <ruta-archivo>
```

### Ejemplo con un archivo de prueba

```bash
node src/index.js ejemplos/ejemplo1-correcto.txt
```

### Analizar ejemplos con errores

```bash
node src/index.js ejemplos/ejemplo3-error-lexico.txt
node src/index.js ejemplos/ejemplo4-error-sintactico.txt
```

## Scripts disponibles

```bash
npm test
npm run analyze -- ejemplos/ejemplo1-correcto.txt
```

## Estructura del repositorio

- `package.json` – dependencias y scripts
- `src/index.js` – punto de entrada principal
- `parser-gen/` – archivos generados por ANTLR4
- `ejemplos/` – archivos de ejemplo para análisis
- `README.md` – documentación del proyecto

## Notas

- Solo debe existir un `README.md` en este proyecto.
- El comando `git clone` descarga el repositorio remoto a tu equipo y luego puedes instalar dependencias con `npm install`.

**Salida esperada:** ✓ Análisis exitoso sin errores

### Ejemplo 3: Error Léxico

```
tablero dashboard_error {
    filtro precio @@ "100";  <!-- @@ no es operador válido -->
}
```

**Salida esperada:** ❌ Error léxico en línea 2, columna X
- Mensaje: "token recognition error at '@@'"

### Ejemplo 4: Error Sintáctico

```
tablero dashboard_sintaxis {
    metrica total = suma(cantidad)  <!-- Falta punto y coma -->
    
    grafico mi_grafico {
        tipo = barras
        usar = total;
    }
}
```

**Salida esperada:** ❌ Error sintáctico
- Línea 2: "Falta ';' después de metrica"
- Línea 4: "Falta ';' en grafico"

## Flujo de Análisis

```
┌──────────────┐
│ Archivo TXT  │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│ Análisis Léxico  │
│  (Tokenización)  │
└──────┬───────────┘
       │
       ▼ (Tabla de Tokens)
┌──────────────────┐
│ Análisis         │
│ Sintáctico       │
└──────┬───────────┘
       │
       ▼ (Árbol de Derivación)
┌──────────────────┐
│ Análisis         │
│ Semántico        │
└──────┬───────────┘
       │
       ▼ (Tabla de Símbolos, Errores Semánticos)
┌──────────────────┐
│ Reportes         │
│ Finales          │
└──────────────────┘
```

## Manejo de Errores

### Sin Interrupción

El analizador utiliza un `ErrorListener` personalizado que:
- Acumula errores en listas en lugar de lanzar excepciones
- Continúa el análisis incluso después de detectar errores
- Permite detectar múltiples errores en una sola ejecución

### Tipos de Errores

1. **Error Léxico**: Caracteres o símbolos no reconocidos
2. **Error Sintáctico**: Estructura de código incorrecta
3. **Error Semántico**: Referencias a símbolos no definidos

## Validación Semántica

El visitante semántico valida:
- ✓ Toda métrica referenciada en un gráfico debe estar definida
- ✓ Toda métrica referenciada en una alerta debe estar definida
- ✓ Los campos utilizados son válidos
- ✓ Los operadores están soportados

## Requisitos de Compilación

- Java 8.x o superior (para generar el parser con ANTLR4)
- ANTLR 4.9.3 (compatible con Java 8)

### Regenerar el Parser

Si necesitas regenerar el parser después de cambiar `Tablero.g4`:

```bash
java -jar antlr-4.9.3-complete.jar -Dlanguage=JavaScript -visitor -listener -o parser-gen gramatica/Tablero.g4
```

## Especificación EBNF Completa

```ebnf
<programa> ::= "tablero" <identificador> "{" { <elemento> } "}";
<elemento> ::= <fuente> | <metrica> | <grafico> | <filtro> | <alerta>;
<fuente> ::= "fuente" <identificador> "tipo" <tipo_fuente> "ruta" <cadena> ";";
<tipo_fuente> ::= "csv" | "api" | "json";
<metrica> ::= "metrica" <identificador> "=" <agregacion> "(" <campo> ")";";
<agregacion> ::= "suma" | "promedio" | "maximo" | "minimo" | "contar";
<grafico> ::= "grafico" <identificador> "{" "tipo" "=" <tipo_grafico> ";" "usar" "=" <identificador> ";" "}";
<tipo_grafico> ::= "barras" | "lineas" | "torta" | "tabla";
<filtro> ::= "filtro" <campo> <operador> <valor> ";";
<operador> ::= "==" | "!=" | ">" | "<" | ">=" | "<=";
<alerta> ::= "alerta" "si" <identificador> <operador> <valor> "entonces" <cadena> ";";
<campo> ::= <identificador> {"." <identificador>};
<valor> ::= <cadena> | <numero> | <booleano>;
<booleano> ::= "verdadero" | "falso";
<identificador> ::= <letra> { <letra> | <digito> | "_" };
<cadena> ::= """ { <caracter> } """;
<numero> ::= <digito> { <digito> } [ "." <digito> { <digito> } ];
<caracter> ::= <letra> | <digito> | " " | "." | "," | ":" | "/" | "_" | "-";
<letra> ::= "a" | ... | "z" | "A" | ... | "Z";
<digito> ::= "0" | ... | "9";
```

## Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar análisis de un archivo
node src/index.js ejemplos/ejemplo1-correcto.txt

# Ejecutar todas las pruebas
npm test
node test.js

# Regenerar parser (requiere Java)
java -jar antlr-4.9.3-complete.jar -Dlanguage=JavaScript -visitor -listener -o parser-gen gramatica/Tablero.g4
```

## Limitaciones Conocidas

- Los valores literales se tratan como cadenas/números simples sin validación de tipo avanzada
- No se implementa ejecución real del tablero (ej: cálculos de agregaciones reales)
- La recuperación de errores es básica; no es tan sofisticada como compiladores comerciales

## Licencia

MIT

## Autor

Generado con ANTLR4 para análisis sintáctico de gramáticas personalizadas.

---

**Última actualización**: Mayo 2026
