exports.handler = (event, context, callback) => {
  const response = event.Records[0].cf.response;

  response.headers['strict-transport-security'] = [
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=63072000; includeSubdomains; preload',
    },
  ]
  response.headers['x-xss-protection'] = [
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block',
    },
  ]
  response.headers['x-content-type-options'] = [
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
    },
  ]
  response.headers['x-frame-options'] = [
    {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN',
    },
  ]
  response.headers['referrer-policy'] = [
    {
      key: 'Referrer-Policy',
      value: 'no-referrer-when-downgrade',
    },
  ]

  response.headers['content-security-policy'] = [
    {
      key: 'Content-Security-Policy',
      value: [
        // "default-src *",
        // "img-src *",
        // "script-src *",
        // "style-src *",
        // "object-src *",
        "frame-ancestors 'self'"
      ].join('; ')
    },
  ]
  callback(null, response)
};
