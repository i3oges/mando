## Mando - The SFStarter of the future

![Mando UI](docs/mando-ui.png)

### Running the app

create `.env` file

```sh
cp .env.example .env
```

run `docker compose`

```sh
docker compose -f compose.dev.yaml up --build
```

Navigate to http://localhost:8080

### Note:

subsequent app starts can omit the `--build` option.
