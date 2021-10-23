from importlib.metadata import requires
from unicodedata import name
from xml.dom.minidom import Document
from mongoengine import *
from app.models.user import Users


class Restaurants(Document):
    name = StringField()
    location = StringField()
    balance = StringField()
    business_hours = StringField()