import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import postcssModules from 'postcss-modules';
//import sass from 'rollup-plugin-sass';
//  import css from 'rollup-plugin-css-only';
 import postcss from 'rollup-plugin-postcss';
//  import simplevars from 'postcss-simple-vars';
//   import nested from 'postcss-nested';
//   import cssnext from 'postcss-cssnext';
//  import cssnano from 'cssnano';
//  import css from 'rollup-plugin-css-porter';
//  import scss from 'rollup-plugin-scss'

import pkg from "./package.json";
const cssExportMap = {};
export default {
  // entry: 'entry.js',
  // dest: 'bundle.js',
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
 
    postcss(
      {
        plugins: [
          postcssModules({
            getJSON (id, exportTokens) {
              cssExportMap[id] = exportTokens;
            }
          })
        ],
        getExportNamed: false,
        getExport (id) {
          return cssExportMap[id];
        },
        extract: 'dist/styles.css',
      }
      // {
      //   extract: false,
      //   modules: true,
      //   use: ['sass'],
      //   inject:true,
      //   autoModules:true,
      //   plugins: [
      //     // sass()
      //     //         simplevars(),
      //     //          nested(),
      //     //          cssnext({ warnForDuplicates: false, }),
      //              cssnano(),
      //            ],
      // }
      // { plugins: [
      //         simplevars(),
      //          nested(),
      //          cssnext({ warnForDuplicates: false, }),
      //          cssnano(),
      //        ],
      //        extensions: [ '.css' ],
      //     }
          ),
    // css(),
    // sass(
    //   // {output: true,
    //   // prefix: `@import "./fonts.scss";`}
    //   ),
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
  ],
  external: ['react', 'react-dom'],
};