# Next.js 14 Application

Este proyecto es una aplicación creada con **Next.js 14**, utilizando el enrutador App Router y React.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior recomendada)
- [npm](https://www.npmjs.com/)

## Instalación

Clona el repositorio y ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install

## Scripts disponibles

En este proyecto puedes ejecutar los siguientes scripts:

### Desarrollo

```bash
npm run dev
```

Ejecuta la aplicación en modo desarrollo. Se abrirá en `http://localhost:3000/`.
Los cambios en el código se reflejarán automáticamente sin necesidad de reiniciar el servidor.

### Construcción

```bash
npm run build
```

Genera una versión optimizada de la aplicación para producción en la carpeta `.next/`.

### Producción

```bash
npm run start
```

Inicia el servidor en modo producción. Asegúrate de haber ejecutado `npm run build` antes.

### Linter

```bash
npm run lint
```

Ejecuta ESLint para analizar el código y aplicar buenas prácticas.

### Pruebas

```bash
npm run test
```

Ejecuta Jest con cobertura de pruebas.

```bash
npm run test:watch
```

Ejecuta Jest en modo observación para ejecutar pruebas automáticamente en cada cambio.

### Storybook

```bash
npm run storybook
```

Inicia Storybook en el puerto `6006`, donde puedes visualizar y desarrollar componentes de forma aislada.

```bash
npm run build-storybook
```

Genera una versión estática de Storybook lista para ser desplegada.

## Contribución

Si deseas contribuir a este proyecto, por favor abre un **issue** o un **pull request**.

## Licencia

Este proyecto está bajo la licencia MIT.
