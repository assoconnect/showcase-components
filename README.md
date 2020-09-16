# AssoConnect showcase components

## To start

```
$ yarn && yarn start
```

## To compile

```
$ yarn compile
```

# AssoConnect showcase

## 💪 **Pre-Installation for Windows Users**

https://docs.docker.com/docker-for-windows/wsl/

## 💪 **Installation**

1. [Visual Studio Code](https://code.visualstudio.com/)
2. [Smart Git](https://www.syntevo.com/smartgit/)
3. Clone the following repositories in a `showcase` folder on your computer in `\\wsl$\Ubuntu-20.04\home\[your username]`
- [showcase/common](https://gitlab.com/assoconnect/showcase)
- [showcase/en-us](https://gitlab.com/assoconnect/showcase-en-us)
- [showcase/fr-fr](https://gitlab.com/assoconnect/showcase-fr-fr)

Note for Windows users: create the `showcase` folder in WSL2 (Option 1 of https://www.tenforums.com/tutorials/127857-access-wsl-linux-files-windows-10-a.html)

## 📦 **Docker**

1. Run the command to start a Docker container according to your language
```
#fr_FR at http://localhost:8001
cd fr-fr && docker-compose up --build --remove-orphans

#en_US at http://localhost:8002
cd en-us && docker-compose up --build --remove-orphans
```

Note for Windows users: run these commands from WSL2

## 🎓 **A savoir**

- React est composé de **Composant**

  ```js
  <Component />
  ```

- qu'en début de fichier, il faut **importer**

  ```js
  import { Component } from '../components'
  ```

- pour personnaliser les Components, on peut ajouter des **prop**

  ```js
  <Component prop />
  ```

  attention, le chemin change si la page est dans un dossier

- pour préciser une valeur à une prop, il y a plusieurs manières

  - pour ajouter une simple phrase on utilise des `"..."`

    ```
    <Component prop="ma valeur" />
    ```

  - pour tout le reste (array, object, boolean) on utilise `{...}`

    ```js
    <Component array={["valeur 1", "valeur 2"]} />
    <Component object={{cle1: "valeur 1", cle2: "valeur 2"}} />
    <Component boolean={false} />
    ```

- si on met quelque chose dans un Component, cela s'appelera `children`
  ```js
  <Component> ce quelque chose là </Component>
  ```

## 👀 Exemple de page basique

```
import React from 'react'
import {
  Box,
  Layout,
  Section,
  SmallTitle,
  Text
} from '../components'

const TestPage = () => (
  <Layout
    meta={{
      title: 'AssoConnect',
      description: 'une jolie description',
    }}
  >
    <Section>
      <Box>
        <Text>La page est en vie !</Text>
      </Box>
    </Section>
  </Layout>
)

export default TestPage
```

## 🙏 Mais n'oubliez pas votre bible est [ici](https://docs.google.com/document/d/1CUpruw0BBaeTYuhFRgC-GILMg_BJGmtG-e2yMeeAmvg/edit#heading=h.irnu8fhnbxrd) !