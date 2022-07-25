![mongo-expresss](https://user-images.githubusercontent.com/67404147/180702018-732ab0fa-8fb9-4861-935e-f34dc4d6b935.png)

### Environment variables

MONGODB_URI = mongodb://localhost:27017/********

Para clonar este repositorio debes crear un archivo llamado .env donde se deben crer las variables de entorno que se mencionan arriba "MONGODB_URI"

This is a Multi page application using nodejs mongodb and handlebars

### Installation with docker-compose (Recommended)

```bash
git clone https://github.com/FaztWeb/express-mongodb-crud
cd express-mongodb-crud
docker-compose up
```

### Installation (Manually)

#### Requirements

* You need mongodb installed and running on your computer. or alternatively you can use docker

```bash
git clone https://github.com/FaztWeb/express-mongodb-crud
cd express-mongodb-crud
npm install
npm run build
npm start
```

Now you can visit: <a target="_blank" href="http://localhost:3000">http://localhost:3000</a>
