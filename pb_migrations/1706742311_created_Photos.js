/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ao8ris1arjnp1ws",
    "created": "2024-01-31 23:05:11.457Z",
    "updated": "2024-01-31 23:05:11.457Z",
    "name": "Photos",
    "type": "base",
    "system": false,
    "schema": [
      {
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
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ao8ris1arjnp1ws");

  return dao.deleteCollection(collection);
})
