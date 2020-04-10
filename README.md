# COVID19 Bot

This app is bootstrapped with [express-generator] and is built with javascript.

## Description
Nowadays, facebook messenger used to be the center of communication in our country. With this, we came up to build a bot to provide informative details on how to fight this pandemic. 

## Up and Running the app
- Install dependencies
- Run environment
  ```bash
    npm run dev
  ```
- Download and install [ngrok](https://ngrok.com/download).
- Expose your development environment
  ```bash
    ngrok http 3000
  ```
- Add callback url for your webhook
  <div>
    <img alt="webhook" src="data:image/png;base64,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"/>
  </div>

## Collaborating
- Create a branch
  ```bash
    git checkout -b <feature/branch_name> # feature branch
    git checkout -b <chore/branch_name> # set up / configuration branch
    git checkout -b <bugfix/branch_name> # bugfix branch
    git checkout -b <hotfix/branch_name> # hotfix branch
  ```
- create merge/pull request

## To Dos
- [ ] List of Covid Symptoms
- [ ] List of Countries with Covid
- [ ] Latest count of active covid cases per country
- [ ] Latest count of cured covid cases per country
- [ ] Latest count of deaths of covid cases per country
- [ ] (Good to have) Nearby hospitals

## Author/s
- Neil Monzales
- Ryan Kenth Morales
