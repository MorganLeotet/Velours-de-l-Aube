## Table 

coffee (
    id (primary key)
    name,
    reference,
    description,
    price,
    availability
    origin_id (foreign key)
)

country (
    id (primary key)
    name
)

category (
    id (primary key)
    name
)

coffee_category (
    id
    coffee_id (foreign key)
    country_id (foreign key)
)