import pVisitor from './generated/pVisitor.js';

export default class CustomVisitor extends pVisitor {
    constructor() {
        super();
        this.jsCode = ["// Código generado automáticamente"];
        this.indentLevel = 0;
    }

    // Punto de entrada del programa
    visitProg(ctx) {
        this.visitChildren(ctx);
        return this.jsCode.join('\n');
    }

    // Recorre todas las instrucciones
    visitInstrucciones(ctx) {
        return this.visitChildren(ctx);
    }

    visitInstruccion(ctx) {
        return this.visitChildren(ctx);
    }

    visitSentencia(ctx) {
        return this.visitChildren(ctx);
    }

    visitDecision(ctx) {
        const cond = ctx.condicion().getText();

        if (cond === '1') {
            const ifSentences = ctx.sentencia(0);
            if (ifSentences) {
                this.visit(ifSentences);
            }
        } else if (cond === '0' && ctx.ELSE()) {
            const elseSentences = ctx.sentencia(1);
            if (elseSentences) {
                this.visit(elseSentences);
            }
        }
    }

    visitSalida(ctx) {
        const raw = ctx.cadena().getText(); // Ej: "\"hola\""
        const texto = raw.slice(1, -1).replace(/\\"/g, '"'); // quitar comillas externas y escapar internas
        this.jsCode.push(' '.repeat(this.indentLevel * 4) + `console.log("${texto}");`);
    }

    visitTerminar(ctx) {
        this.jsCode.push(' '.repeat(this.indentLevel * 4) + 'return;');
    }

    visitCondicion(ctx) {
        return ctx.getText() === '1' ? 'true' : 'false';
    }
}
