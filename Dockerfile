# Official images for Node.js on Linux for Docker Engine.
FROM node:12-slim as ui-builder

# Sets the default working directory of the image.
ENV DEPLOYMENT_DIR=/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Sets the variable to inform Docker that the container
# listens on the specified network port.

# Sets the default working directory of the image for any
# RUN, CMD, ENTRYPOINT, COPY, and ADD statements that come
# with it in the Dockerfile.
WORKDIR $DEPLOYMENT_DIR

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

# add app
COPY . $DEPLOYMENT_DIR

# build static app
RUN ng run ui:build-storybook 
RUN ng run bookclub:build

FROM nginx:alpine as web-server
COPY --from=ui-builder ./app/dist/apps/bookclub ./usr/share/nginx/html
COPY --from=ui-builder ./app/dist/storybook/ui ./usr/share/nginx/html/storybook
EXPOSE 80
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
