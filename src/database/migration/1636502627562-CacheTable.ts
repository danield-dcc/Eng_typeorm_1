import {MigrationInterface, QueryRunner} from "typeorm";

export class CacheTable1636502627562 implements MigrationInterface {
    name = 'CacheTable1636502627562'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."client" ALTER COLUMN "cpf" DROP NOT NULL`);
        await queryRunner.query(`CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "query-result-cache"`);
        await queryRunner.query(`ALTER TABLE "public"."client" ALTER COLUMN "cpf" SET NOT NULL`);
    }

}
