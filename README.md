# sprint5-entrega-CRUD com TS TYPEORM

## POST /users - Rota responsável pelo CADASTRO do usuário.

### Corpo da requisição:

```json
{
	"name": "Paulo Melo",
	"email": "teste@mail.com",
	"age": 10,
  "password": "123456"
}
```

### Corpo da resposta:

```json
{
	"id": "1febb701-4db5-4535-88e8-480265ac0535",
	"name": "Paulo Melo",
	"email": "teste@mail.com",
	"age": 10,
	"password": "$2b$10$18OmM4TaZDnK/eBouysWxeDiTrLZ5y.JjHZPfh.sdccPV96cT40j2",
	"createdOn": "2022-05-24T00:20:02.462Z",
	"updatedOn": "2022-05-24T00:20:02.462Z"
}
```

---

## GET /users - Rota responsável por listar todos os usuários.

### Corpo da requisição:

    SEM CORPO

### Corpo da resposta:

```json
[
	{
		"name": "Pedro Melo",
		"email": "mail@aaf.com",
		"age": 10,
		"createdOn": "2022-05-24T00:07:14.880Z",
		"updatedOn": "2022-05-24T00:08:24.139Z",
		"id": "7699ea95-d08e-4217-b4c9-891609177476"
	},
	{
		"name": "Fislispe Melo",
		"email": "maidls@mail.com",
		"age": 10,
		"createdOn": "2022-05-24T00:09:22.389Z",
		"updatedOn": "2022-05-24T00:09:22.389Z",
		"id": "6ae55863-b124-498f-9572-9c4579c610fd"
	},
	{
		"name": "Fislaispe Melo",
		"email": "maisdls@mail.com",
		"age": 10,
		"createdOn": "2022-05-24T00:19:53.098Z",
		"updatedOn": "2022-05-24T00:19:53.098Z",
		"id": "20def75a-c7a7-4d05-beeb-204b9368ea05"
	},
	{
		"name": "Paulo Melo",
		"email": "teste@mail.com",
		"age": 10,
		"createdOn": "2022-05-24T00:20:02.462Z",
		"updatedOn": "2022-05-24T00:20:02.462Z",
		"id": "1febb701-4db5-4535-88e8-480265ac0535"
	}
]
```

## GET /users/<id> - Rota responsável por buscar usuário por id.

### Corpo da requisição:

    SEM CORPO

### Corpo da resposta:

```json
[
	{
		"name": "Paulo Melo",
		"email": "teste@mail.com",
		"age": 10,
		"createdOn": "2022-05-24T00:20:02.462Z",
		"updatedOn": "2022-05-24T00:20:02.462Z",
		"id": "1febb701-4db5-4535-88e8-480265ac0535"
	}
]
```
---

## PATCH /users/<id> - Rota responsável pela ATUALIZAÇÃO das informações do usuário buscando por id.

### Corpo da requisição:

```json
{
	"name": "Antonio Melo",
	"email": "maiaaal@mail.com",
  "password": "1234563ssssssssssss4234"
}
```

### Corpo da resposta:

```json
{
	"id": "6ae55863-b124-498f-9572-9c4579c610fd",
	"name": "Antonio Melo",
	"email": "maiaaal@mail.com",
	"password": "$2a$10$Kma1Ek1UyTCyy0XP1uqYeekmAPEIX9tMOodzfRMVR6HFiNwrxZfA.",
	"age": 10,
	"createdOn": "2022-05-24T00:09:22.389Z",
	"updatedOn": "2022-05-24T00:24:07.792Z"
}
```

---

## DELETE /api/leads/delete/<userId> - Rota responsável por DELETAR as informações do usuário.

### Corpo da resposta:
  
  SEM CORPO
  
### Corpo da resposta:
```json
{
  "Message": "User already deleted"
} 
```
