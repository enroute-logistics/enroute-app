import { User, Organization } from '@/types'
import type { CreateOrganizationDto } from './organization.dto'
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator'

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password!: string

  @IsString()
  @IsNotEmpty()
  name!: string

  @IsNotEmpty()
  organization!: CreateOrganizationDto
}

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password!: string
}

export class AuthResponseDto {
  access_token!: string
  user!: User
  organization?: Organization
}
