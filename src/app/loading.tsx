'use client';

import {Box, styled} from "@mui/material";
import {blue, green} from "@mui/material/colors";
import Image from "next/image";

const StyledBox = styled(Box)`
  background: linear-gradient(130deg, ${green[400]}, ${blue[300]}, ${green[400]});
  background-size: 200% 200%;
  animation-name: pulsing;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  @keyframes pulsing {
    0% {
      background-position: 10% 0%
    }
    50% {
      background-position: 91% 100%
    }
    100% {
      background-position: 10% 0%
    }
  }
`;

const StyledLogo = styled(Image)`
  animation: pulsingImageWidth 3s, pulsingImageHeight 3s, spinningImage 3s;
  animation-iteration-count: infinite;

  @keyframes pulsingImageWidth {
    0% {
      width: 200px;
    }
    12% {
      width: 150px;
    }
    40% {
      width: 256px;
    }
    60% {
      width: 256px;
    }
    91% {
      width: 200px;
    }
    100% {
      width: 200px;
    }
  }

  @keyframes pulsingImageHeight {
    0% {
      height: 200px;
    }
    13% {
      height: 250px;
    }
    20% {
      height: 200px;
    }
    40% {
      height: 256px;
    }
    60% {
      height: 256px;
    }
    91% {
      height: 200px;
    }
    100% {
      height: 200px;
    }
  }

  @keyframes spinningImage {
    0% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(0deg);
    }
    67% {
      transform: rotate(-30deg);
    }
    91% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loading() {
  return (
    <StyledBox
      sx={{
        width: "100%", height: "100vh",
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <StyledLogo src="/soulforge_example/dice_goblin.webp" alt={"Gobby"} width={256} height={256}/>
    </StyledBox>
  );
}
