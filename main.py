from flask import Flask, request
import sqlite3

app = Flask(__name__)
DB_NAME = "shopping_list.db"
items = ""


@app.route("/get-item", methods=["GET"])
def get_items():
    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()
    cur.execute("SELECT * FROM items")
    shopping_list = cur.fetchall()
    conn.close()
    return str(shopping_list)
    

@app.route("/add-item", methods=["POST"])
def add_item_DB():
    
    items = request.json

    # Store item in SQLite database
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute("INSERT INTO items (name) VALUES (?)", (items,))
    conn.commit()
    conn.close()

    return 0

if __name__ == "__main__":
    #Create SQLite database and table if they don't exist
    #conn = sqlite3.connect(DB_NAME)
    #cursor = conn.cursor()
    #cursor.execute("CREATE TABLE IF NOT EXISTS items (name TEXT)")
    #conn.close()

    app.run()