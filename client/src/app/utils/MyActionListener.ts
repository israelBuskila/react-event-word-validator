import { Listener, EventMap } from '../../types';

export class MyActionListener {
    private listeners: EventMap;
    private readonly debugMode: boolean;

    constructor(options: { debug?: boolean } = {}) {
        this.listeners = new Map();
        this.debugMode = options.debug || false;
    }

    public registerListener<T>(action: string, listener: Listener<T>): void {
        if (typeof listener !== 'function') {
            throw new Error('Listener must be a function');
        }

        if (this.debugMode) {
            console.log(`Registering listener for action: ${action}`);
        }

        if (!this.listeners.has(action)) {
            this.listeners.set(action, [listener]);
        } else {
            const existingListeners = this.listeners.get(action)!;
            if (!existingListeners.includes(listener)) {//compare function references.
                existingListeners.push(listener);
            }
        }
    }

    public removeListener(action: string): boolean {
        if (this.debugMode) {
            console.log(`Removing listeners for action: ${action}`);
        }

        return this.listeners.delete(action);
    }

    public removeSpecificListener<T>(action: string, listener: Listener<T>): boolean {
        if (!this.listeners.has(action)) {
            return false;
        }

        const listeners = this.listeners.get(action)!;
        const index = listeners.indexOf(listener);
        
        if (index !== -1) {
            listeners.splice(index, 1);
            if (listeners.length === 0) {
                this.listeners.delete(action);
            }
            return true;
        }
        
        return false;
    }

    public emit<T>(action: string, data: T): void {
        if (!this.listeners.has(action)) {
            throw new Error(`Can't emit an event. Event "${action}" doesn't exist.`);
        }

        if (this.debugMode) {
            console.log(`Emitting action: ${action}`, data);
        }

        const actionListeners = this.listeners.get(action)!;
        actionListeners.forEach(listener => {
            try {
                listener(data);
            } catch (error) {
                console.error(`Error in listener for action "${action}":`, error);
            }
        });
    }

    public getRegisteredActions(): string[] {
        return Array.from(this.listeners.keys());
    }

    public getListenerCount(action: string): number {
        return this.listeners.has(action) ? this.listeners.get(action)!.length : 0;
    }

    public clear(): void {
        this.listeners.clear();
    }
}

export default MyActionListener;