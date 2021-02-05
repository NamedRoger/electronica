
use ac_electronica;
alter table catalogs add column code varchar(50);

alter table catalogs add unique(code);