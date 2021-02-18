
create table providers(
	id_provider int auto_increment,
    nick_name varchar(50) not null,
    rfc varchar(100) not null,
    razon_social varchar(100) not null,
    tel varchar(15) not null,
    cel varchar(15) ,
    email varchar(150) not null,
    parcel varchar(50),
    addresss varchar(200),
    city varchar(30),
    state varchar(30),
    country varchar(100),
    zip varchar(15),
    date_last_sale date,
    date_created timestamp,
    active tinyint,
    primary key (id_provider),
    unique(nick_name),
    unique(rfc),
    unique(razon_social)
);

create table representatives(
	id_representative int auto_increment,
    name varchar(50) not null, 
    last_name varchar(100) not null,
    tel varchar(15) not null,
    cel varchar(15) ,
    email varchar(150) not null,
    parcel varchar(50),
    addresss varchar(200),
    city varchar(30),
    state varchar(30),
    country varchar(100),
    zip varchar(15),
    id_provider int not null,
    primary key(id_representative),
    foreign key(id_provider) references providers(id_provider)
);


create table provider_notes(
	id_note int auto_increment,
    id_provider int not null, 
    description varchar(2000),
    date_created timestamp,
    primary key (id_note),
    foreign key(id_provider) references providers(id_provider)
);

create table provider_observations(
	id_observation int auto_increment,
    id_provider int not null, 
    description varchar(2000),
    date_created timestamp,
    primary key (id_observation),
    foreign key(id_provider) references providers(id_provider)
);

create table provider_banks(
	id_bank int auto_increment,
    id_provider int not null, 
    name varchar(30),
    bank_account varchar(150),
    bank_key varchar(150),
    date_created timestamp,
    primary key (id_bank),
    foreign key(id_provider) references providers(id_provider)
);

create table catalogs(
	id_catalog int auto_increment,
    name varchar(30),
    active tinyint,
    primary key (id_catalog)
);

create table catalog_options(
	id_option int auto_increment,
    id_catalog int not null,
    name varchar(30),
    active tinyint,
    primary key (id_option),
    foreign key(id_catalog) references catalogs(id_catalog)
);
