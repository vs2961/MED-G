from flask import Flask
from flask_wtf import CSRFProtect
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
import firebase_admin
from firebase_admin import credentials

db = SQLAlchemy()
login_manager = LoginManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object('instance.config.Config')

    # Initialize CSRF protection
    csrf = CSRFProtect(app)

    # Initialize Firebase Admin SDK
    cred = credentials.Certificate('C:\Users\neuro\Desktop\WebDevelopment\my_flask_app\instance\med-g-d2682-firebase-adminsdk-avh5l-37231cfab5.json')  # Path to your JSON file
    firebase_admin.initialize_app(cred)

    # Initialize extensions
    db.init_app(app)
    login_manager.init_app(app)

    # Import and register blueprints
    from .auth import auth as auth_blueprint
    from .booking import booking as booking_blueprint

    app.register_blueprint(auth_blueprint)
    app.register_blueprint(booking_blueprint)

    return app
