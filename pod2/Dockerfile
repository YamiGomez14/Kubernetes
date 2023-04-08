from node:18

WORKDIR /app

COPY package.json .
copy yarn.lock .
COPY .yarn ./.yarn
COPY .pnp.cjs .

RUN yarn install

COPY . .


CMD ["yarn", "start"]
