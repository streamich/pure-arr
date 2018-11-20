# pure-arr

Pure, immutable equivalents of `Array.prototype`.

```js
import {push} from 'pure-arr';

const a = push([1, 2], 3);
// 👉 [1, 2, 3]
```

- Implements all `Array.prototype` methods.
- First argument is always an array.
- Does not mutate inputs.

## License

[Unlicense](LICENSE) &mdash; public domain.
