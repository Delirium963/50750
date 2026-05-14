const fs = require('fs');
const antlr4 = require('antlr4');
const TableroLexer = require('../parser-gen/TableroLexer');
const TableroParser = require('../parser-gen/TableroParser');
const TableroVisitor = require('../parser-gen/TableroVisitor');

class AnalizadorErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.erroresLexico = [];
        this.erroresSintactico = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        if (recognizer.constructor.name === 'TableroLexer') {
            this.erroresLexico.push({
                tipo: 'ERROR LÉXICO',
                linea: line,
                columna: column,
                mensaje: msg,
                simbolo: offendingSymbol
            });
        } else {
            this.erroresSintactico.push({
                tipo: 'ERROR SINTÁCTICO',
                linea: line,
                columna: column,
                mensaje: msg,
                simbolo: offendingSymbol ? offendingSymbol.text : 'EOF'
            });
        }
    }

    obtenerErrores() {
        return {
            lexico: this.erroresLexico,
            sintactico: this.erroresSintactico,
            total: this.erroresLexico.length + this.erroresSintactico.length
        };
    }
}

function nombresTokens() {
    return {
        1: 'TABLERO',
        2: 'FUENTE',
        3: 'METRICA',
        4: 'GRAFICO',
        5: 'FILTRO',
        6: 'ALERTA',
        7: 'TIPO',
        8: 'RUTA',
        9: 'USAR',
        10: 'SI',
        11: 'ENTONCES',
        12: 'VERDADERO',
        13: 'FALSO',
        14: 'SUMA',
        15: 'PROMEDIO',
        16: 'MAXIMO',
        17: 'MINIMO',
        18: 'CONTAR',
        19: 'CSV',
        20: 'API',
        21: 'JSON_',
        22: 'BARRAS',
        23: 'LINEAS',
        24: 'TORTA',
        25: 'TABLA',
        26: 'EQ',
        27: 'NE',
        28: 'GT',
        29: 'LT',
        30: 'GE',
        31: 'LE',
        32: 'ASSIGN',
        33: 'LPAREN',
        34: 'RPAREN',
        35: 'LBRACE',
        36: 'RBRACE',
        37: 'SEMICOLON',
        38: 'COMMA',
        39: 'DOT',
        40: 'QUOTE',
        41: 'ID',
        42: 'NUMERO',
        43: 'CADENA',
        44: 'WS'
    };
}

function generarTablaTokens(tokenStream) {
    const tokens = tokenStream.tokens;
    const tokenNames = nombresTokens();

    let tabla = '\n╔════════════════╦═══════════════════╦════════════════╗\n';
    tabla += '║ #              ║ LEXEMA            ║ TOKEN          ║\n';
    tabla += '╠════════════════╬═══════════════════╬════════════════╣\n';

    tokens.forEach((token, idx) => {
        if (token.type === antlr4.Token.EOF) return;

        const num = String(idx + 1).padEnd(14);
        const lexema = (token.text || '').substring(0, 17).padEnd(17);
        const tipo = (tokenNames[token.type] || 'DESCONOCIDO').substring(0, 15).padEnd(15);

        tabla += `║ ${num} ║ ${lexema} ║ ${tipo} ║\n`;
    });

    tabla += '╚════════════════╩═══════════════════╩════════════════╝\n';
    return tabla;
}

function nombreReglaParser(ruleIndex) {
    const reglas = [
        'programa', 'elemento', 'fuente', 'tipoFuente', 'metrica',
        'agregacion', 'grafico', 'tipoGrafico', 'filtro', 'operador',
        'alerta', 'campo', 'valor', 'booleano'
    ];

    return reglas[ruleIndex] || '';
}

function arbolAJSON(arbol) {
    if (!arbol) return null;

    if (arbol.getChildCount && arbol.getChildCount() === 0) {
        return {
            tipo: 'terminal',
            valor: arbol.getText ? arbol.getText() : arbol.toString()
        };
    }

    const hijos = [];
    if (arbol.getChildCount) {
        for (let i = 0; i < arbol.getChildCount(); i++) {
            hijos.push(arbolAJSON(arbol.getChild(i)));
        }
    }

    return {
        tipo: 'no_terminal',
        nombre: nombreReglaParser(arbol.getRuleIndex ? arbol.getRuleIndex() : -1),
        hijos: hijos
    };
}

class AnalizadorSemantico extends TableroVisitor {
    constructor() {
        super();
        this.tablaSimbolos = { fuentes: {}, metricas: {}, graficos: {}, filtros: [], alertas: [] };
        this.erroresSemanticos = [];
    }

