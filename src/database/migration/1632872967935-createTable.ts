import {MigrationInterface, QueryRunner} from "typeorm";

export default class createTable1632872967935 implements MigrationInterface {
    name = 'createTable1632872967935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "code" integer NOT NULL, "description" character varying NOT NULL, "byPrice" double precision NOT NULL, "sellPrice" double precision NOT NULL, "tag" text NOT NULL, "lovers" integer NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
