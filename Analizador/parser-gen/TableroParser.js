// Generated from gramatica/Tablero.g4 by ANTLR 4.9.3
// jshint ignore: start
const antlr4 = require('antlr4');
const TableroListener = require('./TableroListener.js');;
const TableroVisitor = require('./TableroVisitor.js');;


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003.v\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u0002#\n\u0002\f\u0002\u000e\u0002&\u000b",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u00030\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0007\rj\n\r\f\r\u000e\rm\u000b\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000er\n\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0002\u0002\u0010\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u0002\u0007\u0003\u0002\u0015\u0017\u0003\u0002",
    "\u0010\u0014\u0003\u0002\u0018\u001b\u0003\u0002\u001c!\u0003\u0002",
    "\u000e\u000f\u0002o\u0002\u001e\u0003\u0002\u0002\u0002\u0004/\u0003",
    "\u0002\u0002\u0002\u00061\u0003\u0002\u0002\u0002\b9\u0003\u0002\u0002",
    "\u0002\n;\u0003\u0002\u0002\u0002\fD\u0003\u0002\u0002\u0002\u000eF",
    "\u0003\u0002\u0002\u0002\u0010S\u0003\u0002\u0002\u0002\u0012U\u0003",
    "\u0002\u0002\u0002\u0014[\u0003\u0002\u0002\u0002\u0016]\u0003\u0002",
    "\u0002\u0002\u0018f\u0003\u0002\u0002\u0002\u001aq\u0003\u0002\u0002",
    "\u0002\u001cs\u0003\u0002\u0002\u0002\u001e\u001f\u0007\u0003\u0002",
    "\u0002\u001f \u0007+\u0002\u0002 $\u0007%\u0002\u0002!#\u0005\u0004",
    "\u0003\u0002\"!\u0003\u0002\u0002\u0002#&\u0003\u0002\u0002\u0002$\"",
    "\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%\'\u0003\u0002\u0002",
    "\u0002&$\u0003\u0002\u0002\u0002\'(\u0007&\u0002\u0002()\u0007\u0002",
    "\u0002\u0003)\u0003\u0003\u0002\u0002\u0002*0\u0005\u0006\u0004\u0002",
    "+0\u0005\n\u0006\u0002,0\u0005\u000e\b\u0002-0\u0005\u0012\n\u0002.",
    "0\u0005\u0016\f\u0002/*\u0003\u0002\u0002\u0002/+\u0003\u0002\u0002",
    "\u0002/,\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002/.\u0003\u0002",
    "\u0002\u00020\u0005\u0003\u0002\u0002\u000212\u0007\u0004\u0002\u0002",
    "23\u0007+\u0002\u000234\u0007\t\u0002\u000245\u0005\b\u0005\u000256",
    "\u0007\n\u0002\u000267\u0007-\u0002\u000278\u0007\'\u0002\u00028\u0007",
    "\u0003\u0002\u0002\u00029:\t\u0002\u0002\u0002:\t\u0003\u0002\u0002",
    "\u0002;<\u0007\u0005\u0002\u0002<=\u0007+\u0002\u0002=>\u0007\"\u0002",
    "\u0002>?\u0005\f\u0007\u0002?@\u0007#\u0002\u0002@A\u0005\u0018\r\u0002",
    "AB\u0007$\u0002\u0002BC\u0007\'\u0002\u0002C\u000b\u0003\u0002\u0002",
    "\u0002DE\t\u0003\u0002\u0002E\r\u0003\u0002\u0002\u0002FG\u0007\u0006",
    "\u0002\u0002GH\u0007+\u0002\u0002HI\u0007%\u0002\u0002IJ\u0007\t\u0002",
    "\u0002JK\u0007\"\u0002\u0002KL\u0005\u0010\t\u0002LM\u0007\'\u0002\u0002",
    "MN\u0007\u000b\u0002\u0002NO\u0007\"\u0002\u0002OP\u0007+\u0002\u0002",
    "PQ\u0007\'\u0002\u0002QR\u0007&\u0002\u0002R\u000f\u0003\u0002\u0002",
    "\u0002ST\t\u0004\u0002\u0002T\u0011\u0003\u0002\u0002\u0002UV\u0007",
    "\u0007\u0002\u0002VW\u0005\u0018\r\u0002WX\u0005\u0014\u000b\u0002X",
    "Y\u0005\u001a\u000e\u0002YZ\u0007\'\u0002\u0002Z\u0013\u0003\u0002\u0002",
    "\u0002[\\\t\u0005\u0002\u0002\\\u0015\u0003\u0002\u0002\u0002]^\u0007",
    "\b\u0002\u0002^_\u0007\f\u0002\u0002_`\u0007+\u0002\u0002`a\u0005\u0014",
    "\u000b\u0002ab\u0005\u001a\u000e\u0002bc\u0007\r\u0002\u0002cd\u0007",
    "-\u0002\u0002de\u0007\'\u0002\u0002e\u0017\u0003\u0002\u0002\u0002f",
    "k\u0007+\u0002\u0002gh\u0007)\u0002\u0002hj\u0007+\u0002\u0002ig\u0003",
    "\u0002\u0002\u0002jm\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002",
    "kl\u0003\u0002\u0002\u0002l\u0019\u0003\u0002\u0002\u0002mk\u0003\u0002",
    "\u0002\u0002nr\u0007-\u0002\u0002or\u0007,\u0002\u0002pr\u0005\u001c",
    "\u000f\u0002qn\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002qp\u0003",
    "\u0002\u0002\u0002r\u001b\u0003\u0002\u0002\u0002st\t\u0006\u0002\u0002",
    "t\u001d\u0003\u0002\u0002\u0002\u0006$/kq"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

