import imp
from starlette.requests import Request
from starlette.responses import JSONResponse

from app import response
from app.models.restaurant import Restaurants
from app.transformers import RestaurantTransformer


class RestaurantController:
    @staticmethod
    async def index(request: Request) -> JSONResponse:
        try:
            restaurants = Restaurants.object.all()
            restaurants = RestaurantTransformer.transform(restaurants)
            return response.ok(restaurants, '')
        except Exception as e:
            return response.badRequest('', f'{e}')