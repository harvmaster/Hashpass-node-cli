import sha256 from 'sha256'
import promptPkg from 'prompt-sync'
const prompt = promptPkg(({sigint: true}))

// Replace a character in a string at a certain index
String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

// Creates a password using the hashpass js algorithm
export const generatePassword = function (secret, service) {
  if (!service) service = prompt('Service: ')
  if (!secret) secret = prompt.hide('Hashpass secret: ')
  

  let combined = `${secret}-${service.toLowerCase()}`

  for (let i = 0; i < 65536; i++) {
    combined = sha256(combined);
  }

  // Format to be the same as hashpass
  combined = combined.replaceAt(0, 'z')
                      .replaceAt(4, '7')
                      .replaceAt(9, 'H')
                      .replaceAt(15, '!')
                      .slice(0, 16)
  return combined
}

export default generatePassword
