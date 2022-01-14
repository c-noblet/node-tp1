# TP5 - API users/posts/comments/roles

- Les 5 parties ont été réalisés.
- L'export postman est prêt à l'emploi avec la base de données "database.dev.sqlite".

Aussi par manque de temps, je n'ai pas pu faire de vérification de l'utilisateur ou de son role pouvoir modifier ou supprimer des éléments.
Par exemple vérifier si l'utilisateur est bien le propriétaire du commentaire pour pouvoir le modifier.

## Démarrer l'API

```
node index.js
```

## Créer des données avec les seed

```
npx sequelize-cli db:seed:all
```

## Tester le paramètres ?posts et ?comments

```
node test/test.js
```
