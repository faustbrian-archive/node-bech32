import { bech32, Decoded } from "bech32";

export const encode = (prefix: string, words: string): string =>
  bech32.encode(prefix, bech32.toWords(Buffer.from(words, "utf8")));

export const decode = (content: string): Decoded => bech32.decode(content);

export const verify = (content: string): boolean => {
  try {
    bech32.decode(content);

    return true;
  } catch {
    return false;
  }
};
