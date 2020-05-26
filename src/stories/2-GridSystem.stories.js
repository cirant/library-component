import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridSystem from '../GridSystem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withKnobs } from '@storybook/addon-knobs/react';
import { select } from '@storybook/addon-knobs';

const groupId = 'GROUP-ID2';
const direction = ['row', 'row-reverse', 'column', 'column-reverse'];
const justify = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'flex-start', 'flex-start', 'flex-start', 'flex-start'
];
const alignItems = ["flex-start", "center", "flex-end", "stretch", "baseline"];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const BodyData = () => {
  const classes = useStyles();
  return [0, 1, 2, 4].map((value) => (
    <Grid key={value} item>
      <Paper className={classes.paper} >
        {value}
      </Paper>
    </Grid>
  ));
};

export const GridContainer = () => <Grid container
  direction={select('direction', direction, 'row', groupId)}
  justify={select('justify', justify, 'flex-start', groupId)}
  alignItems={select('alignItems', alignItems, 'flex-start', groupId)} >
  {BodyData()} </Grid>;

export default {
  title: 'Grid System',
  component: GridSystem,
  decorators: [
    withKnobs,
    storyFn => <div style={{ height: '100vh', display: 'flex', border: '1px dashed red', maxHeight: '300px' }}>{storyFn()}</div>
  ],
  parameters: {
    assets: [
      'path/to/your/asset.png',
      'path/to/another/asset.png',
      'path/to/yet/another/asset.png',
    ],
  },
  excludeStories: /.*Data$/,
};