class TableroParser extends antlr4.Parser {

    static grammarFileName = "Tablero.g4";
    static literalNames = [ null, "'tablero'", "'fuente'", "'metrica'", 
                            "'grafico'", "'filtro'", "'alerta'", "'tipo'", 
                            "'ruta'", "'usar'", "'si'", "'entonces'", "'verdadero'", 
                            "'falso'", "'suma'", "'promedio'", "'maximo'", 
                            "'minimo'", "'contar'", "'csv'", "'api'", "'json'", 
                            "'barras'", "'lineas'", "'torta'", "'tabla'", 
                            "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", 
                            "'='", "'('", "')'", "'{'", "'}'", "';'", "','", 
                            "'.'", "'\"'" ];
    static symbolicNames = [ null, "TABLERO", "FUENTE", "METRICA", "GRAFICO", 
                             "FILTRO", "ALERTA", "TIPO", "RUTA", "USAR", 
                             "SI", "ENTONCES", "VERDADERO", "FALSO", "SUMA", 
                             "PROMEDIO", "MAXIMO", "MINIMO", "CONTAR", "CSV", 
                             "API", "JSON_", "BARRAS", "LINEAS", "TORTA", 
                             "TABLA", "EQ", "NE", "GT", "LT", "GE", "LE", 
                             "ASSIGN", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                             "SEMICOLON", "COMMA", "DOT", "QUOTE", "ID", 
                             "NUMERO", "CADENA", "WS" ];
    static ruleNames = [ "programa", "elemento", "fuente", "tipoFuente", 
                         "metrica", "agregacion", "grafico", "tipoGrafico", 
                         "filtro", "operador", "alerta", "campo", "valor", 
                         "booleano" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TableroParser.ruleNames;
        this.literalNames = TableroParser.literalNames;
        this.symbolicNames = TableroParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TableroParser.RULE_programa);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(TableroParser.TABLERO);
	        this.state = 29;
	        this.match(TableroParser.ID);
	        this.state = 30;
	        this.match(TableroParser.LBRACE);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TableroParser.FUENTE) | (1 << TableroParser.METRICA) | (1 << TableroParser.GRAFICO) | (1 << TableroParser.FILTRO) | (1 << TableroParser.ALERTA))) !== 0)) {
	            this.state = 31;
	            this.elemento();
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 37;
	        this.match(TableroParser.RBRACE);
	        this.state = 38;
	        this.match(TableroParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elemento() {
	    let localctx = new ElementoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TableroParser.RULE_elemento);
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case TableroParser.FUENTE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.fuente();
	            break;
	        case TableroParser.METRICA:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.metrica();
	            break;
	        case TableroParser.GRAFICO:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 42;
	            this.grafico();
	            break;
	        case TableroParser.FILTRO:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 43;
	            this.filtro();
	            break;
	        case TableroParser.ALERTA:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 44;
	            this.alerta();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fuente() {
	    let localctx = new FuenteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TableroParser.RULE_fuente);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(TableroParser.FUENTE);
	        this.state = 48;
	        this.match(TableroParser.ID);
	        this.state = 49;
	        this.match(TableroParser.TIPO);
	        this.state = 50;
	        this.tipoFuente();
	        this.state = 51;
	        this.match(TableroParser.RUTA);
	        this.state = 52;
	        this.match(TableroParser.CADENA);
	        this.state = 53;
	        this.match(TableroParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipoFuente() {
	    let localctx = new TipoFuenteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TableroParser.RULE_tipoFuente);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TableroParser.CSV) | (1 << TableroParser.API) | (1 << TableroParser.JSON_))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	metrica() {
	    let localctx = new MetricaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TableroParser.RULE_metrica);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(TableroParser.METRICA);
	        this.state = 58;
	        this.match(TableroParser.ID);
	        this.state = 59;
	        this.match(TableroParser.ASSIGN);
	        this.state = 60;
	        this.agregacion();
	        this.state = 61;
	        this.match(TableroParser.LPAREN);
	        this.state = 62;
	        this.campo();
	        this.state = 63;
	        this.match(TableroParser.RPAREN);
	        this.state = 64;
	        this.match(TableroParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	agregacion() {
	    let localctx = new AgregacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TableroParser.RULE_agregacion);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TableroParser.SUMA) | (1 << TableroParser.PROMEDIO) | (1 << TableroParser.MAXIMO) | (1 << TableroParser.MINIMO) | (1 << TableroParser.CONTAR))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	grafico() {
	    let localctx = new GraficoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TableroParser.RULE_grafico);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(TableroParser.GRAFICO);
	        this.state = 69;
	        this.match(TableroParser.ID);
	        this.state = 70;
	        this.match(TableroParser.LBRACE);
	        this.state = 71;
	        this.match(TableroParser.TIPO);
	        this.state = 72;
	        this.match(TableroParser.ASSIGN);
	        this.state = 73;
	        this.tipoGrafico();
	        this.state = 74;
	        this.match(TableroParser.SEMICOLON);
	        this.state = 75;
	        this.match(TableroParser.USAR);
	        this.state = 76;
	        this.match(TableroParser.ASSIGN);
	        this.state = 77;
	        this.match(TableroParser.ID);
	        this.state = 78;
	        this.match(TableroParser.SEMICOLON);
	        this.state = 79;
	        this.match(TableroParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipoGrafico() {
	    let localctx = new TipoGraficoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TableroParser.RULE_tipoGrafico);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TableroParser.BARRAS) | (1 << TableroParser.LINEAS) | (1 << TableroParser.TORTA) | (1 << TableroParser.TABLA))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	filtro() {
	    let localctx = new FiltroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, TableroParser.RULE_filtro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(TableroParser.FILTRO);
	        this.state = 84;
	        this.campo();
	        this.state = 85;
	        this.operador();
	        this.state = 86;
	        this.valor();
	        this.state = 87;
	        this.match(TableroParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operador() {
	    let localctx = new OperadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, TableroParser.RULE_operador);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TableroParser.EQ) | (1 << TableroParser.NE) | (1 << TableroParser.GT) | (1 << TableroParser.LT) | (1 << TableroParser.GE) | (1 << TableroParser.LE))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	alerta() {
	    let localctx = new AlertaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TableroParser.RULE_alerta);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(TableroParser.ALERTA);
	        this.state = 92;
	        this.match(TableroParser.SI);
	        this.state = 93;
	        this.match(TableroParser.ID);
	        this.state = 94;
	        this.operador();
	        this.state = 95;
	        this.valor();
	        this.state = 96;
	        this.match(TableroParser.ENTONCES);
	        this.state = 97;
	        this.match(TableroParser.CADENA);
	        this.state = 98;
	        this.match(TableroParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	campo() {
	    let localctx = new CampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, TableroParser.RULE_campo);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(TableroParser.ID);
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TableroParser.DOT) {
	            this.state = 101;
	            this.match(TableroParser.DOT);
	            this.state = 102;
	            this.match(TableroParser.ID);
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, TableroParser.RULE_valor);
	    try {
	        this.state = 111;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case TableroParser.CADENA:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 108;
	            this.match(TableroParser.CADENA);
	            break;
	        case TableroParser.NUMERO:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 109;
	            this.match(TableroParser.NUMERO);
	            break;
	        case TableroParser.VERDADERO:
	        case TableroParser.FALSO:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 110;
	            this.booleano();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleano() {
	    let localctx = new BooleanoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, TableroParser.RULE_booleano);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        _la = this._input.LA(1);
	        if(!(_la===TableroParser.VERDADERO || _la===TableroParser.FALSO)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TableroParser.EOF = antlr4.Token.EOF;
TableroParser.TABLERO = 1;
TableroParser.FUENTE = 2;
TableroParser.METRICA = 3;
TableroParser.GRAFICO = 4;
TableroParser.FILTRO = 5;
TableroParser.ALERTA = 6;
TableroParser.TIPO = 7;
TableroParser.RUTA = 8;
TableroParser.USAR = 9;
TableroParser.SI = 10;
TableroParser.ENTONCES = 11;
TableroParser.VERDADERO = 12;
TableroParser.FALSO = 13;
TableroParser.SUMA = 14;
TableroParser.PROMEDIO = 15;
TableroParser.MAXIMO = 16;
TableroParser.MINIMO = 17;
TableroParser.CONTAR = 18;
TableroParser.CSV = 19;
TableroParser.API = 20;
TableroParser.JSON_ = 21;
TableroParser.BARRAS = 22;
TableroParser.LINEAS = 23;
TableroParser.TORTA = 24;
TableroParser.TABLA = 25;
TableroParser.EQ = 26;
TableroParser.NE = 27;
TableroParser.GT = 28;
TableroParser.LT = 29;
TableroParser.GE = 30;
TableroParser.LE = 31;
TableroParser.ASSIGN = 32;
TableroParser.LPAREN = 33;
TableroParser.RPAREN = 34;
TableroParser.LBRACE = 35;
TableroParser.RBRACE = 36;
TableroParser.SEMICOLON = 37;
TableroParser.COMMA = 38;
TableroParser.DOT = 39;
TableroParser.QUOTE = 40;
TableroParser.ID = 41;
TableroParser.NUMERO = 42;
TableroParser.CADENA = 43;
TableroParser.WS = 44;

TableroParser.RULE_programa = 0;
TableroParser.RULE_elemento = 1;
TableroParser.RULE_fuente = 2;
TableroParser.RULE_tipoFuente = 3;
TableroParser.RULE_metrica = 4;
TableroParser.RULE_agregacion = 5;
TableroParser.RULE_grafico = 6;
TableroParser.RULE_tipoGrafico = 7;
TableroParser.RULE_filtro = 8;
TableroParser.RULE_operador = 9;
TableroParser.RULE_alerta = 10;
TableroParser.RULE_campo = 11;
TableroParser.RULE_valor = 12;
TableroParser.RULE_booleano = 13;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_programa;
    }

	TABLERO() {
	    return this.getToken(TableroParser.TABLERO, 0);
	};

	ID() {
	    return this.getToken(TableroParser.ID, 0);
	};

	LBRACE() {
	    return this.getToken(TableroParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(TableroParser.RBRACE, 0);
	};

	EOF() {
	    return this.getToken(TableroParser.EOF, 0);
	};

	elemento = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementoContext);
	    } else {
	        return this.getTypedRuleContext(ElementoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_elemento;
    }

	fuente() {
	    return this.getTypedRuleContext(FuenteContext,0);
	};

	metrica() {
	    return this.getTypedRuleContext(MetricaContext,0);
	};

	grafico() {
	    return this.getTypedRuleContext(GraficoContext,0);
	};

	filtro() {
	    return this.getTypedRuleContext(FiltroContext,0);
	};

	alerta() {
	    return this.getTypedRuleContext(AlertaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterElemento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitElemento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitElemento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuenteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_fuente;
    }

	FUENTE() {
	    return this.getToken(TableroParser.FUENTE, 0);
	};

	ID() {
	    return this.getToken(TableroParser.ID, 0);
	};

	TIPO() {
	    return this.getToken(TableroParser.TIPO, 0);
	};

	tipoFuente() {
	    return this.getTypedRuleContext(TipoFuenteContext,0);
	};

	RUTA() {
	    return this.getToken(TableroParser.RUTA, 0);
	};

	CADENA() {
	    return this.getToken(TableroParser.CADENA, 0);
	};

	SEMICOLON() {
	    return this.getToken(TableroParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterFuente(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitFuente(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitFuente(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TipoFuenteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_tipoFuente;
    }

	CSV() {
	    return this.getToken(TableroParser.CSV, 0);
	};

	API() {
	    return this.getToken(TableroParser.API, 0);
	};

	JSON_() {
	    return this.getToken(TableroParser.JSON_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterTipoFuente(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitTipoFuente(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitTipoFuente(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MetricaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_metrica;
    }

	METRICA() {
	    return this.getToken(TableroParser.METRICA, 0);
	};

	ID() {
	    return this.getToken(TableroParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(TableroParser.ASSIGN, 0);
	};

	agregacion() {
	    return this.getTypedRuleContext(AgregacionContext,0);
	};

	LPAREN() {
	    return this.getToken(TableroParser.LPAREN, 0);
	};

	campo() {
	    return this.getTypedRuleContext(CampoContext,0);
	};

	RPAREN() {
	    return this.getToken(TableroParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(TableroParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterMetrica(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitMetrica(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitMetrica(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AgregacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_agregacion;
    }

	SUMA() {
	    return this.getToken(TableroParser.SUMA, 0);
	};

	PROMEDIO() {
	    return this.getToken(TableroParser.PROMEDIO, 0);
	};

	MAXIMO() {
	    return this.getToken(TableroParser.MAXIMO, 0);
	};

	MINIMO() {
	    return this.getToken(TableroParser.MINIMO, 0);
	};

	CONTAR() {
	    return this.getToken(TableroParser.CONTAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterAgregacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitAgregacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitAgregacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GraficoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_grafico;
    }

	GRAFICO() {
	    return this.getToken(TableroParser.GRAFICO, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TableroParser.ID);
	    } else {
	        return this.getToken(TableroParser.ID, i);
	    }
	};


	LBRACE() {
	    return this.getToken(TableroParser.LBRACE, 0);
	};

	TIPO() {
	    return this.getToken(TableroParser.TIPO, 0);
	};

	ASSIGN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TableroParser.ASSIGN);
	    } else {
	        return this.getToken(TableroParser.ASSIGN, i);
	    }
	};


	tipoGrafico() {
	    return this.getTypedRuleContext(TipoGraficoContext,0);
	};

	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TableroParser.SEMICOLON);
	    } else {
	        return this.getToken(TableroParser.SEMICOLON, i);
	    }
	};


	USAR() {
	    return this.getToken(TableroParser.USAR, 0);
	};

	RBRACE() {
	    return this.getToken(TableroParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterGrafico(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitGrafico(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitGrafico(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TipoGraficoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_tipoGrafico;
    }

	BARRAS() {
	    return this.getToken(TableroParser.BARRAS, 0);
	};

	LINEAS() {
	    return this.getToken(TableroParser.LINEAS, 0);
	};

	TORTA() {
	    return this.getToken(TableroParser.TORTA, 0);
	};

	TABLA() {
	    return this.getToken(TableroParser.TABLA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterTipoGrafico(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitTipoGrafico(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitTipoGrafico(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FiltroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_filtro;
    }

	FILTRO() {
	    return this.getToken(TableroParser.FILTRO, 0);
	};

	campo() {
	    return this.getTypedRuleContext(CampoContext,0);
	};

	operador() {
	    return this.getTypedRuleContext(OperadorContext,0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	SEMICOLON() {
	    return this.getToken(TableroParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterFiltro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitFiltro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitFiltro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_operador;
    }

	EQ() {
	    return this.getToken(TableroParser.EQ, 0);
	};

	NE() {
	    return this.getToken(TableroParser.NE, 0);
	};

	GT() {
	    return this.getToken(TableroParser.GT, 0);
	};

	LT() {
	    return this.getToken(TableroParser.LT, 0);
	};

	GE() {
	    return this.getToken(TableroParser.GE, 0);
	};

	LE() {
	    return this.getToken(TableroParser.LE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterOperador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitOperador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitOperador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AlertaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_alerta;
    }

	ALERTA() {
	    return this.getToken(TableroParser.ALERTA, 0);
	};

	SI() {
	    return this.getToken(TableroParser.SI, 0);
	};

	ID() {
	    return this.getToken(TableroParser.ID, 0);
	};

	operador() {
	    return this.getTypedRuleContext(OperadorContext,0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	ENTONCES() {
	    return this.getToken(TableroParser.ENTONCES, 0);
	};

	CADENA() {
	    return this.getToken(TableroParser.CADENA, 0);
	};

	SEMICOLON() {
	    return this.getToken(TableroParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterAlerta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitAlerta(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitAlerta(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_campo;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TableroParser.ID);
	    } else {
	        return this.getToken(TableroParser.ID, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TableroParser.DOT);
	    } else {
	        return this.getToken(TableroParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_valor;
    }

	CADENA() {
	    return this.getToken(TableroParser.CADENA, 0);
	};

	NUMERO() {
	    return this.getToken(TableroParser.NUMERO, 0);
	};

	booleano() {
	    return this.getTypedRuleContext(BooleanoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BooleanoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_booleano;
    }

	VERDADERO() {
	    return this.getToken(TableroParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(TableroParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterBooleano(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitBooleano(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitBooleano(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TableroParser.ProgramaContext = ProgramaContext; 
TableroParser.ElementoContext = ElementoContext; 
TableroParser.FuenteContext = FuenteContext; 
TableroParser.TipoFuenteContext = TipoFuenteContext; 
TableroParser.MetricaContext = MetricaContext; 
TableroParser.AgregacionContext = AgregacionContext; 
TableroParser.GraficoContext = GraficoContext; 
TableroParser.TipoGraficoContext = TipoGraficoContext; 
TableroParser.FiltroContext = FiltroContext; 
TableroParser.OperadorContext = OperadorContext; 
TableroParser.AlertaContext = AlertaContext; 
TableroParser.CampoContext = CampoContext; 
TableroParser.ValorContext = ValorContext; 
TableroParser.BooleanoContext = BooleanoContext; 


module.exports = TableroParser;
