const express = require('express');
const router = express.Router();
const {
    readToDos,
    createToDos,
    updateToDos,
    deleteToDos    
} = require('../../data/dal');

router.get('/', async function(req, res) {
    const data = await readToDos();
      res.send(data)  ; 
});

router.post('/', async function(req, res )  {
    const body = req.body;
    const data = await createToDos(body);
        res.send(data);
    ;
});

router.put('/:id', async function(req, res )  {
    const body = req.body;
    const id = req.params.id;
    const data = await updateToDos(id, body);
        res.send(data);
    ;
});

router.delete('/:id', async function(req, res) {
    const data = await deleteToDos(req.params.id); 
        res.send(data)
    });

module.exports = router;