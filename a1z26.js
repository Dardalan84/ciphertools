const plain = 'abcdefghijklmnopqrstuvwxyz';
// const cipher = plain.split('').reverse().join('');

const cipher = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];


const encodeAone = (phrase) => {
  phrase = preparePhrase(phrase)
  phrase = _encode(phrase)
//   return chunkify(phrase);
  document.getElementById('result').innerHTML = assemble(phrase);
  resultAnimate();
};

const decodeAone = (phrase) => {
  phrase = preparePhrase(phrase);
  document.getElementById('result').innerHTML = _decode(phrase);
  resultAnimate();

};

const preparePhrase = (phrase) => {
    var phrase = document.getElementById('text').value;

  return phrase.toLowerCase().replace(/[^a-z0-9]/g, '')
};

const _encode = (phrase) => {
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

const _decode = (phrase) => {
  let resultb = ''
  for (let letter of phrase) {
    if (!plain.includes(letter)) {
      resultb += letter
      continue
    }
    const i = plain.indexOf(letter)
    resultb += plain[i]
  }
  
  return resultb
};

const assemble = (phrase) => {
  const result = []
  for (let i = 0; i < phrase.length; i += 5) {
    result.push(phrase.slice(i, i + 5))
  }
  return result.join(' ')


};