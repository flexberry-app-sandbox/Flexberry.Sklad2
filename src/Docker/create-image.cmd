docker build --no-cache -f SQL\Dockerfile.PostgreSql -t sklad2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t sklad2/app ../..
