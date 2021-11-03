# Deploy

## Create a `.env` file

```bash
cat <<_EOF > .env
TRN_API_KEY={Your private tracker.gg API key}
JWT_SECRET_KEY={A random static secret key}
MONGO_URI={Your MongoDB connection URI}
_EOF
```

## Deploy with Docker

### Have a Database

If you have a MongoDB Database Server you have to create a new database named `core`. Then it is recommended to create a user in this database for authenticating the `core` web app. This user should be the database owner.

### Run the Container

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

## Build and Deploy

### Clone the repository

```bash
git clone git@github.com:feluxerich/core .
```

### Install dependencies and build the project

```bash
npm install --save

# Build
npm run build
```

### Run

```bash
npm run start
```
