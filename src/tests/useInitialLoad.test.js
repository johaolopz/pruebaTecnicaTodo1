import React from 'react';
import { renderHook } from '@testing-library/react-hooks'
import useInitialLoad from "../hooks/useInitialLoad";
import store from '../redux/store';
import { Provider } from 'react-redux';

describe('Custom Hook', () => {
    let url = 'https://pokeapi.co/api/v2/pokemon/'
    it('should worked OK', () => {
        const { result } = renderHook(() => useInitialLoad(url), {
            wrapper: ({ children }) => <Provider store={store} >{children}</Provider>
          });

        expect(result.current.state).toBe(true)
        expect(typeof result.current).toBe('object')
        expect(result.current.message).toBe('hook execution is OK')
    })
})