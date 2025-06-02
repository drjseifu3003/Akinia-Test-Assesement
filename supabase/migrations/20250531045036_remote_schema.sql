------------------------------------------------------------
-- 0.  Extensions (uuid gen optional later)
------------------------------------------------------------
create extension if not exists "pgcrypto";

------------------------------------------------------------
-- 1.  Core tables
------------------------------------------------------------
create table investors (
  id                     text primary key,
  name                   text not null,
  type                   text,
  hq_location            text,
  founded                int,
  aum_m                  numeric,
  focus_sectors          text,
  managing_director_id   text  -- FK added after contacts
);

create table companies (
  id                     text primary key,
  name                   text not null,
  sector                 text,
  hq_location            text,
  founded                int,
  stage                  text,
  employees              int,
  valuation_m            numeric,
  ceo_contact_id         text, -- FK added after contacts
  primary_investor_id    text  -- FK immediately
);

create table contacts (
  id           text primary key,
  name         text,
  role         text,
  company_id   text,
  investor_id  text,
  email        text
);

create table funds (
  id                   text primary key,
  name                 text,
  investor_id          text,
  fund_size_m          numeric,
  vintage              int,
  status               text,
  investment_focus     text,
  deployed_capital_m   numeric,
  irr_percent          numeric
);

create table news (
  id                 text primary key,
  title              text,
  date               date,
  sector             text,
  related_company_id text,
  related_fund_id    text,
  source             text
);

-- many-to-many: investors ↔ companies
create table investor_portfolio_companies (
  investor_id text references investors(id),
  company_id  text references companies(id),
  primary key (investor_id, company_id)
);

------------------------------------------------------------
-- 2.  Foreign-key constraints that reference tables
------------------------------------------------------------
alter table companies
  add constraint fk_primary_investor
  foreign key (primary_investor_id) references investors(id);

alter table funds
  add constraint fk_fund_investor
  foreign key (investor_id) references investors(id);

alter table news
  add constraint fk_news_company
  foreign key (related_company_id) references companies(id),
  add constraint fk_news_fund
  foreign key (related_fund_id)    references funds(id);

alter table contacts
  add constraint fk_contact_company  foreign key (company_id)  references companies(id),
  add constraint fk_contact_investor foreign key (investor_id) references investors(id);

-- Contacts referenced from companies / investors are added later
-- to avoid circular insert problems (deferrable could also work).

------------------------------------------------------------
-- 3.  Seed data
------------------------------------------------------------
/* Investors */
insert into investors (id,name,type,hq_location,founded,aum_m,focus_sectors)
values
('I001','TLcom Capital','VC','Nairobi, Kenya',2016,300,'Tech, CleanTech, HealthTech'),
('I002','Future Africa','VC','Lagos, Nigeria',2020,150,'Fintech, Logistics, Gaming'),
('I003','Partech Partners Africa','VC','Dakar, Senegal',2018,200,'HealthTech, CleanTech, AgTech'),
('I004','Norrsken22','VC','Kigali, Rwanda',2021,250,'EdTech, E-commerce, Impact'),
('I005','4DX Ventures','VC','Cape Town, South Africa',2019,100,'AgTech, Logistics, Fintech');

/* Companies */
insert into companies
  (id,name,sector,hq_location,founded,stage,employees,valuation_m,primary_investor_id)
values
('C001','Flutterwave','Fintech','Nigeria',2016,'Series D',500,3000,'I002'),
('C002','M-KOPA Solar','CleanTech','Kenya',2011,'Growth',800,750,'I001'),
('C003','54gene','HealthTech','Nigeria',2019,'Series B',null,200,'I003'),
('C004','Andela','EdTech','Nigeria',2014,'Series D',1200,1500,'I004'),
('C005','Twiga Foods','AgTech','Kenya',2013,'Series C',300,400,'I005'),
('C006','Zipline','HealthTech','Rwanda',2014,'Series C',null,2750,'I001'),
('C007','Kobo360','Logistics','Nigeria',2017,'Series B',200,150,'I002'),
('C008','Paystack','Fintech','Nigeria',2015,'Growth',250,null,null),
('C009','Sun Exchange','CleanTech','South Africa',2015,'Series A',80,100,'I003'),
('C010','uLesson','EdTech','Nigeria',2019,'Series B',120,80,'I004'),
('C011','Sendy','Logistics','Kenya',2014,'Series B',180,120,'I005'),
('C012','Wasoko (Sokowatch)','E-commerce','Kenya',2016,'Series B',350,625,null),
('C013','Wave Mobile Money','Fintech','Senegal',2017,'Series A',300,200,'I002'),
('C014','Apollo Agriculture','AgTech','Kenya',2016,'Series B',null,100,'I003'),
('C015','Tunga','EdTech','Uganda',2015,'Growth',60,null,null),
('C016','Flutterwave Store','E-commerce','Nigeria',2020,'Series A',100,50,'I004'),
('C017','Yoco','Fintech','South Africa',2013,'Series B',400,null,'I005'),
('C018','Carry1st','Gaming','South Africa',2018,'Series A',80,60,'I001'),
('C019','Kuda Bank','Fintech','Nigeria',2019,'Series B',null,500,'I002'),
('C020','Rensource Energy','CleanTech','Nigeria',2016,'Series A',150,90,'I003');

