from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# configure SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sales.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define sales model
class Sale(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    item = db.Column(db.String(100), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)
    date = db.Column(db.DateTime, default=db.func.current_timestamp())

    def to_dict(self):
        return {
            "id": self.id,
            "item": self.item,
            "quantity": self.quantity,
            "price": self.price,
            "date": self.date.strftime("%Y-%m-%d %H:%M:%S"),
        }
