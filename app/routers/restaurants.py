from fastapi import APIRouter, requests
from starlette.requests import Request

from app.controllers.RestaurantController import RestaurantController as controller

router = APIRouter()


@router.get("", tags=["restaurants"])
async def action(request: Request):
    return await controller.index(request)