from flask import Flask, request
import sqlite3

app = Flask(__name__)
DB_NAME = "shopping_list.db"

@app.route("/add-item", methods=["POST"])
def add_item():
    data = request.get_json()
    item = data["item"]

    # Store item in SQLite database
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute("INSERT INTO items (name) VALUES (?)", (item,))
    conn.commit()
    conn.close()

    return ""

if __name__ == "__main__":
    # Create SQLite database and table if they don't exist
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS items (name TEXT)")
    conn.close()

    app.run()