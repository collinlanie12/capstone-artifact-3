from pymongo import MongoClient
from bson.objectid import ObjectId

class AnimalShelter(object):
    """ CRUD operations for Animal collection in MongoDB """

    def __init__(self, username, password, host, port, db_name, collection_name):
        """Initialize the connection to MongoDB with dynamic parameters"""
        self.client = MongoClient(f'mongodb://{username}:{password}@{host}:{port}')
        self.database = self.client[db_name]
        self.collection = self.database[collection_name]

# Create method to implement the C in CRUD.
    def create(self, data):
        """Insert a document into the MongoDB collection"""
        if data is not None and isinstance(data, dict): # Ensure that data is not empty and is a dictionary
            result = self.collection.insert_one(data) # Insert the document
            return True if result.inserted_id else False # Return True if the document was inserted
        else:
            raise Exception("Nothing to save, because data parameter is empty")
        
# Read method to implement the R in CRUD.
    def read(self, query):
        """Find a document in the MongoDB collection based on query"""
        if query is not None and isinstance(query, dict): # Ensure that query is not empty
            cursor = self.collection.find(query) # Find the document
            result = result = [doc for doc in cursor] # Convert the cursor to a list of documents
            return result if result else [] # Return the list of documents if it is not empty
        else:
            raise Exception("Nothing to find, because query parameter is empty")

# Update method to implement the U in CRUD.
    def update(self, query, update_data):
        """Update a document in the MongoDB collection based on query"""
        if query is not None and isinstance(query, dict) and update_data is not None and isinstance(update_data, dict): # Ensure that query and update_data are dictionaries
            result = self.collection.update_many(query, {'$set': update_data}) # Update the document
            return result.modified_count # Return the number of documents modified
        else:
            raise Exception("Both query and update_data must not be empty and must be dictionaries")
        
# Delete method to implement the D in CRUD.
    def delete(self, query):
        """Delete a document in the MongoDB collection based on query"""
        if query is not None and isinstance(query, dict): # Ensure that query is not empty
            result = self.collection.delete_many(query) # Delete the document
            return result.deleted_count # Return the number of documents deleted
        else:
            raise Exception("Query cannot be empty and must be a dictonary")