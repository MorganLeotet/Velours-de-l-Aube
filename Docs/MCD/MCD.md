## Entités

| Entité |         | Attibuts |
|--------|---------|----------|
| CAFE   |---------| id, nom, référence (id), description, prix, disponibilité |
| ORIGINE|---------| id, pays     |
| CARACTERISTIQUE |---------| id, libélé |


## Cardinalité

| Relation | Entité 1 | Cardinalité | Entité 2 | Cardinalité 2 | définition |
|  VENIR  DE  |  CAFE     |     1,1     | ORIGINE |   0,N    | chaque café à une seule origine, une origine peut avoir plusieurs cafés
| AVOIR | CAFE | 1,N | CARACTERISTIQUE | 0,N | chaque café peut avoir une ou plusieurs caractéristiques, une caractéristique peut être liées à plusieurs cafés