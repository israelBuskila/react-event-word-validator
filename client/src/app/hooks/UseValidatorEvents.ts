import { useEffect, useRef } from 'react';
import MyActionListener from '../utils/MyActionListener';
import { VALIDATOR_EVENTS, ActionData, ValidatorEventType, Listener } from '../../types';

/**
 * Custom hook for managing the word validation event system
 * @param debug - Enable debug mode for logging validation events
 * @returns Object containing validation event system methods
 */
export const UseValidatorEvents = (debug = false) => {
    const validatorEventsRef = useRef<MyActionListener>(new MyActionListener({ debug }));

    const registerValidatorEvent = <T extends ValidatorEventType>(
        event: T,
        listener: Listener
    ) => {
        if (!Object.values(VALIDATOR_EVENTS).includes(event)) {
            throw new Error(`Invalid validation event type: ${event}`);
        }
        
        if (debug) {
            console.log(`Registering listener for validation event: ${event}`);
        }
        
        validatorEventsRef.current.registerListener(event, listener);
    };

    const emitValidatorEvent = <T extends ValidatorEventType>(
        event: T,
        data: ActionData[T]
    ) => {
        if (!Object.values(VALIDATOR_EVENTS).includes(event)) {
            throw new Error(`Invalid validation event type: ${event}`);
        }
        
        if (debug) {
            console.log(`Emitting validation event: ${event}`, data);
        }
        
        validatorEventsRef.current.emit(event, data);
    };

    const removeValidatorEvent = (event: ValidatorEventType) => {
        if (!Object.values(VALIDATOR_EVENTS).includes(event)) {
            throw new Error(`Invalid validation event type: ${event}`);
        }
        
        if (debug) {
            console.log(`Removing listener for validation event: ${event}`);
        }
        
        return validatorEventsRef.current.removeListener(event);
    };

    useEffect(() => {
        return () => {
            if (debug) {
                console.log('Cleaning up all validation event listeners');
            }
            Object.values(VALIDATOR_EVENTS).forEach(event => {
                validatorEventsRef.current.removeListener(event);
            });
        };
    }, [debug]);

    return {
        registerValidatorEvent,
        removeValidatorEvent,
        emitValidatorEvent,
        VALIDATOR_EVENTS
    };
};
