import React from 'react';

import './styles.css';

const ThemeDecorator = (Story: any, context: any) => {
  const theme = context.globals.theme === 'dark' ? 'dark' : 'light';

  return (
    <div className={`theme-decorator ${theme}`}>
      <Story />
    </div>
  );
};

export default ThemeDecorator;
