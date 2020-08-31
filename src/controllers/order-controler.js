/** @format */
'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/order-repository');
const guid = require('guid');

exports.post = async (req, res, next) => {
  try {
    await repository.create({
      customer: req.body.customer,
      number: guid.raw().substring(0, 6),
      items: req.body.items,
    });
    res.status(201).send({ message: 'Pedido cadastrada com sucesso' });
  } catch (error) {
    res.status(500).send({ error, message: 'Falha ao salvar.' });
  }
};

exports.get = async (req, res, next) => {
  try {
    const data = await repository.get();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error, message: 'Falha ao processar sua requisição.' });
  }
};