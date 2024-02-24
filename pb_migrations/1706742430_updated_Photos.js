/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ao8ris1arjnp1ws")

  collection.listRule = ""

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k1dwmqbn",
    "name": "Huncwot_Madrid",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ao8ris1arjnp1ws")

  collection.listRule = null

  // remove
  collection.schema.removeField("k1dwmqbn")

  return dao.saveCollection(collection)
})
