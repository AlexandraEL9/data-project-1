from flask import Flask, jsonify, request
from flask_cors import CORS
from models import db, Sale

app = Flask(__name__)
CORS(app)  # Enable cross-origin requests

# use the same database configuration from the models module
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sales.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.route("/")
def home():
    return "Welcome to the Sandwich Sales API!"

# API route to test database connection
@app.route("/api/test-db")
def test_db():
    return jsonify({"message": "Database is connected!"})

# API route to add a new sale
@app.route("/api/sales", methods=["POST"])
def add_sale():
    data = request.json
    new_sale = Sale(item=data["item"], quantity=data["quantity"], price=data["price"])
    db.session.add(new_sale)
    db.session.commit()
    return jsonify({"message": "Sale added!", "sale": new_sale.to_dict()}), 201

# API route to get all sales
@app.route("/api/sales", methods=["GET"])
def get_sales():
    sales = Sale.query.all()
    return jsonify([sale.to_dict() for sale in sales])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Ensure database is created
    app.run(debug=True)
