--Crear Usuario de Prueba forma antigua--
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"MLA"}'

TEST APP NAME: TEST_CSR

COMPRADOR (BUYER)
test_user_70968545@testuser.com

{
    "id": 1206722855,
    "nickname": "TESTU2ABYIIV",
    "password": "pt3S4MBj2d",
    "site_status": "active",
    "site_id": "MLA",
    "description": "a description",
    "date_created": "2022-09-27T21:22:09-04:00",
    "date_last_updated": "2022-09-27T21:22:09-04:00"
}

VENDEDOR (SELLER)
test_user_82874311@testuser.com

{
    "id": 1206722653,
    "nickname": "TETE3254603",
    "password": "mQTbYyNKm1",
    "site_status": "active",
    "site_id": "MLA",
    "description": "a description",
    "date_created": "2022-09-27T21:21:01-04:00",
    "date_last_updated": "2022-09-27T21:21:01-04:00"
}