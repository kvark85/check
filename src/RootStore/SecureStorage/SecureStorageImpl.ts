import { TokensType } from "../commonTypes";
import { TOKENS_SECURITY_STORAGE_KEY } from "./SecureStorage";
import type { SecureStorage } from "./SecureStorage";

class SecureStorageImpl implements SecureStorage {
  saveTokens = (tokens: TokensType) => {
    localStorage.setItem(TOKENS_SECURITY_STORAGE_KEY, JSON.stringify(tokens));
  };

  readTokens = (): TokensType | null => {
    const tokensString = localStorage.getItem(TOKENS_SECURITY_STORAGE_KEY);

    return tokensString ? (JSON.parse(tokensString) as TokensType) : null;
  };

  clearTokens() {
    localStorage.removeItem(TOKENS_SECURITY_STORAGE_KEY);
  }
}

export default SecureStorageImpl;
