const core = require("@actions/core");
const github = require("@actions/github");
const createReleasePR = require("github-pr-release");

try {
  const token = core.getInput("token", { required: true });
  const owner = core.getInput("owner", { required: true });
  const repo = core.getInput("repo", { required: true });
  const head = core.getInput("head", { required: true });
  const base = core.getInput("base", { required: true });
  createReleasePR({ token, owner, repo, head, base })
    .then(pullRequestResponse => {
      // https://developer.github.com/v3/pulls/#get-a-single-pull-request
      core.setOutput("url", pullRequestResponse.html_url);
    })
    .catch(error => {
      core.setFailed(error.message);
    });
} catch (error) {
  core.setFailed(error.message);
}
