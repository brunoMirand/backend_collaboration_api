# Contribution Guidelines

You can contribute in many ways: openning or participating of a issue, reporting a bug, sending a [pull request][6].

# Getting Started

1.  Clone the project.

2.  Create a new branch with jira story id: `feature/feature-name` from `develop` or `hotfix/my-bug-fix` from `main`, Pattern [Git Flow][1].

    ```sh
      $  git checkout -b feature/jira-story-id
    ```

3.  Open up the project in your favourite text editor, select the file you want to contribute to and make your changes.

4.  After making your changes in the new git branch then You can do a `git status` to see your changes, but do it before `git add`.

    ```sh
      $  git status
    ```

    ```sh
      $  git add .
    ```

5.  Commit your changes using a descriptive commit message.

- > Note, we use a [semantic release][2] as the default commit message, for exemple: `type(scope): [TEAM] message`

  ```sh
    $  git commit -m "feat(LANDING-PAGES): [DF] follow the steps of that document."
  ```

7.  Push your commits:

    ```sh
      $  git push -u origin branch-name
    ```

8.  Submit a pull request.

- Submit a Pull Request to the branch `develop`.
- The pull request and commit should have a useful title.
- Make sure to give a description about your pull request (purpose of your change).
- Use the template `pull_request_template.md` to indicate your changes
- Being respectful of differing viewpoints and experiences.

### NOTICE

> Make sure you create tests for your new features.

# Code Style

### For the good manutance of the project, follow all the Code Styles:

- [Prettier][3]
- [ESLint][4]
- [Husky][5]

### Important commands throughout development:

1.  Formats all of our files from the settings in the .prettierrc file.

    ```sh
      $  npm run format
    ```

2.  Basically, ESLint parses your code, analyses it and run linting rules that may trigger warning or errors to let you know if your code is right or wrong.

    ```sh
      $  npm run lint
    ```

3.  Automatically fix problems.

    ```sh
      $  npm run lint:fix
    ```

4.  This project uses git hooks.

- Husky can prevent bad commit, push and more :dog: _woof!_

---

[1]: https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04
[2]: https://blog.greenkeeper.io/introduction-to-semantic-release-33f73b117c8
[3]: https://github.com/prettier/prettier
[4]: https://github.com/eslint/eslint
[5]: https://github.com/typicode/husky
[6]: https://github.com/brunoMiranda8922/backend_collaboration_api/pulls
