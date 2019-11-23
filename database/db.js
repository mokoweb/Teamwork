import pool from '../database/dbconnect'

/**
 * Create Tables
 */
  async function createTables() {
 const queryText =`
 CREATE TABLE IF NOT EXISTS
       users(
         userId INTEGER PRIMARY KEY,
         firstName VARCHAR(128) NOT NULL,
         lastName VARCHAR(128) NOT NULL,
         email VARCHAR(128) NOT NULL,
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
           gifId INTEGER PRIMARY KEY,
           title VARCHAR(128) NOT NULL,
           postedBy INTEGER NOT NULL,
           imageUrl VARCHAR(255) NOT NULL,
           inAppropriate bool DEFAULT false,
           createdOn TIMESTAMP
         );
   
 
       CREATE TABLE IF NOT EXISTS
         articles(
           articleId INTEGER PRIMARY KEY,
           title VARCHAR(128) NOT NULL,
           postedBy INTEGER NOT NULL,
           article TEXT NOT NULL,
           inAppropriate bool DEFAULT false,
           createdOn TIMESTAMP
         );
   
 
       CREATE TABLE IF NOT EXISTS
       commentsPost(
         commentId INTEGER PRIMARY KEY,
         articleId INTEGER  NOT NULL,
         postedBy INTEGER NOT NULL,
         comments TEXT NOT NULL,
         inAppropriate bool DEFAULT false,
         createdOn TIMESTAMP
         );
   
 
       CREATE TABLE IF NOT EXISTS
       commentsGif(
         id INTEGER PRIMARY KEY,
         gifId INTEGER  NOT NULL,
         postedBy INTEGER NOT NULL,
         comments TEXT NOT NULL,
         inAppropriate bool DEFAULT false,
         createdOn TIMESTAMP
         );
 
       CREATE TABLE IF NOT EXISTS
         category(
         categoryId INTEGER PRIMARY KEY,
         title VARCHAR(255) NOT NULL,
         createdOn TIMESTAMP
         );
   
       CREATE TABLE IF NOT EXISTS
       articlesShared(
       articlesSharedId INTEGER PRIMARY KEY,
       articleId INTEGER  NOT NULL,
       sharedBy INTEGER NOT NULL,
       sharedWith INTEGER NOT NULL,
       createdOn TIMESTAMP
       );`

    pool.query(queryText)
    .then((res) => {
      console.log(res);
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
const dropTables = (tableName) => {
  const queryText = 'DROP TABLE IF EXISTS '+tableName;
 
}
pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createTables,
  dropTables
};

require('make-runnable');