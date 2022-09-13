import{CaesarCipher} from './caesarCipher'

it('Lower Case', () =>{

    let caesarCipher = new CaesarCipher('abc');

    expect(caesarCipher.codedWord).toBe('bcd');

});

it('Upper Case', () =>{

    let caesarCipher = new CaesarCipher('ABC');

    expect(caesarCipher.codedWord).toBe('BCD');

});

it('Wraps Around w/ z Low Case', () =>{

    let caesarCipher = new CaesarCipher('xyz');

    expect(caesarCipher.codedWord).toBe('yza');

});

it('Wraps Around w/ Z Upper Case', () =>{

    let caesarCipher = new CaesarCipher('XYZ');

    expect(caesarCipher.codedWord).toBe('YZA');

});


it('Works w/ Space Upper Case', () =>{

    let caesarCipher = new CaesarCipher('XYZ ABC');

    expect(caesarCipher.codedWord).toBe('YZA BCD');

});

it('Works w/ Space Lower Case', () =>{

    let caesarCipher = new CaesarCipher('xyz abc');

    expect(caesarCipher.codedWord).toBe('yza bcd');

});