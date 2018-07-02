import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { MinLength, IsString, IsOptional } from "class-validator";

@Entity()
export default class Update extends BaseEntity {
  @PrimaryGeneratedColumn() id?: number;

  @IsString()
  @MinLength(2)
  @Column("text")
  company: string;

  @IsOptional()
  @IsString()
  @Column("timestamp", {
    precision: 3,
    default: () => "CURRENT_TIMESTAMP",
    nullable: true,
    onUpdate: "CURRENT_TIMESTAMP"
  })
  timestamp: Date;

  @IsString()
  @Column("text")
  columnName: string;

  @IsString()
  @Column("text")
  change: string;
}
