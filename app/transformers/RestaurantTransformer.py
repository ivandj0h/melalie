from app.transformers import UserTransformer


def transform(items):
    array = []

    for item in items:
        array.append(singleTransform(item))
    return array


def singleTransform(values):
    return {
        "id": str(values.id),
        "name": values.name,
        "location": values.location,
        "balance": values.balance,
        "business_hours": values.business_hours,
        "owner_id": str(values.owner.id) if values.owner else "",
        "owner": UserTransformer.singleTransform(values.owner.fetch())
        if values.owner else {}
    }