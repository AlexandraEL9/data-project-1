import json
from app import app, db, Product

def setup_module(module):
    # Set up a fresh in-memory database for testing
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    with app.app_context():
        db.create_all()

def test_add_product():
    with app.test_client() as client:
        response = client.post('/api/products', json={
            "name": "Test Sandwich",
            "category": "Sandwiches",
            "price": 4.50,
            "stock": 10
        })
        data = response.get_json()
        assert response.status_code == 201
        assert data["product"]["name"] == "Test Sandwich"
