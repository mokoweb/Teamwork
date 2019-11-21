const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('connected to the db');
});

/**
 * Create Tables
 */
const createTables = () =>{
    //createUsersTables()
    //createGifsTables()
     //createArticlesTables()
    // createCommentsPostTables()
     //createCommentsGifTables()
    // createCategoryTables()
    //createSharedTables
    createInappropriateTables()
    
    pool.end();
}

const createUsersTables = () => {

  const queryText =
    `CREATE TABLE IF NOT EXISTS
      users(
        id UUID PRIMARY KEY,
        name VARCHAR(128) NOT NULL,
        email VARCHAR(128) NOT NULL,
        level SMALLINT NOT NULL,
        isAdmin bool NULL,
        isActive bool NULL,
        createdDate DATE,
        modifiedDate TIMESTAMP
      )`;

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


const createGifsTables = () => {
    const queryText =
      `CREATE TABLE IF NOT EXISTS
        gifs(
          id UUID PRIMARY KEY,
          name VARCHAR(128) NOT NULL,
          postedBy UUID NOT NULL,
          gif TEXT NOT NULL,
          inAppropriate bool NULL,
          isActive bool NULL,
          createdDate DATE,
        modifiedDate TIMESTAMP
        )`;
  
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

  const createArticlesTables = () => {
    const queryText =
      `CREATE TABLE IF NOT EXISTS
        articles(
          id UUID PRIMARY KEY,
          name VARCHAR(128) NOT NULL,
          postedBy UUID NOT NULL,
          article TEXT NOT NULL,
          inAppropriate bool NULL,
          isActive bool NULL,
          createdDate DATE,
        modifiedDate TIMESTAMP
        )`;
  
    pool.query(queryText)
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => {
        console.log(err);
        
      });
  }

  const createCommentsPostTables = () => {
    const queryText =
      `CREATE TABLE IF NOT EXISTS
      commentsPost(
        id UUID PRIMARY KEY,
        articleId UUID  NOT NULL,
        postedBy UUID NOT NULL,
        comments TEXT NOT NULL,
        createdDate DATETIME,
        modifiedDate TIMESTAMP
        )`;
  
    pool.query(queryText)
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => {
        console.log(err);
        
      });
  }

  const createCommentsGifTables = () => {
    const queryText =
      `CREATE TABLE IF NOT EXISTS
      commentsPost(
        id UUID PRIMARY KEY,
        gifId UUID  NOT NULL,
        postedBy UUID NOT NULL,
        comments TEXT NOT NULL,
        createdDate DATE,
        modifiedDate TIMESTAMP
        )`;
  
    pool.query(queryText)
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => {
        console.log(err);
        
      });
  }

  const createCategoryTables = () => {
    const queryText =
      `CREATE TABLE IF NOT EXISTS
        category(
        id UUID PRIMARY KEY,
        categoryId UUID  NOT NULL,
        postedBy UUID NOT NULL,
        name VARCHAR(255) NOT NULL,
        createdDate DATE,
        modifiedDate TIMESTAMP
        )`;
  
    pool.query(queryText)
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => {
        console.log(err);
        
      });
  }

  const createArticlesSharedTables = () => {
     const queryText =
    `CREATE TABLE IF NOT EXISTS
      articlesShared(
      id UUID PRIMARY KEY,
      articleId UUID  NOT NULL,
      sharedBy UUID NOT NULL,
      sharedWith UUID NOT NULL,
      comments VARCHAR(255),
      createdDate DATETIME,
      modifiedDate TIMESTAMP
      )`;
  
    pool.query(queryText)
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => {
        console.log(err);
        
      });
  }
  const createGifsSharedTables = () => {
     const queryText =
    `CREATE TABLE IF NOT EXISTS
      articlesShared(
      id UUID PRIMARY KEY,
      articleId UUID  NOT NULL,
      sharedBy UUID NOT NULL,
      sharedWith UUID NOT NULL,
      comments VARCHAR(255),
      createdDate DATETIME,
      modifiedDate TIMESTAMP
      )`;
  
    pool.query(queryText)
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => {
        console.log(err);
        
      });
  }
  const createInappropriateTables = () => {
    const queryText =
      `CREATE TABLE IF NOT EXISTS
        Inappropriate(
        id UUID PRIMARY KEY,
        postId UUID  NOT NULL,
        postType VARCHAR(10),
        postedBy UUID NOT NULL,
        comments VARCHAR(255),
        createdDate DATETIME,
        modifiedDate TIMESTAMP
        )`;
  
    pool.query(queryText)
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => {
        console.log(err);
        
      });
  }



/**
 * Drop Tables
 */
const dropTables = (tableName) => {
  const queryText = 'DROP TABLE IF EXISTS '+tableName;
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

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createTables,
  dropTables
};

require('make-runnable');