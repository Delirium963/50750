import pListener from './generated/pListener.js';
import antlr4 from 'antlr4';

const { ParseTreeWalker } = antlr4;

export default class CustomListener extends pListener {
    enterDecision(ctx) {
        console.log(`IF detectado con condición: ${ctx.condicion().getText()}`);
    }

    enterSalida(ctx) {
        console.log(`PRINTF: ${ctx.cadena().getText()}`);
    }
}