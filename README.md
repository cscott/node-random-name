# random-name

Generate random (or seeded) names, based on 1990 Census Data.

To install:
```
npm install random-name
```

To use:
```
var random_name = require('random-name');
console.log(random_name()); // -> "Brittny Kraska"
console.log(random_name({ first: true, gender: "male" })); // -> "Jean"
console.log(random_name({ last: true })); // -> "Kinsel"
console.log(random_name({ seed: 'Based on this' })); // -> "Garrett Scheets"
console.log(random_name({ random: Math.random, female: true })); // -> "Jo"
```

# Related

The name data used was taken from
[treyhunner/names](https://github.com/treyhunner/names), which is a
python package with a very similar API.

# License
Copyright (c) 2014 C. Scott Ananian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
