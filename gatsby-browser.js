import './src/styles/global.css';
import '@fontsource/roboto-slab/300.css';
import '@fontsource/roboto-slab/600.css';
import '@fontsource/roboto-slab/800.css';
import '@fontsource/raleway';
import '@fontsource/raleway/600.css';
import 'graphiql/graphiql.min.css';

import wrapWithProvider from "./src/state/wrap-with-provider";
export const wrapRootElement = wrapWithProvider;