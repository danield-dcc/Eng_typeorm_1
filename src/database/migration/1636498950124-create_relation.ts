import {MigrationInterface, QueryRunner} from "typeorm";

export class createRelation1636498950124 implements MigrationInterface {
    name = 'createRelation1636498950124'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."product" ALTER COLUMN "lovers" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."product" ALTER COLUMN "lovers" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."client" DROP COLUMN "birthday"`);
    }

}
