const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  // res.sendStatus(200);
  const queryText = 'SELECT id, link FROM favorites';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT link query', err);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post('/', (req, res) => {
  const newFavorite = req.body.link
  console.log(newFavorite);
  
  const queryText = `
                      INSERT INTO "favorites" ("link")
                      VALUES ($1);
                    `;

  pool.query(queryText, [newFavorite])
  .then(() => {
    res.sendStatus(201);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
  
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  // res.sendStatus(200);
  const queryText = `
  UPDATE "favorites"
  SET "category_id" = $1
  WHERE "id" = $2;
`;

values = [req.body.category, req.params.favId] 

pool.query(queryText, values)
  .then((result) => {
      res.sendStatus(201);
  })
  .catch((error) => {
      console.log(`Error making database query ${queryText}`, error);
      res.sendStatus(500);
  });
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
