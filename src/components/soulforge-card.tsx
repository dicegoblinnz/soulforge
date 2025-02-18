'use client';

import {Card, CardProps, styled} from "@mui/material";

const StyledCard = styled(Card)`
  @property --card-hover-colour-01 {
    syntax: '<color>';
    initial-value: ${p => p.theme.palette.background.paper};
    inherits: false;
  }
  
  @property --card-hover-colour-02 {
    syntax: '<color>';
    initial-value: ${p => p.theme.palette.background.paper};
    inherits: false;
  }

  box-shadow: ${p => p.theme.shadows[2]};
  background: linear-gradient(50deg, var(--card-hover-colour-01), var(--card-hover-colour-02));
  transition: transform 0.15s, box-shadow0.15s, --card-hover-colour-01 0.15s, --card-hover-colour-02 0.15s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${p => p.theme.shadows[4]};
    --card-hover-colour-01: ${p => p.theme.palette.primary.main}35;
    --card-hover-colour-02: ${p => p.theme.palette.primary.main}15;
  }
`;

type Props = CardProps;

export function SoulforgeCard({children, ...props}: Props) {
  return (
    <StyledCard {...props}>
      {children}
    </StyledCard>
  );
}