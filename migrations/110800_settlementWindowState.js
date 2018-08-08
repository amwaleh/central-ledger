'use strict'

exports.up = async (knex, Promise) => {
  return await knex.schema.hasTable('settlementWindow').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('settlementWindow', (t) => {
        t.string('settlementWindowId', 50).primary().notNullable()
        t.string('enumeration', 50).notNullable()
        t.string('description', 512).defaultTo(null).nullable()
        t.boolean('isActive').defaultTo(true).notNullable()
        t.dateTime('createdDate').defaultTo(knex.fn.now()).notNullable()
      })
    }
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('settlementWindow')
}
