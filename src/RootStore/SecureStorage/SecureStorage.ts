import { TokensType } from '../../commonTypes';

export const TOKENS_SECURITY_STORAGE_KEY = 'tokensSecurityStorageKey';

export interface SecureStorage {
  saveTokens(tokens: TokensType): void;
  readTokens(): TokensType | null;
  clearTokens(): void;
}
