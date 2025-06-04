// Generated from p.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import pListener from './pListener.js';
import pVisitor from './pVisitor.js';

const serializedATN = [4,1,17,97,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,1,1,1,1,1,1,
1,1,1,5,1,30,8,1,10,1,12,1,33,9,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,43,
8,3,1,3,1,3,3,3,47,8,3,1,3,1,3,1,3,1,3,3,3,53,8,3,1,3,1,3,3,3,57,8,3,1,3,
1,3,3,3,61,8,3,1,4,1,4,1,4,1,4,1,4,3,4,68,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,
6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,5,9,90,8,9,10,9,12,
9,93,9,9,1,10,1,10,1,10,0,2,2,18,11,0,2,4,6,8,10,12,14,16,18,20,0,2,1,0,
1,2,1,0,4,6,94,0,22,1,0,0,0,2,24,1,0,0,0,4,34,1,0,0,0,6,36,1,0,0,0,8,67,
1,0,0,0,10,69,1,0,0,0,12,75,1,0,0,0,14,78,1,0,0,0,16,80,1,0,0,0,18,84,1,
0,0,0,20,94,1,0,0,0,22,23,3,2,1,0,23,1,1,0,0,0,24,25,6,1,-1,0,25,26,3,4,
2,0,26,31,1,0,0,0,27,28,10,1,0,0,28,30,3,4,2,0,29,27,1,0,0,0,30,33,1,0,0,
0,31,29,1,0,0,0,31,32,1,0,0,0,32,3,1,0,0,0,33,31,1,0,0,0,34,35,3,6,3,0,35,
5,1,0,0,0,36,37,5,14,0,0,37,38,5,7,0,0,38,39,3,14,7,0,39,40,5,8,0,0,40,42,
5,9,0,0,41,43,5,17,0,0,42,41,1,0,0,0,42,43,1,0,0,0,43,44,1,0,0,0,44,46,3,
8,4,0,45,47,5,17,0,0,46,45,1,0,0,0,46,47,1,0,0,0,47,48,1,0,0,0,48,60,5,10,
0,0,49,50,5,15,0,0,50,52,5,9,0,0,51,53,5,17,0,0,52,51,1,0,0,0,52,53,1,0,
0,0,53,54,1,0,0,0,54,56,3,8,4,0,55,57,5,17,0,0,56,55,1,0,0,0,56,57,1,0,0,
0,57,58,1,0,0,0,58,59,5,10,0,0,59,61,1,0,0,0,60,49,1,0,0,0,60,61,1,0,0,0,
61,7,1,0,0,0,62,68,3,10,5,0,63,64,3,10,5,0,64,65,3,8,4,0,65,68,1,0,0,0,66,
68,3,12,6,0,67,62,1,0,0,0,67,63,1,0,0,0,67,66,1,0,0,0,68,9,1,0,0,0,69,70,
5,13,0,0,70,71,5,7,0,0,71,72,3,16,8,0,72,73,5,8,0,0,73,74,5,12,0,0,74,11,
1,0,0,0,75,76,5,16,0,0,76,77,5,12,0,0,77,13,1,0,0,0,78,79,7,0,0,0,79,15,
1,0,0,0,80,81,5,3,0,0,81,82,3,18,9,0,82,83,5,3,0,0,83,17,1,0,0,0,84,85,6,
9,-1,0,85,86,3,20,10,0,86,91,1,0,0,0,87,88,10,1,0,0,88,90,3,20,10,0,89,87,
1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,19,1,0,0,0,93,91,1,
0,0,0,94,95,7,1,0,0,95,21,1,0,0,0,8,31,42,46,52,56,60,67,91];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class pParser extends antlr4.Parser {

    static grammarFileName = "p.g4";
    static literalNames = [ null, "'0'", "'1'", "'\"'", null, null, null, 
                            "'('", "')'", "'{'", "'}'", null, "';'", "'printf'", 
                            "'if'", "'else'", "'return'" ];
    static symbolicNames = [ null, null, null, null, "LETRA", "DIGITO", 
                             "SIMBOLO", "LPAREN", "RPAREN", "LLLAVE", "RLLAVE", 
                             "WS", "SEMICOLON", "PRINTF", "IF", "ELSE", 
                             "RETURN", "NEWLINE" ];
    static ruleNames = [ "prog", "instrucciones", "instruccion", "decision", 
                         "sentencia", "salida", "terminar", "condicion", 
                         "cadena", "caracteres", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = pParser.ruleNames;
        this.literalNames = pParser.literalNames;
        this.symbolicNames = pParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.instrucciones_sempred(localctx, predIndex);
    	case 9:
    	    		return this.caracteres_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    instrucciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    caracteres_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, pParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.instrucciones(0);
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


	instrucciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new InstruccionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, pParser.RULE_instrucciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new InstruccionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, pParser.RULE_instrucciones);
	                this.state = 27;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 28;
	                this.instruccion(); 
	            }
	            this.state = 33;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, pParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.decision();
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



	decision() {
	    let localctx = new DecisionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, pParser.RULE_decision);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(pParser.IF);
	        this.state = 37;
	        this.match(pParser.LPAREN);
	        this.state = 38;
	        this.condicion();
	        this.state = 39;
	        this.match(pParser.RPAREN);
	        this.state = 40;
	        this.match(pParser.LLLAVE);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 41;
	            this.match(pParser.NEWLINE);
	        }

	        this.state = 44;
	        this.sentencia();
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 45;
	            this.match(pParser.NEWLINE);
	        }

	        this.state = 48;
	        this.match(pParser.RLLAVE);
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 49;
	            this.match(pParser.ELSE);
	            this.state = 50;
	            this.match(pParser.LLLAVE);
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 51;
	                this.match(pParser.NEWLINE);
	            }

	            this.state = 54;
	            this.sentencia();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 55;
	                this.match(pParser.NEWLINE);
	            }

	            this.state = 58;
	            this.match(pParser.RLLAVE);

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



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, pParser.RULE_sentencia);
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.salida();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.salida();
	            this.state = 64;
	            this.sentencia();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this.terminar();
	            break;

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



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, pParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(pParser.PRINTF);
	        this.state = 70;
	        this.match(pParser.LPAREN);
	        this.state = 71;
	        this.cadena();
	        this.state = 72;
	        this.match(pParser.RPAREN);
	        this.state = 73;
	        this.match(pParser.SEMICOLON);
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



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, pParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(pParser.RETURN);
	        this.state = 76;
	        this.match(pParser.SEMICOLON);
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



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, pParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
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



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, pParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(pParser.T__2);
	        this.state = 81;
	        this.caracteres(0);
	        this.state = 82;
	        this.match(pParser.T__2);
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


	caracteres(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CaracteresContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, pParser.RULE_caracteres, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.caracter();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 91;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CaracteresContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, pParser.RULE_caracteres);
	                this.state = 87;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 88;
	                this.caracter(); 
	            }
	            this.state = 93;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, pParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0))) {
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

pParser.EOF = antlr4.Token.EOF;
pParser.T__0 = 1;
pParser.T__1 = 2;
pParser.T__2 = 3;
pParser.LETRA = 4;
pParser.DIGITO = 5;
pParser.SIMBOLO = 6;
pParser.LPAREN = 7;
pParser.RPAREN = 8;
pParser.LLLAVE = 9;
pParser.RLLAVE = 10;
pParser.WS = 11;
pParser.SEMICOLON = 12;
pParser.PRINTF = 13;
pParser.IF = 14;
pParser.ELSE = 15;
pParser.RETURN = 16;
pParser.NEWLINE = 17;

pParser.RULE_prog = 0;
pParser.RULE_instrucciones = 1;
pParser.RULE_instruccion = 2;
pParser.RULE_decision = 3;
pParser.RULE_sentencia = 4;
pParser.RULE_salida = 5;
pParser.RULE_terminar = 6;
pParser.RULE_condicion = 7;
pParser.RULE_cadena = 8;
pParser.RULE_caracteres = 9;
pParser.RULE_caracter = 10;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pParser.RULE_prog;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pParser.RULE_instrucciones;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pParser.RULE_instruccion;
    }

	decision() {
	    return this.getTypedRuleContext(DecisionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DecisionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pParser.RULE_decision;
    }

	IF() {
	    return this.getToken(pParser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(pParser.LPAREN, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	RPAREN() {
	    return this.getToken(pParser.RPAREN, 0);
	};

	LLLAVE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pParser.LLLAVE);
	    } else {
	        return this.getToken(pParser.LLLAVE, i);
	    }
	};


	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	RLLAVE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pParser.RLLAVE);
	    } else {
	        return this.getToken(pParser.RLLAVE, i);
	    }
	};


	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pParser.NEWLINE);
	    } else {
	        return this.getToken(pParser.NEWLINE, i);
	    }
	};


	ELSE() {
	    return this.getToken(pParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.enterDecision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.exitDecision(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pVisitor ) {
	        return visitor.visitDecision(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pParser.RULE_salida;
    }

	PRINTF() {
	    return this.getToken(pParser.PRINTF, 0);
	};

	LPAREN() {
	    return this.getToken(pParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(pParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(pParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pParser.RULE_terminar;
    }

	RETURN() {
	    return this.getToken(pParser.RETURN, 0);
	};

	SEMICOLON() {
	    return this.getToken(pParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pParser.RULE_condicion;
    }


	enterRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pParser.RULE_cadena;
    }

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracteresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pParser.RULE_caracteres;
    }

	caracter() {
	    return this.getTypedRuleContext(CaracterContext,0);
	};

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.enterCaracteres(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.exitCaracteres(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pVisitor ) {
	        return visitor.visitCaracteres(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(pParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(pParser.DIGITO, 0);
	};

	SIMBOLO() {
	    return this.getToken(pParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




pParser.ProgContext = ProgContext; 
pParser.InstruccionesContext = InstruccionesContext; 
pParser.InstruccionContext = InstruccionContext; 
pParser.DecisionContext = DecisionContext; 
pParser.SentenciaContext = SentenciaContext; 
pParser.SalidaContext = SalidaContext; 
pParser.TerminarContext = TerminarContext; 
pParser.CondicionContext = CondicionContext; 
pParser.CadenaContext = CadenaContext; 
pParser.CaracteresContext = CaracteresContext; 
pParser.CaracterContext = CaracterContext; 
