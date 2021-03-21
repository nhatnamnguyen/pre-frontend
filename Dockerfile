FROM node:10.19.0
WORKDIR /app
ENV PATH=/app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
RUN npm install yarn
RUN yarn install 
COPY . ./
CMD [ "yarn", "start" ]