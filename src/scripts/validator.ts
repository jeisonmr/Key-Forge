import { showEntropyMessage, type EntropyMessage } from './generator';

export interface PasswordAnalysis {
  entropy: number;
  message: EntropyMessage;
}

export const analyzePassword = (password: string): PasswordAnalysis => {

  const lowercase = /[a-z]/.test(password);
  const uppercase = /[A-Z]/.test(password);
  const numbers = /[0-9]/.test(password);
  const symbols = /[^a-zA-Z0-9]/.test(password);

  let charsetSize = 0;

  if (lowercase) charsetSize += 26;
  if (uppercase) charsetSize += 26;
  if (numbers) charsetSize += 10;
  if (symbols) charsetSize += 20;

  const length = password.length;

  const entropy = charsetSize > 0
    ? Math.floor(length * Math.log2(charsetSize))
    : 0;

  const message = showEntropyMessage(entropy);

  return {
    entropy,
    message,
  };
};
