CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (100) NOT NULL
);

INSERT INTO "category" ("type")
VALUES ('funny'), ('animals'), ('nsfw');

CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"link" VARCHAR (255),
	"category_id" INT REFERENCES "category"
);
