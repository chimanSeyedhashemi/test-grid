import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import sass from 'rollup-plugin-sass';
import css from 'rollup-plugin-css-only';
import postcss from 'rollup-plugin-postcss';
 import simplevars from 'postcss-simple-vars';
 import nested from 'postcss-nested';
 import cssnext from 'postcss-cssnext';
 import cssnano from 'cssnano';

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file:pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
 
    postcss({ plugins: [
              simplevars(),
               nested(),
               cssnext({ warnForDuplicates: false, }),
               cssnano(),
             ],
             extensions: [ '.css' ],
          }),
    css(),
    sass(),
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true
    }),
    commonjs({
      
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement"
        ],
        "node_modules/react-dom/index.js": ["render"]
      }
    })
  ]
};