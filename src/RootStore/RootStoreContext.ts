import { createContext } from 'react';

import type { RootStore } from './RootStore';

export default createContext<undefined | RootStore>(undefined);
