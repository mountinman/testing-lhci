module.exports = {
    ci: {
      collect: {
        startServerCommand: 'npm run dev',
        url: ['http://localhost:3000/', 'http://localhost:3000/about'],
        numberOfRuns: 1,
      },
      assert: {
        assertions: {
          'categories:performance': ['error', { minScore: 0.6 }],
          'categories:accessibility': ['warn', { minScore: 0.9 }],
        },
      },
    },
  };