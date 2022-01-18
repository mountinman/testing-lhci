module.exports = {
    ci: {
      collect: {
        startServerCommand: 'npm run dev',
        url: ['http://localhost:3000/'],
        numberOfRuns: 5,
      },
    },
  };