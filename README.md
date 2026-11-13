# vitest webdriverio traceView reproduction

With vitest 5.1.0 and the webdriverio provider, `expect.element()` fails
immediately instead of waiting for the element, because `browser.traceView`
now defaults to `"failure-only"`.

1. `npm install`
2. `npm test`: fails with `Cannot find element with locator: getByRole('button', { name: 'Hello' })`.
3. `npm run test:no-trace-view` (same config with `traceView: "off"`): passes.
4. With `"vitest": "5.0.5"` in `package.json`, `npm test` passes.