/* Funds */
insert into funds
(id,name,investor_id,fund_size_m,vintage,status,investment_focus,deployed_capital_m,irr_percent) values
('F001','TLcom TIDE Africa Fund II','I001',150,2022,'Active','Series A-B Tech',60,22.5),
('F002','Future Africa Growth Fund','I002',100,2023,'Active','Series B-C',30,18.0),
('F003','Partech Africa Fund II','I003',125,2021,'Active','Multi-Stage',80,25.3),
('F004','Norrsken22 Impact Fund','I004',200,2022,'Active','Impact Investing',70,20.1),
('F005','4DX Africa Fund I','I005',75,2020,'Fully Deployed','Seed to Series A',75,28.7),
('F006','TLcom TIDE Africa Fund I','I001',71,2019,'Realized','Early Stage',71,32.1),
('F007','Future Africa Seed Fund','I002',25,2021,'Active','Pre-Seed/Seed',20,15.5),
('F008','Partech Africa Fund I','I003',57,2018,'Realized','Series A',57,19.8),
('F009','Norrsken Impact Accelerator','I004',30,2023,'Active','Accelerator',10,12.0),
('F010','4DX Pre-Seed Fund','I005',15,2021,'Active','Pre-Seed',12,35.2);

/* Contacts (CEO + Managing Partners + misc) */
insert into contacts (id,name,role,company_id,investor_id,email) values
-- CEOs
('CT001','Olugbenga Agboola','CEO','C001',null,'gb@flutterwave.com'),
('CT002','Jesse Moore','CEO','C002',null,'j.moore@mkopa.com'),
('CT003','Dr. Abasi Ene-Obong','CEO','C003',null,'abasi@54gene.com'),
('CT004','Jeremy Johnson','CEO','C004',null,'jeremy@andela.com'),
('CT005','Peter Njonjo','CEO','C005',null,'peter@twigafoods.com'),
('CT006','Keller Rinaudo','CEO','C006',null,'keller@zipline.com'),
('CT007','Obi Ozor','CEO','C007',null,'obi@kobo360.com'),
('CT008','Shola Akinlade','CEO','C008',null,'shola@paystack.com'),
('CT009','Abe Cambridge','CEO','C009',null,'abe@thesunexchange.com'),
('CT010','Sim Shagaya','CEO','C010',null,'sim@ulesson.com'),
('CT011','Meshack Alloys','CEO','C011',null,'meshack@sendy.co.ke'),
('CT012','Daniel Yu','CEO','C012',null,'daniel@wasoko.com'),
('CT013','Drew Durbin','CEO','C013',null,'drew@wave.com'),
('CT014','Eli Pollak','CEO','C014',null,'eli@apolloagriculture.com'),
('CT015','Ernesto Spruyt','Founder','C015',null,'ernesto@tunga.io'),
('CT016','Olumide Soyombo','CEO','C016',null,'olumide@flutterwave.com'),
('CT017','Bradley Wattrus','CEO','C017',null,'bradley@yoco.co.za'),
('CT018','Lucy Hoffman','CEO','C018',null,'lucy@carry1st.com'),
('CT019','Babs Ogundeyi','CEO','C019',null,'babs@kuda.com'),
('CT020','Ademola Adesina','CEO','C020',null,'ademola@rensource.energy'),
-- Managing / General Partners
('CT021','Maurizio Caio','Managing Partner',null,'I001','maurizio@tlcom.co.ke'),
('CT022','Iyin Aboyeji','General Partner',null,'I002','iyin@future.africa'),
('CT023','Cyril Collon','General Partner',null,'I003','cyril@partechpartners.com'),
('CT024','Natalie Kolbe','Investment Director',null,'I004','natalie@norrsken22.com'),
('CT025','Walter Baddoo','Managing Partner',null,'I005','walter@4dxventures.com'),
-- Extra execs (examples)
('CT026','Iyinoluwa Aboyeji','Co-founder','C001',null,'iyin@flutterwave.com'),
('CT027','Chad Larson','COO','C002',null,'chad@mkopa.com'),
('CT028','Dr. Teresia Zimmermann','Chief Scientist','C003',null,'teresia@54gene.com'),
('CT029','Seni Sulyman','VP Global Operations','C004',null,'seni@andela.com'),
('CT030','Grant Brooke','CTO','C005',null,'grant@twigafoods.com');

