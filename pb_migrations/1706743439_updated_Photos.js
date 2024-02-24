/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ao8ris1arjnp1ws")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wdwgsek7",
    "name": "url",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ayneyzvq",
    "name": "image",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/jpeg"
      ],
      "thumbs": [],
      "maxSelect": 500,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ao8ris1arjnp1ws")

  // remove
  collection.schema.removeField("wdwgsek7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ayneyzvq",
    "name": "field",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/jpeg"
      ],
      "thumbs": [],
      "maxSelect": 500,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
