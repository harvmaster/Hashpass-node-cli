#!/usr/bin/env node

import { exec } from 'node:child_process';

import { generatePassword } from '../lib/hash.js'
import clipboardy from 'clipboardy';

const copyOnWayland = (text) => {
  return new Promise((resolve, reject) => {
    const child = exec(`wl-copy "${text}"`, (error, stdout, stderr) => {
      return
    });
  });
}

const wait = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done')
    }, ms);
  });
}

// Standardised method called run to call the function, could just call the actual file i guess
export async function runHash (args) {
    let service = args[0]
    let secret = args[1]

    const pwd = generatePassword(secret, service)

    // Copy
    try {
      try {
        copyOnWayland(pwd);
        await wait(50)
      } catch (e) {
        console.log(e)
      }
      const res = await clipboardy.write(pwd);
      process.exit(0)
    } catch (e) {
      console.log('Problem copying to clipboard, printing password instead')
      console.log(pwd)
    }
    return
}

export default runHash;