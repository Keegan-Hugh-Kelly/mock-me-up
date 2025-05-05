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
With branding identity:
```bash
mockup-name-gen --count 1 --theme luxury --identity
```

## 🛠️ Options

| Option        | Description                                                                                   |
|--------------|-----------------------------------------------------------------------------------------------|
| `--count`    | Number of names to generate (default: 1)                                                     |
| `--theme`    | Theme for the name (default: tech)                                                           |
| `--identity` | Generate a branding identity with the name (default: false)                                  |
| `--help`     | Show help information                                                                        |
| `--version`  | Show version information                                                                     |

## 📦 Programmatic Use

```js
const { generateName, generateIdentity } = require('mockup-name-gen');

const name = generateName('eco');
const identity = generateIdentity(name, 'eco');

console.log(name);       // Example: BioPlanetloop
console.log(identity);   // { name, theme, colors, fonts, mood }
```

## 💻 Output

Basic Output:

```bash
MetaLogicPort
QuantumCoreByte
CyberAiHub
```

With --identity:

```json
{
  "name": "CyberVerseify",
  "theme": "tech",
  "colors": ["#0F172A", "#3B82F6", "#1E293B", "#93C5FD", "#F8FAFC"],
  "fonts": ["Inter", "Roboto Mono", "Space Grotesk"],
  "mood": ["futuristic", "clean", "bold"]
}
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
