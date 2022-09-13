class CaesarCipher {
    constructor(word) {
        this.cipherMap = this.createCipherMap();
        this.codedWord = this.cipherWord(word);
    }

    createCipherMap() {
        const map = new Map();

        //Capital
        for (let code = 65; code < 91; code++)
            (code === 90) ? map.set('Z', 'A') : map.set(String.fromCharCode(code), String.fromCharCode(code + 1));

        //Lower Case
        for (let code = 97; code < 123; code++)
            (code === 122) ? map.set('z', 'a') : map.set(String.fromCharCode(code), String.fromCharCode(code + 1));

        //Space
        map.set(" ", " ");

        return map;
    }

    cipherWord(word) {
        let tempWord = "";
        for (let i = 0; i < word.length; i++) {
            tempWord += this.cipherMap.get(word.charAt(i));
        }
        return tempWord;
    }
}

export { CaesarCipher };