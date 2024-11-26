abrir terminal{
    digitar:
        npm install es6 -y
        npm install express
}

mongoDB{
    npm install mongodb

    mongodb+srv://Luiz:3010@imersaoalura.n2tfy.mongodb.net/?retryWrites=true&w=majority&appName=ImersaoAlura

    site DB: https://cloud.mongodb.com/v2/673fefdae08483451982cb8d#/overview?automateSecurity=true
}

arquivo .env{
    variavel com letra maiuscula e underline = link do mongodb
}

package.Json{
    abre clausula "Script" e adiciona itens "Dev" e "tests"

    Dev: "node --watch --env-file=.env Arquivo_da_API"
    tests: "" -- Sring vazia

    "npm run dev" no terminal
}

