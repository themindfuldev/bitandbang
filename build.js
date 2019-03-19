'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.yellowBright('Tiago Romero Garcia'),
  handle: chalk.yellow('themindfuldev'),
  work: chalk.white('Tech Lead at ') + chalk.cyanBright('Pinterest'),
  twitter: chalk.white('https://twitter.com/') + chalk.greenBright('themindfuldev'),
  npm: chalk.white('https://npmjs.com/') + chalk.greenBright('~themindfuldev'),
  github: chalk.white('https://github.com/') + chalk.greenBright('themindfuldev'),
  linkedin: chalk.white('https://linkedin.com/in/') + chalk.greenBright('themindfuldev'),
  dev: chalk.white('https://dev.to/') + chalk.greenBright('themindfuldev'),
  web: chalk.white('https://') + chalk.redBright('tiagorg.com'),
  npx: chalk.magentaBright('npx') + ' ' + chalk.magentaBright('themindfuldev'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelDev: chalk.white.bold('     Dev.to:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const deving = `${data.labelDev}  ${data.dev}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               deving + newline + // data.labelDev + data.dev
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
