FROM node:18 AS build-env
WORKDIR /app

COPY . ./
RUN npm i --omit=dev
RUN npm run build

# stage - release ############
FROM abdennour/nginx-distroless-unprivileged as release
# workdir is the same as root directive in the nginx custom config.
WORKDIR /app
# copy custom nginx config from your host
COPY ./default.conf /etc/nginx/conf.d
# copy web assets from build stage above
COPY --from=build-env /app/build/. ./
# expose is the same as listen directive in the nginx custom config.
EXPOSE 8080
