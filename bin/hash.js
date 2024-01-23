#!/usr/bin/env node

import { generatePassword } from '../lib/hash.js'
import clipboardy from 'clipboardy';


// Standardised method called run to call the function, could just call the actual file i guess
export async function runHash (args) {
    let service = args[0]
    let secret = args[1]

    const pwd = generatePassword(service, secret)
    // Copy
    try {
      clipboardy.writeSync(pwd);
    } catch (e) {
      console.log('Problem copying to clipboard, printing password instead')
      console.log(pwd)
    }
    return
}

export default runHash;