/* Update companies with CEO FK */
update companies set ceo_contact_id = id || ' REPLACED' ; -- placeholder to avoid error
update companies set ceo_contact_id = 'CT001' where id='C001';
update companies set ceo_contact_id = 'CT002' where id='C002';
update companies set ceo_contact_id = 'CT003' where id='C003';
update companies set ceo_contact_id = 'CT004' where id='C004';
update companies set ceo_contact_id = 'CT005' where id='C005';
update companies set ceo_contact_id = 'CT006' where id='C006';
update companies set ceo_contact_id = 'CT007' where id='C007';
update companies set ceo_contact_id = 'CT008' where id='C008';
update companies set ceo_contact_id = 'CT009' where id='C009';
update companies set ceo_contact_id = 'CT010' where id='C010';
update companies set ceo_contact_id = 'CT011' where id='C011';
update companies set ceo_contact_id = 'CT012' where id='C012';
update companies set ceo_contact_id = 'CT013' where id='C013';
update companies set ceo_contact_id = 'CT014' where id='C014';
update companies set ceo_contact_id = 'CT015' where id='C015';
update companies set ceo_contact_id = 'CT016' where id='C016';
update companies set ceo_contact_id = 'CT017' where id='C017';
update companies set ceo_contact_id = 'CT018' where id='C018';
update companies set ceo_contact_id = 'CT019' where id='C019';
update companies set ceo_contact_id = 'CT020' where id='C020';

/* Update investors with managing-director FK */
update investors set managing_director_id = 'CT021' where id='I001';
update investors set managing_director_id = 'CT022' where id='I002';
update investors set managing_director_id = 'CT023' where id='I003';
update investors set managing_director_id = 'CT024' where id='I004';
update investors set managing_director_id = 'CT025' where id='I005';

/* Portfolio link table */
insert into investor_portfolio_companies values
('I001','C002'),('I001','C006'),('I001','C012'),('I001','C018'),
('I002','C001'),('I002','C007'),('I002','C013'),('I002','C019'),
('I003','C003'),('I003','C009'),('I003','C014'),('I003','C020'),
('I004','C004'),('I004','C010'),('I004','C016'),
('I005','C005'),('I005','C011'),('I005','C017');

/* News Items (only first company if multiple) */
insert into news (id,title,date,sector,related_company_id,related_fund_id,source) values
('N001','Flutterwave Raises $250M Series D Led by B Capital Group','2024-03-15','Fintech','C001','F003','TechCabal'),
('N002','M-KOPA Solar Expands to West Africa with $75M Funding','2024-03-10','CleanTech','C002','F004','Disrupt Africa'),
('N003','54gene Partners with Roche for Pan-African Genomics Research','2024-03-08','HealthTech','C003',null,'African Business'),
('N004','Andela Acquires Tunga to Strengthen African Tech Talent Pool','2024-03-05','EdTech','C004',null,'Techpoint Africa'),
('N005','Twiga Foods Secures $50M Series C from IFC and Goldman Sachs','2024-02-28','AgTech','C005','F002','Reuters Africa'),
('N006','Zipline Launches Medical Drone Network in Ghana and Rwanda','2024-02-25','HealthTech','C006',null,'Africa News'),
('N007','Kobo360 Expands Logistics Platform Across East Africa','2024-02-20','Logistics','C007','F001','Ventures Africa'),
('N008','Paystack Reports 300% Transaction Growth in Nigeria','2024-02-15','Fintech','C008',null,'Nairametrics'),
('N009','Sun Exchange Launches Solar Investment Platform in South Africa','2024-02-10','CleanTech','C009','F005','ESI Africa'),
('N010','uLesson Raises $15M Series B for African EdTech Expansion','2024-02-05','EdTech','C010','F001','TechCrunch Africa');