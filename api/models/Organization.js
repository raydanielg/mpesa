/**
 * Organization.js
 *
 * @description :: An organization is the main point of reference for most of the system transactions.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'organizations',
  autoUpdatedAt: true,

  attributes: {
    name: {
      type: 'string',
      size: 100
    }
  }
};

