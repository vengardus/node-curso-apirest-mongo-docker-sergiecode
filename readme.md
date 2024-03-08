# NODE: API-REST CON MONGODB Y DOCKER

- node 20.11.1

## INSTALANDO DEPENDENCIAS

```bash
npm i --save-dev nodemon
npm i dotenv express
npm i mongoose
npm i body-parser
```

## INSTALABNDO DOCKER Y CONFIGURANDO MONGODB

### INSTALANDO DOCKER

 Seguir los pasos de: [instalar docker en Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04)

### CONFIGURAR DOCKER COMPOSE

Crear  achivo docker-compose.yml en la raiz del proyecto

```yml docker-compose.yml
version: "3.8"

services:
  mongo-db:
    image: mongo:6.0.13
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: ${MONGO_USER}
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_PASS}
    volumes:
      - ./mongo:/data/db
    ports:
      - 27017:27017
```

### INSTAANDO LA IMAGEN DE MONGODB EN DOCKER

[Documentación imagen oficial mongo](https://hub.docker.com/_/mongo)

```basch
sudo docker compose up -d

sudo docker ps -l       # lista contenedores
```

### CONFIGURANDO .ENV

```.env
PORT=3000

MONGO_URL=mongodb://root:example@mongo:27017
MONGO_USER=
MONGO_PASS=
MONGO_DB_NAME=
```

Donde en MONGO_URL, se debe  cambiar:

- root => MONGO_USER
- example => MONGO_PASS
- mongo => localhost
