# Example Monorepo
This project brings together several layers of awesomeness starting with [TurboRepo](https://turbo.build). With that comes [ReactJS](https://reactjs.org) + [NextJS](https://nextjs.org). [PlanetScale](https://planetscale.com) is used for persistence with the help of [Prisma](https://www.prisma.io) + [tRPC](https://trpc.io). For presentation and rapid prototypeing, [MaterialUI](https://mui.com) is leveraged. For testing, I have added the amazing [Cypress](https://www.cypress.io) for e2e and component confidence.

Though I am using `yarn` as TurboRepo's backbone, one can easily choose NPM or PNPM. I'll probably move to pnpm once I finish evaluating and am comfortable with its api.

I'm very happy with the ease of use in TurboRepo. The speed boost with PlanetScale + tRPC. And the confidence through Cypress. I'll probably leverage this structure moving forward with my other personal project. The the exception that MUI will probably be left behind in favor of custom nobs.

### Get Started
```bash
yarn install
```

Create two `.env` files:
1) `apps > web > .env
2) `packages > db > .env

copy the `.env.example` files and replace the url strings using your own test prisma database connection values.

```bash
yarn dev
```

### Tour
This project is split into three applications and three packages with two configuration packages as follows

apps:
* `web` Our main web application
* `docs` The documentation application. Currently disabled via scripts `xdiv`
* `qa` The testing framework. Used for e2e and compoent testing. (unit testing can and should be done in limited scope where necessary)

packages: 
* `ui` A thin wrapper around mui
* `sx` Composed, styled, and custom components using `ui`. The goal here is to keep `web` as pure as possible
* `db` The database store. This project uses PlanetScale
* `eslint-config-custom` and `tsconfig` come from standing up a new TurboRepo project

### Gotcha
* Environment variables are tricky in a monorepo. For now, the easiest thing is to add our `.env` files where necessary.
* This project has multiple nextjs projects with all three apps using it. This project has listed the next.config.js file to the root which is picked up by all three.
* The typescript config settings for baseUrl and path are not correctly extended to the `web` project. `typescript` bug? Turborepo issue? To fix, those two properties were moved into web's local config file.
* tRPC continues to be a beast to configure. My first thought was to extract this complexity to a packages directory but that proved tricky. For now, leaving the configuration as recommended.
