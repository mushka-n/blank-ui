import { Preview } from '@storybook/react';

import '../src/styles/tailwind.css';
import ThemeDecorator from './decorators/ThemeDecorator';

const preview: Preview = {
  globalTypes: {
    theme: {
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: false,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [ThemeDecorator],
};

export default preview;
