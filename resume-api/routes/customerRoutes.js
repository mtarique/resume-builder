const express = require('express'); 
const router = express.Router(); 
const customerController = require('../controllers/customerController'); 

router.get('/status', (req, res) => {
    res.status(200).json({"status": true, message: "Customer services running...", data: null})
})
router.get('/', customerController.getCustomers); 
router.post('/', customerController.createCustomer); 
router.put('/:id', customerController.updateCustomer); 
router.delete('/:id', customerController.deleteCustomer); 

module.exports = router; 