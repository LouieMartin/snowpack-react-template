import * as React from 'react';
import { render } from 'react-dom';
import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider
} from '@mantine/core';
import { useLocalStorageValue } from '@mantine/hooks';
import { App } from './App';
import './index.css';

const rootElement = document.getElementById('root');
const Component = () => {
    const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
    });

    const toggleColorScheme = (value?: ColorScheme) => 
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{
                colorScheme,
                colors: {
                    dark: [
                        '#d5d7e0',
                        '#acaebf',
                        '#8c8fa3',
                        '#666980',
                        '#4d4f66',
                        '#34354a',
                        '#2b2c3d',
                        '#1d1e30',
                        '#0c0d21',
                        '#01010a',
                    ],
                },
            }}>
                <App/>
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

render(
    <Component/>,
    rootElement
);
