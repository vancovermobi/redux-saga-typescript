import { Box, makeStyles } from '@material-ui/core';
import { Header , Sidebar } from 'components/Common';
import * as React from 'react';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '220px 1fr',
    gridTemplateAreas: `'header header' 'sidebar main'`,

    minHeight: '100vh',
  },

  header: {
    gridArea: 'header',   
  },
  sidebar: {
    gridArea: 'sidebar',
    borderRight: `1px solid ${theme.palette.divider}`,  
    backgroundColor: theme.palette.background.paper,  
  },

  main: {
    gridArea: 'main',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2 ,3 ),
  },
}));

export function AdminLayout() {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Box className={classes.header}><Header /></Box>

      <Box className={classes.sidebar}><Sidebar /></Box>

      <Box className={classes.main}>Main</Box>

    </Box>
  );
}
