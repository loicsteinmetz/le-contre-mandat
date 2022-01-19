# Le contre mandat

Le contre mandat est un projet développé avec le [Discord Insoumis](https://discord-insoumis.fr/).

Le site permet de visualiser les contre-propositions réalisées par le groupe parlementaire de la France Insoumise durant le quinquennat Macron.

On y trouvera donc compilés les 5 contre-budgets rédigés par le groupe parlementaire, qui permettent de faire état du mandat alternatif de la France Insoumise.

## Exécution

Exécuter les commandes suivantes :

> Remplacer `<PORT>` par le port d'exécution souhaité sur votre machine.

```
docker build -t le-contre-mandat .

docker run -d -p <PORT>:3000 --name le-contre-mandat le-contre-mandat
```
