import { ArgsTable, Description, Primary, Title } from '@storybook/addon-docs';

export const parameters = {
  docs: {
    page: () => (
      <>
        <Title />
        <Description />
        <Primary />
        <ArgsTable />
      </>
    ),
  },
  layout: 'centered',
  options: {
    showPanel: true,
    selectedPanel: 'controls',
  },
  previewTabs: {
    canvas: {
      hidden: true,
    },
    docs: {
      hidden: true,
    },
  },
};