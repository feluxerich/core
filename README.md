# Core

![CD](https://github.com/feluxerich/core/actions/workflows/ci.yaml/badge.svg)
![Docs](https://github.com/feluxerich/core-docs/actions/workflows/mkdocs.yaml/badge.svg)
[![License MIT](https://img.shields.io/github/license/feluxerich/core)](https://github.com/feluxerich/core/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors-anon/feluxerich/core)](https://github.com/feluxerich/core/graphs/contributors)

- [Stable](https://core.fluxi.me/)
- [Development](https://dev.fluxi.me/)
- [Information](#info)
  - [Appending](#appending)
- [Deploy](#deploy)
- [Contributing](#contributing)
  - [Formatter](#formatter)
  - [Style](#style)

## Info

The best web app for literally everything is core. You can really do everything with it. Also cook coffee and build a house. It's for organizing and managing everything in one app. This is the point why it also has PWA subscription.

### Appending

So why are you still here request access and make your life better.

## Deploy

### Create a `.env` file

```bash
cat <<_EOF > .env
TRN_API_KEY={Your private tracker.gg API key}
JWT_SECRET_KEY={A random static secret key}
MONGO_URI={Your MongoDB connection URI}
_EOF
```

### Deploy with Docker

#### Have a Database

If you have a MongoDB Database Server you have to create a new database named `core`. Then it is recommended to create a user in this database for authenticating the `core` web app. This user should be the database owner.

#### Run the Container

```bash
docker pull ghcr.io/feluxerich/core:latest

# or development release

docker pull ghcr.io/feluxerich/core:edge

docker run -p 3000:3000 --env-file .env ghcr.io/feluxerich/core
```

Or with a `docker-compose.yaml`

```yaml
...
services:
  ...
  core:
    image: ghcr.io/feluxerich/core
    restart: always
    env_file:
      - ".env"
```

```bash
docker-compose up -d
```

### Build and Deploy

#### Clone the repository

```bash
git clone git@github.com:feluxerich/core .
```

#### Install dependencies and build the project

```bash
npm install --save

# Build
npm run build
```

#### Run

```bash
npm run start
```

## Contributing

If you want to contribute something to this project please accept that we do not accept everything as a feature. So please make sure that your feature has no pornographic content. It also mustn't have any violence. Also please take care about security risks and design your code clean and in form.

### Formatter

We use `prettier` for our project so please make sure to use format your code and use our `.prettierrc.js` as config.

### Style

TailwindCSS is the CSS framework we have chosen for this project and we try not to use plain CSS if it is possible with tailwind.
