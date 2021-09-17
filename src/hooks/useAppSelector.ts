// https://github.com/vercel/next.js/tree/canary/examples/with-redux

import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '@/store';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;