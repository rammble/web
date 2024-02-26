### this is only possible because of this painful regex after exporting individual colors as svgs
```jsregexp
/.+fill."([#A-z0-9]+)".+?(fill-opacity."(.+)")?.+/gim
```
