import React from 'react';

import './styles.css';

const ThemeDecorator = (Story: any, context: any) => {
  if (context.globals.theme === 'Light')
    return (
      <div className={`theme-decorator light`}>
        <Story />
      </div>
    );

  if (context.globals.theme === 'Dark')
    return (
      <div className={`theme-decorator dark`}>
        <Story />
      </div>
    );

  return (
    <div className={`theme-decorator side-to-side`}>
      <div className='light'>
        <Story />
      </div>
      <div className='dark'>
        <Story />
      </div>
    </div>
  );
};

export default ThemeDecorator;
