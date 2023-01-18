// variables
var cipherInput = document.getElementById('select_tool');
var rot = document.createElement('input');
var vig = document.createElement('input');
rot.setAttribute('id', 'shift');
vig.setAttribute('id', 'key');
vig.value = 'key';
rot.placeholder = 'Rot';

// add event listener to create/remove elements on input selection 
function changeCipher() {
if(cipherInput.value==='ceasar'){
    document.querySelector('.tool').appendChild(rot);
    vig.remove();
} else if(cipherInput.value==='viginere'){
    document.querySelector('.tool').appendChild(vig);
    rot.remove();
} else{ 
    rot.remove();
    vig.remove();
}
}
// encrypt and decrypt functions

function encrypt() {
    switch(cipherInput.value) {
        case 'ceasar':
            ceasarCypherEncrypt();
        break;
        case 'viginere':
            app.doCrypt(false);
        break;
        case 'base64':
            encode64();
        break;
        case 'atbash':
            var plain = 'abcdefghijklmnopqrstuvwxyz';
            var cipher = plain.split('').reverse().join('');
            function encodeAtbash(phrase) {
                phrase = preparePhrase(phrase)
                phrase = _encode(phrase)
                document.getElementById('result').innerHTML = assemble(phrase);
                resultAnimate();
            };

            function decodeAtbash(phrase) {
                phrase = preparePhrase(phrase)
                document.getElementById('result').innerHTML = _encode(phrase)
                resultAnimate();
            };

            function preparePhrase(phrase) {
                var phrase = document.getElementById('text').value;
                return phrase.toLowerCase().replace(/[^a-z0-9]/g, '')
            };

            function _encode(phrase) {
                let result = ''
                for (let letter of phrase) {
                if (!plain.includes(letter)) {
                    result += letter
                    continue
                }
                const i = plain.indexOf(letter)
                result += cipher[i]
            }
                return result
            };

            var assemble = (phrase) => {
                const result = []
                for (let i = 0; i < phrase.length; i += 5) {
                    result.push(phrase.slice(i, i + 5))
                }
                return result.join(' ')
            };
            encodeAtbash();
        break;
        case 'ascii':
            encodeAscii();
        break;
        case 'a1z26':
            encodeAone();
        default:
            console.log('enter a cipher');
    }

    
}

function decrypt() {
    switch(cipherInput.value) {
        case 'ceasar':
            ceasarCypherDecrypt();
        break;
        case 'viginere':
            app.doCrypt(true);
        break;
        case 'base64':
            decode64();
        break;
        case 'atbash':
            var plain = 'abcdefghijklmnopqrstuvwxyz';
            var cipher = plain.split('').reverse().join('');
            function encodeAtbash(phrase) {
                phrase = preparePhrase(phrase)
                phrase = _encode(phrase)
                document.getElementById('result').innerHTML = assemble(phrase);
                resultAnimate();
            };

            function decodeAtbash(phrase) {
                phrase = preparePhrase(phrase)
                document.getElementById('result').innerHTML = _encode(phrase)
                resultAnimate();
            };

            function preparePhrase(phrase) {
                var phrase = document.getElementById('text').value;
                return phrase.toLowerCase().replace(/[^a-z0-9]/g, '')
            };

            function _encode(phrase) {
                let result = ''
                for (let letter of phrase) {
                if (!plain.includes(letter)) {
                    result += letter
                    continue
                }
                const i = plain.indexOf(letter)
                result += cipher[i]
            }
                return result
            };

            var assemble = (phrase) => {
                const result = []
                for (let i = 0; i < phrase.length; i += 5) {
                    result.push(phrase.slice(i, i + 5))
                }
                return result.join(' ')
            };
            decodeAtbash();
        break;
        case 'ascii':
            decodeAscii();
        break;
        case 'a1z26':
            decodeAone();
        default:
            console.log('enter a cipher');
    }

}

