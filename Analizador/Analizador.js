const fs = require('fs');

// ================== LEXER ==================
class Lexer {
  constructor() {
    this.tokens = [];
    this.errors = [];
    this.rules = [
      { type: 'WHILE', pattern: /while\b/ },
      { type: 'PRINTF', pattern: /printf\b/ },
      { type: 'BREAK', pattern: /break\b/ },
      { type: 'PAREN_OPEN', pattern: /\(/ },
      { type: 'PAREN_CLOSE', pattern: /\)/ },
      { type: 'BRACE_OPEN', pattern: /\{/ },
      { type: 'BRACE_CLOSE', pattern: /\}/ },
      { type: 'SEMICOLON', pattern: /;/ },
      { type: 'CONDITION', pattern: /[01]/ },
      { type: 'STRING', pattern: /"(?:\\.|[^"\\])*"/ },
      { type: 'IGNORE', pattern: /\s+/ },
    ];
  }

  tokenize(input) {
    let pos = 0;
    let line = 1;
    let column = 1;

    while (pos < input.length) {
      let match = null;
      let ruleMatched = null;

      for (const rule of this.rules) {
        const regex = new RegExp(`^${rule.pattern.source}`);
        match = regex.exec(input.slice(pos));
        if (match) {
          ruleMatched = rule;
          break;
        }
      }

      if (ruleMatched) {
        const value = match[0];
        if (ruleMatched.type !== 'IGNORE') {
          this.tokens.push({
            type: ruleMatched.type,
            value,
            line,
            column
          });
        }
        
        // Actualizar posición
        const lineBreaks = value.match(/\n/g);
        if (lineBreaks) {
          line += lineBreaks.length;
          column = value.length - value.lastIndexOf('\n') - 1;
        } else {
          column += value.length;
        }
        pos += value.length;
      } else {
        this.errors.push({
          type: 'LEXICAL_ERROR',
          message: `Carácter inesperado '${input[pos]}' en línea ${line}, columna ${column}`,
          line,
          column
        });
        pos++;
        column++;
      }
    }

    this.tokens.push({ type: 'EOF', value: '', line, column });
    return { tokens: this.tokens, errors: this.errors };
  }
}

// ================== PARSER ==================
class Parser {
  constructor(tokens) {
    this.tokens = tokens;
    this.current = 0;
    this.errors = [];
  }

  parse() {
    const ast = {
      type: 'Program',
      body: this.parseInstrucciones()
    };
    return { ast, errors: this.errors };
  }

  // ====== Métodos auxiliares ======
  peek() {
    return this.tokens[this.current];
  }

  eat(type) {
    const token = this.peek();
    if (token.type === type) {
      this.current++;
      return token;
    }
    return null;
  }

  expect(type) {
    const token = this.eat(type);
    if (!token) {
      const next = this.peek();
      this.errors.push(`Error sintáctico: Se esperaba ${type} en línea ${next.line}`);
      return null;
    }
    return token;
  }

  // ====== Reglas gramaticales ======
  parseInstrucciones() {
    const instrucciones = [];
    while (this.peek() && this.peek().type !== 'EOF') {
      const instruccion = this.parseInstruccion();
      if (instruccion) {
        instrucciones.push(instruccion);
      } else {
        this.synchronize();
      }
    }
    return instrucciones;
  }

  synchronize() {
    while (this.peek() && this.peek().type !== 'EOF') {
      if (this.peek().type === 'SEMICOLON') {
        this.current++;
        return;
      }
      if (['WHILE', 'PRINTF', 'BREAK', 'BRACE_CLOSE'].includes(this.peek().type)) {
        return;
      }
      this.current++;
    }
  }

  parseInstruccion() {
    const token = this.peek();
    if (!token) return null;

    switch (token.type) {
      case 'WHILE':
        return this.parseBucle();
      case 'PRINTF':
        return this.parseSalida();
      case 'BREAK':
        return this.parseTerminar();
      case 'BRACE_CLOSE':
        return null;  // Fin de bloque
      default:
        this.errors.push(`Error sintáctico: Instrucción no válida '${token.value}' en línea ${token.line}`);
        this.current++;
        return null;
    }
  }

  parseBucle() {
    if (!this.expect('WHILE')) return null;
    if (!this.expect('PAREN_OPEN')) return null;
    
    const condition = this.eat('CONDITION')?.value || '0';
    
    if (!this.expect('PAREN_CLOSE')) return null;
    if (!this.expect('BRACE_OPEN')) return null;
    
    const body = [];
    while (this.peek() && this.peek().type !== 'BRACE_CLOSE' && this.peek().type !== 'EOF') {
      const instruccion = this.parseInstruccion();
      if (instruccion) {
        body.push(instruccion);
      }
    }
    
    if (!this.expect('BRACE_CLOSE')) return null;
    
    return {
      type: 'WhileStatement',
      condition,
      body
    };
  }

  parseSalida() {
    if (!this.expect('PRINTF')) return null;
    if (!this.expect('PAREN_OPEN')) return null;
    
    const value = this.eat('STRING')?.value || '""';
    
    if (!this.expect('PAREN_CLOSE')) return null;
    if (!this.expect('SEMICOLON')) return null;
    
    return {
      type: 'PrintStatement',
      value
    };
  }

  parseTerminar() {
    if (!this.expect('BREAK')) return null;
    if (!this.expect('SEMICOLON')) return null;
    
    return {
      type: 'BreakStatement'
    };
  }
}

// ================== EJECUCIÓN ==================
function main() {
  // Leer input desde archivo
  const input = fs.readFileSync('input.txt', 'utf-8');
  console.log('=== Input ===\n', input);

  // Lexer
  const lexer = new Lexer();
  const { tokens, errors: lexErrors } = lexer.tokenize(input);
  console.log('\n=== Tokens ===');
  console.table(tokens);

  // Parser
  const parser = new Parser(tokens);
  const { ast, errors: parseErrors } = parser.parse();
  console.log('\n=== AST (Árbol de Derivación) ===');
  console.log(JSON.stringify(ast, null, 2));

  // Mostrar errores
  const allErrors = [...lexErrors, ...parseErrors];
  if (allErrors.length > 0) {
    console.log('\n=== Errores ===');
    const uniqueErrors = [...new Set(allErrors.map(e => e.message || e))];
    uniqueErrors.forEach(err => console.log('-', err));
  } else {
    console.log('\n✓ Análisis completado sin errores.');
  }
}

main();
