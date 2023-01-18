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