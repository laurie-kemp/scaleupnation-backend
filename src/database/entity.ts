import {
  Entity,
  PrimaryGeneratedColumn,
  Column
  //UpdateDateColumn
} from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsOptional, IsString } from "class-validator";

@Entity("databases")
export default class Database extends BaseEntity {
  @PrimaryGeneratedColumn() id?: number;

  @Column("text", { nullable: true })
  source: string;

  @Column("text", { nullable: true })
  CRM_lead_gen: string;

  @Column("text", { nullable: true })
  CRM_status: string;

  @Column("text", { nullable: true })
  follow_for_upcoming_edition: string;

  @Column("text", { nullable: true })
  venture: string;

  @Column("text", { nullable: true })
  website: string;

  @Column("text", { nullable: true })
  email: string;

  @Column("text", { nullable: true })
  category_source: string;

  @Column("text", { nullable: true })
  description_source: string;

  @Column("text", { nullable: true })
  founding_date_source: string;

  @Column("text", { nullable: true })
  HQ_source: string;

  @Column("text", { nullable: true })
  portfolio_awards_source: string;

  @Column("text", { nullable: true })
  CEO: string;

  @Column("text", { nullable: true })
  status: string;

  @Column("text", { nullable: true })
  laurie_sector_input: string;

  @Column("text", { nullable: true })
  sector_see_list_input: string;

  @Column("text", { nullable: true })
  is_product_service_business_model_tech_driven: string;

  @Column("text", { nullable: true })
  BM_focus_target_clients: string;

  @Column("text", { nullable: true })
  business_model_type: string;

  @Column("text", { nullable: true })
  scalable_business_model: string;

  @Column("text", { nullable: true })
  convincing_3P: string;

  @Column("text", { nullable: true })
  max_employees_formula: string;

  @Column("text", { nullable: true })
  no_of_employees_fte_min: string;

  @Column("text", { nullable: true })
  no_of_employees_max_fte: string;

  @Column("text", { nullable: true })
  total_funding_raised_EUR: string;

  @Column("text", { nullable: true })
  last_funding_type: string;

  @Column("text", { nullable: true })
  product_in_market: string;

  @Column("text", { nullable: true })
  no_of_founders: string;

  @Column("text", { nullable: true })
  no_of_founder_with_entrepreneurial_experience: string;

  @Column("text", { nullable: true })
  LAURIE_MANUAL_1_Non_scale_up_2_scale_up_3_potential_scale_up: string;

  @Column("text", { nullable: true })
  alive_1Y_2N: string;

  @Column("text", { nullable: true })
  FTE_check_complete_1Y_0_N: string;

  @Column("text", { nullable: true })
  Formula_driven_1_potential_scale_up_2_bigger_than_a_scale_up_3_: string;

  @Column("text", { nullable: true })
  remarks: string;

  @IsOptional()
  @IsString()
  @Column("timestamp", {
    precision: 3,
    default: () => "CURRENT_TIMESTAMP",
    nullable: true
  })
  timestamp: Date;
}
