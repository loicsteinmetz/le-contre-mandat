FROM node:14

WORKDIR .

COPY . .
RUN npm cache clean --force
RUN npm install
RUN npm run build
RUN npm install -g serve

EXPOSE 3000

CMD [ "serve", "-s", "build", "-l", "3000" ]
