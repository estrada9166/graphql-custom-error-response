# Create custom error response

 
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


# Step by step

[Check this post to try it step by step](https://medium.com/@estrada9166/return-custom-errors-with-status-code-on-graphql-45fca360852)

# How to run it
+ Clone this repo.
+ `npm install`.
+ `npm run dev`.
+ Visit on your browser `http://localhost:7000/graphql`.
+ Make this query:
    ```
    {
      test {
        test
      }
    } 
    ```

## Main idea
The main idea is to return a custom error with the `statusCode` on the response, also you can send any extra field, to do it you need to change just 2 files:

### Constants.js
```js
exports.errorType = {
  UNAUTHORIZED: {
    message: 'Authentication is needed to get requested response.',
    statusCode: 401
    // add here any extra field
  }
}
```
### App.js
```js
formatError: (err) => {
  const error = getErrorCode(err.message)
  return ({ 
    message: error.message, 
    statusCode: error.statusCode 
    // add here err.<YOUR_EXTRA_FIELD_CREATED_ON_CONSTANTS>
  })
}
```

In this case we just want to return a `message` and a `statusCode`

![New user](images/custom-error.png)

## License
### The MIT License

Copyright (c) 2018 Alejandro Estrada

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