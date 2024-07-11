const express = require('express');


const router = express.Router();

router.get('/all', (request, response) => {
    response.json({message: 'ok', data: {a: 1}});
    response.status(200);
    response.send();
});

router.post('/all', (request, response) => {   
    const id = request.body;

    console.log(id);

    if (isNaN(id)) {
        response.json({error: 'id is not a number'});
        response.status(400);
    } else if (id % 2 === 0) {
        response.json({data: 'even'});
        response.status(200);
    } else if (id % 2 !== 0) {
        response.json({data: 'odd'});
        response.status(200);
    }

    response.send();
});


module.exports = router;

