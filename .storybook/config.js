import { configure, addDecorator } from '@storybook/angular';

configure(require.context('libs/ui/src/lib', true, /\.stories\.(j|t)sx?$/), module);
configure(require.context('libs/wrapper/src/lib', true, /\.stories\.(j|t)sx?$/), module);
