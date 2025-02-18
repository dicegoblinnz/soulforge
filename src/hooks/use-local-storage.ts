'use client';

import {useCallback, useEffect, useState} from "react";


export function useLocalStorage(key: string, initialState: any) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const restored = getStorage(key);

    if (restored) {
      setState((prevState: any) => ({
        ...prevState,
        ...restored,
      }));
    }
  }, [key])

  const updateState = useCallback(
    (updateValue: any) => {
      setState((prevState: any) => {
        setStorage(key, {
          ...prevState,
          ...updateValue,
        });

        return {
          ...prevState,
          ...updateValue,
        }
      })
    }, [key]
  )

  const update = useCallback((name: string, updateValue: any) => {
    updateState({
      [name]: updateValue
    })
  }, [updateState]);

  const reset = useCallback(() => {
    removeStorage(key);
    setState(initialState);
  }, [key, initialState]);

  return [
    state,
    update,
    reset
  ]
}



export const getStorage = (key: string) => {
  let result = null;

  try {
    const value = window.localStorage.getItem(key);

    if (value) {
      result = JSON.parse(value);
    }
  }
  catch (error) {
    console.error(error);
  }

  return result;
};

export const setStorage = (key: string, value: any) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  catch (error) {
    console.error(error);
  }
};

export const removeStorage = (key: string) => {
  try {
    window.localStorage.removeItem(key);
  }
  catch (error) {
    console.error(error);
  }
};