# pr-dasboard

Be able to easily view all open pull requests.

PR Dashboard unite all the PRs under your github repositories into a single page, in that sense you don't have to hunt down the open requests that are waiting for review. 🕵️‍♂️

Click on the button to open each one on a new tab to review, comment and merge.

## Getting Started

First thing first, you clone the repository:

```
    git clone https://github.com/b-a-b-e-l/pr-dashboard.git
```

and simply initiate the server on your machine by:

```
    npm start
```

## Usage

To be able to access your repositories from github, we need your permission... To do that you have to generate a "GitHub Personal Access Token" with "repo" and "user" access, once the token was create, you might need to enable "SSO" in case you have some repositories under "SSO" authentication.

After that, you will be able to add new repositories either by pasting the full-url or just the repo name. Everything is store inside localStorage.

## Contributing

First of all, thank you for expressing interest into contributing on this initiative!

Below you can find step by step how to initiate a contribution:

### Step by step

1. Open an issue on the repository explaining what is the contribution idea / goal.
2. Fork this repository [here.](https://github.com/b-a-b-e-l/pr-dashboard.git)
3. Clone the forked repository to your local machine.
4. Create a branch with the number or the issue created on step 01.
5. Edit the part of the code that you would like to contribute.
6. Commit your changes and push the new branch.
7. Open and submit a Pull Request.
8. Make sure that your PR follows the [Acceptanc criteria](#acceptance-criteria)

If you need any help, feel free to raise an issue with a question.

## Acceptance criteria

Each PR submited must contain the following before merge:

- E2E Tests (if applicable)
- Unit Tests (if applicable)
- Lint rules applied
- The PR must be approved at least by one maintainer
- Be following the [branching strategy](#branch-strategy)

## Branch Strategy

- feat/{issue_number} -> features
- fix/{issue_number} -> fixes / bug fixes
- hot/{issue_number} -> hotfixes

## Deployment

To deploy this project into server or system you can run:

```
    npm build
```

## FAQ

- Where can I generate a "GitHub Personal Access Token"?

You can generate the token by accessing your **GitHub Settings** page, then search for **Developer settings** on the left menu and then click into **Personal Access Tokens**.

On the top you will be able to see a button called **"Generate new token"**, you can click it to generate your Personal Access token.

Please make sure to check the "repo" and "user" access checkboxes 😉


## Runbook

To run this project in your machine you must have **NPM v12** installed and **yarn**.

After setting up the requirements, you can run the following script in your terminal on the root of the project:

```
    npm start
```

## Testing

To run the test you can run the following command into the root of the project

```
    npm test
```
