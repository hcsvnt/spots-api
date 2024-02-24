/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ao8ris1arjnp1ws")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ayneyzvq",
    "name": "images",
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
})
