import { Preview } from '@storybook/react';

import '../src/styles/tailwind.css';
import ThemeDecorator from './decorators/ThemeDecorator';

const preview: Preview = {
  globalTypes: {
    theme: {
      defaultValue: 'light',
      toolbar: {
        title: '',
        icon: 'mirror',
        items: ['Light', 'Dark', 'Side-to-side'],
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
