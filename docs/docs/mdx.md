---

id: mdx
title: Powered by MDX
---------------------

You can write JSX and use React components directly within your Markdown thanks to [MDX](https://mdxjs.com/).

export const Highlight = ({children, color}) => (
<span
style={{
backgroundColor: color,
borderRadius: '2px',
color: '#fff',
padding: '0.2rem',
}}

>

```
{children}
```

  </span>
);

<Highlight color="#2563eb">NOAH Guardra blue</Highlight> and <Highlight color="#111827">NOAH Guardra dark</Highlight> are example colors used in this documentation.

I can write **Markdown** alongside my *JSX*!

