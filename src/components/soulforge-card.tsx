'use client';

import {Card, CardProps, styled} from "@mui/material";

const HoverCard = styled(Card)`
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

  --card-hover-colour-01: ${p => p.theme.palette.background.paper};
  --card-hover-colour-02: ${p => p.theme.palette.background.paper};

  &.exhausted {
    --card-hover-colour-01: ${p => p.theme.palette.error.main}35;
    --card-hover-colour-02: ${p => p.theme.palette.error.main}15;
  }

  box-shadow: ${p => p.theme.shadows[2]};
  background: linear-gradient(50deg, var(--card-hover-colour-01), var(--card-hover-colour-02));
  transition: transform 0.15s, box-shadow 0.15s, --card-hover-colour-01 0.15s, --card-hover-colour-02 0.15s;

  &:not(.exhausted):hover {
    transform: translateY(-2px);
    box-shadow: ${p => p.theme.shadows[4]};
    --card-hover-colour-01: ${p => p.theme.palette.primary.main}35;
    --card-hover-colour-02: ${p => p.theme.palette.primary.main}15;
  }
`;

type Props = {
  exhausted?: boolean;
} & CardProps;

export function SoulforgeCard({children, exhausted, ...props}: Props) {
  return (
    <HoverCard {...props} className={exhausted ? "exhausted" : ""}>
      {children}
    </HoverCard>
  );
}