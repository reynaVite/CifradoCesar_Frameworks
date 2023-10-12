import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [textToEncrypt, setTextToEncrypt] = useState('');
  const [encryptionPassword, setEncryptionPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña
  const [encryptedText, setEncryptedText] = useState('');
  const [textToDecrypt, setTextToDecrypt] = useState('');
  const [decryptionPassword, setDecryptionPassword] = useState('');
  const [showDecryptionPassword, setShowDecryptionPassword] = useState(false); // Estado para mostrar/ocultar la contraseña de descifrado
  const [decryptedText, setDecryptedText] = useState('');

  const encryptText = () => {
    const ciphertext = CryptoJS.AES.encrypt(textToEncrypt, encryptionPassword).toString();
    setEncryptedText(ciphertext);
  }

  const decryptText = () => {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedText, decryptionPassword);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      setDecryptedText(originalText);
    } catch (error) {
      console.error('Error al descifrar el texto:', error);
      setDecryptedText('Error al descifrar el texto');
    }
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Aplicación de cifrado y descifrado AES en React</h1>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <h2>Cifrar texto</h2>
          <div className="form-group">
            <label htmlFor="textToEncrypt">Texto a cifrar:</label>
            <input
              type="text"
              className="form-control"
              id="textToEncrypt"
              placeholder="Ingrese el texto a cifrar"
              value={textToEncrypt}
              onChange={(e) => setTextToEncrypt(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="encryptionPassword">Contraseña de cifrado:</label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                id="encryptionPassword"
                placeholder="Ingrese la contraseña de cifrado"
                value={encryptionPassword}
                onChange={(e) => setEncryptionPassword(e.target.value)}
              />
              <div className="input-group-append">
                <span
                  className="input-group-text"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
            </div>
          </div>
          <button className="btn btn-primary mt-2" onClick={encryptText}>Cifrar</button>
          <div className="mt-2">
            <h2>Texto cifrado:</h2>
            <p>{encryptedText}</p>
          </div>
        </div>
        <div className="col-lg-6">
          <h2>Descifrar texto</h2>
          <div className="form-group">
            <label htmlFor="textToDecrypt">Texto cifrado:</label>
            <input
              type="text"
              className="form-control"
              id="textToDecrypt"
              placeholder="Ingrese el texto cifrado"
              value={textToDecrypt}
              onChange={(e) => setTextToDecrypt(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="decryptionPassword">Contraseña de descifrado:</label>
            <div className="input-group">
              <input
                type={showDecryptionPassword ? 'text' : 'password'}
                className="form-control"
                id="decryptionPassword"
                placeholder="Ingrese la contraseña de descifrado"
                value={decryptionPassword}
                onChange={(e) => setDecryptionPassword(e.target.value)}
              />
              <div className="input-group-append">
                <span
                  className="input-group-text"
                  onClick={() => setShowDecryptionPassword(!showDecryptionPassword)}
                >
                  <FontAwesomeIcon icon={showDecryptionPassword ? faEyeSlash : faEye} />
                </span>
              </div>
            </div>
          </div>
          <button className="btn btn-primary mt-2" onClick={decryptText}>Descifrar</button>
          <div className="mt-2">
            <h2>Texto descifrado:</h2>
            <p>{decryptedText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



 