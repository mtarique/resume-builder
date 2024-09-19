const Customer = require('../models/Customer'); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 

exports.createCustomer = async (req, res) => {
    try {
        let customerData = req.body; 
        console.log("PASSWORD ====> ", req); 
        let password = customerData.password; 

        if(!password) {
            return res.status(400).json({status: false, message: "Password is required", data: ''}); 
        }

        customerData.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

        const customer = new Customer(customerData); 
        await customer.save(); 
        res.status(201).json({status: true, message: "Customer account created", data: customer}); 
    } catch (error) {
        console.log(error)
        res.status(400).json({status: false, message: "Customer account could not be created", data: error}); 
    }
}

exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json({status: true, message: "Users found", data: customers});
    } catch (error) {
        res.status(500).json({ status: false, message: error.message, data: error});
    }
}

exports.updateCustomer = async (req, res) => {
    try {
        let customerId = req.params.id; 
        const customer = await Customer.findByIdAndUpdate(customerId, req.body, { new: true, runValidators: true });
        if (!customer) return res.status(404).json({ error: 'Customer not found' });
        res.json(customer);
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

exports.deleteCustomer = async (req, res) => {
    try {
        let customerId = req.params.id; 
        const customer = await Customer.findByIdAndDelete(customerId);
        if (!customer) return res.status(404).json({ error: 'Customer not found' });
        res.json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}
