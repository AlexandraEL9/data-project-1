from flask import Flask, jsonify, request
from flask_cors import CORS
from models import db, Product

app = Flask(__name__)
CORS(app)  # Enable cross-origin requests

# use the same database configuration from the models module
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sales.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.route("/")
def home():
    return "Welcome to the Sandwich Sales API!"

# Create the database tables
with app.app_context():
    db.create_all()

# Get all products
@app.route("/api/products", methods=["GET"])
def get_products():
    products = Product.query.all()
    return jsonify([product.to_dict() for product in products])

# Add a new product
@app.route("/api/products", methods=["POST"])
def add_product():
    data = request.json
    new_product = Product(
        name=data["name"],
        category=data["category"],
        price=data["price"],
        stock=data["stock"]
    )
    db.session.add(new_product)
    db.session.commit()
    return jsonify({"message": "Product added!", "product": new_product.to_dict()}), 201

# Remove a product
@app.route("/api/products/<int:product_id>", methods=["DELETE"])
def delete_product(product_id):
    product = Product.query.get_or_404(product_id)
    db.session.delete(product)
    db.session.commit()
    return jsonify({"message": "Product deleted!"})

# Update stock count
@app.route("/api/products/<int:product_id>/update-stock", methods=["PATCH"])
def update_stock(product_id):
    data = request.json
    product = Product.query.get_or_404(product_id)
    product.stock = data["stock"]
    db.session.commit()
    return jsonify({"message": "Stock updated!", "product": product.to_dict()})
