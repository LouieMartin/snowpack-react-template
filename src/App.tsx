import * as React from 'react';
import {
  Button,
  Box,
  Title,
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';
import { useInterval } from '@mantine/hooks';

export const App = () => {
  const [count, setCount] = React.useState<number>(0);
  const interval = useInterval(() => setCount(oldCount => oldCount + 1), 1000);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const increment = () => setCount(oldCount => oldCount + 1);
  const decrement = () => setCount(oldCount => oldCount - 1);

  React.useEffect(() => {
    interval.start();
    return () => interval.stop();
  }, []);

  return (
    <Box>
      <Box sx={{ padding: '1em', position: 'fixed', }}>
        <ActionIcon
          variant='outline'
          color={colorScheme === 'dark' ? 'yellow' : 'blue'}
          onClick={() => toggleColorScheme()}
        >
          {colorScheme === 'dark' ? (
            <SunIcon style={{ width: 18, height: 18 }} />
          ) : (
            <MoonIcon style={{ width: 18, height: 18 }} />
          )}
        </ActionIcon>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: colorScheme === 'dark' ? theme.colors.dark[7] : undefined,
      }}>
        <Title order={1} sx={{ marginBottom: '1em', }}>Count {count}</Title>
        <Button sx={{ marginBottom: '1em', }} size='lg' onClick={decrement}>Decrement</Button>
        <Button size='lg' onClick={increment}>Increment</Button>
      </Box>
    </Box>
  );
};
