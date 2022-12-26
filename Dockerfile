FROM mysql

ENV MYSQL_ROOT_PASSWORD password

ADD crud.sql /docker-entrypoint-initdb.d/

EXPOSE 3306