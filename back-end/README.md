# vacation_manager

## Requirements

```
python: >3.7, <3.11
```

## Running

### 1 Clone the repository

```bash
git clone https://github.com/prateekb1/vacation_manager.git
```

### 2 Creating and activation virtual environment

```bash
pip install pipenv
```

```bash
pipenv shell
```

### 3 Installing requirements

```bash
pip install -r requirements.txt
```

### 4 Installing MYSQL (If not installed)

```bash
sudo apt update
```

```bash
sudo apt install mysql-server
```

```bash
sudo systemctl start mysql.service
```

### 5 Configuring MySQL

- Open up the MySQL prompt

```bash
sudo mysql
```

- Then run the following ALTER USER command to change the root user’s authentication method to one that uses a password.

```bash
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

- To exit mysql prompt

```bash
exit
```

- This will take you through a series of prompts where you can make some changes to your MySQL installation’s security options. This will setup password which you will use later

```bash
sudo mysql_secure_installation
```

- Then go back to using the default authentication method using this command

```bash
ALTER USER 'root'@'localhost' IDENTIFIED WITH auth_socket;
```

```bash
exit
```

### 6 Setup MySQL for Project

- In command prompt

```bash
$ mysql -u root -p
Enter password: *******
```

```bash
mysql> create database my_vacation
```

- Use this command to check the databases

```bash
mysql> show databases;
```

### 7 MySQL database setup for this project

- Open project in vscode with 'code .'
- Open folder vacation_manager then open settings.py file
- Inside settings.py file go to line where `DATABASE` is mentioned
- Replace details in this with yours:

```bash
DATABASES = {
'default': {
'ENGINE': 'django.db.backends.mysql',
'NAME': 'your_database_name',
'USER': 'root',
'PASSWORD': 'your_root_password',
'HOST': '127.0.0.1',
'PORT': '3306',
}
}
```

### 8 Running on server

```bash
python manage.py runserver
```

### 9 API links for data

Go to this link it has all the holidays in json form

```bash
http://127.0.0.1:8000/api/vacation/
```

We can got to a particular holiday by its ID

```bash
http://127.0.0.1:3000/api/calendar/2  # '2' can be any ID
```

For calendar go to this link

```bash
http://127.0.0.1:8000/api/calendar/
```
