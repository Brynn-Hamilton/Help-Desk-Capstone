create database helpdesk;
use helpdesk;

CREATE TABLE users(
	user_id INT NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(30),
    user_email VARCHAR(50),
    PRIMARY KEY (user_id)
);

CREATE TABLE tickets (
	ticket_id INT NOT NULL AUTO_INCREMENT,
    requester_id INT,
    FOREIGN KEY (requester_id) REFERENCES users(user_id),
    assignee_id INT,
    FOREIGN KEY (assignee_id) REFERENCES users(user_id),
    subject_title VARCHAR(30),
    ticket_status VARCHAR(30),
    ticket_details VARCHAR(250),
    resolvedby_id INT,
	FOREIGN KEY (resolvedby_id) REFERENCES users(user_id),
    ticket_resolution VARCHAR(250),
    PRIMARY KEY (ticket_id)
);

CREATE TABLE favorites (
   ticket_id INT,
   FOREIGN KEY (ticket_id) REFERENCES tickets(ticket_id),
   user_id INT,
   FOREIGN KEY (user_id) REFERENCES users(user_id)
);

insert into users (user_name, user_email) values ('Brynn Hamilton', 'brynnhamilton1@rocketmortgage.com');
insert into users (user_name, user_email) values ('Ali Abbiss', 'AliAbbiss@rocketmortgage.com');
insert into users (user_name, user_email) values ('Christian Boos', 'ChristianBoos@rocketmortgage.com');
insert into users (user_name, user_email) values ('Riley Shirk', 'RileyShirk@rocketmortgage.com');

insert into tickets (requester_id, assignee_id, subject_title, ticket_status, ticket_details, resolvedby_id, ticket_resolution) values ('1', '4', 'Accessing New Email', 'Open', 'Currently unable to use my previous email to login and do not have a new one assigned', NULL, NULL);
insert into tickets (requester_id, assignee_id, subject_title, ticket_status, ticket_details, resolvedby_id, ticket_resolution) values ('2', '4', 'Delivery Status', 'Closed', 'I havent received an update regarding my new equipment since the email saying it was delivered', '2', 'Package was lost in transit, but a new one shipped and has delivered.');


