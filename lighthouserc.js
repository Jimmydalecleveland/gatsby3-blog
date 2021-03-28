module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
      // target: 'lhci',
      // token: '28d7e421-645d-486b-85ba-3a68a580495a',
      // serverBaseUrl: 'https://frozen-anchorage-54353.herokuapp.com/',
    },
    collect: {
      numberOfRuns: 3,
      staticDistDir: './public',
      url: ['/', '/mock-asynchronous-functions-with-jest/'],
    },
    assert: {
      assertions: {
        'largest-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['warn', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
  },
}
