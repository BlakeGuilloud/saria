# saria
Playing around w/ crypto

The intention is to build a CLI for storing encrypted information in a .saria file in your pwd.


### Usage:
```
npm install saria -g
```

#### Write:
Encrypt text with a secret.
```
$ saria write <text> <secret>
$ saria write "apples are the best" redDelicious89
```

#### Read:
Provide the secret to decrypt the text
```
$ saria read <secret>
$ saria read redDelicious89
=> "apples are the best"
```
