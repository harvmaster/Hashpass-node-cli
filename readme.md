# Hashpass-Node-CLI
A simple command line tool for stateless password gneration
## Generation Method
The password generation is the hex result of 2^16 (65536) iterations of sha256(service-password)
This same algorithm can be used on [this website](https://sdb.hzuccon.com)

# Installation
```bash
git clone https://github.com/harvmaster/Hashpass-node-cli.git
cd Hashpass-node-cli
npm install
npm install -g
```

# Commands
```bash
hashpass [serviceName] [secret]
hashpass facebook password
```
Both service and secret are optional and can be added later.
```bash
hashpass facebook

# responds with: 'hashpass secret:'  
```

