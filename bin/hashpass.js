#!/usr/bin/env node

import { runHash } from './hash.js'

// Arguments passed in from the console, the +2 removes 'node' and 'projects'
const args = process.argv.splice(process.execArgv.length + 2);

async function run () {
  runHash(args)
}

run()