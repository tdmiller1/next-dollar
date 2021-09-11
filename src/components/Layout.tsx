import { Grid } from "@mui/material";
import React from "react";

interface LayoutProps {
  leftColumn: React.ReactElement;
  rightColumn: React.ReactElement;
}

export default function Layout(props: LayoutProps): React.ReactElement {
  const { leftColumn, rightColumn } = props;

  return (
    <Grid container justifyContent="center" spacing={4}>
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {leftColumn}
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {rightColumn}
      </Grid>
    </Grid>
  );
}
