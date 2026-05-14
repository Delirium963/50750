# Analizador Sintáctico ANTLR4 - Gramática de Tableros

Analizador sintáctico completo implementado con ANTLR4 que interpreta una gramática EBNF personalizada para tableros de análisis. El analizador realiza análisis léxico, sintáctico y semántico, generando tablas de tokens, árboles de derivación y validación de referencias.

## Características

✅ **Análisis Léxico**: Generación de tabla de tokens con lexemas, tipos, líneas y columnas
✅ **Análisis Sintáctico**: Árbol de derivación en formato ASCII y JSON
✅ **Análisis Semántico**: Validación de referencias y tabla de símbolos
✅ **Manejo Robusto de Errores**: Detección de errores léxicos y sintácticos sin interrupciones
✅ **Recuperación de Errores**: Continúa el análisis incluso después de detectar errores
✅ **Visualización Clara**: Salida formateada con tablas ASCII y JSON indentado

## Instalación

### Requisitos
- Node.js 12.x o superior
- NPM 6.x o superior

### Pasos

1. **Instalar dependencias:**
```bash
cd "C:\Users\javie\OneDrive\Escritorio\Analizador"
npm install
```

2. **Verificar instalación:**
```bash
node src/index.js --help
```

## Uso

### Analizar un archivo

```bash
node src/index.js <ruta-archivo>
```

### Ejemplos

**Análisis exitoso (ejemplo correcto):**
```bash
node src/index.js ejemplos/ejemplo1-correcto.txt
```

**Análisis con error léxico:**
```bash
node src/index.js ejemplos/ejemplo3-error-lexico.txt
```

**Análisis con error sintáctico:**
```bash
node src/index.js ejemplos/ejemplo4-error-sintactico.txt
```

### Ejecutar todas las pruebas

```bash
npm test
```

O directamente:
```bash
node test.js
```

## Estructura del Proyecto

```
Analizador/
├── gramatica/
│   └── Tablero.g4                    # Gramática ANTLR4
├── parser-gen/                        # Archivos generados por ANTLR4
│   ├── TableroLexer.js
│   ├── TableroParser.js
│   ├── TableroListener.js
│   └── TableroVisitor.js
├── src/
│   ├── index.js                       # CLI e integrador principal
│   ├── analizador.js                  # Orquestador de análisis
│   ├── visitante.js                   # Análisis semántico
│   ├── errores.js                     # Manejador de errores personalizado
│   └── utilitarios.js                 # Funciones de visualización
├── ejemplos/
│   ├── ejemplo1-correcto.txt          # Dashboard de ventas (sintaxis correcta)
│   ├── ejemplo2-correcto.txt          # Reporte de análisis (sintaxis correcta)
│   ├── ejemplo3-error-lexico.txt      # Ejemplo con error léxico
│   └── ejemplo4-error-sintactico.txt  # Ejemplo con error sintáctico
├── test.js                            # Script de pruebas automatizado
├── package.json                       # Dependencias del proyecto
└── README.md                          # Este archivo
```

## Gramática Soportada

### Estructura General

```
programa       ::= "tablero" ID "{" { elemento } "}"
elemento       ::= fuente | metrica | grafico | filtro | alerta
```

### Elementos

**Fuente (Data source):**
```
fuente ID tipo (csv | api | json) ruta CADENA;
```

**Métrica (Aggregation):**
```
metrica ID = (suma | promedio | maximo | minimo | contar) ( campo );
```

**Gráfico (Visualization):**
```
grafico ID { tipo = (barras | lineas | torta | tabla); usar = ID; }
```

**Filtro (Data filtering):**
```
filtro campo OPERADOR valor;
```
- Operadores: `==`, `!=`, `>`, `<`, `>=`, `<=`

**Alerta (Condition alert):**
```
alerta si ID OPERADOR valor entonces CADENA;
```

## Salida del Análisis

El analizador genera la siguiente información:

### 1. Tabla de Lexemas - Tokens
Tabla ASCII con columnas:
- **#**: Número de token
- **LEXEMA**: Texto del token
- **TIPO**: Tipo de token (palabra clave, identificador, operador, etc.)
- **LÍNEA**: Número de línea
- **COLUMNA**: Número de columna

### 2. Árbol de Derivación (ASCII)
Representación indentada del árbol sintáctico:
```
├─ programa
  ├─ TABLERO
  ├─ ID
  ├─ LBRACE
  ├─ elemento
  ...
```

### 3. Árbol de Derivación (JSON)
Estructura JSON del árbol sintáctico para procesamiento programático:
```json
{
  "tipo": "no_terminal",
  "nombre": "programa",
  "hijos": [...]
}
```

### 4. Tabla de Símbolos
Registros de:
- **Fuentes**: ID, tipo, ruta
- **Métricas**: ID, función de agregación, campo
- **Gráficos**: ID, tipo, métrica utilizada
- **Filtros**: Campo, operador, valor
- **Alertas**: Métrica, operador, valor, mensaje

### 5. Errores Detectados
- **Errores Léxicos**: Caracteres no reconocidos (línea, columna, mensaje)
- **Errores Sintácticos**: Estructura incorrecta (línea, columna, token esperado vs encontrado)
- **Errores Semánticos**: Referencias no definidas, tipos incompatibles

## Ejemplos de Entrada

### Ejemplo 1: Dashboard de Ventas (Correcto)

```
tablero ventas_dashboard {
    fuente datos_csv tipo csv ruta "data/ventas.csv";
    
    metrica total_ventas = suma(cantidad);
    metrica promedio_precio = promedio(precio);
    
    grafico grafico_barras {
        tipo = barras;
        usar = total_ventas;
    }
    
    filtro categoria == "electrónica";
    filtro precio >= "1000";
    
    alerta si total_ventas > "50000" entonces "Se superó el límite de ventas";
}
```

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

