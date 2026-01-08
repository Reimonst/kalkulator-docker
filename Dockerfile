# Menggunakan image Nginx
FROM nginx:alpine

# Menyalin file website ke dalam folder html nginx di container
COPY . /usr/share/nginx/html

# Expose port 80 agar bisa diakses
EXPOSE 80