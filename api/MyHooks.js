import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useLocalStorage(key, defaultValue) {
    const getInitialValue = () => AsyncStorage.getItem(key) ??  defaultValue;
    const [value, setValue] = useState(getInitialValue);
    const setAndStorageValue = (newValue) => {
        setValue(newValue);
        AsyncStorage.setItem(key, newValue);
    }
    return [value, setAndStorageValue];
}

