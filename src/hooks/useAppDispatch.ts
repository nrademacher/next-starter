// https://github.com/vercel/next.js/tree/canary/examples/with-redux

import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
