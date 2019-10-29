# github-pr-release

Run [github-pr-release](https://github.com/uiur/github-pr-release#readme)

```yaml
steps:
- uses: miyucy/github-pr-release-action
  with:
    token: "${{ secrets.GITHUB_TOKEN }}"
    owner: foo
    repo: bar
    head: develop
    base: master
```
