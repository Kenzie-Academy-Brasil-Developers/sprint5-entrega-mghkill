import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1653347149725 implements MigrationInterface {
    name = 'initialMigration1653347149725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "age" integer NOT NULL, "createdOn" TIMESTAMP NOT NULL, "updatedOn" TIMESTAMP NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
