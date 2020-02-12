import React, {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {

    const [darkMode, setDarkMode] = useLocalStorage('darkMode')

    useEffect(() => {
        const grabBody = document.querySelector('body');
        const darkModeVerify = window.localStorage.getItem(JSON.parse('darkMode'));

        (darkModeVerify) ? (grabBody) :  ;

    }, [])

};