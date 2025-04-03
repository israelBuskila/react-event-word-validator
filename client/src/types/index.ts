// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Listener<T = any> = (data: T) => void;
export type EventMap = Map<string, Listener[]>;
export type SquareState = 'empty' | 'filled' | 'success' | 'error'; 
export type GameState = 'start' | 'playing' | 'win' | 'lose';