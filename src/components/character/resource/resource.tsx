import {Box, IconButton, Stack, Typography} from "@mui/material";
import {ReactNode} from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


type Props = {
  value: number;
  icon: ReactNode;
  name: string;
  onUpdate: (newValue: number) => void;
};

export function Resource({ value, icon, name, onUpdate }: Props) {
  const increase = () => onUpdate(value + 1);
  const decrease = () => onUpdate(value - 1);
  // const setValue = (newValue: number) => onUpdate(newValue);

  return (
    <Box
      display="flex"
      gap={1}
      flexDirection="column"
      alignItems="center"
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{
          borderStyle: 'solid',
          borderWidth: '2px',
          borderRadius: 5
        }}
      >
        <IconButton onClick={() => decrease()}>
          <KeyboardDoubleArrowDownIcon/>
        </IconButton>

        <Typography
          sx={{
            minWidth: "20px",
            textAlign: "center"
          }}
        >
          {value}
        </Typography>

        <IconButton onClick={() => increase()}>
          <KeyboardDoubleArrowUpIcon/>
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={1}>
        {icon}
        <Typography>{name}</Typography>
      </Stack>
    </Box>
  );
}