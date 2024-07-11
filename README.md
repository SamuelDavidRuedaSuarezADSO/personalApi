# Ejecutar correctamente
Para ejcutar este repositorio se necita un version de node superior a 20

```
node -v
```

Si es superior ahora en un archivo externo a donde se clono este repositorio instala el json-server para que se ejecute bien una base de datos local,!!!!CON ESTE CODIGO LO INSTALAS DE MANERA GLOBAL!!!! SI NO LO QUIERES DE FORMA GLOBAL SOLO BORRA (-g)
```
npm install -g json-server
```

Despues crea abre el visual studio code y crea un archivo "name".json ("name" es el nombre que le queremos dar a la base de datos local),
```
code . name.json
```

#### Es muy importante que apartir de este punto no hagas nada en el git bash que no se te indique (ya que esto pertene al back-end si no tienes conociento de ello es mejor no moverle)

Ahora con el archivo json creado donde ira nuestra base de datos, agregamos el siquiente codigo para iniciar con la base de datos como una api
```
npx json-server name.json
```

Ahora abrimos otro git bash y navegamos hasta nuestra carpeta donde clonaremos el repositorio y trabajaremos agusto,

###### Cuando termines de trabajas en el primer git bash usa el comando CONTROL + C para cerrar la api y asi poder usarda despues.
