# Le contre mandat

Le contre mandat est un projet développé avec le [Discord Insoumis](https://discord-insoumis.fr/).

Le site permet de visualiser les contre-propositions réalisées par le groupe parlementaire de la France Insoumise durant le quinquennat Macron.

On y trouvera donc compilés les 5 contre-budgets rédigés par le groupe parlementaire, qui permettent de faire état du mandat alternatif de la France Insoumise.

## Exécution

Créer un fichier `.env` à la racine du projet sur le format suivant :

```
REACT_APP_CB_18=https://lafranceinsoumise.fr/wp-content/uploads/2017/11/1.-LIVRET-ContreBudget-Page-BD.pdf
REACT_APP_CB_19=https://lafranceinsoumise.fr/wp-content/uploads/2018/10/LIVRET-ContreBudget-1.pdf
REACT_APP_CB_20=https://lafranceinsoumise.fr/wp-content/uploads/2019/11/1.-LIVRET-ContreBudget-2020-G-PageSansTraitsDeCoupe.pdf
REACT_APP_CB_21=https://lafranceinsoumise.fr/wp-content/uploads/2020/11/1.-LIVRET-ContreBudget-2021-F-HD-Page.pdf
REACT_APP_CB_22=https://lafranceinsoumise.fr/wp-content/uploads/2021/10/ContreBudget-2022.pdf
REACT_APP_VIDEO_18=EDcJHVd-Eg4
REACT_APP_VIDEO_19=sPXMxteD0nw
REACT_APP_VIDEO_20=nlIWDyk_25Y
REACT_APP_VIDEO_22=CLreyGJNruk
REACT_APP_DI_DISCORD=https://discord-insoumis.fr/
REACT_APP_DI_FACEBOOK=https://www.facebook.com/discordinsoumis
REACT_APP_DI_TWITTER=https://twitter.com/Action_Insoumis
REACT_APP_DI_YOUTUBE=https://www.youtube.com/channel/UCeoMxgbBbm9JdEez21bd1mw/videos
REACT_APP_DI_TIKTOK=https://www.tiktok.com/@distokinsoumis?
REACT_APP_DI_TWITCH=https://www.twitch.tv/DiscordInsoumis
REACT_APP_DI_INSTAGRAM=https://www.instagram.com/discordinsoumis/
REACT_APP_LAEC=https://laec.fr/
```

Exécuter les commandes suivantes :

> Remplacer <PORT> par le port d'exécution souhaité sur votre machine.

```
docker build -t contre-mandat .

docker run -d -p <PORT>:3000 --env-file ./.env --name contre-mandat contre-mandat
```
