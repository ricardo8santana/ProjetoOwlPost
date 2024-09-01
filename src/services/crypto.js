import { CryptographyKey, SodiumPlus } from 'sodium-plus';
import { Buffer } from 'buffer';

// todo: aonde guardar isso ???????
const key = '82108ba120fcd627da0ec742679f443cbc8c80bcb7ed3cacbf336654a9f493cd';
const nonce = '05a1c44ecdb74f5dd3b9bafb341d60a32f787c9cf68c2f9f';

let isInitialized = false;

/** @type {SodiumPlus}      */ let sodium = null;
/** @type {CryptographyKey} */ let cryptoKey = null;
/** @type {Buffer}          */ let cryptoNonce = null;

const initialize = async () => {
    if (isInitialized) {
        return;
    }

    window.Buffer = window.Buffer || Buffer;

    sodium = await SodiumPlus.auto();

    const c = new CryptographyKey(Buffer.from(key, 'hex'));
    cryptoKey = c; // await sodium.crypto_secretbox_keygen();
    
    const n = new Buffer(nonce, 'hex');
    cryptoNonce = n; // await sodium.randombytes_buf(24);

    isInitialized = true;
}

export const encrypt = async (text) => {
    if (!isInitialized) {
        await initialize();
    }

    const cypherBuffer = await sodium.crypto_secretbox(text, cryptoNonce, cryptoKey);
    return cypherBuffer.toString('hex');
};

export const decrypt = async (cypher) => {
    if (!isInitialized) {
        await initialize();
    }
    
    const cypherBuffer = Buffer.from(cypher, 'hex');
    const textBuffer = await sodium.crypto_secretbox_open(cypherBuffer, cryptoNonce, cryptoKey);
    return textBuffer.toString();
};

export const encryptInt = async (number) => {
    return await encrypt(`${number}`);
};

export const decryptInt = async (cypher) => {
    return parseInt(await decrypt(cypher));
};