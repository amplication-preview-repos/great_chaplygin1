/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProcessedEventWhereInput } from "./ProcessedEventWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProcessedEventOrderByInput } from "./ProcessedEventOrderByInput";

@ArgsType()
class ProcessedEventFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProcessedEventWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProcessedEventWhereInput, { nullable: true })
  @Type(() => ProcessedEventWhereInput)
  where?: ProcessedEventWhereInput;

  @ApiProperty({
    required: false,
    type: [ProcessedEventOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProcessedEventOrderByInput], { nullable: true })
  @Type(() => ProcessedEventOrderByInput)
  orderBy?: Array<ProcessedEventOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProcessedEventFindManyArgs as ProcessedEventFindManyArgs };
