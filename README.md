# redeem-flexible-product

## Available scripts

`npm run zip`
Zip all the files to upload them to AWS.

`npm run test`
Run unit test suite.

`npm run test:watch`
Run unit test suite for development.

## env
```
KEY_MANAGER_ARN
```

## Event shape
```
{
    apiKey: string,
    asset: string,
    amount: number like
}
```