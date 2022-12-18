-- Active: 1667190350971@@127.0.0.1@3306@test_db

create table
    login(
        id int not null auto_increment,
        username varchar(50) not null,
        password varchar(50) not null,
        primary key(id)
    );

-- adding users

insert into login(username, password) values('kumar', 'kumar@2003');