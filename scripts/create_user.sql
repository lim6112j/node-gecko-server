CREATE USER 'gecko'@'localhost' IDENTIFIED BY 'mySecretPassord';

/* In an ideal world, we should strictly provide the grants the API has access
 * to a specific table rather than all the privileges.
 */
GRANT ALL PRIVILEGES ON geckodb.* TO 'gecko'@'localhost';

flush privileges;
