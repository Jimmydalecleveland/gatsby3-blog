module.exports = {
  ci: {
    upload: {
      target: "lhci",
      token: "11378fc3-5660-4681-8ef5-0e8136ff308c",
      serverBaseUrl: "https://serene-harbor-65729.herokuapp.com/",
    },
    collect: {
      numberOfRuns: 3,
      staticDistDir: "./public",
      url: ["/", "/mock-asynchronous-functions-with-jest/"],
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "categories:performance": ["error", { minScore: 0.93 }],
        "categories:accessibility": ["error", { minScore: 0.93 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.9 }],
      },
    },
  },
};
