import React, { useEffect } from 'react';

import './styles.css';

const ThemeDecorator = (Story: any, context: any) => {
  useEffect(() => {
    const body = document.body;
    if (!body) return;

    if (context.globals.theme === 'Light') body.className = '';
    else if (context.globals.theme === 'Dark') body.className = 'dark';
    else if (context.globals.theme === 'Side-to-side') body.className = '';
    console.log(body.className);
  }, [context.globals.theme]);

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
