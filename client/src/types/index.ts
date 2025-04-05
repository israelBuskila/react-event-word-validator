// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Listener<T = any> = (data: T) => void;
export type EventMap = Map<string, Listener[]>;
export type SquareState = 'empty' | 'filled' | 'success' | 'error'; 
export type GameState = 'start' | 'playing' | 'win' | 'lose';

export const VALIDATOR_EVENTS = {
    INPUT_CHAR: 'INPUT_CHAR',
    VALIDATE_WORD: 'VALIDATE_WORD',
    DELETE_CHAR: 'DELETE_CHAR',
    RESET_VALIDATOR: 'RESET_VALIDATOR'
} as const;

export type ValidatorEventType = keyof typeof VALIDATOR_EVENTS;

export interface ActionData {
    [VALIDATOR_EVENTS.INPUT_CHAR]: string;
    [VALIDATOR_EVENTS.VALIDATE_WORD]: { word: string; timestamp: number };
    [VALIDATOR_EVENTS.DELETE_CHAR]: { position: number };
    [VALIDATOR_EVENTS.RESET_VALIDATOR]: void;
}

export interface ActionListenerConfig {
    debug?: boolean;
}