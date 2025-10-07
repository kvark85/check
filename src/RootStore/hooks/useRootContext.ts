import { useContext } from 'react';
import RootStoreContext from '../RootStoreContext';

export default function useRootContext() {
  const rootStore = useContext(RootStoreContext);

  if (!rootStore) {
    throw new Error('rootStore root store has been used out of context');
  }

  return rootStore;
}
