from fastapi import FastAPI
from mongoengine import connect
from starlette.testclient import TestClient

from app.routers import users, todos, restaurants

app = FastAPI()

mongodb = connect('mongodb',
                  host='mongodb://localhost:27017/test_db',
                  maxPoolSize=10)
client = TestClient(app)

app.include_router(
    users.router,
    prefix="/users",
    tags=["User Docs"],
)
app.include_router(
    todos.router,
    prefix="/todo",
    tags=["Todo Docs!"],
)
app.include_router(
    restaurants.router,
    prefix="/restaurants",
    tags=["Restaurants Docs!"],
)
