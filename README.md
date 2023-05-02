# array-combination

> find all combinations of string arrays

## Install

```bash
npm install array-combination
```

## Quick Start

```ts
import { combination } from 'array-combination';

combination(['a', 'b'], ['1', '2']);
// [['a', '1'], ['a', '2'], ['b', '1'], ['b', '2']]

combination(['a', 'b'], ['1', '2'], ['x', 'y']);
// [['a', '1', 'x'], ['a', '1', 'y'], ['a', '2', 'x'], ['a', '2', 'y'], ['b', '1', 'x'], ['b', '1', 'y'], ['b', '2', 'x'], ['b', '2', 'y']]
```
