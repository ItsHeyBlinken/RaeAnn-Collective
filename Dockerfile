FROM nginx:alpine

RUN rm -f /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html/

COPY . .

RUN rm -rf /usr/share/nginx/html/memory-bank \
    && rm -f /usr/share/nginx/html/nginx.conf \
    /usr/share/nginx/html/Dockerfile \
    /usr/share/nginx/html/docker-compose.yaml \
    /usr/share/nginx/html/.env \
    /usr/share/nginx/html/.dockerignore

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
