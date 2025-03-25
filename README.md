# Fast-food restorani uchun Backend API

## Loyihaning maqsadi:
Biror bir fast-food restorani uchun menyularni ko'rish va ovqatlarga buyurtma berish imkoniyatini beruvchi loyihaning BackEnd API'ni ishlab chiqish

## Funksional talablar:
    - Barcha taomlarni categorylari bo'lishi kerak. Misol, burgerlar, pitsalar va hkz.
    - Har bir taom biror categoryga mansub bolishi kerak.
    - Taomning 1 ta rasmi, nomi, narxi va description bolishi kerak.
    - Foydalanuvchi ro'yxatdan o'tmagan holatda ham category va taomlarni ko'rishi kerak.
    - Foydalanuchi email va name bilan ro'yxatdan o'tadi
    - Profilga kirish email orqali bo'ladi
    - Foydalanuvchi savatga mahsulotlar qo'sha olishi kerak
    - Foydalanuvchi bir nechta mahsulotlar zakaz qila olishi kerak
    - Foydalanuchi profilini yangilay olishi kerak

## Nofunksional talablar
    - Tezlik
    - Xavfsizlik
    - Kengaya oladigan

## Database models
1. Category:
    - id 
    - name
    - createdAt
    - updatedAt

2. Food:
    - id 
    - name
    - price
    - description
    - imageUrl
    - categoryId (FK)
    - createdAt
    - updatedAt

3. User:
    - id
    - name
    - email
    - imageUrl
    - createdAt
    - updatedAt

4. Order:
    - id
    - createdAt
    - total_price
    - userId (FK)

5. Order Item:
    - count
    - orderId (FK)
    - foodId (FK)