import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

const AppBar = (props: any) => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          tag="header"
          direction="row"
          align="center"
          justify={size !== 'small' ? 'between' : 'center'}
          background="home"
          style={{ zIndex: '1' }}
          {...props}
        />
      )}
    </ResponsiveContext.Consumer>
  );
};

export default AppBar;
