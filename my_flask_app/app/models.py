from . import db
from flask_login import UserMixin

class User(UserMixin, db.Model):
    id = db.Column(db.String(150), primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
