# Example API Documentation

Here's the description of our glorious API! _NOTE:_ interfacing with our API will bring you much joy and happiness!

## Port - Location of all endpoints to interface with our API is at `http://localhost:3030`

## [POST] `/api/band`

| Endpoint  | Type | Data |
| --------- | :--: | ---: |
| /api/band | POST | json |

### Example:

```
{
  name: 'Rush',
  genre: 'Classic Rock',
}
```

## [GET] `/api/bands`

| Endpoint   | Type | Data |
| ---------- | :--: | ---: |
| /api/bands | GET  | json |

### Example:

```
[
  {
    name: 'Rush',
    genre: 'Classic Rock',
  },
  {
    name: 'Linkin Park',
    genre: 'Alt Rock',
  }
]
```
