# use-lib-in-ssr

> 

[![NPM](https://img.shields.io/npm/v/use-lib-in-ssr.svg)](https://www.npmjs.com/package/use-lib-in-ssr) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-lib-in-ssr
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-lib-in-ssr'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [hppRC](https://github.com/hppRC)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
