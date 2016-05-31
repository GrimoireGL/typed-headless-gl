# Typed headless-gl
The type definition for [`headless-gl`](https://github.com/stackgl/headless-gl)

## LICENSE
MIT

## Contributing

```sh
# Fork this repo
npm install

npm run watch

# add tests, make changes, pass tests ... then [ctrl+c]
npm run publish
```

## Updating
Update `typings.json/version` to match the source version you are typing against.
e.g. if you are creating typings for `chai@3.5.0`, then:
```js
// typings.json
{
  "version": "3.5.0"
  // ...
}
```