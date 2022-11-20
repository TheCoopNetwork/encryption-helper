import _ from 'lodash';
import KeyEncryption from 'gmd-sdk/dist/key-encryption';
import PassPhraseGenerator from 'gmd-sdk/dist/pass-gen.js';


window.encrypt = () => {
  const input1 = document.getElementById("txt");
  const output = document.getElementById("encrypted");
  const pass = document.getElementById("pwd");
 
  KeyEncryption.encryptStr(input1.value,pass.value).then((result) => {
    output.value = JSON.stringify(result, null, 2);
  }).catch((err) => {
    console.log('encryption error', err);
    output.value = err;
  });
};

window.generate = () => {
  document.getElementById("txt").value = PassPhraseGenerator.generatePass(12);
};