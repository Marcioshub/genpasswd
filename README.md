# Generate password

Nodejs script for creating random passwords via the command line. Only tested on MacOS and Linux, so it may not work as expected on Windows without custom configuration.

## Installation

cd /genpasswd
npm install
npm link

Check if genpasswd is working properly

```bash
genpasswd --version
```

## Usage

Options

```bash
genpasswd --help
```

Generate password of length 10 and save it to the passwords.txt file

```bash
genpasswd --help
genpasswd --length=10 --save
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
