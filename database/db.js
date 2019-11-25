import pool from './dbconnect';

/**
 * Create Tables
 */
async function createTables() {
  const queryText = `
 CREATE TABLE IF NOT EXISTS
       users(
         userId UUID PRIMARY KEY,
         firstName VARCHAR(128) NOT NULL,
         lastName VARCHAR(128) NOT NULL,
         email VARCHAR(128) UNIQUE NOT NULL,
         password VARCHAR(128)  NOT NULL,
         gender VARCHAR(128)  NOT NULL,
         jobRole VARCHAR(128)  NOT NULL,
         isAdmin bool DEFAULT false,
         address VARCHAR(128)  NOT NULL,
         department VARCHAR(128)  NOT NULL,
         createdOn TIMESTAMP
       );
 
  
       CREATE TABLE IF NOT EXISTS
         gifs(
           gifId UUID PRIMARY KEY,
           title VARCHAR(128) NOT NULL,
           postedBy UUID NOT NULL,
           imageUrl VARCHAR(255) NOT NULL,
           inAppropriate bool DEFAULT false,
           createdOn TIMESTAMP
         );
   
 
       CREATE TABLE IF NOT EXISTS
         articles(
           articleId UUID PRIMARY KEY,
           title VARCHAR(128) NOT NULL,
           postedBy UUID NOT NULL,
           article TEXT NOT NULL,
           inAppropriate bool DEFAULT false,
           createdOn TIMESTAMP
         );
   
 
       CREATE TABLE IF NOT EXISTS
       commentsPost(
         commentId UUID PRIMARY KEY,
         articleId UUID  NOT NULL,
         postedBy UUID NOT NULL,
         comments TEXT NOT NULL,
         inAppropriate bool DEFAULT false,
         createdOn TIMESTAMP
         );
   
 
       CREATE TABLE IF NOT EXISTS
       commentsGif(
         id UUID PRIMARY KEY,
         gifId UUID  NOT NULL,
         postedBy UUID NOT NULL,
         comments TEXT NOT NULL,
         inAppropriate bool DEFAULT false,
         createdOn TIMESTAMP
         );
 
       CREATE TABLE IF NOT EXISTS
         category(
         categoryId UUID PRIMARY KEY,
         title VARCHAR(255) NOT NULL,
         createdOn TIMESTAMP
         );
   
       CREATE TABLE IF NOT EXISTS
       articlesShared(
       articlesSharedId UUID PRIMARY KEY,
       articleId UUID  NOT NULL,
       sharedBy UUID NOT NULL,
       sharedWith UUID NOT NULL,
       createdOn TIMESTAMP
       );
       
       CREATE TABLE IF NOT EXISTS
       gifsShared(
       articlesSharedId UUID PRIMARY KEY,
       articleId UUID  NOT NULL,
       sharedBy UUID NOT NULL,
       sharedWith UUID NOT NULL,
       createdOn TIMESTAMP
       );`;

  pool.query(queryText)
    .then(() => {
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

/**
 * Drop Tables
 */
const dropTables = () => {
  const queryText = `DROP TABLE IF EXISTS articlesShared;
  DROP TABLE IF EXISTS users;
  DROP TABLE IF EXISTS articles;
  DROP TABLE IF EXISTS gifsShared;
  DROP TABLE IF EXISTS commentsPost;
  DROP TABLE IF EXISTS commentsGif;
  DROP TABLE IF EXISTS category;
  DROP TABLE IF EXISTS gifshared;`;

  pool.query(queryText)
    .then(() => {
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};
pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createTables,
  dropTables,
};

require('make-runnable');