    visitPrograma(ctx) {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const hijo = ctx.getChild(i);
            if (hijo.getRuleIndex && hijo.getRuleIndex() !== -1) {
                this.visit(hijo);
            }
        }
    }

    visitFuente(ctx) {
        const id = ctx.ID().getText();
        const tipo = ctx.tipoFuente().getText();
        const ruta = ctx.CADENA().getText().slice(1, -1);
        this.tablaSimbolos.fuentes[id] = { tipo, ruta };
    }

    visitMetrica(ctx) {
        const id = ctx.ID().getText();
        const agregacion = ctx.agregacion().getText();
        const campo = ctx.campo().getText();
        this.tablaSimbolos.metricas[id] = { agregacion, campo };
    }

    visitGrafico(ctx) {
        const id = ctx.ID(0).getText();
        const tipoGrafico = ctx.tipoGrafico().getText();
        const usar = ctx.ID(1).getText();
        if (!this.tablaSimbolos.metricas[usar]) {
            this.erroresSemanticos.push({ tipo: 'ERROR SEMÁNTICO', linea: ctx.start.line, columna: ctx.start.column, mensaje: `Métrica '${usar}' no definida para gráfico '${id}'` });
        }
        this.tablaSimbolos.graficos[id] = { tipo: tipoGrafico, usa: usar };
    }

    visitFiltro(ctx) {
        const campo = ctx.campo().getText();
        const operador = ctx.operador().getText();
        const valor = ctx.valor().getText();
        this.tablaSimbolos.filtros.push({ campo, operador, valor });
    }

    visitAlerta(ctx) {
        const metrica = ctx.ID().getText();
        const operador = ctx.operador().getText();
        const valor = ctx.valor().getText();
        const mensaje = ctx.CADENA().getText().slice(1, -1);
        if (!this.tablaSimbolos.metricas[metrica]) {
            this.erroresSemanticos.push({ tipo: 'ERROR SEMÁNTICO', linea: ctx.start.line, columna: ctx.start.column, mensaje: `Métrica '${metrica}' no definida para alerta` });
        }
        this.tablaSimbolos.alertas.push({ metrica, operador, valor, mensaje });
    }

    obtenerErroresSemanticos() {
        return this.erroresSemanticos;
    }
}

function analizarArchivo(rutaArchivo) {
    const contenido = fs.readFileSync(rutaArchivo, 'utf-8');
    const input = new antlr4.InputStream(contenido);
    const lexer = new TableroLexer(input);
    const errorListener = new AnalizadorErrorListener();

    lexer.removeErrorListeners();
    lexer.addErrorListener(errorListener);

    const stream = new antlr4.CommonTokenStream(lexer);
    stream.fill();

    const parser = new TableroParser(stream);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    parser.errorListeners = [errorListener];

    const arbol = parser.programa();
    const errores = errorListener.obtenerErrores();

    return { exitoso: !errorListener.erroresLexico.length && !errorListener.erroresSintactico.length, arbol, errores, parser, stream };
}

function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log(`Uso:\n  node src/index.js <ruta-archivo>\n\nEjemplo:\n  node src/index.js ejemplos/ejemplo1-correcto.txt`);
        process.exit(0);
    }

    const rutaArchivo = args[0];
    if (!fs.existsSync(rutaArchivo)) {
        console.error(`❌ Error: No se encontró el archivo '${rutaArchivo}'`);
        process.exit(1);
    }

    const resultado = analizarArchivo(rutaArchivo);
    if (!resultado.exitoso && resultado.error) {
        console.error(`❌ Error fatal: ${resultado.error}`);
        process.exit(1);
    }

    const { arbol, errores, parser } = resultado;

    let erroresSemanticos = [];
    if (arbol) {
        try {
            const visitante = new AnalizadorSemantico();
            visitante.visit(arbol);
            erroresSemanticos = visitante.obtenerErroresSemanticos();
        } catch (error) {
            // No se imprime información adicional
        }
    }

    console.log('\n╔════════════════════════════════════════╗\n');
    console.log('║         TABLA DE LEXEMAS - TOKENS     ║\n');
    console.log('╚════════════════════════════════════════╝\n');
    console.log(generarTablaTokens(resultado.stream));

    console.log('\n╔════════════════════════════════════════╗\n');
    console.log('║        Árbol de Derivación            ║\n');
    console.log('╚════════════════════════════════════════╝\n');
    if (arbol) {
        console.log(JSON.stringify(arbolAJSON(arbol), null, 2));
    }

    console.log('\n╔════════════════════════════════════════╗\n');
    console.log('║         ANÁLISIS COMPLETO             ║\n');
    console.log('╚════════════════════════════════════════╝\n');

    const hayErrorLexico = errores.lexico.length > 0;
    const hayErrorSintactico = errores.sintactico.length > 0;
    const hayErrorSemantico = erroresSemanticos.length > 0;

    if (hayErrorLexico) console.log('Error Léxico');
    if (hayErrorSintactico) console.log('Error Sintáctico');
    if (hayErrorSemantico) console.log('Error Semántico');

    if (hayErrorLexico || hayErrorSintactico || hayErrorSemantico) {
        process.exit(1);
    }

    process.exit(0);
}

main();
