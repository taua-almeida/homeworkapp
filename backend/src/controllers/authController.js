const express = require('express');

const User = require('../models/User');

const utils = require('../utils');

module.exports = {

  async create(request, response) {
    try {

      const user = await User.create(request.body);

      return response.status(201).json({ user });

    } catch(err) {

      const errorReturn = utils.handleDbErrors(err);
      return response.status(400).json( errorReturn );

    }
  }

}





