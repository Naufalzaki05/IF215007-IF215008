## Install the database packages
```
sudo apt-get install -y mysql-server mysql-client libmysqlclient-dev
```

## Pick a database root password (can be anything), type it and press enter
## Retype the database root password and press enter

## Secure your installation.
```
sudo mysql_secure_installation
```

## Login to MySQL
```
mysql -u root -p
```
## Type the database root password

## Create a user for GitLab
## do not type the 'mysql>', this is part of the prompt
## change $password in the command below to a real password you pick
```sql
mysql> CREATE USER 'git'@'localhost' IDENTIFIED BY '$password';
```

## Create the GitLab production database
```sql
mysql> CREATE DATABASE IF NOT EXISTS `gitlabhq_production` DEFAULT CHARACTER SET `utf8` COLLATE `utf8_unicode_ci`;
```
## Grant the GitLab user necessary permissions on the table.
```sql
mysql> GRANT SELECT, LOCK TABLES, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER ON `gitlabhq_production`.* TO 'git'@'localhost';
```
## Quit the database session
```sql
mysql> \q
```
## Try connecting to the new database with the new user
```
sudo -u git -H mysql -u git -p -D gitlabhq_production
```
## Type the password you replaced $password with earlier

## You should now see a 'mysql>' prompt

## Quit the database session
```sql
mysql> \q
```

## Install the database packages
```
sudo apt-get install -y postgresql-9.1 libpq-dev
```
## Login to PostgreSQL
```
sudo -u postgres psql -d template1
```
## Create a user for GitLab. (change $password to a real password)
```sql
template1=# CREATE USER git;
```
## Create the GitLab production database & grant all privileges on database
```sql
template1=# CREATE DATABASE gitlabhq_production OWNER git;
```
## Quit the database session
```sql
template1=# \q
```
## Try connecting to the new database with the new user
```
sudo -u git -H psql -d gitlabhq_production
```
## You are done installing the database and can go back to the rest of the installation.
