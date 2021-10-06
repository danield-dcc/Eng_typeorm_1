import {MigrationInterface, QueryRunner} from "typeorm";

export class createClientAndClientHasProductTables1633481710195 implements MigrationInterface {
    name = 'createClientAndClientHasProductTables1633481710195'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "phone" character varying NOT NULL, "mail" character varying NOT NULL, "cpf" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, "address" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client_has_product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "clientIdId" uuid, "productIdId" uuid, CONSTRAINT "PK_88cc80b79ce10a8fef75f1f7b87" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."product" ALTER COLUMN "lovers" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "client_has_product" ADD CONSTRAINT "FK_16b0558da3193c72e4420e340ed" FOREIGN KEY ("clientIdId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client_has_product" ADD CONSTRAINT "FK_04b36c6513463fe7fed6518d6a9" FOREIGN KEY ("productIdId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client_has_product" DROP CONSTRAINT "FK_04b36c6513463fe7fed6518d6a9"`);
        await queryRunner.query(`ALTER TABLE "client_has_product" DROP CONSTRAINT "FK_16b0558da3193c72e4420e340ed"`);
        await queryRunner.query(`ALTER TABLE "public"."product" ALTER COLUMN "lovers" DROP DEFAULT`);
        await queryRunner.query(`DROP TABLE "client_has_product"`);
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
