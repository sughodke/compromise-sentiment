
<div align="center">
  <code>npm install compromise-sentiment</code>
</div>

```js
const nlp = require('compromise')
nlp.extend(require('compromise-sentiment'))

let doc = nlp('Are you shouting boo, or boo-urns? Booo! I was saying boo-urns.')
doc.sentiment()
// 0.1
```

<!-- ### [Demo](https://observablehq.com/@spencermountain/compromise-sentences)
-->

### API

- **[.sentiment()](#)** - return a sentence class with additional methods
  - **[.sentiment().json()](#)** - overloaded output with sentence metadata

MIT

# Sentiment Analysis plugin for compromise.js

### Data Sources
* [https://github.com/NaturalNode/natural/blob/master/lib/natural/sentiment/English/pattern-sentiment-en.json](NaturalNode Pattern Sentiment)
* [https://github.com/words/afinn-165](AFINN 165)
