---
name: release-funstack
description: A skill to make a GitHub release for the `@funstack/router` package. Use this skill when the user wants to release a new version of the package.
allowed-tools:
  - Read
  - Bash(gh:*)
  - Bash(git:*)
---

# Release FUNSTACK Skill

To release a new version of the `@funstack/router` package, follow these steps:

1. Read the `packages/router/package.json` file to determine the current version of the package.

- User may or may not have already updated the version in `package.json`. Ask the user to confirm if they have updated the version. If not, you should update the version based on semantic versioning rules (patch, minor, major) as per user's instruction.

2. Update the version in `packages/router/package.json`, commit and push if necessary.

- The commit message should be `chore: bump version to x.y.z` where `x.y.z` is the new version.

3. Inspect the git log since the last release tag to generate release notes.

- The release notes should summarize the changes made since the last release.
- Especially, highlight any breaking changes, new features, or important fixes.

4. Use the `gh` CLI to create a new release on GitHub with the new version and the generated release notes.

- The tag name should be `x.y.z` where `x.y.z` is the new version.

5. Inform the user that the release has been created successfully, providing the URL to the release page on GitHub.

## Writing Release Notes

When writing release notes, consider the following structure:

```markdown
## What's Changed

### Breaking Changes

- Change the `onNavigate` signature to accept an `OnNavigateInfo` object instead of the matched array. (#52)

### Features

- Add new hooks `useRouteParams`, `useRouteState` and `useRouteData` for type-safe state management (#50)

### Improvements

- Improve route matching performance by optimizing the matching algorithm (#20)

**Full Changelog**: https://github.com/uhyo/funstack-router/compare/0.0.1...0.0.2
```

Notes:

- Highlight breaking changes if any.
- Group changes into categories like "Features", "Improvements", "Fixes", etc.
- Documentation updates and dependency updates should be omitted unless they are significant (e.g. breaking changes).
- Provide a link to the full changelog comparing the previous version and the new version.
