module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:8080/'],
      startServerCommand: 'go run ./go/main.go',
    },
    upload: {
      target: 'temporary-public-storage',
    },
    githubToken: process.env.GITHUB_TOKEN,
  },
};
