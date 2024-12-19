FROM nginx:alpine

COPY ./pages /usr/share/nginx/html/pages

COPY ./css /usr/share/nginx/html/css
COPY ./js /usr/share/nginx/html/js

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
