# mockup-name-gen

[![npm version](https://badge.fury.io/js/mockup-name-gen.svg)](https://www.npmjs.com/package/mockup-name-gen)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)


Generate fake company or product names for mockups. Great for designers, devs, or entrepreneurs making prototypes.

## 🚀 Installation

```bash
npm install -g mockup-name-gen
```

## 💡 Usage

```bash
mockup-name-gen --count 3 --theme tech
```

## 📦 Programmatic Use

```js
const { generateName } = require('mockup-name-gen');

console.log(generateName('luxury'));
// Example: RoyalEssencehaus
```

## 💻 Output

```bash
MetaLogicPort
QuantumCoreByte
CyberAiHub
```

## 🎨 Themes

- Tech (default)
- Food
- Luxury
- Finance
- Gaming
- Health
- Pets
- ECO

## Help

Need help? Use the command below to discover available themes via:

```bash
mockup-name-gen --help
```

## 📑 License

**MIT License**

Copyright (c) 2025 Keegan Hugh Kelly

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
