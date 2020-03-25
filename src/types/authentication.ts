export interface JwtPayload {
  readonly sub: string;
  readonly iat: number;
  readonly exp: number;
}

export interface AuthenticationBody {
  readonly name: string;
  readonly token: string;
}
