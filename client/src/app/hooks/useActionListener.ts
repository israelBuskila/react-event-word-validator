import { useEffect, useRef } from 'react';
import MyActionListener from '../utils/MyActionListener';
import { Listener } from '../../types';

// Define action types for our game
export const GAME_ACTIONS = {
    KEY_PRESS: 'KEY_PRESS'
} as const;

export const useActionListener = (debug = false) => {
    const actionListenerRef = useRef<MyActionListener>(new MyActionListener({ debug }));

    useEffect(() => {
        return () => {
            actionListenerRef.current.removeListener(GAME_ACTIONS.KEY_PRESS);
        };
    }, []);

    return {
        registerListener: (action: string, listener: Listener) => {
            actionListenerRef.current.registerListener(action, listener);
        },
        removeListener: (action: string) => {
            return actionListenerRef.current.removeListener(action);
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        emit: (action: string, data: any) => {
            actionListenerRef.current.emit(action, data);
        },
        GAME_ACTIONS
    };
};
